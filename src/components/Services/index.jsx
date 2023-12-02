import React from "react";
import Card from "./Card";
import { IoIosHeartDislike } from "react-icons/io";

const Services = () => {
  return (
    <div className="bg-white p-20 flex flex-col gap-8 items-center">
      <h1 className="font-bold text-3xl text-darkBrand">Services</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
        laboriosam sint voluptate nihil, laborum quod assumenda beatae obcaecati
        distinctio, explicabo mollitia temporibus quibusdam officia consectetur
        dolorem labore illum aliquid et?
      </p>
      <div className="grid grid-cols-3 gap-8">
        <Card
          Icon={IoIosHeartDislike}
          desc={`distinctio, explicabo mollitia temporibus quibusdam officia consectetur
        dolorem labore illum aliquid et?`}
          title={"Lorem Ipsum"}
        />
        <Card
          Icon={IoIosHeartDislike}
          desc={`distinctio, explicabo mollitia temporibus quibusdam officia consectetur
        dolorem labore illum aliquid et?`}
          title={"Lorem Ipsum"}
        />
        <Card
          Icon={IoIosHeartDislike}
          desc={`distinctio, explicabo mollitia temporibus quibusdam officia consectetur
        dolorem labore illum aliquid et?`}
          title={"Lorem Ipsum"}
        />
        <Card
          Icon={IoIosHeartDislike}
          desc={`distinctio, explicabo mollitia temporibus quibusdam officia consectetur
        dolorem labore illum aliquid et?`}
          title={"Lorem Ipsum"}
        />
        <Card
          Icon={IoIosHeartDislike}
          desc={`distinctio, explicabo mollitia temporibus quibusdam officia consectetur
        dolorem labore illum aliquid et?`}
          title={"Lorem Ipsum"}
        />
        <Card
          Icon={IoIosHeartDislike}
          desc={`distinctio, explicabo mollitia temporibus quibusdam officia consectetur
        dolorem labore illum aliquid et?`}
          title={"Lorem Ipsum"}
        />
      </div>
    </div>
  );
};

export default Services;
