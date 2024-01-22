import React from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg ">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>

      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((res) => (
          <li key={res?.card.info.id}>
            {res?.card.info.name} -{" "}
            {res?.card.info.price || res?.card.info.defaultPrice}
          </li>
        ))}
      </ul> */}
      {categories.map((category, i) => {
        return (
          <div key={i}>
            <RestaurantCategory
              data={category.card.card}
              showItems={showIndex === i ? true : false}
              setShowIndex={() => {
                if (showIndex !== i) {
                  setShowIndex(i);
                } else {
                  setShowIndex(null);
                }
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
