interface Props {
  date: string;
}

export default function FormattedDate({ date }: Props) {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));

  return <span className="date">{formattedDate}</span>;
}
