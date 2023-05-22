import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {remove} from '../store/cartSlice'

/*
UseSelector hook helps in listening to any changes
that happens to the particular component of the global state.
Here, in this case we are selecting cart as our selected component.

*/

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart);
    const handleRemove =(id)=>{
        dispatch(remove(id));
    };
  return (
    <div>
        <h3>Cart</h3>
        <div className='cartWrapper'>
            {
                products.map(product =>(
                    <div key={product.id} className='cartCard'>
                        <img src={product.image} alt = ""/>
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button className='btn' onClick={()=> handleRemove(product.id)}>Remove</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cart