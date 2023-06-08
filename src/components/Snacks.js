import { useState } from "react";

const Snacks = ({ img, name, price }) => {
  const [qty, setQty] = useState(0);
  const [currPrice, setCurrPrice] = useState(0);

  const handleClick = () => {
    setQty(qty + 1);
    setCurrPrice(currPrice + price);
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-1/4 mt-10">
        <div
          className="bg-gray-200 rounded-lg shadow-md p-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => handleClick()}
        >
          <div className="flex flex-wrap justify-between">
            <h1 className="text-xl font-bold mb-2">{name}</h1>
            <div className="flex">
              <h3 className="text-gray-700 text-lg ">Total: ${currPrice}</h3>
              <h3 className="text-gray-500 text-sm ml-4 mr-4 mt-1">
                Quantity: {qty}
              </h3>
            </div>
          </div>
          <img src={img} alt={name} className="w-full rounded-md mb-2" />
        </div>
      </div>
    </div>
  );
};

export default Snacks;
