import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer2 = () => {
  return (
    <footer className="p-20 bg-lightBrand flex justify-between">
      <div className="flex flex-col">
        © Copyright LOREM IPSUM. All Rights Reserved
        <span>Designed by Dhruv</span>
      </div>
      <div className="flex gap-2">
        <div className="bg-brand rounded-full p-3">
          <FaFacebook className="rounded-full text-white bg-brand w-[30px] h-[30px]" />
        </div>
        <div className="bg-brand rounded-full p-3">
          <FaInstagram className="rounded-full text-white bg-brand w-[30px] h-[30px]" />
        </div>
        <div className="bg-brand rounded-full p-3">
          <FaLinkedin className="rounded-full text-white bg-brand w-[30px] h-[30px]" />
        </div>
        <div className="bg-brand rounded-full p-3">
          <FaTwitter className="rounded-full text-white bg-brand w-[30px] h-[30px]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
