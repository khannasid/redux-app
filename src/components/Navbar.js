import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
// useSelector Redux hook works as a subscriber
// model which helps in selecting the component of 
// state which subscribes and automatically rerender the 
// used component in case of change in selected component.

const Navbar = () => {
// here we are selecting cart component from the state.
  const items = useSelector((state)=> state.cart);
  return (
    <div style={{display: 'flex', alignItems: "center" ,justifyContent: 'space-between'}}>
        <span className='logo'>
            REDUX Store
        </span>
        <div>
            <Link className='navLink' to='/'>Home</Link>
            <Link className='navLink' to="/cart">Cart</Link>
            <span className='cartCount'>
                Cart items : {items.length}
            </span>
        </div>
    </div>
  )
}

export default Navbar