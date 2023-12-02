import React from "react";
import Card from "./Card";
import { FaUserDoctor } from "react-icons/fa6";

const Mid = () => {
  return (
    <div className="bg-lightBrand flex flex-row p-10 px-20 justify-between gap-8">
      <Card title={"Doctors"} count={85} Icon={FaUserDoctor} />
      <Card title={"Doctors"} count={85} Icon={FaUserDoctor} />
      <Card title={"Doctors"} count={85} Icon={FaUserDoctor} />
      <Card title={"Doctors"} count={85} Icon={FaUserDoctor} />
    </div>
  );
};

export default Mid;
