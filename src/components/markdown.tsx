import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkToc from 'remark-toc';

interface InMarkdownProps {
  content: any
}

const MarkdownContent: FC<InMarkdownProps> = ({ content }) => {
  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkToc]}>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;