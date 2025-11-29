// src/components/AIChatBox.jsx
import { useState } from "react";

export default function AIChatbox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMsg = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };

    // Add user message first
    setMessages((prev) => [...prev, userMsg]);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "AI Response Placeholder..." },
      ]);
    }, 300);

    setInput("");
  };

  return (
    <div className="w-full max-w-3xl mx-auto glassy bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-xl 
      sm:p-6 md:p-8">

      <h2 className="text-xl font-bold mb-3 md:text-2xl">Chat with AI</h2>

      {/* Messages */}
      <div className="h-64 sm:h-72 md:h-80 overflow-y-scroll no-scrollbar mb-4 space-y-3 p-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl max-w-[85%] text-sm sm:text-base md:text-lg
              ${msg.role === "user"
                ? "bg-purple-700 ml-auto text-white"
                : "bg-white/10 border border-white/10 text-white"
              }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          className="flex-1 p-3 bg-white/20 rounded-xl outline-none text-sm sm:text-base"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={sendMsg}
          className="px-4 py-2 bg-purple-700 hover:bg-purple-900 rounded-xl text-sm sm:text-base"
        >
          Send
        </button>
      </div>
    </div>
  );
}
