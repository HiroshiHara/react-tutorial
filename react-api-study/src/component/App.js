/* @flow */

import React from "react";
import { ItemBox } from "./ItemBox";

type Props = {
  members: Array<Array<string>>,
};

export const App = (props: Props) => {
  const members = props.members.map((member) => (
    <ItemBox lists={member} key={Math.random() * 100} />
  ));
  console.log(members);
  return <div>{members}</div>;
};
