import React from "react";

const Shades = ({ rgb, weight, hex }) => {
  console.log(hex);
  let newrgb = rgb.join(",");

  return (
    <div className="shade" style={{ background: `rgb(${newrgb})` }}>
      <p>{weight}%</p>
      <p>{`Hex: #${hex}`}</p>
    </div>
  );
};

export default Shades;
