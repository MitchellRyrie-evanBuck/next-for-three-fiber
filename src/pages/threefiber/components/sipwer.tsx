import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade';
import { FC } from 'react';
import Image from 'next/image';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';


interface InProps {
  data: any[]
}

const Sipwer: FC<InProps> = (props) => {
  return (
    <div className="h-80 w-full bg-gray-200 mt-2" >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
        effect="fade"
        centeredSlides={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        loop={true} // 循环播放
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
      >
        {
          props.data.map((item, index) => {
            return (
              <SwiperSlide key={index} >
                <Link href={`/threefiber/three/${item.id}`} >
                <div className='h-80 w-full' >
                  <Image 
                    className='object-center object-cover w-full h-full'
                    width={800}
                    height={350}
                    src={`/threefiber/three/${item.id}/${item.imageUrl}`}
                    alt={item.title} />
                </div>
                </Link>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default Sipwer