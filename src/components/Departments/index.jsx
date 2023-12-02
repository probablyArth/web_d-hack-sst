import React, { useState } from "react";
import Menu from "./Menu";
import Card from "./Card";

const departments = [
  {
    title: "Cardiology",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id impedit quas amet quo error corrupti vero animi maxime quae debitis.",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab adipisci ducimus qui cupiditate. Repellendus consequuntur suscipit eveniet doloribus ex asperiores laboriosam quia autem accusamus quos pariatur voluptates minima adipisci maiores cumque, unde dolorem blanditiis cum expedita quo sit. Voluptate nostrum laudantium similique reiciendis sed, laborum eum asperiores beatae. Quis, vero!",
    image: "./images/departments-1.jpg",
  },
  {
    title: "Neurology",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id impedit quas amet quo error corrupti vero animi maxime quae debitis.",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab adipisci ducimus qui cupiditate. Repellendus consequuntur suscipit eveniet doloribus ex asperiores laboriosam quia autem accusamus quos pariatur voluptates minima adipisci maiores cumque, unde dolorem blanditiis cum expedita quo sit. Voluptate nostrum laudantium similique reiciendis sed, laborum eum asperiores beatae. Quis, vero!",
    image: "./images/departments-2.jpg",
  },
  {
    title: "Hepatology",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id impedit quas amet quo error corrupti vero animi maxime quae debitis.",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab adipisci ducimus qui cupiditate. Repellendus consequuntur suscipit eveniet doloribus ex asperiores laboriosam quia autem accusamus quos pariatur voluptates minima adipisci maiores cumque, unde dolorem blanditiis cum expedita quo sit. Voluptate nostrum laudantium similique reiciendis sed, laborum eum asperiores beatae. Quis, vero!",
    image: "./images/departments-3.jpg",
  },
  {
    title: "Pediatrics",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id impedit quas amet quo error corrupti vero animi maxime quae debitis.",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab adipisci ducimus qui cupiditate. Repellendus consequuntur suscipit eveniet doloribus ex asperiores laboriosam quia autem accusamus quos pariatur voluptates minima adipisci maiores cumque, unde dolorem blanditiis cum expedita quo sit. Voluptate nostrum laudantium similique reiciendis sed, laborum eum asperiores beatae. Quis, vero!",
    image: "./images/departments-4.jpg",
  },
  {
    title: "Eye Care",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id impedit quas amet quo error corrupti vero animi maxime quae debitis.",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab adipisci ducimus qui cupiditate. Repellendus consequuntur suscipit eveniet doloribus ex asperiores laboriosam quia autem accusamus quos pariatur voluptates minima adipisci maiores cumque, unde dolorem blanditiis cum expedita quo sit. Voluptate nostrum laudantium similique reiciendis sed, laborum eum asperiores beatae. Quis, vero!",
    image: "./images/departments-5.jpg",
  },
];

const Departments = () => {
  const [state, setState] = useState(0);
  const currDepartment = departments[state];
  return (
    <div className="bg-white p-20 flex flex-col items-center justify-center gap-8">
      <h1 className="font-bold text-3xl text-darkBrand ">Departments</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
        repudiandae quibusdam iusto minus! Maiores, in. Molestiae quae sapiente,
        quis reprehenderit dolorum soluta accusamus, placeat sint veritatis
        atque voluptatum dolor perferendis in repudiandae blanditiis qui sed
        repellendus necessitatibus harum culpa est?
      </p>
      <div className="flex items-center">
        <Menu state={state} setState={setState} />
        <Card {...currDepartment} />
      </div>
    </div>
  );
};

export default Departments;
