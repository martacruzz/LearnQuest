import { useState } from "react";

function DisciplineChat({ initialChat = [] }) {
  const [mensagens, setMensagens] = useState(initialChat);
  const [novaMensagem, setNovaMensagem] = useState("");

  const handleEnviar = () => {
    if (!novaMensagem.trim()) return;

    const nova = {
      autor: "Professor",
      texto: novaMensagem.trim(),
    };

    setMensagens([...mensagens, nova]);
    setNovaMensagem("");
  };

  return (
    <div className="flex flex-col justify-between h-[550px]">
      {/* Mensagens */}
      <div className="flex-1 overflow-auto space-y-3 p-4">
        {mensagens.map((m, index) => (
          <div
            key={index}
            className={`flex ${
              m.autor === "Professor" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-4 rounded-lg max-w-lg break-words ${
                m.autor === "Professor"
                  ? "bg-slate-600 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              <p className="font-semibold mb-1">{m.autor}</p>
              <p>{m.texto}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={novaMensagem}
          onChange={(e) => setNovaMensagem(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border rounded px-3 py-2"
        />
        <button
          onClick={handleEnviar}
          className="bg-slate-700 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default DisciplineChat;