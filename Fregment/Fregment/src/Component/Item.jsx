import React from "react";

export default function Item({ foodItems }) {
  return (
    <>
      <li className="list-group-item">{foodItems} </li>
    </>
  );
}
