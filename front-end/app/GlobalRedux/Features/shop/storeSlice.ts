'use client';

import { storeState } from "@/app/types/storeType";
import { createSlice } from "@reduxjs/toolkit"


const initialState : storeState = {
    store:{
        general:{
            user:"120908440398t5",
            name:"tchisama"
        },
        pages:[
            {
                sections:[
                    {
                        type: 'hero',
                        properties: {
                            general: {
                                height: 550,
                                backgroundImage: 'iphones-store-bg.jpg', // URL to the hero background image for iPhones store
                                backgroundColor: '#efefef',
                            },
                            heroImage: {
                                url: 'https://th.bing.com/th/id/OIP.oanJ-t5ZEr7MsiAgclS7GAHaE7?pid=ImgDet&rs=1', // URL to the hero image of iPhones
                                show: true,
                            },
                            title: {
                                text: 'Welcome to the iPhone Store',
                                color: '#000000',
                                show: true,
                            },
                            subtitle: {
                                text: 'Discover the Latest iPhone Models and Best Deals',
                                color: '#000000',
                                show: true,
                            },
                            ctaButton: {
                                text: 'Explore iPhones',
                                bgColor: '#007bff', // Blue button background color
                                txtColor: '#ffffff', // White button text color
                                url: '/iphones', // URL to the iPhones product page
                                show: true,
                            },
                        },
                    },
                ]
            }
        ]
    },
}

export const storeSlice = createSlice({
    name :"store",
    initialState,
    reducers:{
    }
})

export const {} = storeSlice.actions;
export default storeSlice.reducer;