import { chat } from '@/lib/llm';

export async function POST(req: Request){
    try{
        const { message } = await req.json();
        const messages = [
            { role: 'system', content: 'You are a concise assistant.'},
            { role: 'user', content: message }
        ]

        const res = await chat(messages);
        return new Response(JSON.stringify({answer: res}))


    }
    catch{
        return new Response(JSON.stringify({error:'message required'}),
                                {status:400})
        }

}