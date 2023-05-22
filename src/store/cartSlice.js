// created a slice (Redux concept)
// Slice will help in storing data in small small 
// pieces!!
const {createSlice} = require('@reduxjs/toolkit');
const initialState = [];

// reducers contains pure function 
// having one work to manipulate given data 
// in this case we are defining add and remove
// functions as a tool to change current state.
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        add(state, action){
            state.push(action.payload);
        },
        remove(state, action){
            return state.filter((item)=>item.id !== action.payload);
        },
    }
});

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;