import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Circle.css";
const Circle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="circles" id="circles">
      <div className="anisha">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          A
        </div>
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          N
        </div>
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          I
        </div>

        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          S
        </div>

        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          H
        </div>

        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          A
        </div>
      </div>
    </div>
  );
};

export default Circle;
