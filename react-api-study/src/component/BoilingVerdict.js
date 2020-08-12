/* @flow */
import React from "react";

type Props = { celsius: number };

export const BoilingVerdict = (props: Props) => {
  if (props.celsius >= 100) {
    return (
      <p>
        The water would <span className="strong-text">boil</span>.
      </p>
    );
  }
  return <p>The water would not boil</p>;
};
