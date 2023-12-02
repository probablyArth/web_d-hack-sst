import React from "react";
import Card from "./Card";

const Doctors = () => {
  return (
    <div className="bg-white flex flex-col p-20 justify-center items-center gap-4">
      <h1 className="text-darkBrand font-bold text-3xl">Doctors</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ad
        accusamus eaque rerum, odio alias, dignissimos, impedit iure dolorem
        molestias distinctio autem! Accusamus quidem porro consequuntur vero
        tenetur, architecto vitae reiciendis! Debitis autem tenetur natus dicta
        aliquid unde maiores accusantium, minima expedita nesciunt nostrum quod
        aperiam animi dolorem odit explicabo!
      </p>
      <div className="grid grid-cols-2 gap-8">
        <Card
          name={"Jon"}
          title={"nice guy"}
          description={`tenetur, architecto vitae reiciendis! Debitis autem tenetur natus dicta
        aliquid unde maiores accusantium, minima expedita nesciunt nostrum quod
        aperiam animi dolorem odit explicabo!`}
          image={"./images/doctors/doctors-1.jpg"}
        />
        <Card
          name={"Jon"}
          title={"nice guy"}
          description={`tenetur, architecto vitae reiciendis! Debitis autem tenetur natus dicta
        aliquid unde maiores accusantium, minima expedita nesciunt nostrum quod
        aperiam animi dolorem odit explicabo!`}
          image={"./images/doctors/doctors-1.jpg"}
        />
        <Card
          name={"Jon"}
          title={"nice guy"}
          description={`tenetur, architecto vitae reiciendis! Debitis autem tenetur natus dicta
        aliquid unde maiores accusantium, minima expedita nesciunt nostrum quod
        aperiam animi dolorem odit explicabo!`}
          image={"./images/doctors/doctors-1.jpg"}
        />
        <Card
          name={"Jon"}
          title={"nice guy"}
          description={`tenetur, architecto vitae reiciendis! Debitis autem tenetur natus dicta
        aliquid unde maiores accusantium, minima expedita nesciunt nostrum quod
        aperiam animi dolorem odit explicabo!`}
          image={"./images/doctors/doctors-1.jpg"}
        />
        <Card
          name={"Jon"}
          title={"nice guy"}
          description={`tenetur, architecto vitae reiciendis! Debitis autem tenetur natus dicta
        aliquid unde maiores accusantium, minima expedita nesciunt nostrum quod
        aperiam animi dolorem odit explicabo!`}
          image={"./images/doctors/doctors-1.jpg"}
        />
        <Card
          name={"Jon"}
          title={"nice guy"}
          description={`tenetur, architecto vitae reiciendis! Debitis autem tenetur natus dicta
        aliquid unde maiores accusantium, minima expedita nesciunt nostrum quod
        aperiam animi dolorem odit explicabo!`}
          image={"./images/doctors/doctors-1.jpg"}
        />
      </div>
    </div>
  );
};

export default Doctors;
