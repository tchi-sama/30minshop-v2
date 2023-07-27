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
                        type: 'header',
                        properties: {
                            general:{
                                headerColor: '#fff', // Sky blue header background color
                                headerHeight: 25, // Header height set to 25
                            },
                    
                            logoText: {
                                text: 'Cute Clothes', // Store name as the logo text
                                color: '#800080', // Purple logo text color
                                size: 24, // Logo text size set to 24
                                show: true, // Logo text is displayed
                            },
                    
                            links: {
                                linksArray: [
                                    { name: 'Home', url: '/', show: true },
                                    { name: 'Collections', url: '/collections', show: true },
                                    { name: 'About', url: '/about', show: true },
                                    { name: 'Contact', url: '/contact', show: true },
                                ],
                                show: true, // Display the navigation links
                                align: 'center', // Align the navigation links to the right
                            },
                    
                            showSearchButton: {
                                show: true, // Display the search button
                            },
                    
                            showCartButton: {
                                show: true, // Display the cart button
                            },
                        },
                    },
                    {
                        type: 'hero',
                        properties: {
                            general: {
                                height: 550,
                                backgroundImage: 'iphones-store-bg.jpg', // URL to the hero background image for iPhones store
                                backgroundColor: '#fff',
                            },
                            heroImage: {
                                url: '', // URL to the hero image of iPhones
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