import { Choice } from "./choice.model";

export interface Answer {
    id: string,
    score: number,
    isDeleted: boolean,
    choices: Choice[]   
}