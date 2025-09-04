import React,{useContext,useState} from 'react'
import { StoreContext } from '../../context/StoreContext'
import ItemList from '../../components/cart/ItemList';
import CostCal from '../../components/cart/CostCal';
import Promo from '../../components/cart/Promo';


const Cart = () => {
   
    
  return (
   
     <div className='w-[1280px] mx-auto'>
      <div className="">
      <ItemList />
      </div>
      
     <div className="flex justify-between w-full"><div className="w-1/3 my-16"><CostCal  navito={"delivery"} /></div>
     <Promo /></div>
     </div>
     
   
  )
}

export default Cart