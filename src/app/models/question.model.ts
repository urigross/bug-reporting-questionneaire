import { Choice } from "./choice.model";
export interface Question {
    id: string,
    name: string,
    isMultiChoice: boolean,
    title: string,
    question: string,
    isHasAnswer:boolean,
    choices: Choice[]
    
}