// src/components/AIChatBox.jsx
import { useState } from "react";

export default function AIChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMsg = () => {
    if (!input.trim()) return;

    const newMsg = { role: "user", text: input };
    setMessages([...messages, newMsg]);

    // Temporary AI response (dummy)
    setMessages((prev) => [
      ...prev,
      newMsg,
      { role: "ai", text: "AI Response Placeholder..." },
    ]);

    setInput("");
  };

  return (
    <div className="w-full glassy bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-xl">
      <h2 className="text-xl font-bold mb-3">Chat with AI</h2>

      {/* Messages */}
      <div className="h-64 overflow-y-scroll no-scrollbar mb-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl max-w-[80%] ${
              msg.role === "user"
                ? "bg-purple-700 ml-auto"
                : "bg-white/10 border border-white/10"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          className="flex-1 p-3 bg-white/20 rounded-xl outline-none"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={sendMsg}
          className="px-4 py-2 bg-purple-700 hover:bg-purple-900 rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
}
