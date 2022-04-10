import { Choice } from "./choice.model";
export interface Question {
    _id: string,
    name: string,
    isMultiChoice: boolean,
    title: string,
    question: string,
    choices: Choice[]
    
}