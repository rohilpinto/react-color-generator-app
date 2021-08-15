import React from "react";

const Shades = ({ rgb }) => {
  console.log(rgb);

  let newrgb = rgb.join(",");

  return (
    <div className="shade" style={{ background: `rgb(${newrgb})` }}>
      hello
    </div>
  );
};

export default Shades;
