import React, { ReactElement } from 'react';
import Head from 'next/head';

interface Props {
    title: string,
}

export default function CommonHead({title}: Props): ReactElement {
    return (
        <>
         <Head>
            <title>{title}</title>
        </Head>   
        </>
    )
}
