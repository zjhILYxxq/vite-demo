import loadable from '@loadable/component';
import React from 'react';


const LOADABLE_OPTION = {
  fallback: <div>页面加载中...</div>,
};

// 这里的注释 webpackChunkName 可以指导 webpack 将该组件以这个名字单独拆出去
export const Page1 = loadable(
    () => import('../pages/page1'),
    LOADABLE_OPTION
);

export const Page2 = loadable(
    () => import('../pages/page2'),
    LOADABLE_OPTION
);

export const Page3 = loadable(
    () => import('../pages/page3'),
    LOADABLE_OPTION
);