import React, { FC, useEffect, useState } from 'react'
import axios from 'axios';
import styles from './styles/threefiber.module.scss'
import Masonry from 'react-masonry-css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';
import 'react-loading-skeleton/dist/skeleton.css'
import Sipwer from './components/sipwer';
import { motion } from 'framer-motion';

const FiberComponents = () => {
  const [cases, setCases] = useState<{ id: string; title: string; imageUrl: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  // 定义每次加载的案例数量
  const itemsPerLoad = 20;

  useEffect(() => {
    fetchCases(0);
  }, []);

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
    <div className={styles.container}>
      {/* <Skeleton wrapper={<Sipwer data={cases} />}  /> */}
      {loading ? <Skeleton height={300} /> : <Sipwer data={cases} />}
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
            <motion.div 
              key={caseItem.id} 
              className={styles.masonryItem}
              whileHover={{ scale: 1.04, translateY: -5 }}
            >
              <Link href={`/threefiber/three/${caseItem.id}`} >
                {loading ? <Skeleton height={170} containerClassName={`${styles['avatar-skeleton']}`} /> :
                  <div data-aos="fade-up" >
                    <motion.div
                      // whileHover={{ scale: 1.1 }}
                      // transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className={`${styles['image-wrapper']}`}
                    >
                      <motion.img
                        initial={{ scale: 1 }} 
                        whileHover={{ scale: 1.2 }} // 悬停时放大到 1.2 倍
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        exit={{ scale: 1 }} // 退出时缩小到 0
                        style={{ width: 'auto', height: 'auto' }}
                        width={300}
                        height={200}
                        src={`/threefiber/three/${caseItem.id}/${caseItem.imageUrl}`}
                        alt={caseItem.title}
                        className={`${styles.img} object-center object-cover w-full h-full truncate`}
                      />
                    </motion.div>
                    {loading ? <Skeleton height={50} /> : <h3 className={`${styles['local-h3']} best`} >{caseItem.title}</h3>}
                  </div>
                }
              </Link>
            </motion.div>
          ))}
        </Masonry>
        {/* </InfiniteScroll> */}
      </div>
      {/* <div className='flex justify-center cursor-pointer' >
        加载更多
      </div> */}
    </div>
  );
};


export default FiberComponents