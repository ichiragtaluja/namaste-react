import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data);
  // const [showItems, setShowItems] = useState(false);

  // const handleClick = () => {
  //   console.log("clicked");
  //   setShowItems(!showItems);
  // };
  return (
    <div>
      {/* {Header} */}
      <div
        onClick={setShowIndex}
        className="w-6/12 mx-auto my-4 flex justify-between bg-gray-50 shadow-lg p-4"
      >
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {/* RestaurantCategory */}
      {/* {Footer} */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
