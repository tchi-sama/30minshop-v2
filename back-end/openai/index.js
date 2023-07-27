

const { Configuration, OpenAIApi } =require("openai");
const configuration = new Configuration({
    apiKey:"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", 
});
const openai = new OpenAIApi(configuration);

async function start(){
    const response = await openai.createCompletion({
        model:"text-davinci-003",
        prompt:"a dog joke",
        temperature:0,
        max_tokens:100,
    });
}

start();