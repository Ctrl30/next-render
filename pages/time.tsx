import React, { ReactElement, useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "antd";
// import Lazy from '../components/lazy';
// import moment from "moment";

const Lazy = dynamic(import("../components/lazy"));

interface Props {}

export default function Time({}: Props): ReactElement {
  const [time, setTime] = useState("2021-02-04");
  const handleClick = async () => {
    const moment = await import("moment");
    setTime(moment.default().format("YYYY-MM-DD hh:mm:ss"));
  };
  return (
    <div>
      <h1>{time}</h1>
      <Lazy />
      <Button>Fuck</Button>
      <button onClick={handleClick}>clickme</button>
    </div>
  );
}
