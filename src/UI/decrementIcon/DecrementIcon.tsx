import React, {FC} from 'react';
import cl from './decrementIcon.module.css'
import {IItem} from "../../models/IItem";
import {useAppDispatch} from "../../hooks/redux";
import {deleteOneItem} from "../../store/cartManagement/CartSlice";

interface DecrementIconProps {
    item:IItem;
}
const DecrementIcon:FC<DecrementIconProps> = ({item}) => {
    const dispatch = useAppDispatch()
    return (
        <button onClick={() => dispatch(deleteOneItem(item))}>
            <svg className={cl.decrementIcon} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="15" fill="#FFCE7F"/>
                <path d="M8 14H22V16H8V14Z" fill="white"/>
            </svg>
        </button>
    );
};

export default DecrementIcon;