import { useState } from "react";
import axios from "axios";

function ChatBot() {

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage = {
      type: "user",
      text: message
    };

    setChat((prev) => [...prev, userMessage]);

    setLoading(true);

    try {

      const response = await axios.post(

        "https://openrouter.ai/api/v1/chat/completions",

        {

          model: "openai/gpt-3.5-turbo",

          messages: [

            {
              role: "system",
              content:
                "You are a smart AI assistant. Give short and accurate answers."
            },

            {
              role: "user",
              content: message
            }

          ]

        },

        {

          headers: {

            "Authorization":
              `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,

            "HTTP-Referer":
              "http://localhost:5173",

            "X-Title":
              "AI Chat App",

            "Content-Type":
              "application/json"

          }

        }

      );

      const botReply = {

        type: "bot",

        text:
          response.data.choices[0].message.content

      };

      setChat((prev) => [...prev, botReply]);

    }

    catch (error) {

      console.log(error.response?.data || error);

      setChat((prev) => [

        ...prev,

        {
          type: "bot",
          text: "Error fetching response."
        }

      ]);

    }

    setLoading(false);

    setMessage("");

  };

  const clearChat = () => {

    setChat([]);

  };

  const handleKeyDown = (e) => {

    if (e.key === "Enter") {

      sendMessage();

    }

  };

  return (

    <section id="chat">

      <h2>AI Chat Assistant</h2>

      <div className="chat-box">

        {chat.map((msg, index) => (

          <div

            key={index}

            style={{

              marginBottom: "20px",

              padding: "15px",

              borderRadius: "12px",

              background:
                msg.type === "user"
                  ? "#0f172a"
                  : "#1e293b"

            }}
          >

            <strong>
              {msg.type === "user" ? "You" : "AI"}:
            </strong>

            <p

              style={{

                marginTop: "10px",

                lineHeight: "1.6"

              }}

            >

              {msg.text}

            </p>

          </div>

        ))}

        {loading && (

          <p>AI is typing...</p>

        )}

      </div>

      <div

        style={{

          marginTop: "20px",

          display: "flex",

          justifyContent: "center",

          gap: "15px",

          flexWrap: "wrap"

        }}

      >

        <input

          type="text"

          placeholder="Ask AI something..."

          value={message}

          onChange={(e) =>
            setMessage(e.target.value)
          }

          onKeyDown={handleKeyDown}

        />

        <button

          className="btn"

          onClick={sendMessage}

        >
          Send
        </button>

        <button

          className="btn"

          onClick={clearChat}

        >
          Clear Chat
        </button>

      </div>

    </section>

  );

}

export default ChatBot;