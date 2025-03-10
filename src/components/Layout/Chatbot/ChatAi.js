import React, { useState, useEffect } from "react";
import axios from "axios";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChatAi = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Load messages from localStorage when the component mounts
  useEffect(() => {
    const storedMessages = localStorage.getItem("chat_history");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  // Function to save messages to localStorage
  const saveChatHistory = (chatHistory) => {
    localStorage.setItem("chat_history", JSON.stringify(chatHistory));
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { user: "client", text: input }];
    setMessages(newMessages);
    saveChatHistory(newMessages);

    try {
      const response = await axios.post("https://chatbot-8taw.onrender.com/chat", {
        message: input,
      });

      const botReply = { user: "bot", text: response.data.reply };
      const updatedMessages = [...newMessages, botReply];
      setMessages(updatedMessages);
      saveChatHistory(updatedMessages);
    } catch (error) {
      const errorMessage = {
        user: "bot",
        text: "Sorry, This Chatbot isn't available right now. Try again later!",
      };
      const updatedMessages = [...newMessages, errorMessage];
      setMessages(updatedMessages);
      saveChatHistory(updatedMessages);
    }

    setInput("");
  };

  return (
    <div className="max-w-md mx-auto p-1 shadow-lg rounded-md">
      <div className="h-56 overflow-y-auto mb-2">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 ${msg.user === "client" ? "text-right" : "text-left"}`}>
            <p
              className={`inline-block px-3 py-2 rounded-md ${
                msg.user === "client"
                  ? "bg-blue-200 text-gray-800 text-left"
                  : "bg-gray-200 text-gray-800 text-left"
              }`}
            >
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border rounded-md p-2 focus:outline-none focus:border-2 focus:border-orange-500"
          />
          <button type="submit" className="chatbot-btn m-auto">
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="h-6 w-6 text-orange-600 -ml-12 hover:text-orange-700 cursor-pointer"
              title="Ask AI"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatAi;
