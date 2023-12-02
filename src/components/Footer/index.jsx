import React from "react";
import Button from "../Button";

const LinksContainer = ({ title, items }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h3 className="font-semibold text-xl">{title}</h3>
      <ul className="flex flex-col gap-4">
        {items.map((item, index) => {
          return (
            <li key={index} className="">
              {" "}
              &#8702; {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white flex justify-between p-20">
      <div className="flex flex-col gap-8 w-full">
        <h1 className="text-3xl font-semibold">LOREM_IPSUM</h1>
        <p className="text-gray-500 text-start">
          A108 Adam Street <br />
          New York NY, 535022 <br />
          United States
        </p>
        <p className="text-gray-500 text-start">
          <span className="font-bold">Phone: </span>
          +1 99999999
          <br />
          <span className="font-bold">Email: </span>
          info@example.com
          <br />
        </p>
      </div>
      <LinksContainer
        title={"Useful Links"}
        items={[
          "Home",
          "About Us",
          "Services",
          "Terms of service",
          "Privacy Policy",
        ]}
      />
      <LinksContainer
        title={"Our Services"}
        items={[
          "Web Design",
          "Web Development",
          "Product Management",
          "Marketing",
          "Graphic Design",
        ]}
      />
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-xl">Join Our Newsletter</h3>
        <p className="text-start">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          numquam dolores dolorem illum minus saepe molestias nisi obcaecati
          nesciunt. Sed.
        </p>
        <div className="flex">
          <input
            type="text"
            className="border border-brand rounded-full p-4 rounded-r-none"
          />
          <Button className="ml-[-40px] rounded-full">Subscribe</Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
