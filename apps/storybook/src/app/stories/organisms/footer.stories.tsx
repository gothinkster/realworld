export default {
  title: 'Organisms/Footer',
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export const Footer = () => (
  <footer>
    <div className="container">
      <a href="/" className="logo-font">
        conduit
      </a>
      <span className="attribution">
        An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code
        &amp; design licensed under MIT.
      </span>
    </div>
  </footer>
);
