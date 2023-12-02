import React from "react";
import Card from "./Card";
import Section from "./Section";

import { MdFeed } from "react-icons/md";
import { BiFingerprint } from "react-icons/bi";
import { GoGift } from "react-icons/go";
import { LuFlower } from "react-icons/lu";

const About = () => {
  return (
    <div className="bg-white flex flex-col py-20">
      <div className="flex gap-8 items-center p-20 ">
        <div className="flex flex-col bg-brand w-fit p-8 rounded-md text-white max-w-[400px] -mt-[200px]">
          <h1 className="font-bold text-4xl">Why Choose LOREM_IPSUM?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
            tempora. Illo dolores nostrum animi, deserunt praesentium architecto
            odio rem consequuntur consectetur cupiditate. Veniam saepe ratione
            facere consequatur esse expedita dicta culpa officiis. Aut aperiam
            aliquam, sunt, reprehenderit iste molestias, eos cumque quis
            temporibus iusto nemo dolores! Delectus aspernatur nemo magnam.
          </p>
        </div>
        <Card
          Icon={MdFeed}
          title={"Lorem ipsum dolor"}
          desc={
            "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor"
          }
        />
        <Card
          Icon={MdFeed}
          title={"Lorem ipsum dolor"}
          desc={
            "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor"
          }
        />
        <Card
          Icon={MdFeed}
          title={"Lorem ipsum dolor"}
          desc={
            "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor"
          }
        />
      </div>
      <div className="flex aboutWithBg justify-between">
        <div className="w-[45%]"></div>
        <div className="bg-white w-[55%] p-8 gap-4 flex flex-col">
          <h1 className="font-bold text-darkBrand text-3xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p className="text-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            voluptatem doloribus, numquam quibusdam tenetur tempora distinctio
            fugit illo aperiam deleniti?
          </p>
          <div className="flex flex-col py-8 gap-8">
            <Section
              title={"Lorem Ipsum"}
              desc={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            voluptatem doloribus, numquam quibusdam tenetur tempora distinctio
            fugit illo aperiam deleniti?`}
              Icon={BiFingerprint}
            />
            <Section
              title={"Lorem Ipsum"}
              desc={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            voluptatem doloribus, numquam quibusdam tenetur tempora distinctio
            fugit illo aperiam deleniti?`}
              Icon={GoGift}
            />
            <Section
              title={"Lorem Ipsum"}
              desc={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            voluptatem doloribus, numquam quibusdam tenetur tempora distinctio
            fugit illo aperiam deleniti?`}
              Icon={LuFlower}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
