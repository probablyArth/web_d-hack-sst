import React from "react";

const NavLink = ({ title, href }) => {
  return (
    <a className="bottomStep active:text-brand" href={href}>
      {title}
    </a>
  );
};

export default NavLink;
