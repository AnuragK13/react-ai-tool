import { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStars } from "../helper";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from 'react-markdown';

export default function Answers({ ansString, index, totalResult, type }) {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ansString);

  useEffect(() => {
    if (checkHeading(ansString)) {
      setHeading(true);
      setAnswer(replaceHeadingStars(ansString));
    }
  }, []);

  const renderer = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          {...props}
          children={String(children).replace(/\n$/,"")}
          language={match[1]}
          style={dark}
          pretag="div"
        />
      ) : (
        <code {...props} className={className}>
          {children}
        </code>
      );
    },
  };

  return (
    <>
      {index === 0 && totalResult > 1 ? (
        <span className="pt-2 text-2xl block dark:text-blue-300 text-gray-600">
          <ReactMarkdown components={renderer}>{answer}</ReactMarkdown>
        </span>
      ) : heading ? (
        <span className="py-5 text-xl block dark:text-yellow-300 text-cyan-500">{answer}</span>
      ) : (
        <span className={`text-md ${type === "q" ? "p-1" : "pl-5"}`}>
           {answer}
        </span>
      )}
    </>
  );
}
