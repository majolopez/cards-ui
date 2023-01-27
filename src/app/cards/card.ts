import { ICategory } from "../categories/category";

export interface ICard{
    _id: string,
    front: string,
    back: string,
    category: ICategory,
    level: number,
    showFront: boolean
}