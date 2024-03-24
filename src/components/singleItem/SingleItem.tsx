import React, {FC} from 'react';
import {IItem} from "../../models/IItem";
import cl from './SingleItem.module.css'
import {StarIcon} from "../../UI/starIcon/StarIcon";

interface SingleItemProps {
    item: IItem;
}

const SingleItem: FC<SingleItemProps> = (item) => {
    return (
        <div className={cl.singleItemWrapper}>
            <img
                className={cl.productImage}
                width='220px'
                height='240px'
                src={item.item.image}
                alt='fdfd'>
            </img>
            <div className={cl.productInfo}>
                <div className={cl.infoWrapper}>
                    <p className={cl.title}>{item.item.title}</p>
                    <div className={cl.rateWrapper}>
                        <StarIcon/>
                        <p className={cl.rate}>{item.item.rate}</p>
                    </div>

                </div>
                <div className={cl.infoWrapper}>
                    <div className={cl.priceWrapper}>
                        <p
                            className={cl.price}
                        >
                            {item.item.price}₽
                        </p>
                        {item.item.discount &&
                            <p
                                className={cl.discountPrice}
                            >
                                {item.item.discount}₽
                            </p>
                        }
                    </div>

                    <button className={cl.buyBtn}>Купить</button>
                </div>

            </div>
        </div>
    );
};

export default SingleItem;