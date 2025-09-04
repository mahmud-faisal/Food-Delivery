import React, { useState,useEffect, useContext } from 'react'
import { Link } from 'react-router'
import Promo from './Promo';
import { StoreContext } from '../../context/StoreContext';

const CostCal = ({navito}) => {
  const {getTotalCartAmount} = useContext(StoreContext);
    const [deliveryCharge,setDeliveryCharge] = useState(0);

    // const [subTotal,setSubtotal] = useState(0);
    const subTotal = getTotalCartAmount(); 
    
  useEffect(() => {
    if (subTotal > 0) {
      setDeliveryCharge(2);
    } else {
      setDeliveryCharge(0);
    }
  }, [subTotal]);
  return (
    
        <div className="cart-total">
            <h3 className="font-bold text-xl my-2">Cart Total</h3>
            <div className="flex flex-col gap-4">
            <div className="sub-total flex justify-between w-full">
                <p className="">Subtotal</p><p className="">${subTotal}</p>
            </div>
            <div className="Delivery Fee flex justify-between w-full">
                <p className="">Delivery</p><p className="">${deliveryCharge}</p>
            </div>
            <div className="Total flex justify-between w-full">
                <p className="">Total</p><p className="">${subTotal+deliveryCharge}</p>
            </div>
           <Link to ={`/${navito}`}> <div className="text-white bg-primary-color text-center rounded-lg py-2 mt-4 ">Proceed To Checkout</div></Link>
            </div>
        </div>
       
        
    
  )
}

export default CostCal