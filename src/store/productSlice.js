// created a slice (Redux concept)
// Slice will help in storing data in small small 
// pieces!!
const {createSlice} = require('@reduxjs/toolkit');

// freeze property helps in creating object as Read only
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});

// const initialState = {
//     data: [],
//     status: STATUSES.IDLE,
// };

// reducers contains pure function 
// having one work to manipulate given data 
// in this case we are defining setProducts
// functions as a tool to change current state.
const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers:{
        setProducts(state, action){
            // we cant do any async call inside 
            // any reducer function as they are 
            // pure functions. For it we use Thunks functions.
            state.data = action.payload;
        },
        setStatus(state, action){
            state.status = action.payload;
        }
        
    }
});

export const {setProducts,setStatus} = productSlice.actions;
export default productSlice.reducer;

// Thunks functions. It works as a middleware and helps in case of any kind of async
// functions like api fetching
export function fetchProducts(){
    return async function fetchProductThunk(dispatch, getState){
        dispatch(setStatus(STATUSES.LOADING));
        try{
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE))
        }catch(error){
            console.log(error);
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}