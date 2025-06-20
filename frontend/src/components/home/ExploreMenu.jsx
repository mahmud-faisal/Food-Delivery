import React from 'react';
import {menu_list} from '../../assets/frontend_assets/assets';

const ExploreMenu = ({category,setCategory}) => {
    
  return (
    <div className="explore-menu my-12">
        <div className="text-content">
            <h2 className="text-2xl font-bold">Explore Our Menu</h2>
            <p className="">Choose from a diverse menu featuring a delectabl array of dishes.</p>

            <div className="item-list flex overflow-x-auto py-8">
                {menu_list.map((item,index) =>
               { 
                return <div className="item mx-8 cursor-pointer" onClick ={()=>setCategory(prev => prev===item.name?"All":item.menu_name)} key={index}>
                    <img src={item.menu_image} alt={item.name} className={category === item.menu_name?" outline-4 outline-offset-2 outline-primary-color rounded-full scale-95":""} />
                    <p className="text-center">{item.menu_name}</p>
                </div>
            })
            }

            </div>
        </div>
    </div>
  )
}

export default ExploreMenu