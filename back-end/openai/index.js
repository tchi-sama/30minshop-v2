const express = require('express');
const {openai} = require("./config")
const app = express();
const cors = require("cors")


app.use(cors())
const port = 8080; // You can choose any available port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/generate",async(req,res)=>{
    const msg = "a store of kids clothes called kingBoy , use blue for cta button , and i want the links to align to left , without search icon"
    const response = await openai.createChatCompletion({
    model:"gpt-3.5-turbo",
    messages: [
        {
            "role": "system",
            "content": `
            You will be provided with a some information's about the page of the a store ,put all the sections u think is good for the that page, and your task is create a json array of sections objects for a that store,
                and the answer must be => answer : [{navbar},{hero}...]  
                and how ever i will provide you you will answer with the same concept
                , when you are using  colors make sure there is contras between text and background

                this is the header section object :
                {
                "type": "header",
                "properties": {
                    // general
                    "general": {
                        "headerColor": string, // hex color
                        "headerHeight": number, // pixels
                    },
                    // props for the text logo
                    "logoText": {
                        "text": string, // brand name 
                        "color": string, // hex color
                        "size": number,
                        "show": boolean,
                    },
                    // props for the image logo
                    "logo": {
                        "url": string,
                        "size": number,// with pixels
                        "show": boolean,
                    },
                    // props for the links
                    "links": {
                        "linksArray": [{
                            "name": string, 
                            "url": string, // url of home page is "/"
                            "show": boolean,
                        }]
                    "show": boolean,
                    "align": "left" | "center" | "right",
                    },

                    // props for the btns
                    "showSearchButton": {
                    "show": boolean,
                    },
                    "showCartButton": {
                    "show": boolean,
                    },
                };
                }

                this is the hero section object:
                {
                    "type": "hero",
                    "properties": {
                      // general
                      "general": {
                        "height": number,
                        "backgroundImage": string;
                        "backgroundColor": string;
                      },
                  
                      // Props for the hero image
                      "heroImage": {
                        "url": string,
                        "show": boolean,
                      },
                  
                      // Props for the hero content
                      "title": {
                        "text": string,// 10 words
                        "color": string,//hex color
                        "show": boolean,
                      },
                  
                      "subtitle": {
                        "text": string, // 15 words
                        "color": string, // hex color
                        "show": boolean,
                      },
                      "ctaButton": {
                        "text": string,
                        "bgColor": string,
                        "txtColor": string,
                        "url": string,
                        "show": boolean,
                      },
                    },
                  }


`
          },
          {
            "role": "user",
            "content": "home page of cactuses store with a big header , the name of the brand is cactusia "
          },
          {
            "role":"assistant",
            "content":
                    `
                    {
                        "name":"home"
                    "sections":[
                        {
                            "type": "header",
                            "properties": {
                            "general": {
                                "headerColor": "#ffffff",
                                "headerHeight": 100
                            },
                            "logoText": {
                                "text": "Cactusia",
                                "color": "#000000",
                                "size": 24,
                                "show": true
                            },
                            "logo": {
                                "url": "",
                                "size": 100,
                                "show": true
                            },
                            "links": {
                                "linksArray": [
                                {
                                    "name": "Home",
                                    "url": "/",
                                    "show": true
                                },
                                {
                                    "name": "Shop",
                                    "url": "/shop",
                                    "show": true
                                },
                                {
                                    "name": "About",
                                    "url": "/about",
                                    "show": true
                                },
                                {
                                    "name": "Contact",
                                    "url": "/contact",
                                    "show": true
                                }
                                ],
                                "show": true,
                                "align": "center"
                            },
                            "showSearchButton": {
                                "show": true
                            },
                            "showCartButton": {
                                "show": true
                            }
                            }
                        },
                        {
                            "type": "hero",
                            "properties": {
                            "general": {
                                "height": 400,
                                "backgroundImage": "",
                                "backgroundColor": "#ffffff"
                            },
                            "heroImage": {
                                "url": "",
                                "show": true
                            },
                            "title": {
                                "text": "Welcome to Cactuses Store",
                                "color": "#000000",
                                "show": true
                            },
                            "subtitle": {
                                "text": "Explore our wide range of cactuses and succulents",
                                "color": "#666666",
                                "show": true
                            },
                            "ctaButton": {
                                "text": "Shop Now",
                                "bgColor": "#333333",
                                "txtColor": "#ffffff",
                                "url": "/shop",
                                "show": true
                            }
                            }
                        }
                        ]
                    }
                    `
          },
          {
            "role": "user",
            "content": msg
          },
      ],
    temperature:0,
    max_tokens:500,
    });
    // const headerColor = JSON.parse(response.data.choices[0].message.content).properties.general.headerColor
        // console.log(headerColor)
        // return response.data.choices[0].message.content
    res.json(JSON.parse(response.data.choices[0].message.content))
    // res.json(response.data.choices[0].message.content)
})

