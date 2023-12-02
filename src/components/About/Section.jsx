import React from "react";

const Section = ({ title, desc, Icon }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="rounded-full border-2 border-brand p-2">
        <Icon size={30} color="blue" />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-xl">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Section;
