import React, { useEffect, useRef, useState } from 'react';
import hljs from './highlight';
import Clipboard from 'clipboard';
import { Button, buttonVariants } from "@/components/ui/button"

import 'highlight.js/styles/atom-one-dark.css';


type codeBlockPropsTypes = {
  language: string
  code: any
}

export default function CodeBlock({ language, code }: codeBlockPropsTypes) {
  const preRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preRef.current) {
      hljs.highlightBlock(preRef.current);
      hljs.highlightElement(preRef.current);

      // 创建 clipboard 实例并保存到变量中
      const clipboard = new Clipboard(`#${language}copy_btn`, {
        text: () => code,
      });
      hljs.highlightAuto(code)
      // 监听复制成功事件
      clipboard.on('success', () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
      // hljs.configure({
      //   ignoreUnescapedHTML: true
      // })
      // hljs.initHighlighting();


      // 销毁 clipboard 实例
      return () => {
        clipboard.destroy();
      };
    }
  }, [code]);

  return (
    <div className="code-block relative rounded">
      <pre>
        <code id={language} ref={preRef} className={language}>
          {code}
        </code>
      </pre>
      <Button 
        id={`${language}copy_btn`}
        style={{ position: 'absolute', top: 4, right: 4, lineHeight: '14px' }}
        className="code-block__button"
        data-clipboard-target={`#${language}`} disabled={!preRef.current}>
        {copied ?  "copied!" : "copy" }
      </Button>
    </div>
  );
}
