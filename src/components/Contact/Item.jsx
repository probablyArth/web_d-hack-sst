import React from "react";

const Item = ({ Icon, name, desc }) => {
  return (
    <div className="flex gap-3 p-3">
      <div className="p-3 bg-lightBrand rounded-full">
        <Icon className="w-[45px] h-[45px] rounded-full text-brand bg-lightBrand" />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-darkBrand font-bold text-xl">{name}</h1>
        <p className="text-brand">{desc}</p>
      </div>
    </div>
  );
};

export default Item;
