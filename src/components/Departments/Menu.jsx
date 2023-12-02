import React from "react";

const MenuItem = ({ self, currState, setState, text }) => {
  return (
    <li
      className={`border-r-2 px-20 py-4  ${
        self == currState ? "text-brand border-r-brand" : ""
      } hover:text-brand p-2 cursor-pointer`}
      onClick={() => {
        setState(self);
      }}
    >
      {text}
    </li>
  );
};

const Menu = ({ state, setState }) => {
  return (
    <ul className="flex flex-col">
      <MenuItem
        self={0}
        currState={state}
        setState={setState}
        text={"Cardiology"}
      />
      <MenuItem
        self={1}
        currState={state}
        setState={setState}
        text={"Neuorology"}
      />
      <MenuItem
        self={2}
        currState={state}
        setState={setState}
        text={"Hepatology"}
      />
      <MenuItem
        self={3}
        currState={state}
        setState={setState}
        text={"Pediatrics"}
      />
      <MenuItem
        self={4}
        currState={state}
        setState={setState}
        text={"Eye Care"}
      />
    </ul>
  );
};

export default Menu;
