export const navbarSourceDocs = ({ orientation }: { orientation: 'vertical' | 'horizontal' }) => ({
  docs: {
    source: {
      dark: true,
      code: code({ orientation }),
      language: 'html',
    },
  },
});

const code = ({ orientation }: { orientation: 'vertical' | 'horizontal' }) => `
  <aside class="rl-navbar${orientation === 'horizontal' ? '-horizontal' : '-vertical'}">
      <ul>
        <li>
          <a class="rl-link rl-active" href="">
            Profile
          </a>
        </li>
        <li>
          <a class="rl-link" href="">
            Security
          </a>
        </li>
        <li>
          <a class="rl-link" href="apps/demo/src/app/stories/molecules/navbar/navbar.stories">
            Preferences
          </a>
        </li>
      </ul>
    </aside>
`;
