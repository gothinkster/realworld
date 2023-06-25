'use client';

import React, { useState } from 'react';

interface PaginationProps {
  count: number;
  limit: number;
}

export function Pagination({ count, limit }: PaginationProps) {
  const pages = Array.from(Array(Math.ceil(count / limit)).keys()).map(i => i + 1);
  const [active, setActive] = useState(1);

  function updatePage(event: React.MouseEvent<HTMLLIElement, MouseEvent>, page: number) {
    event.preventDefault();
    setActive(page);
    // trigger(active);
  }
  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={`page-item ${active === page ? 'active' : ''}`}
            onClick={e => updatePage(e, page)}
          >
            <a className="page-link" href="">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
