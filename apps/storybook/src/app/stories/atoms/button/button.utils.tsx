const code = (theme: string) => {
  const classes = `rw-btn-${theme}`;
  return <button className={classes}>Submit</button>;
};

const showcaseCode = (theme: string) => `<button class="rw-btn-${theme}">Submit</button>`;

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
