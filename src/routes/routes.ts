import React from "react";
import MainPage from "../pages/MainPage";
import BasketPage from "../pages/BasketPage";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact ?: boolean;
}


export enum RouteNames {
    MAIN_PAGE ='/',
    BASKET='/basket'
}

export const publicRoutes:IRoute[] = [
    {path:RouteNames.MAIN_PAGE, exact: true, component: MainPage},
    {path:RouteNames.BASKET, exact: true, component: BasketPage},
]