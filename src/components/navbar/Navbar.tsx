import React, {FC} from 'react';
import cl from "./Navbar.module.css"
import {HeartIcon} from '../../UI/heartIcon/HeartIcon'
import {BasketIcon} from '../../UI/basketIcon/BasketIcon'
const Navbar:FC = () => {
    return (
        <div className={cl.navbar}>
            <p className={cl.logoName}>
                QPICK
            </p>
            <div>
                <HeartIcon/>
                <BasketIcon/>
            </div>

        </div>
    );
};

export default Navbar;