import React from "react";

export const Price = ({ monthly, price }) => {
  let calculatedPrice = monthly ? price : price - 2;
  return (
    <div>
      <h1>${calculatedPrice}</h1>
    </div>
  );
};
