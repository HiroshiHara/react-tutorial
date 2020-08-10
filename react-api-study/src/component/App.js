/* @flow */

import React from "react";
import { ItemBox } from "./ItemBox";
import { FormBox } from "./FormBox";

type Props = {
  members: Array<Array<string>>,
};

export const App = (props: Props) => {
  const members = props.members.map((member) => (
    <ItemBox lists={member} key={Math.random() * 100} />
  ));
  const forms = <FormBox />;
  return (
    <div className="container">
      {members}
      {forms}
    </div>
  );
};
