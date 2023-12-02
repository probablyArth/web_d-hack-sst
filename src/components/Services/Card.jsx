import React from "react";

const Card = ({ title, desc, Icon }) => {
  return (
    <div className="p-8 flex flex-col gap-5 items-center border-2 border-lightBrand rounded-md">
      <Icon className={"p-2 text-white bg-brand rounded-md"} size={70} />
      <h1 className="font-bold text-lg text-darkBrand">{title}</h1>
      <p className="text-center">{desc}</p>
    </div>
  );
};

export default Card;
