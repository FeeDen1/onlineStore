import {IItem} from "../../models/IItem";

export interface cartState {
    products: IItem[];
    singleProduct: IItem;
    numberOfProducts: number;
}