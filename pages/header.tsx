import React, { ReactElement } from 'react';
import Head from '../components/head';
import style from './index.scss';

interface Props {
    
}

export default function Header({}: Props): ReactElement {
    return (
        <div className={style.fuck}>
            <Head title='西八' />
            Header
        </div>
    )
}
