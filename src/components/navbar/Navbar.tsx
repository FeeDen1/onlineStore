import React, {FC} from 'react';
import cl from "./Navbar.module.css"
import {HeartIcon} from '../../UI/heartIcon/HeartIcon'
import {BasketIcon} from '../../UI/basketIcon/BasketIcon'
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../routes/routes";
const Navbar:FC = () => {
    const navigate = useNavigate()
    return (
        <div className={cl.navbar}>
            <button className={cl.logoName} onClick={() => navigate(RouteNames.MAIN_PAGE)}>
                QPICK
            </button>
            <div className={cl.svgCont}>
                <HeartIcon/>
                <BasketIcon/>
            </div>

        </div>
    );
};

export default Navbar;