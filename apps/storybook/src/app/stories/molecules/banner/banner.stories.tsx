export default {
  title: 'Molecules/Banner',
};

export const BannerInfo = {
  render: () => (
    <aside className="rw-banner__info">
      <span>This is an info banner</span>
    </aside>
  ),

  name: 'info',

  parameters: {
    docs: {
      source: {
        dark: true,
        code: `
          <aside class="rw-banner__info">
              <span>
                  This is an info banner
              </span>
          </aside>`,
        language: 'html',
      },
    },
  },
};

export const BannerInfoWithButton = {
  render: () => (
    <aside className="rw-banner__info">
      <span>Discover your public profile</span>
      <button className="rw-btn-warn">View</button>
    </aside>
  ),

  name: 'info with buttton',

  parameters: {
    docs: {
      source: {
        dark: true,
        code: `
          <aside class="rw-banner__info">
              <span>
                  This is an info banner
              </span>
          </aside>`,
        language: 'html',
      },
    },
  },
};
export const BannerError = {
  render: () => (
    <aside className="rw-banner__error">
      <span>This is an error banner</span>
    </aside>
  ),

  name: 'error',

  parameters: {
    docs: {
      source: {
        dark: true,
        code: `
          <aside class="rw-banner__error">
              <span>
                  This is an error banner
              </span>
          </aside>
        `,
        language: 'html',
      },
    },
  },
};
