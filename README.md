# 🌐 Personal Portfolio — Joel Cabrera

This is my personal portfolio website built with **Next.js**, **TypeScript**, and **TailwindCSS**.  
It showcases selected projects in **AI**, **Robotics**, and **Image Processing**, as well as my academic and professional background.

👉 Live site: [joelcabrera.dev](https://joelcabrera.dev)

---

## ✨ Features
- Built with the **App Router** in Next.js 14  
- Fully responsive (mobile, desktop)  
- **Dark / Light mode** toggle  
- Dynamic projects section (data-driven via `projects.ts`)  
- Links to **GitHub**, **LinkedIn**, and multiple **CVs** (EN/FR/ES)  
- Downloadable **reports** and **videos** per project  
- Minimal and ecological design (lightweight build, minimal resources)

---

## 🧱 Tech Stack
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript  
- **Styling:** TailwindCSS  
- **Icons:** lucide-react  
- **Deployment:** Vercel  
- **Package manager:** npm  

---

## 💬 Chatbot

To make my projects more interactive, I implemented a **chatbot** capable of answering questions about them. It uses the **[Mistral AI API](https://mistral.ai)**, which provides several models. In particular, I used the **[open-mistral-nemo](https://mistral.ai/news/mistral-nemo)** model, which is free and perfectly suitable for this use case.

The chatbot was integrated into the existing **Next.js** portfolio project, so all the front-end infrastructure was already in place. A new **API endpoint** (`/api/chat`) was created to receive user messages and forward them to the Mistral model.

What is actually sent to the API includes:
- **System context:** instructions for how the assistant should behave (it should only answer questions about my projects and reply *“I don’t know”* otherwise).
- **Chat history:** previous user and assistant messages.
- **User input:** the new question to answer.

---

### ⚙️ Chatbot implementation details

#### 1. `src/lib/llm.ts`
Handles all communication with the **Mistral API**. Defines a `chat(messages)` function that sends an array of messages (`system`, `user`, `assistant`) to the selected model via REST.

#### 2. `src/app/api/chat/route.ts`
Defines the **POST** endpoint `/api/chat`, which:
- Receives the user message as JSON `{ message: string }`
- Creates the message array (`system` + `user`)
- Calls the Mistral API through `chat()`
- Returns the model’s response as `{ answer: string }`

#### 3. `src/app/chat/page.tsx`
Front-end chat interface built with **React** and **TailwindCSS**:
- Simple layout with chat bubbles and dark/light mode
- Each user message is sent to `/api/chat` and rendered dynamically
- Manages loading state (`writing`) and message history

---

### 🧠 Behavior

- The assistant answers **only** questions related to the portfolio projects.
- If it doesn’t have the necessary information, it replies with *“I don’t know.”*

---

### 🧰 Models used

| Task | Model | Description |
|------|--------|-------------|
| Chat generation | `open-mistral-nemo` | Lightweight open-source chat model by Mistral AI |

---

### 🔍 Future improvements
- **Persistent chat history across sessions** (currently history is kept only during the active session)
- **RAG (Retrieval-Augmented Generation)** to make the assistant more project-aware _(initially planned, but limited by the free model’s rate and token constraints)_


