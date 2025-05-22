import React, { useState } from "react";
import ClanNavBar from "./ClanNavbar";

const ClanChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Marta Lopes", text: "We need to schedule a meeting to start preparing the tests." },
    { id: 2, sender: "Tiago Moreira", text: "Yes, you're right!" },
    { id: 3, sender: "Beatriz Correia", text: "I don't think i'm available this week." },
    { id: 4, sender: "Bruno Carvalho", text: "Me neither :(" },
    { id: 5, sender: "Matilde Fonseca", text: "I think we can schedule the meeting for next week." },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    const msg = {
      id: Date.now(),
      sender: "You",
      text: newMessage.trim(),
    };
    setMessages([...messages, msg]);
    setNewMessage("");
  };

  return (
    <div className="p-6 ml-16 min-h-screen text-gray-800 flex flex-col">
      {/* Nav Bar */}
      <ClanNavBar />

      {/* Chat Container */}
      <div className="flex-1 flex flex-col w-full px-4 md:px-16 py-6">
        <div className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden flex-1">
          {/* Header */}
          <div className="bg-gray-200 text-gray-800 px-6 py-4 text-xl font-semibold border-b border-gray-300">
            Clan Chat
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"
                  }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-xs break-words ${msg.sender === "You"
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

          {/* Input Area */}
          <div className="flex items-center px-4 py-3 bg-gray-100 border-t border-gray-300">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-2 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none mr-2"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClanChat;
