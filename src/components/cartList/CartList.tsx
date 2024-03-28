import React from 'react';
import cl from './CartList.module.css'
import {useAppSelector} from "../../hooks/redux";
import SingleItemCart from "../singleItemBasket/SingleItemCart";

const CartList = () => {
    let {products} = useAppSelector(state => state.cart)
    return (
        <div className={cl.wrapper}>
            {products.map((item) =>
                <SingleItemCart key={item.id} item={item}/>
            )
            }
        </div>
    );
};

export default CartList;