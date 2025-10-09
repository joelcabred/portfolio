'use client';

import React, { useState, useEffect, useRef } from "react";

export default function ChatPage() {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
    const [writing, setWriting] = useState(false);
    const endRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
                    endRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }, [history, writing]);

    async function sendMessage(){
        if(!input.length || writing){
            return
        }

        setHistory(history => [...history, { role: 'user',content: input}]);
        setInput('');
        setWriting(true);

        const response = await fetch('/api/chat',{
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                message: input,
                history: history.slice(-10)
            })
        });

        const data = await response.json();
        console.log(data.answer)
        setHistory(history => [...history, { role: 'assistant',content: data.answer }]);

        setWriting(false);
    }

    return(

        <main className="mx-auto max-w-2xl p-6 space-y-4">
            <h1 className="text-2xl font-semibold tracking-tight">Chat</h1>
                <p className="text-zinc-600 dark:text-zinc-400">
                Ask me anything about my projects and experience.
                </p>

            <div
            className="h-96 overflow-y-auto rounded-xl border bg-white/60 dark:bg-zinc-900/60 backdrop-blur p-4 space-y-3 border-zinc-200 dark:border-zinc-800"
            >
            {history.length === 0 && (
                <p className="text-sm text-zinc-500">Write something</p>
            )}

            {history.map((m, i) => (
                <div
                key={i}
                className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}
                >
                <div
                    className={`inline-block max-w-[80%] rounded-2xl px-3 py-2 shadow border text-sm ${
                    m.role === 'user'
                        ? 'bg-blue-50 border-blue-200 dark:bg-blue-950/40 dark:border-blue-900'
                        : 'bg-zinc-50 border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700'
                    }`}
                >
                    <b className="block mb-1 text-xs text-zinc-500">
                    {m.role === 'user' ? 'You' : 'Certo'}
                    </b>
                    {m.content}
                </div>
                <div ref={endRef} />
                </div>
                
            ))}

            {writing && (
                <p className="text-xs text-zinc-500 italic">Thinking...</p>
            )}
            </div>

            <div className="flex gap-2 items-center">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Write something..."
                className="flex-1 rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
            />
            <button
                onClick={sendMessage}
                disabled={writing}
                className={`rounded-xl px-4 py-2 text-sm font-medium border shadow-sm transition active:scale-95 ${
                writing
                    ? 'opacity-60 cursor-not-allowed bg-blue-600 text-white border-blue-700'
                    : 'bg-blue-600 text-white border-blue-700 hover:bg-blue-700'
                }`}
            >
                Send
            </button>
            </div>
        </main>

    )
}