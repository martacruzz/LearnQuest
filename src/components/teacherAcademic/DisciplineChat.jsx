import { useState } from "react";

function DisciplineChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Beatriz",
      text: "Olá professora, tenho uma dúvida em relação à matéria da Segunda Guerra Mundial!",
    },
    {
      id: 2,
      sender: "João",
      text: "Eu também professora. Podia explicar a razão de terem criado e usado as trincheiras?",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    const msg = {
      id: Date.now(),
      sender: "Tu",
      text: newMessage.trim(),
    };
    setMessages([...messages, msg]);
    setNewMessage("");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md flex flex-col justify-between h-[395px] max-w-6xl">
      {/* Mensagens com scroll interno */}
      <div className="p-6 space-y-3 overflow-y-auto max-h-[380px]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "Tu" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-md break-words ${
                msg.sender === "Tu"
                  ? "bg-slate-500 text-white"
                  : "bg-gray-300 text-gray-900"
              }`}
            >
              <p className="text-sm font-semibold mb-1">{msg.sender}</p>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center px-6 py-4 border-t">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-lg border bg-gray-100 text-gray-800 mr-3"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default DisciplineChat;
