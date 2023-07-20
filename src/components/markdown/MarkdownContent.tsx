import React, { FC } from 'react';
import MarkdownContent from './MarkdownContent';
import TableOfContents from './TableOfContents'; // 自定义的侧边导航组件

interface InProps {
  content: any
}

const ArticlePage:FC<InProps> = ({ content }) => {
  return (
    <div>
      <MarkdownContent content={content} />
      <TableOfContents content={content} />
    </div>
  );
};

export default ArticlePage;
