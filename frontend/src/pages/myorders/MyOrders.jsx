import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/frontend_assets/assets';
import axios from 'axios';

const MyOrders = () => {
    const {url,token}= useContext(StoreContext)
    const [data,setData] = useState([]);

    const fetchOrders=async()=>{
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        setData(response.data.data);
        console.log(data)
        console.log(response.data.data)
    }

    useEffect(()=>{
        if(token){
            fetchOrders();
        }
    },[token]);
  return (
    <div className='my-order'>
        <h2 className="">My Orders</h2>
        <div className="container">
            {console.log(data)}
            {data.map((order,index)=>{
                return(
                    <div key={index} className="my-orders-order">
                        <img src={assets.parcel_icon} alt="" className="" />
                        <p className="">{order.items.map((item,index)=>{
                            if(index ===order.items.length-1){
                                return item.name+" X " +item.quantity
                            }
                            else{
                                return item.name+" X " +item.quantity +","
                            }
                        })}</p>
                        <p className="">${order.amount}.00</p>
                        <p className="">Items: {order.items.length}</p>
                        <p className=""><span>&#25cf;</span> <b>{order.status}</b> </p>
                        <button className="" onClick={fetchOrders}>Track Order</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MyOrders