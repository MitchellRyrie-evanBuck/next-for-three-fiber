import React, { FC, useEffect, useState } from 'react'
import axios from 'axios';
import WaterfallItem from './components/WaterfallItem'
import styles from './styles/threefiber.module.scss'
import Masonry from 'react-masonry-css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Skeleton from 'react-loading-skeleton';
import Image from 'next/image';
import Link from 'next/link';

const FiberComponents = () => {
  const [cases, setCases] = useState<{ id: string; title: string; imageUrl: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  // 定义每次加载的案例数量
  const itemsPerLoad = 20;

  useEffect(() => {
    console.log('useEffect---->', window)
    if (typeof window !== 'undefined') {
      // 这里的代码只会在客户端执行
      fetchCases(0);
    }
  }, []);
  
  const handleLoadMore = () => {
    setLoading(true);
    const startIndex = cases.length;
    fetchCases(startIndex);
  };

  const fetchCases = async (startIndex: number) => {
    try {
      const response = await axios.get('/api/three', {
        params: {
          startIndex,
          count: itemsPerLoad,
        },
      });
      const newCases = response.data;
      console.log('请求数据---->')
      setCases((prevCases) => [...prevCases, ...newCases]);
      setLoading(false);
      setHasMore(newCases.length === itemsPerLoad);
    } catch (error) {
      console.error('Error fetching cases:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className='h-80 w-full bg-gray-200 mt-10'>

      </div>
      <div >
        {/* <InfiniteScroll
          dataLength={cases.length}
          next={handleLoadMore}
          hasMore={hasMore}
          loader={<Skeleton count={itemsPerLoad} height={200} />}
          endMessage={<div>No more cases to load</div>}
        > */}
          <Masonry
            breakpointCols={{
              default: 4,
              1100: 4,
              900: 3,
              730: 2,
            }}
            className={styles.masonryGrid}
            columnClassName={styles.masonryGridColumn}
          >
            {cases.map((caseItem) => (
              <div key={caseItem.id} className={styles.masonryItem}>
                {loading ? (
                  <Skeleton height={200} />
                ) : (
                    <Link href={`/threefiber/three/${caseItem.id}`} >
                    <Image
                        style={{ width: 'auto', height: 'auto' }}
                        width={300}
                        height={200}
                      src={`/threefiber/three/${caseItem.id}/${caseItem.imageUrl}`}
                      alt={caseItem.title}
                    />
                      <h3 className={styles['local-h3']} >{caseItem.title}</h3>
                  </Link>
                )}
              </div>
            ))}
          </Masonry>
        {/* </InfiniteScroll> */}
      </div>
      <div className='flex justify-center cursor-pointer' >
        加载更多
      </div>
    </div>
  );
};


export default FiberComponents