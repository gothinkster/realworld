export default {
  title: 'Atoms/Button',
};

export const Button = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
    <button className="rl-btn rl-btn-primary">Submit</button>
    <button className="rl-btn rl-btn-secondary">Submit</button>
    <button className="rl-btn rl-btn-warn">Submit</button>
    <button className="rl-btn rl-btn-lg rl-btn-primary">Submit</button>
    <button className="rl-btn rl-btn-lg rl-btn-secondary">Submit</button>
    <button className="rl-btn rl-btn-lg rl-btn-warn">Submit</button>
  </div>
);
