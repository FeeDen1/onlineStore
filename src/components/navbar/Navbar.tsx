import React, {FC, useEffect} from 'react';
import cl from "./Navbar.module.css"
import {HeartIcon} from '../../UI/heartIcon/HeartIcon'
import {CartIcon} from '../../UI/cartIcon/CartIcon'
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../routes/routes";
import {useAppSelector} from "../../hooks/redux";
const Navbar:FC = () => {
    const navigate = useNavigate()
    let {products, numberOfProducts} = useAppSelector(state => state.cart)

    useEffect(() => {
        products.map((product) =>
            numberOfProducts++
        )
    }, [products]);
    return (
        <div className={cl.navbar}>
            <button className={cl.logoName} onClick={() => navigate(RouteNames.MAIN_PAGE)}>
                QPICK
            </button>
            <div className={cl.svgCont}>
                <HeartIcon/>
                <CartIcon/>
            </div>

        </div>
    );
};

export default Navbar;