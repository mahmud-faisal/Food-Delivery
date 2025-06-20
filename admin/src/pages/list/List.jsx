import React, { useState,useEffect } from 'react'
import axios from 'axios';
const List = () => {
  const url = 'http://localhost:4001';
  const [list,setList] = useState([]);
  const fetchList = async ()=>{
    const response = await axios.get(`${url}/api/food/list`);
    
    if(response.data.success){
      setList(response.data.data);
    }
 

  }
  const removeFood = async(foodId)=>{
    const response= await axios.delete(`${url}/api/food/${foodId}`);
    await fetchList();

    if(response.data.success){
      
    }
    else{

    }
  }
  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='w-9/10 mx-auto my-4'>
      <h3 className="text-2xl font-semibold my-4">All Foods List</h3>
      <div className="item-list">
        <div className="headings grid grid-cols-[1fr_2fr_1fr_1fr_1fr]"> 
          <p className="font-semibold">Image</p>
          <p className="font-semibold">Name</p>
          <p className="font-semibold">Category</p>
          <p className="font-semibold">Price</p>
          <p className="font-semibold">Action</p>
        </div>
        {list.map((item,index)=>{
           return <div key={index} className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr] items-center gap-4 my-2">
           <img src={`http://localhost:4001/uploads/${item.image}`} alt={item.name} className="w-16 h-16 object-cover" />
           <p>{item.name}</p>
           <p>{item.category}</p>
           <p>${item.price}</p>
           <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={()=>removeFood(item._id)}>X</button>
         </div>
        })

        }
      </div>
    </div>
  )
}

export default List