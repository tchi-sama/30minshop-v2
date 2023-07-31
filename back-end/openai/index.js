

const { Configuration, OpenAIApi } =require("openai");
require("dotenv").config();
const configuration = new Configuration({
    apiKey:process.env.OPENAI_KEY, 
});
const openai = new OpenAIApi(configuration);

async function start(){
    const response = await openai.createChatCompletion({
    model:"gpt-3.5-turbo",
    messages: [
        {
            "role": "system",
            "content": "You will be provided with a infos, and your task is create a javascript object that the object should be like  {name:(name),job:(job),instagram:(instagram),facebook:(facebook)} you will put the infos in there places but if the info is not provided you can set it to null"
          },
          {
            "role": "user",
            "content": "i'm abdessamad my work is a full stack dev , my instagram is tchisama.life"
          }
      ],
    temperature:0,
    max_tokens:100,
    });
    console.log(response.data.choices[0].message.content)
}

start();