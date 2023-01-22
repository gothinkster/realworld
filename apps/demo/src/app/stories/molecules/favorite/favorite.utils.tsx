import {iconCode, iconCodeSample} from "../../atoms/icon/icon.utils";

export const favoriteCodeSample = ({active}: { active: boolean } = {active: false}) => {
  const className = `rl-favorite${active ? '-active' : ''}`;
  const ariaLabel = `${active ? 'un' : ''}like the article`;
  return (
    <aside className="rl-favorite-btn__container">
      <span>355</span>
      <button className={className} aria-label={ariaLabel}>
        {iconCodeSample({active, filled: active})}
      </button>
    </aside>
  )
}

export const sourceDocs = ({active}: { active: boolean } = {active: false}) => ({
  docs: {
    source: {
      dark: true,
      code: code({active}),
      language: 'html',
    },
  },
});

const code = ({active}: { active: boolean } = {active: false}) => `
  <aside class="rl-favorite-btn__container">
    <span>355</span>
    <button class="rl-favorite${active ? '-active' : ''}" aria-label="${
  active ? 'un' : ''
}like the article">
      ${iconCode({active, filled: active})}
    </button>
  </aside>
`;
