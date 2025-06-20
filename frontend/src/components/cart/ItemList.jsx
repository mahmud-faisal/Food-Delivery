import React, { useEffect } from 'react'
import Item from './Item'
import { food_list } from '../../assets/frontend_assets/assets';

const ItemList = ({cartItems,setSubTotal}) => {
  useEffect(() => {
    let total = 0;
    for (const [itemId, quantity] of Object.entries(cartItems)) {
      const item = food_list.find((item) => item._id === itemId);
      if (item) {
        total += item.price * quantity;
      }
    }
    setSubTotal(total);
  }, [cartItems, setSubTotal]);
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
<div>{Object.entries(cartItems).map(([itemId, quantity]) => (
        <Item key={itemId} itemId={itemId} quantity={quantity} />
      ))}</div>
   </div>
  )
}

export default ItemList