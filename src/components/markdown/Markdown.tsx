import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkToc from 'remark-toc';
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark, dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

interface InMarkdownProps {
  content: any
}

const MarkdownContent: FC<InMarkdownProps> = ({ content }) => {
  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkToc, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, '')}
                style={coldarkDark}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            )
          }
        }}
      >{content}</ReactMarkdown>

    </div>
  );
};

export default MarkdownContent;