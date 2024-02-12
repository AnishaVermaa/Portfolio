import React from "react";

import './FloatingDiv.css'


const FloatinDiv = ({img, text1}) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <img src={img} alt="" />
      <span>
        {text1}
      </span>
    </div>
  );
};

export default FloatinDiv;