import React , {createContext} from 'react';
import all_product from "../Component/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = () => {
    const contextValue = {all_product};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
};
export default ShopContextProvider;