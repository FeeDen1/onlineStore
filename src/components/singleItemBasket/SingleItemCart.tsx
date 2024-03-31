import React, {FC} from 'react';
import {IItem} from "../../models/IItem";
import cl from './SingleItemCart.module.css'
import DecrementIcon from "../../UI/decrementIcon/DecrementIcon";
import IncrementIcon from "../../UI/incrementIcon/IncrementIcon";
import DeleteIcon from "../../UI/deleteSvg/DeleteIcon";


interface SingleItemCartProps {
    item: IItem;
}


const SingleItemCart: FC<SingleItemCartProps> = ({item}) => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.imgQuantityWrapper}>
                <img width='145px' height='135px' src={item.image} alt='photo'/>
                <div className={cl.quantity}>
                    <DecrementIcon item={item}/>
                    <p>{item.quantity}</p>
                    <IncrementIcon item={item}/>
                </div>
            </div>
            <div className={cl.titlePriceWrapper}>
                <p className={cl.title}>{item.title}</p>
                <p className={cl.price}>{item.price} ₽</p>
            </div>
            <div className={cl.deleteAndPrice}>
                <DeleteIcon item={item}/>
                <p>{item.price * item.quantity} ₽</p>
            </div>
        </div>
    );
};

export default SingleItemCart;