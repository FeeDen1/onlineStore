import {createSlice} from "@reduxjs/toolkit";
import {IItem} from "../../models/IItem";
import {cartState} from "./types";

let initialState: cartState = {
    products: [] as IItem[],
    singleProduct: {} as IItem,
    numberOfProducts: 0,
}

const JSONs = localStorage.getItem('cart')
if (JSONs) {
    let sum = 0
    let products = JSON.parse(JSONs)
    products.map((item: IItem) =>
        sum += item.quantity
    )
    initialState = {
        products: JSON.parse(JSONs),
        singleProduct: {} as IItem,
        numberOfProducts: sum
    }
} else {

}


const CartSlice = createSlice({
    name: 'addItemToCart',
    initialState,
    reducers: {
        addToCart(state, action) {
            let productJSON = localStorage.getItem('cart')
            if (productJSON) {
                state.products = JSON.parse(productJSON)
            }
            const newItem = action.payload
            console.log(action.payload.id)
            console.log(action.payload.item)
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
            localStorage.setItem('cart', JSON.stringify(state.products))
        },
        deleteOneItem(state, action) {
            const productJSON = localStorage.getItem('cart');
            if (productJSON) {
                state.products = JSON.parse(productJSON);
            }
            state.singleProduct = action.payload
            const index = state.products.findIndex(item => item.id === state.singleProduct.id);
            if (index !== -1) {
                state.numberOfProducts--
                state.products[index].quantity--;

                if (state.products[index].quantity === 0) {
                    state.products.splice(index, 1);
                }

                localStorage.setItem('cart', JSON.stringify(state.products));
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
                if(!state.products) {
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