import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Card = ({ image, name, title, description }) => {
  return (
    <div className="flex shadow-md gap-8 p-10 w-full items-center">
      <img src={image} alt="" className="rounded-full w-[200px] h-[200px]" />
      <div className="flex flex-col gap-4">
        <h2 className="text-darkBrand font-bold text-xl">{name}</h2>
        <h3 className="text-lg">{title}</h3>
        <p className="text-md text-left">{description}</p>
        <div className="flex gap-4">
          <div className="p-3 bg-lightBrand rounded-full">
            <FaTwitter className="rounded-full text-white bg-lightBrand w-[30px] h-[30px]" />
          </div>
          <div className="p-3 bg-lightBrand rounded-full">
            <FaLinkedin className="rounded-full text-white bg-lightBrand w-[30px] h-[30px]" />
          </div>
          <div className="p-3 bg-lightBrand rounded-full">
            <FaInstagram className="rounded-full text-white bg-lightBrand w-[30px] h-[30px]" />
          </div>
          <div className="p-3 bg-lightBrand rounded-full">
            <FaFacebook className="rounded-full text-white bg-lightBrand w-[30px] h-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
