import React , {createContext, useEffect, useState} from 'react';
// import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const url = 'http://localhost:4000';
    const [all_product, setAllProducts] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() =>{
        fetch(url +'/allproducts')
        .then((response)=> response.json())
        .then((data) => setAllProducts(data))
        
        if(localStorage.getItem('auth_token')){
            fetch(url + '/getcart', {
                method: 'POST',
                headers: {
                    'Accept': 'application/form-data',
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('auth_token'),
                },
                body:"",
            })
           .then((response) => response.json())
           .then((data) => setCartItems(data))
        }
    },[])

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        // console.log(cartItems);
        if(localStorage.getItem('auth_token')){
            fetch(url + '/addtocart', {
                method: 'POST',
                headers: {
                    'Accept': 'application/form-data',
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('auth_token'),
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error adding to cart:', error));
        }
        
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth_token')){
            fetch(url + '/removefromcart', {
                method: 'POST',
                headers: {
                    'Accept': 'application/form-data',
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('auth_token'),
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error adding to cart:', error));
        }
    }
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
            {
                if(cartItems[item] > 0)
                {
                    let itemInfo = all_product.find((product) => product.id === Number(item));
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
            return totalAmount;

    }

    const getTotalCartItems = () => { 
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
                totalItem += cartItems[item];
        }
        return totalItem;
    }
    const contextValue = {url, getTotalCartItems, getTotalCartAmount, all_product ,cartItems,addToCart,removeFromCart};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
};
export default ShopContextProvider;