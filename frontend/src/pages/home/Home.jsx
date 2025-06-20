import React,{useState} from 'react'
import Banner from '../../components/home/Banner'
import ExploreMenu from '../../components/home/ExploreMenu'
import TopDish from '../../components/home/TopDish';
import MobileApp from '../../components/home/MobileApp';

const Home = () => {
  const [category,setCategory] = useState('All');
  return (
    <>
    <div className="w-[1280px] m-auto">
    <Banner />
    <ExploreMenu  category={category} setCategory={setCategory}/>
    <TopDish />
    <MobileApp />
    </div>
   
    
    </>
  )
}

export default Home