import React, { createContext, useEffect, useState } from "react";
import { fetchFoodList } from "../service/foodService";
import { addToCart, getCartData, removeQtyFromCart } from "../service/CartService";


export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const [foodList, setFoodList] = useState([]);
    const[quantities,setQuantities]=useState({});
    const[token, setToken]=useState("");

    const incrementQuantity=async(foodId) =>{
        setQuantities((prev) => ({
            ...prev,
            [foodId]:(prev[foodId] || 0) + 1
        }));
       await addToCart(foodId, token);

    }

    const decrementQuantity=async (foodId) =>{
        setQuantities((prev) => ({
            ...prev,
            [foodId]: Math.max((prev[foodId] || 0) - 1, 0)
        }));
        
       await removeQtyFromCart(foodId, token);
        

    }

    const removeFromCart = (foodId) => {
        setQuantities((prev) => {
            const updatedQuantities = { ...prev };
            delete updatedQuantities[foodId];
            return updatedQuantities;
        });
    };

    const loadCartData = async(token) =>{
        const items =await getCartData(token);
       
       setQuantities(items);    

    }

    const contextValue = {
        foodList,
        incrementQuantity,
        decrementQuantity,
        quantities,
        removeFromCart,
        token,
        setToken,
        setQuantities,
        loadCartData

    };
    useEffect(() => {
        async function loadData() {
            const data = await fetchFoodList();
            setFoodList(data);
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    }, []);

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};