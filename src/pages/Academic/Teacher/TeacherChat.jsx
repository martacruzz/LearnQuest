import { useState } from "react";
import { UserCircle } from "lucide-react";

const mockChats = [
  {
    id: "1",
    name: "João Oliveira",
    messages: [
      { from: "teacher", text: "Olá João, tudo bem?", timestamp: "10:30" },
      { from: "student", text: "Olá stor! Sim e consigo?", timestamp: "10:32" },
    ],
  },
  {
    id: "2",
    name: "Leonor Ferreira",
    messages: [
      {
        from: "teacher",
        text: "Já entregaste o relatório?",
        timestamp: "09:00",
      },
      { from: "student", text: "Ainda estou a acabar!", timestamp: "09:15" },
    ],
  },
];

function TeacherChat() {
  const [selectedId, setSelectedId] = useState(mockChats[0].id);
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");

  const selectedChat = mockChats.find((chat) => chat.id === selectedId);
  const filteredChats = mockChats.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSend = () => {
    if (!input.trim()) return;
    selectedChat.messages.push({
      from: "teacher",
      text: input,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
    setInput("");
  };

  return (
    <div className="flex p-5 ml-7 w-290s h-137 right-8">
      {/* Sidebar */}
      <div className="w-60 bg-slate-100 p-4 border-r border-slate-300 flex flex-col">
        <input
          type="text"
          placeholder="Find student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-white border border-slate-300"
        />
        <ul className="flex-1 overflow-y-auto space-y-2">
          {filteredChats.map((chat) => (
            <li
              key={chat.id}
              onClick={() => setSelectedId(chat.id)}
              className={`p-3 rounded cursor-pointer flex items-center gap-2 ${
                chat.id === selectedId
                  ? "bg-blue-100 font-semibold"
                  : "hover:bg-slate-200"
              }`}
            >
              <UserCircle className="w-5 h-5 text-slate-600" />
              {chat.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat window */}
      {/* Chat window */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Cabeçalho */}
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">{selectedChat.name}</h2>
        </div>

        {/* Área de mensagens com scroll */}
        <div className="flex-1 overflow-y-auto flex flex-col gap-2 p-6">
          {selectedChat.messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                msg.from === "teacher"
                  ? "bg-slate-700 text-white self-end"
                  : "bg-gray-200 text-black self-start"
              }`}
            >
              {msg.text}
              <div className="text-[10px] text-right mt-1">{msg.timestamp}</div>
            </div>
          ))}
        </div>

        {/* Input fixo no fundo */}
        <div className="border-t flex gap-2 p-4">
          <input
            type="text"
            placeholder="Write a message..."
            className="flex-1 p-2 border border-slate-300 rounded"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-500"
            disabled={!input.trim()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeacherChat;
