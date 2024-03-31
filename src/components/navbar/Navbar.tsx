import React, {FC, useEffect} from 'react';
import cl from "./Navbar.module.css"
import {HeartIcon} from '../../UI/heartIcon/HeartIcon'
import {CartButton} from '../../UI/cartIcon/CartButton'
import {Link, useNavigate} from "react-router-dom";
import {RouteNames} from "../../routes/routes";
import {useAppSelector} from "../../hooks/redux";
const Navbar:FC = () => {
    const navigate = useNavigate()



    return (
        <div className={cl.navbar}>
            <Link to='/' className={cl.logoName}>
                QPICK
            </Link>
            <div className={cl.svgCont}>
                <HeartIcon/>
                <CartButton/>
            </div>

        </div>
    );
};

export default Navbar;