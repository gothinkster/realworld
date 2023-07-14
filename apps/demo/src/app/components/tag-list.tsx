interface Props {
  tags: string[];
}

export default function TagList({ tags }: Props) {
  return (
    <ul className="tag-list">
      {tags.map(tag => (
        <li key={tag} className="tag-default tag-pill tag-outline">
          {tag}
        </li>
      ))}
    </ul>
  );
}
