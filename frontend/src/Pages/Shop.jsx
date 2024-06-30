import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import Footer from '../Components/Footer/Footer'
import Newsletter from '../Components/NewsLetter/Newsletter'
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections />
      <Newsletter />
    
    </div>
  )
}

export default Shop
