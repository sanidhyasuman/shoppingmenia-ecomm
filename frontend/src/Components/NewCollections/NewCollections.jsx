import React, { useContext, useEffect, useState } from 'react'
import './NewCollections.css'
import { ShopContext } from '../../Context/ShopContext'
// import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
    const [new_collection, setNew_collection] = useState([]);
    const { url } = useContext(ShopContext);
    useEffect(() => {
        fetch(url + '/newcollections')
        .then((response)=>response.json())
        .then((data)=>setNew_collection(data))
    },[]);

    return (
        <div className='new-collections'>
            <h1>NEW Collections</h1>
            <hr />
            <div className='collections'>
                {new_collection.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.old_price} old_price={item.old_price} />
                })}
            </div>

        </div>
    )
}

export default NewCollections
