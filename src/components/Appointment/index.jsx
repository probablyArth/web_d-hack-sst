import React from "react";
import Button from "../Button";

const Appointment = () => {
  return (
    <div className="bg-lightBrand p-20 flex flex-col items-center justify-center gap-8">
      <h1 className="font-bold text-darkBrand text-3xl">Make an Appointment</h1>
      <p className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit totam
        fugiat facilis esse odit saepe quae similique libero mollitia, autem
        corrupti eos eveniet? Iusto soluta labore qui dignissimos, totam vitae
        quod sapiente ratione. Perferendis, sit cumque aliquid culpa qui quam?
      </p>
      <form className="grid grid-cols-3 gap-4 w-full">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="number" placeholder="Your Phone" />
        <input type="text" placeholder="Appointment Date" />
        <select name="Select Department" id="">
          <option value="">department 1</option>
          <option value="">department 2</option>
          <option value="">department 3</option>
        </select>
        <select name="Select Doctor" id="">
          <option value="">department 1</option>
          <option value="">department 2</option>
          <option value="">department 3</option>
        </select>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message (Optional)"
          className="col-span-3"
        ></textarea>
      </form>
      <Button>Make an appointment</Button>
    </div>
  );
};

export default Appointment;
