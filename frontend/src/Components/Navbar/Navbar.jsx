import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const { getTotalCartItems } = useContext(ShopContext);
    const [menu, setMenu] = useState("shop");
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='logo' />
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}><Link to='/'>Shop</Link>  {menu === "shop" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("men") }}><Link to='/men'>Men</Link>  {menu === "men" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("women") }}><Link to='/women'>Women</Link>  {menu === "women" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("kids") }}><Link to='/kids'>Kids</Link>  {menu === "kids" ? <hr /> : <></>} </li>
            </ul>
            <div className='nav-login-cart'>
                {
                    localStorage.getItem('auth_token')
                        ? <button onClick={() => { localStorage.removeItem('auth_token'); window.location.replace('/') }}>Logout</button>
                        : <Link to='/login'><button>Login</button></Link>
                }
                <Link to='/cart'> <img src={cart_icon} alt='cart' /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar
