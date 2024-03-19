import React, { useState } from 'react';
import { detectIntent } from './DialogFlow'; // Import a function to interact with Dialogflow API

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = async () => {
    const response = await detectIntent(inputText); // Send user input to Dialogflow
    setMessages([...messages, { text: inputText, isUser: true }, { text: response, isUser: false }]);
    setInputText('');
  };

  return (
    <div>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={message.isUser ? 'user-message' : 'agent-message'}>
            {message.text}
          </div>
        ))}
      </div>
      <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default ChatApp;
