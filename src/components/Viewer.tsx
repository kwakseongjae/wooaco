import ReactMarkdown from "react-markdown";

type Props = {
  content: string;
};

export default function Markdown({ content }: Props) {
  return (
    <>
      <ReactMarkdown children={content}></ReactMarkdown>
    </>
  );
}
