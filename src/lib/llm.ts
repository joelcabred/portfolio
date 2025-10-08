async function chat(messages){
    const url = process.env.LLM_API_BASE + '/v1/chat/completions'

    const res = await fetch(url,{ method: 'POST',
                headers: { Authorization: 'Bearer ' +process.env.LLM_API_KEY,
                            'Content-Type': 'application/json'},
                body: JSON.stringify({ model: process.env.LLM_CHAT_MODEL, 
                                        messages, 
                                        temperature: 0.2}),
                cache: 'no-store'})
    
    if (!res.ok){
        throw new Error('Something bad has occured: '+ res.status)
    }

    const json = await res.json()
    return json.choices?.[0]?.message?.content ?? ''
}

export {chat}