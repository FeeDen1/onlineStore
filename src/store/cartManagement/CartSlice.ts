import {createSlice} from "@reduxjs/toolkit";
import {IItem} from "../../models/IItem";
import {cartState} from "./types";

let initialState: cartState = {
    products: [],
    singleProduct: {} as IItem,
    numberOfProducts: 0,
}

const cartData = localStorage.getItem('cart')
if (cartData) {
    let allProductsQuantity = 0
    const products = JSON.parse(cartData)
    products.map((item: IItem) =>
        allProductsQuantity += item.quantity
    )
    initialState = {
        products: JSON.parse(cartData),
        singleProduct: {} as IItem,
        numberOfProducts: allProductsQuantity
    }
}


const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload
            const index = state.products.findIndex(cartEntry =>
                cartEntry.id === newItem.id)
            if (index !== -1) {
                state.products[index].quantity++
                state.numberOfProducts++
            } else {
                const newProduct = { ...newItem, quantity: 1 };
                state.products.push(newProduct);
                state.numberOfProducts++;
            }
            localStorage.setItem('cart', JSON.stringify(state.products))
        },
        deleteAllCart(state) {
            state.products = []
            localStorage.removeItem('cart')
        },
        deleteOneItem(state, action) {
            state.singleProduct = action.payload
            const index = state.products.findIndex(item => item.id === state.singleProduct.id);
            if (index !== -1) {
                state.numberOfProducts--
                state.products[index].quantity--;

                if (state.products[index].quantity === 0) {
                    state.products.splice(index, 1);
                }
                if(state.products.length === 0) {
                    localStorage.removeItem('cart')
                } else {
                    localStorage.setItem('cart', JSON.stringify(state.products));
                }
            }
        },
        deleteWholeItem(state, action) {
            let productJSON = localStorage.getItem('cart');
            if (productJSON) {
                state.products = JSON.parse(productJSON);
            }
            state.singleProduct = action.payload
            const index = state.products.findIndex(item => item.id === state.singleProduct.id);
            if (index !== -1) {
                const updatedProduct = { ...state.products[index] };
                state.numberOfProducts -= updatedProduct.quantity;
                state.products.splice(index, 1);
                if(state.products.length === 0) {
                    localStorage.removeItem('cart')
                } else {
                    localStorage.setItem('cart', JSON.stringify(state.products));
                }

            }
        }
    }
})

export const {addToCart, deleteAllCart, deleteOneItem,deleteWholeItem} = CartSlice.actions
export default CartSlice.reducer