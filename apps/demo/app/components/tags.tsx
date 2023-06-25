import Link from 'next/link';

export default async function Tags() {
  const tags = await fetch('https://api.realworld.io/api/tags')
    .then(res => res.json())
    .then(res => res.tags);

  return (
    <div className="col-md-3">
      <div className="sidebar">
        <p>Popular Tags</p>

        <div className="tag-list">
          {!tags && <div>Loading...</div>}
          {tags &&
            tags.map((tag: string, index: number) => (
              <Link key={index} href={tag} className="tag-pill tag-default">
                {tag}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
