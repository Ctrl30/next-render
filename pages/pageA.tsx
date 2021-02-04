import React, { ReactElement } from 'react';
import Link from 'next/link';

interface Props {
    
}

export default function PageA({}: Props): ReactElement {
    return (
        <div>
           <h1>pagea</h1>
            <Link href='/' >返回首页</Link>
        </div>
    )
}
