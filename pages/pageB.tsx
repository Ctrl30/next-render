import React, { ReactElement } from 'react';
import Link from 'next/link';

interface Props {
    
}

export default function PageB({}: Props): ReactElement {
    return (
        <div>
            <h1>pageb</h1>
            <Link href='/' >返回首页</Link>
        </div>
    )
}
