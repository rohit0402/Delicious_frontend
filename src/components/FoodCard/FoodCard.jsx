import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/CartSlice";

function FoodCard({ img, id, price, rating, desc, name,handleToast }) {
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-[240px] h-[320px] bg-white p-5 flex flex-col rounded-lg gap-2">
      <img
        src={img}
        alt=""
        className="w-auto h-[100px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-evenly">
        <h2>{name}</h2>
        <span className="text-yellow-300">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}..</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <FontAwesomeIcon
            icon={faStar}
            className="fa-solid fa-star mr-1 text-yellow-400"
          />{" "}
          {rating}
        </span>
        <button className="p-1 text-black bg-yellow-300 hover:bg-yellow-600 rounded-lg text-sm"
        onClick={()=>{
          dispatch(addToCart({id,name,price,img,qty:1,rating}));
          handleToast(name);
        }}>
          Add
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
