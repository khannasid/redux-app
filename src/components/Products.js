import React, { useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Products = () => {
    // we have to creat Redux's dispatch Hook to use
    // action functions created in Slice files.
    const dispatch = useDispatch();
    const {data: products, status} = useSelector(state => state.product);

    useEffect(()=>{
        dispatch(fetchProducts());
        // const fetcProducts = async()=>{
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     setProducts(data);
        // }
        //  fetcProducts()
    },[]);

    const handleAdd = (product)=>{
        dispatch(add(product));
    }

    if(status === STATUSES.LOADING){
        return(
            <div style={{width: '100%'}}>
                <h1>Data is Loading!!!</h1>
            </div>
        )
    }
    if(status === STATUSES.ERROR){
        return(
            <div style={{width: '100%'}}>
            <h1>Error occured!!!</h1>
        </div>
        )
    }

  return (
    <div className='productsWrapper'>
        {
            products.map((product)=>(
                <div className='card' key= {product.id}>
                    <img src={product.image} alt = ""/>
                    <h4>{product.title}</h4>
                    <h5> $ {product.price}</h5>
                    <button onClick={() => handleAdd(product)} className='btn'>Add to Card!!</button>
                </div>
            ))}
        </div>
  )
}

export default Products