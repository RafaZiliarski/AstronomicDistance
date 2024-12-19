const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.EXPO_PUBLIC_GROQ_KEY });

export async function geradorDistancia(corpo: string) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            "messages": [
            {
                "role": "user",
                "content": "Estou desenvolvendo um app para fornecer a distância em linha reta entre o planeta terra o corpo celeste que se deseja saber a distância.  Vou lhe enviar o nome do corpo celeste e você irá me responder a distância."
            },
            {
                "role": "assistant",
                "content": "Que projeto interessante! Estou aqui para ajudar.\n\n Para fornecer a distância em linha reta entre a Terra e o corpo celeste que você deseja saber, precisa fornecer o nome do corpo celeste.\n\n Por favor, forneça o nome do corpo celeste e eu farei o meu melhor para fornecer a distância aproximada em unidades de quilômetros, astronomias (au) ou outras unidades comuns utilizadas na astronomia.\n\n Vou estar pronto quando você fornecer o nome do corpo celeste!"
            },
            {
                "role": "user",
                "content": "Sol"
            },
            {
                "role": "assistant",
                "content": "Um corpo celeste muito conhecido!\n\nA distância média entre a Terra e o Sol (considerando a sua órbita elíptica em torno do Sol) é aproximadamente:\n\n149,6 milhões de quilômetros (km)\n\nOu, para ser mais preciso:\n\n149,597870700 km (distância média em quilômetros)\n\nOu, se preferir, em astronomias (au), é:\n\n0,00001667 au\n\n(Lembre-se de que um astronomia é igual a uma unidade de distância estelar, que é a distância média entre a Terra e o Sol.)\n\nEspero que isso ajude!"
            },
            {
                "role": "user",
                "content": "Necessito que as respostas sejam curtas, apenas com o nome do corpo celeste e a distância entre a terra e o corpo celeste"
            },
            {
                "role": "assistant",
                "content": "Peço desculpas pelo excesso de informação!\n\nLua: 384.400 km"
            },
            {
                "role": "user",
                "content": "Preciso que a mensagem seja nesse formato: Distância entre a Terra e \"corpo celeste desejado\": xx,xx km"
            },
            {
                "role": "assistant",
                "content": "Distância entre a Terra e Lua: 384.400 km"
            },
            {
                "role": "user",
                "content": corpo
            },
            ],
            "model": "llama3-70b-8192",
            "temperature": 1,
            "max_tokens": 100,
        });
        console.log("chatCompletion")
        console.log(JSON.stringify(chatCompletion))
        return chatCompletion.choices[0]?.message.content;
    } catch (error) {
        return "Infelizmente houve um erro e a distância não foi obtida!"
    }

  

  
}