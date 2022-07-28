import React from 'react';

const importModule = (m: string) => import(`../../utils/${m}.ts`);
importModule("util.1").then(res => {
    res.func1();
});

const Page = () => {
    return <div>页面3</div>
}

export default Page;