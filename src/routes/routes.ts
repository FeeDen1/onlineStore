import React from "react";
import MainPage from "../pages/MainPage";
import CartPage from "../pages/CartPage";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact ?: boolean;
}


export enum RouteNames {
    MAIN_PAGE ='/',
    CART='/cart'
}

export const publicRoutes:IRoute[] = [
    {path:RouteNames.MAIN_PAGE, exact: true, component: MainPage},
    {path:RouteNames.CART, exact: true, component: CartPage},
]