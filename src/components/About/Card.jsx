import React from "react";

const Card = ({ Icon, title, desc }) => {
  return (
    <div className="flex flex-col -mt-[200px] bg-white rounded-md shadow-md p-8 w-fit max-w-[300px] items-center justify-center gap-4">
      <Icon color={"blue"} size={90} />
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-800">{desc}</p>
    </div>
  );
};

export default Card;
