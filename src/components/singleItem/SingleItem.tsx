import React, {FC} from 'react';
import {IItem} from "../../models/IItem";
import cl from './SingleItem.module.css'
import {StarIcon} from "../../UI/starIcon/StarIcon";
import {useAppDispatch} from "../../hooks/redux";
import {addToCart} from "../../store/cartManagement/CartSlice";

interface SingleItemProps {
    item: IItem;
}

const SingleItem: FC<SingleItemProps> = ({item}) => {
    const dispatch = useAppDispatch()

    const addToCartHandler = (item:IItem) => {
        dispatch(addToCart(item))
    }



    return (
        <div className={cl.singleItemWrapper}>
            <img
                className={cl.productImage}
                width='220px'
                height='240px'
                src={item.image}
                alt='fdfd'>
            </img>
            <div className={cl.productInfo}>
                <div className={cl.infoWrapper}>
                    <p className={cl.title}>{item.title}</p>
                    <div className={cl.rateWrapper}>
                        <StarIcon/>
                        <p className={cl.rate}>{item.rate}</p>
                    </div>
                </div>
                <div className={cl.infoWrapper}>
                    <div className={cl.priceWrapper}>
                        <p
                            className={cl.price}
                        >
                            {item.price}₽
                        </p>
                        {item.discount &&
                            <p
                                className={cl.discountPrice}
                            >
                                {item.discount}₽
                            </p>
                        }
                    </div>
                    <button onClick={() => addToCartHandler(item)} className={cl.buyBtn}>Купить</button>
                </div>

            </div>
        </div>
    );
};

export default SingleItem;