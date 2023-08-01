import { sectionType } from "./sectionsTypes";

export interface storeState {
    store:{
        general:{
            user:string,
            name:string,
        }
        pages:pageType[]
    };
}
export interface pageType {
    name:string
    sections:sectionType[]
}
