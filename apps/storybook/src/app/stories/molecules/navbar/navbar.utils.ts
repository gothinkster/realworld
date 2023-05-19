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
  <aside class="rw-navbar${orientation === 'horizontal' ? '-horizontal' : '-vertical'}">
      <ul>
        <li>
          <a class="rw-link rw-active" href="">
            Profile
          </a>
        </li>
        <li>
          <a class="rw-link" href="">
            Security
          </a>
        </li>
        <li>
          <a class="rw-link" href="">
            Preferences
          </a>
        </li>
      </ul>
    </aside>
`;
