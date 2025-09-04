import React, { useContext, useEffect, useState } from 'react'
import { assets} from '../../assets/frontend_assets/assets' 
import { StoreContext } from '../../context/StoreContext'



const TopDish = () => {

  const {cartItems,addToCart,removeFromCart,food_list,url} = useContext(StoreContext);
  

// console.log(food_list)
  return (
    <div className='mb-12'>
        <h2 className="text-3xl font-bold mb-8">Top Dish Near You</h2>
        <div className="dish-items grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-6 gap-y-10" >
            {food_list.map((item,index)=>{
                return <div className="dish" key={index}>
                    <div className="img-holder relative">
                    <img src={`${url}/uploads/${item.image}`} alt="" className='rounded-t-2xl'/>
                    {!cartItems[item._id]? <div className="add-item absolute bottom-2 right-4 px-3 py-1 bg-white rounded-full font-bold text-xl text-gray-700 cursor-pointer" onClick={()=>addToCart(item._id)} >+</div>
                    :
                    <div className="add-item absolute bottom-2 right-4 px-3 py-1 bg-white rounded-full font-bold text-xl text-gray-700"><span className="text-red-500 px-[10px]  rounded-full bg bg-red-200 cursor-pointer" onClick={()=>removeFromCart(item._id)}>-</span>  {cartItems[item._id]}  <span className="text-green-500 px-2  rounded-full bg bg-green-200 cursor-pointer" onClick ={()=>addToCart(item._id)}>  +  </span></div>}
                    </div>


                    <div className="flex justify-between my-4"><h3 className="font-bold ">{item.name}</h3>
                  <img src={assets.rating_starts} alt="" /></div>
                    
                    <p className="">{item.description}</p>
                    <p className="text-primary-color font-bold text-xl mt-2">${item.price}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default TopDish