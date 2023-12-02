import React from "react";

const Button = ({ children }) => {
  return (
    <button className="px-8 py-2 text-white bg-brand rounded-3xl w-fit">
      {children}
    </button>
  );
};

export default Button;
