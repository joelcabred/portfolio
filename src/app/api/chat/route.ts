import { chat } from '@/lib/llm';

import { formatProjects } from '@/lib/context';
import { projects } from '@/data/projects';



export async function POST(req: Request){
    try{
        const { message, history = [] } = await req.json();
        
        if (!message || typeof message !== 'string' || !message.trim()) {
        return new Response(JSON.stringify({ error: 'message required' }), { status: 400 });
        }
        
        const context = formatProjects(projects, 6000);

        const messageWithContext = `Use the following context to answer the question:\n${context}\nQuestion: ${message}`;
        const rules = 'You answer ONLY about Joel Cabrera’s portfolio using the provided Context. If info is missing, say you don’t know.'

        const recent = history.slice(-10);
        const messages = [
            { role: 'system', content: rules},
            { role: 'system', content: messageWithContext },
            ...recent,
            { role: 'user', content: message }
        ]


        const res = await chat(messages);
        return new Response(JSON.stringify({answer: res}))


    } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : 'server error';
    return new Response(JSON.stringify({ error: msg }), { status: 500 });
  }
}

