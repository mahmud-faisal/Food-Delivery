import React, {  useState } from 'react'
import { assets } from '../../assets/admin_assets/assets'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Add = () => {
    const url = 'http://localhost:4001';
    const [image,setImage] = useState(false);
    const [data,setData] = useState({
        name:'',
       description:'',
        price:'',
        category:'Salad',
    })

    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;

        setData( data =>({...data,[name]:value}))   
    }

    const onSubmitHandler = async (event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append('name',data.name);
        formData.append('description',data.description);
        formData.append('price',Number(data.price));
        formData.append('category',data.category);
        formData.append('image',image);
        

        const response = await axios.post(`${url}/api/food/add`,formData)
        
        if(response.data.success){
           setData( {
            name:'',
           description:'',
            price:'',
            category:'Salad',
        });

        setImage(false);
        toast.success(response.data.message)
        }
        else{
            console.log('On submit not add');
            toast.error(response.data.message)
        }
    }

  

  return (
    <div className='add mx-40 my-20'>
        <form action="" className='flex flex-col gap-4'onSubmit={onSubmitHandler}>
            <div className="image w-[120px] flex flex-col gap-2">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" className='w-[120px]'/>
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" name="" id="image"  required hidden />
            </div>
            <div className="Product Name flex flex-col gap-2">
                <label htmlFor="product-name">
                    Product name
                </label>
                <input onChange={onChangeHandler} type="text" name="name" id=""   value={data.name}className='border-1 w-sm p-1' />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="product-desc">
                    Product description
                </label>
                <textarea rows='4' onChange={onChangeHandler} name="description" id="" className='w-sm border-gray-600 border-1 text-gray-500'  value={data.description} />
                    
                
            </div>
            <div className="cat-price flex gap-8">
                <div className="pro-cat flex flex-col gap-1">
                <label htmlFor="product-cat">Product Category </label>
                <select onChange={onChangeHandler} name="category"   value={data.category}className='border-gray-600 border-1 gap-1 p-1' required>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
                </div>
                <div className="pro-cat flex flex-col gap-1">
                <label htmlFor="product-cat">Product Price</label>
                <input type="number" onChange={onChangeHandler} name="price" id="" placeholder='$20'  value={data.price} required className='border-gray-600 border-1 w-[120px] p-1 ' />
                </div>
                
            </div>
            <div className="submit mt-4">
                <input type="submit" value="Add" className='py-3 px-8 bg-black text-white cursor-pointer'/>
            </div>
        </form>
        <ToastContainer />
    </div>
  )
}

export default Add