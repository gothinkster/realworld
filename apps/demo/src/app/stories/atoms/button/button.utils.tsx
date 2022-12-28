const code = (theme: string) => {
  const classes = `rl-btn-${theme}`;
  return <button className={classes}>Submit</button>;
};

const showcaseCode = (theme: string) => `<button class="rl-btn-${theme}">Submit</button>`;

const docs = (theme: string) => ({
  docs: {
    source: {
      dark: true,
      code: showcaseCode(theme),
      language: 'html',
    },
  },
});

export const primaryButton = code('primary');
export const secondaryButton = code('secondary');
export const warnButton = code('warn');

export const primaryButtonDocs = docs('primary');
export const secondaryButtonDocs = docs('secondary');
export const warnButtonDocs = docs('warn');
