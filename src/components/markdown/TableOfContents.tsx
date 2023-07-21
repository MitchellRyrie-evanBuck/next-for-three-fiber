import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer'; // 用于检测目录项是否在视口中
import Link from 'next/link';
import styles from './styles/TableOfContents.module.scss'; // 样式文件

interface InProps {
  content: any
}

const TableOfContents: FC<InProps> = ({ content }) => {
  const router = useRouter();
  const [headings, setHeadings] = useState<any[]>([]);
  console.log('router', router)
  // 解析 Markdown 内容，获取标题信息
  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h1, h2')); // 这里假设你的 Markdown 中只包含 h1 和 h2 标题
    const headings = headingElements.map((heading) => ({
      text: heading.textContent,
      id: heading.id,
    }));
    setHeadings(headings);
  }, []);

  // 检测目录项是否在视口中，用于添加激活样式
  const [activeId, setActiveId] = useState('');
  const [ref, inView] = useInView({
    threshold: 0.5,
    rootMargin: '0px 0px -40% 0px', // 根据需要调整，用于触发视口检测
  });

  useEffect(() => {
    const currentHeading = headings.find((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        return element.offsetTop <= window.scrollY + window.innerHeight / 2;
      }
      return false;
    });

    if (currentHeading) {
      setActiveId(currentHeading.id);
    }
  }, [inView]);

  return (
    <nav className={styles.tableOfContents}>
      <ul>
        {headings.map((heading, index) => (
          <li key={index}>
            <Link href={`${router.asPath}#${heading.id} `} passHref>
              <div className={heading.id === activeId ? styles.active : ''} ref={heading.id === activeId ? ref : null}>
                {heading.text}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
