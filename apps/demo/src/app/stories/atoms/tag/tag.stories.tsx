export default {
  title: 'Atoms/Tag',
  parameters: {
    layout: 'centered',
  },
};

export const TagDefault = () => (
  <a href="" className="rl-tag">
    #web
  </a>
);
TagDefault.storyName = 'tag';

export const TagHover = () => (
  <a href="" className="rl-tag">
    #web
  </a>
);
TagHover.storyName = 'tag (hover)';
TagHover.parameters = {
  pseudo: { hover: true },
};
