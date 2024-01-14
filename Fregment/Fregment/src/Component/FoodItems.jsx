import React from "react";
import Item from "./Item";
export default function FoodItems({ ajay }) {
  return (
    <>
      <ul className="list-group">
        {ajay.map((item) => (
          <Item kye={item} foodItems={item} />
        ))}
      </ul>
    </>
  );
}
