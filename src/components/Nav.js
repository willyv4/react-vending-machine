import React from "react";
import { Link } from "react-router-dom";
import snackItems from "./SnacksData";

const SnackItems = () => {
  return (
    <div className="bg-zinc-100 p-4 shadow-2xl mt-4">
      <Link
        to="/"
        className="bg-zinc-800 text-white text-2xl text-center font-bold rounded p-4"
      >
        Vending Machine
      </Link>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {snackItems.map((snack, i) => (
          <Link
            key={`${i}-snack`}
            to={snack.name}
            className="border-2 border-slate-700 text-2xl font-bold rounded flex items-center"
          >
            <div className="flex-grow py-2 pl-2">{snack.name}</div>
            <div className="flex-grow py-2 pl-2">${snack.price}</div>
            <img
              src={snack.img}
              alt={snack.name}
              className="h-20 rounded"
            ></img>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SnackItems;
