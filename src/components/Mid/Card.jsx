import React from "react";

const Card = ({ Icon, count, title }) => {
  return (
    <div className="flex flex-col bg-white p-8 items-center justify-center w-full">
      <Icon className="bg-brand text-white rounded-full -mt-[50px]" size={30} />
      <h1 className="text-4xl font-semibold">{count}</h1>
      <p>{title}</p>
    </div>
  );
};

export default Card;
