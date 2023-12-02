import React from "react";
import NavLink from "./NavLink";
import Button from "../Button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-8 sticky bg-white">
      <h1 className="text-darkBrand text-4xl font-bold">LOREM_IPSUM</h1>
      <div className="flex justify-between gap-8 items-center">
        <NavLink title={"Home"} href={"#home"} />
        <NavLink title={"About"} href={"#about"} />
        <NavLink title={"Services"} href={"#services"} />
        <NavLink title={"Departments"} href={"#departments"} />
        <NavLink title={"Doctors"} href={"#doctors"} />
        <NavLink title={"Drop Down"} />
        <NavLink title={"Contact"} href={"#contact"} />
        <Button>Make an Appointment</Button>
      </div>
    </div>
  );
};

export default Navbar;
