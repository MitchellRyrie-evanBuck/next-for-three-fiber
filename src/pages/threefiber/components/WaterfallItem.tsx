// components/WaterfallItem.js

import React from 'react';
import Image from 'next/image';

interface InImgType {
  title: string;
  imageUrl: string;
}

const WaterfallItem: React.FC<InImgType> = ({ title, imageUrl }) => {
  return (
    <div className="waterfall-item">
      <Image src={imageUrl} alt={title} width={300} height={200} />
      <div className="waterfall-item-title">{title}</div>
    </div>
  );
};

export default WaterfallItem;
