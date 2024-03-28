import React, {FC} from 'react';
import cl from './ItemList.module.css'

import SingleItem from "../singleItem/SingleItem";
import {IItem} from "../../models/IItem";


interface ItemListProps {
    items: IItem[];
    title: string;
}


const ItemList:FC<ItemListProps> = ({items,title}) => {
    return (
        <div className={cl.wrapper}>
            <p className={cl.title}>{title}</p>
            <div className={cl.productWrapper}>
                {items.map((item) =>
                    <SingleItem key={item.id} item={item}/>
                )}
            </div>
        </div>

    );
};

export default ItemList;