import React from "react";

const Button = ({ color, bgColor, text, borderRadius, size }) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: borderRadius,
      }}
      className={`text-${size} p-3 hover:drop-shadow-xl hover:bg-light-gray transition-all duration-300 ease-in-out`}
    >
      {text}
    </button>
  );
};

export default Button;
