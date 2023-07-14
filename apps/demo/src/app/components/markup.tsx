import { marked } from 'marked';

interface Props {
  content: string;
}

export default function Markup({ content }: Props) {
  const markup = {
    __html: marked(content, {
      breaks: true,
      gfm: true,
      mangle: false,
      headerIds: false,
    }),
  };

  return <div dangerouslySetInnerHTML={markup}></div>;
}
