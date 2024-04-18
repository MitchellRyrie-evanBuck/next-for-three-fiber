// import Spline from '@splinetool/react-spline';
import React from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));
export default function SplineDesign() {
  return (
    <Spline scene="https://prod.spline.design/0RARI5TMlv8pDd5k/scene.splinecode" />
  );
}
