
export type sectionType = headerType | heroType;

export interface headerType {
    type:'header'
    properties:{
        // general 
        headerColor?:string
        headerHeight?:number // between 20 and 30

        // props for the text logo
        logoText?:{
            text:string
            color?:string
            size?:number
            show?:boolean
        }
        
        // props for the image logo
        logo?:{
            url:string;
            size?:number;
            show?:boolean;
        }

        // props for the links
        links?:{
            name:string
            url:string
            show:boolean
        }[]
        showLinks?:boolean
        alignLinks?:"left"|"center"|"right"

        // props for the btns
        showSearchButton?:boolean
        showCartButton?:boolean
    }
}

export interface heroType {
    type: 'hero';
    properties: {
        // general
        bannerHeight?:number;

        // Props for the hero background image
        backgroundImage?: string;
        backgroundColor?: string;

        // Props for the hero image
        heroImage?: string;
        showHeroImage?:boolean

        // Props for the hero content
        title?: {
            text:string;
            color:string;
            show:boolean;
        };
        subtitle?: {
            text:string;
            color:string;
            show:boolean;
        };
        ctaButton?: {
            text: string;
            bgColor:string;
            txtColor:string;
            url: string;
            show:boolean;
        };
    };
}