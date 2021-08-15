import React, { useState, useEffect } from "react";

const Shades = ({ rgb, weight, hex, index }) => {
  const [copy, setCopy] = useState(false);
  // console.log(hex);
  let newrgb = rgb.join(",");

  useEffect(() => {
    let timeout = setTimeout(() => {
      setCopy(false);
      console.log("df");
    }, 3000);

    // return () => {
    //   clearTimeout(timeout);
    // };
  }, [copy]);

  return (
    <div
      className="shade"
      style={{ background: `rgb(${newrgb})`, color: index > 10 ? "white" : "black", boxShadow: `0px 0px 20px 5px rgba(${newrgb}, 0.4)` }}
      onClick={() => {
        setCopy(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p>{weight}%</p>
      <p>{`Hex: #${hex.toUpperCase()}`}</p>

      <p>{copy ? <i>"Hex Value Copied!"</i> : null}</p>
    </div>
  );
};

export default Shades;
