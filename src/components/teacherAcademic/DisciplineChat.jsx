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
    <div className="flex flex-col justify-between h-[420px]">
      {/* Mensagens */}
      <div className="flex-1 overflow-auto space-y-3">
        {mensagens.map((m, index) => (
          <div key={index} className="bg-gray-300 p-4 rounded-lg max-w-lg">
            <p className="font-semibold">{m.autor}</p>
            <p>{m.texto}</p>
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
          className="bg-slate-800 text-white px-4 py-2 rounded"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default DisciplineChat;
