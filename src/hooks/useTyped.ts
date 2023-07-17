import Typed from 'typed.js';
import React, { useEffect } from 'react';

function useTyped (){
  useEffect(() => {
    // 创建 Typed 实例
    const options = {
      strings: ['Welcome to My Website', '👋 I am a Web Developer'],
      typeSpeed: 50, // 打字速度
      backSpeed: 30, // 回退速度
      fadeOut: true,
      loop: true, // 循环播放
    };

    const typed = new Typed('.typed-text', options);

    // 组件卸载时销毁 Typed 实例
    return () => {
      typed.destroy();
    };
  }, []);
}

