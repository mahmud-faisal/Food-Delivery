import { createContext,useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props)=>{

    const [cartItems,setCartItems] = useState({});


    const addToCart = async (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems( (prev)=>({...prev,[itemId]:1}));
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        // console.log(cartItems)
    }

    const removeFromCart = async (itemId)=>{
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue={
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }

    return(
        <StoreContext.Provider value={contextValue}>
        {props.children}
        </StoreContext.Provider>
    )

}


export default StoreContextProvider;
