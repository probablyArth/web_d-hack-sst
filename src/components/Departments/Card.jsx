import React from "react";

const Card = ({ title, p1, p2, image }) => {
  return (
    <div className="flex p-20">
      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-darkBrand text-xl ">{title}</h1>
        <h1 className="text-md italic">{p1}</h1>
        <h1 className="text-md">{p2}</h1>
      </div>
      <img src={image} alt="" className="w-[300px]" />
    </div>
  );
};

export default Card;
