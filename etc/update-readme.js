#!/usr/bin/env node

const axios = require('axios');
const fs = require('fs');
const jsYaml = require('js-yaml');

const README_TEMPLATE_FILE = '../README.template.md';
const README_TARGET_FILE = '../README.md';
const FRONTEND_PLACEHOLDER = 'INSERT_FRONTEND_REPOS';
const BACKEND_PLACEHOLDER = 'INSERT_BACKEND_REPOS';
const FRONTEND_REPOS = jsYaml.safeLoad(fs.readFileSync('frontend-repos.yaml', 'utf8'));
const BACKEND_REPOS = jsYaml.safeLoad(fs.readFileSync('backend-repos.yaml', 'utf8'));

axios.defaults.headers.common['Authorization'] = `token ${process.env.GH_TOKEN}`;

(async () => {
  await main();
})();

async function main() {

  const input = fs.readFileSync(README_TEMPLATE_FILE, 'utf8').split("\n");
  const output = [];
  for (let i = 0; i < input.length; ++i) {
    if (input[i].indexOf(FRONTEND_PLACEHOLDER) > -1) {
      output.push(...(await getSortedTable(FRONTEND_REPOS)));
    } else if (input[i].indexOf(BACKEND_PLACEHOLDER) > -1) {
      output.push(...(await getSortedTable(BACKEND_REPOS)));
    } else {
      output.push(input[i]);
    }
  }
  fs.writeFileSync(README_TARGET_FILE, output.join('\n'));
  console.log(`Wrote output to file: [${README_TARGET_FILE}]`);

}

async function getSortedTable(repos) {

  // Get sorted repos by stargazers_count
  for (let i = 0; i < repos.length; ++i) {
    const stargazers_count =
      (await axios.get(`https://api.github.com/repos/${repos[i].repo}`))
      .data.stargazers_count;
    repos[i].stargazers_count = stargazers_count;
  }
  repos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

  // Output sorted table
  const output = [
    '| 🥇 | 🥈 | 🥉 |',
    '| :---:         |     :---:      |          :---: |',
  ];
  let string = '';
  for (let i = 0; i < repos.length; ++i) {
    string += `| [**${repos[i].title}**<br/> ` +
      `![${repos[i].title}](${repos[i].logo}) ` +
      `![Star](https://img.shields.io/github/stars/${repos[i].repo}.svg?style=social&label=Star) ` +
      `![Fork](https://img.shields.io/github/forks/${repos[i].repo}.svg?style=social&label=Fork)]` +
      `(https://github.com/${repos[i].repo})`;
    if (!((i + 1) % 3)) {
      output.push(string);
      string = '';
    }
  }
  output.push(string);
  return output;

}

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason);
  throw new Error(reason);
});
