import React from "react";

export default function ErrorMessage({ ajay }) {
  return <>{ajay.length == 0 && <h3>I am still hungry</h3>}</>;
}
