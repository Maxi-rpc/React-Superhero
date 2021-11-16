import React, { useState } from "react";

export default function Banner({ image, width, height }) {
  const { state, setState } = useState([]);
  return (
    <>
      <img className="" src={image} alt="" width={width} height={height} />
    </>
  );
}
