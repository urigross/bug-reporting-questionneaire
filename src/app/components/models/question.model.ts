import { Choice } from "./choice.model";
export interface Question {
    _id: string,
    name: string,
    type: string,
    title: string,
    question: string,
    choices: Choice[]
    
}