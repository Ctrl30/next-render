import React, { ReactElement } from "react";
import Link from "next/link";
import Router from "next/router";

interface Props {}

function Index({}: Props): ReactElement {
    /**
     * Router 6个生命钩子
     * 1. routeChangeStart
     * 2. routeChangeComplete
     * 3. beforeHistoryChange
     * 4. routeChangeError
     * 5. hashChangeStart
     * 6. hashChangeComplete
     */
    // Router.events.on('routeChangeStart',(...args) => {
    //     console.log('1. routeChangeStart', args);
    // })
    // Router.events.on('routeChangeComplete',(...args) => {
    //     console.log('2. routeChangeComplete', args);
    // })
    // Router.events.on('beforeHistoryChange',(...args) => {
    //     console.log('3. beforeHistoryChange', args);
    // })
    // Router.events.on('routeChangeError',(...args) => {
    //     console.log('4. routeChangeError', args);
    // })
    // Router.events.on('hashChangeStart',(...args) => {
    //     console.log('5. hashChangeStart', args);
    // })
    // Router.events.on('hashChangeComplete',(...args) => {
    //     console.log('6. hashChangeComplete', args);
    // })
  const handleJump = () => {
    // Router.push('/girl?name=吉呎明步');
    Router.push({
      pathname: "/girl",
      query: {
        name: "吉呎明步",
      },
    });
  };
  return (
    <div>
      <h1>Hello Nextjs</h1>
      {/* <div><Link href='/girl?name=波多野结衣'><a>波多野结衣</a></Link></div> */}
      <div>
        <Link href={{ pathname: "/girl", query: { name: "波多野结衣" } }}>
          <a>波多野结衣</a>
        </Link>
      </div>
      <div>
        <Link href="/girl?name=小泽玛利亚">
          <a>小泽玛利亚</a>
        </Link>
      </div>
      <div>
        <button onClick={handleJump}>选择</button>
      </div>
      {/* <div>
          <Link href="#/logan">logan</Link>
      </div> */}
    </div>
  );
}
export default Index;
