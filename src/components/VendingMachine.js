import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Nav";
import Snacks from "./Snacks";
import snackItems from "./SnacksData";

const VendingMachine = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {snackItems.map((snack, i) => (
          <Route
            key={`${i}-routes`}
            path={`/${snack.name}`}
            element={
              <Snacks img={snack.img} name={snack.name} price={snack.price} />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default VendingMachine;
