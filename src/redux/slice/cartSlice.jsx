import { createSlice } from "@reduxjs/toolkit";

// Create a slice named 'cartSlice'
const cartSlice = createSlice({
    name: "cart", // Name of the slice
    initialState: {
        cart: [], // Initial state for the cart
        currentRestaurant: {}, // Initial state for the current restaurant
    },
    reducers: {
        // Reducer to add an item to the cart
        addToCart: (state, action) => {
            const isItem = state.cart.find(item => item?.id === action?.payload?.id);
            if (isItem) {
                isItem.qty++;
            } else {
                state.cart.push({ ...action.payload, qty: 1 });
            }
        },
        // Reducer to remove an item from the cart
        removeFromCart: (state, action) => {
            const isItem = state.cart.find(item => item?.id === action?.payload?.id);
            if (isItem) {
                if (isItem.qty > 1) {
                    isItem.qty--;
                } else {
                    const filterItem = state.cart.filter(item => item?.id !== action?.payload?.id);
                    state.cart = filterItem;
                }
            }
        },
        // Reducer to empty the cart
        setEmptyCart: state => {
            state.cart = [];
        },
        // Reducer to set the current restaurant
        setCurrentRestaurant: (state, action) => {
            state.currentRestaurant = action.payload;
        },
    }
});

// Extract action creators and reducer from the slice
export const { addToCart, removeFromCart, setEmptyCart, setCurrentRestaurant } = cartSlice.actions;

// Export the reducer function
export default cartSlice.reducer;
