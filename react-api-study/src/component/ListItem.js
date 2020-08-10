/* @flow */

import React from "react";

type Props = {
  value: string,
};

export const ListItem = (props: Props) => {
  return <li>{props.value}</li>;
};
