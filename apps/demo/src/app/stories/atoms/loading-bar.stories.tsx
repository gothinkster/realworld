export default {
  title: 'Atoms/Loading bar',
  parameters: {
    layout: 'centered',
  },
};

export const LoadingBar = () => (
  <aside className="rw-progress-bar">
    <div className="rw-progress-bar-value"></div>
  </aside>
);
