import { ICategory } from "../catergories/category";

export interface ICard{
    _id: string,
    front: string,
    back: string,
    category: ICategory,
    level: number,
    showFront: boolean
}