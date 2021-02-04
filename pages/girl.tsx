import React, { ReactElement } from "react";
import Link from "next/link";
import { withRouter, NextRouter } from "next/router";
import axios from "axios";
import { rejects } from "assert";

interface Props {
  router: NextRouter;
  list: any
}

function Girl({ router, list }: Props): ReactElement {
    console.log('list',list)
  return (
    <div>
      <h1>{router.query.name}</h1>
      <div>{list.map(item=>item.name)}</div>
      <Link href="/">返回首页</Link>
    </div>
  );
}

Girl.getInitialProps = async () => {
  const promise = new Promise((resolve, reject) => {
    axios(
      "http://localhost:5000/list"
    )
      .then((res) => {
        console.log("res", res);
        resolve(res.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
//   console.log('promise',promise)
  return await promise;
};
export default withRouter(Girl);
