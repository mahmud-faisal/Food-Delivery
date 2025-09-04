import React, { useContext } from 'react'
// import { food_list } from '../../assets/frontend_assets/assets'
import { FaX } from "react-icons/fa6";
import { StoreContext } from '../../context/StoreContext';

const Item = ({itemId,quantity}) => {
  const {food_list,url} = useContext(StoreContext);
  
  const itemData = food_list.find((item)=>item._id===itemId);
  return (
    <div className="grid grid-cols-6 items-center gap-4 p-2 ">
      
    <img src={`${url}/uploads/${itemData.image}`} alt={itemData.name} className="w-12 h-12 object-cover" />

    <p>{itemData.name}</p>
    <p>${itemData.price}</p>
    <p>{quantity}</p>
    <p>${itemData.price * quantity}</p>
    <p className="cursor-pointer"><FaX /></p>
  </div>
  )
}

export default Item