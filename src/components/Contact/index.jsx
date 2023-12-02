import React from "react";
import Item from "./Item";
import { FaMapMarkerAlt } from "react-icons/fa";
import Button from "../Button";

const Contact = () => {
  return (
    <div className="p-20 flex flex-col bg-white items-center gap-8">
      <h1 className="text-darkBrand font-bold text-3xl">Contact</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        explicabo qui doloribus ducimus enim laudantium vel molestiae nisi,
        sequi voluptatem consectetur esse. Eveniet pariatur sed animi! Unde
        voluptatem libero, asperiores placeat, expedita aut quod dolores neque
        eos sint a? Repellendus.
      </p>
      <div className="w-full">
        <iframe
          width="100%"
          height="600"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/population/">Population mapping</a>
        </iframe>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex flex-col w-[40%]">
          <Item
            Icon={FaMapMarkerAlt}
            name={"Location:"}
            desc={"A108 Adam Street, New York, 535022"}
          />
          <Item
            Icon={FaMapMarkerAlt}
            name={"Location:"}
            desc={"A108 Adam Street, New York, 535022"}
          />
          <Item
            Icon={FaMapMarkerAlt}
            name={"Location:"}
            desc={"A108 Adam Street, New York, 535022"}
          />
        </div>
        <form className="grid grid-cols-2 gap-2 w-[60%]">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <input type="text" placeholder="Subject" className="col-span-2" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className="col-span-2"
          />
          <Button>Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
