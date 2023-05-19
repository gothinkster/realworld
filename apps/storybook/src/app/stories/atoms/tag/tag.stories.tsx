export default {
  title: 'Atoms/Tag',
  parameters: {
    layout: 'centered',
  },
};

export const TagDefault = {
  render: () => (
    <a href="" className="rw-tag">
      #web
    </a>
  ),

  name: 'tag',
};

export const TagHover = {
  render: () => (
    <a href="" className="rw-tag">
      #web
    </a>
  ),

  name: 'tag (hover)',

  parameters: {
    pseudo: { hover: true },
  },
};
