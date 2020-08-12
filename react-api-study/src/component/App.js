/* @flow */

import React from "react";
import { ItemBox } from "./ItemBox";
import { FormBox } from "./FormBox";
import { Calculator } from "./Calculator";
import { FilterableProductTable } from "./chapter12/FilterableProductTable";
import { data } from "./chapter12/data";

type Props = {
  members: Array<Array<string>>,
};

export const App = (props: Props) => {
  const members = props.members.map((member) => (
    <ItemBox lists={member} key={Math.random() * 100} />
  ));
  const forms = <FormBox />;
  const calculator = <Calculator />;
  const initData = data;
  const table = <FilterableProductTable data={initData} />;
  return (
    <div className="container">
      {members}
      {forms}
      {calculator}
      {table}
    </div>
  );
};
