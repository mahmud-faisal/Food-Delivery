import React, { useContext, useEffect } from 'react'
import Item from './Item'
// import { food_list } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';


const ItemList = () => {
  
  const {food_list,cartItems} = useContext(StoreContext);

  const cartArray = Object.entries(cartItems).map(([itemId, quantity]) => ({
    itemId,
    quantity,
  }));
  
  return (
   <div className="">
    <div className="grid grid-cols-6 items-center gap-4 p-2  font-semibold">
        <p>Item</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      
<div>  {cartArray.map(({ itemId, quantity }) => (
        <Item key={itemId} itemId={itemId} quantity={quantity} />
      ))}</div>
   </div>
  )
}

export default ItemList