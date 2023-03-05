import { sourceDocs } from './favorite.utils';

export default {
  title: 'Molecules/Favorite',
  parameters: {
    layout: 'centered',
  },
};

export const Favorite = {
  render: () => (
    <aside className="rw-favorite-btn__container">
      <span>355</span>
      <button className="rw-favorite-active" aria-label="like the article">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
          <path d="m12 21-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4 2 9.3 2 8.15 2 5.8 3.575 4.225 5.15 2.65 7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55 1.175-.55 2.475-.55 2.35 0 3.925 1.575Q22 5.8 22 8.15q0 1.15-.387 2.25-.388 1.1-1.363 2.412-.975 1.313-2.625 2.963-1.65 1.65-4.175 3.925Zm0-2.7q2.4-2.15 3.95-3.688 1.55-1.537 2.45-2.674.9-1.138 1.25-2.026.35-.887.35-1.762 0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662-1 .663-1.375 1.688h-1.9q-.375-1.025-1.375-1.688-1-.662-2.175-.662-1.5 0-2.5 1t-1 2.5q0 .875.35 1.762.35.888 1.25 2.026.9 1.137 2.45 2.674Q9.6 16.15 12 18.3Zm0-6.825Z" />
        </svg>
      </button>
    </aside>
  ),

  name: 'Favorite (default)',

  parameters: {
    ...sourceDocs(),
  },
};

export const FavoriteHover = {
  render: () => (
    <aside className="rw-favorite-btn__container">
      <span>355</span>
      <button className="rw-favorite" aria-label="like the article">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
          <path d="m12 21-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4 2 9.3 2 8.15 2 5.8 3.575 4.225 5.15 2.65 7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55 1.175-.55 2.475-.55 2.35 0 3.925 1.575Q22 5.8 22 8.15q0 1.15-.387 2.25-.388 1.1-1.363 2.412-.975 1.313-2.625 2.963-1.65 1.65-4.175 3.925Zm0-2.7q2.4-2.15 3.95-3.688 1.55-1.537 2.45-2.674.9-1.138 1.25-2.026.35-.887.35-1.762 0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662-1 .663-1.375 1.688h-1.9q-.375-1.025-1.375-1.688-1-.662-2.175-.662-1.5 0-2.5 1t-1 2.5q0 .875.35 1.762.35.888 1.25 2.026.9 1.137 2.45 2.674Q9.6 16.15 12 18.3Zm0-6.825Z" />
        </svg>
      </button>
    </aside>
  ),

  name: 'Favorite (hover)',

  parameters: {
    pseudo: { hover: true },
    ...sourceDocs(),
  },
};

export const FavoriteActive = {
  render: () => (
    <aside className="rw-favorite-btn__container">
      <span>355</span>
      <button className="rw-favorite-active" aria-label="unlike the article">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
          <path d="m12 21-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4 2 9.3 2 8.15 2 5.8 3.575 4.225 5.15 2.65 7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55 1.175-.55 2.475-.55 2.35 0 3.925 1.575Q22 5.8 22 8.15q0 1.15-.387 2.25-.388 1.1-1.363 2.412-.975 1.313-2.625 2.963-1.65 1.65-4.175 3.925Z" />
        </svg>
      </button>
    </aside>
  ),

  name: 'Favorite active',

  parameters: {
    ...sourceDocs({ active: true }),
  },
};

export const FavoriteActiveHover = {
  render: () => (
    <aside className="rw-favorite-btn__container">
      <span>355</span>
      <button className="rw-favorite-active" aria-label="unlike the article">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
          <path d="m12 21-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4 2 9.3 2 8.15 2 5.8 3.575 4.225 5.15 2.65 7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55 1.175-.55 2.475-.55 2.35 0 3.925 1.575Q22 5.8 22 8.15q0 1.15-.387 2.25-.388 1.1-1.363 2.412-.975 1.313-2.625 2.963-1.65 1.65-4.175 3.925Z" />
        </svg>
      </button>
    </aside>
  ),

  name: 'Favorite active (hover)',

  parameters: {
    pseudo: { hover: true },
    ...sourceDocs({ active: true }),
  },
};
