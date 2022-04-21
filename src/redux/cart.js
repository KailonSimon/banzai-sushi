import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id == action.payload.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({...action.payload, quantity: 1})
            }
        },
        removeFromCart: (state, action) => {
            state.items.splice(state.items.findIndex(item => item.id == action.payload.id), 1)
        },
        setItemQuantity: (state, action) => {
            const { item, quantity } = action.payload;
            const changedProduct = state.items.find(product => product.id == item.id);
            changedProduct.quantity = quantity;
        }
    }
});

//Selectors must user cart property because they are outside of reducer
const cartCountSelector = (state) => {
    return state.cart.items.reduce((total, item) => total + item.quantity, 0);
}

const cartValueSelector = (state) => {
    const value = state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
    return (Math.round(value * 100) / 100).toFixed(2);
}

const cartLineItemsSelector = (state) => {
    return state.cart.items.map(item => {
        return {price: item.price_id, quantity: item.quantity};
    })
}
const { addToCart, removeFromCart, setItemQuantity } = cartSlice.actions;

export {
    addToCart,
    removeFromCart,
    setItemQuantity,
    cartCountSelector,
    cartValueSelector,
    cartLineItemsSelector
}

export default cartSlice.reducer;