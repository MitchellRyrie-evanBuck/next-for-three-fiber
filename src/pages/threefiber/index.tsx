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
    fetchCases(0);
  }, []);
  
  const handleLoadMore = () => {
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
      setCases((prevCases) => [...prevCases, ...newCases]);
      setLoading(false);
      setHasMore(newCases.length === itemsPerLoad);
    } catch (error) {
      console.error('Error fetching cases:', error);
    }
  };

  return (
    <>
      {/* <div className="waterfall-layout">
        {cases.map((caseItem) => (
          <Link data-aos="fade-up" key={caseItem.id} href={`/threefiber/three/${caseItem.id}`}>
            <div className="waterfall-item">
              <img src={caseItem.imageUrl} alt={caseItem.title} />
              <h3>{caseItem.title}</h3>
            </div>
          </Link>
        ))}
      </div> */}
      <div className={styles.container}>
        <InfiniteScroll
          dataLength={cases.length}
          next={handleLoadMore}
          hasMore={hasMore}
          loader={<Skeleton count={itemsPerLoad} height={200} />}
          endMessage={<div>No more cases to load</div>}
        >
          <Masonry
            breakpointCols={{
              default: 3,
              1100: 2,
              700: 1,
            }}
            className={styles.masonryGrid}
            columnClassName={styles.masonryGridColumn}
          >
            {cases.map((caseItem) => (
              <div key={caseItem.id} className={styles.masonryItem}>
                {loading ? (
                  <Skeleton height={200} />
                ) : (
                  <>
                    <Image
                      src={caseItem.imageUrl}
                      alt={caseItem.title}
                      width={300}
                      height={200}
                    />
                      <h3 className={styles['local-h3']} >{caseItem.title}</h3>
                    {/* <p>{caseItem.details}</p> */}
                  </>
                )}
              </div>
            ))}
          </Masonry>
        </InfiniteScroll>
      </div>
    </>
  );
};


export default FiberComponents