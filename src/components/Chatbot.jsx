import React, { useState, useEffect, useRef } from 'react';

const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY_HERE'; // Replace with your actual API key

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Hardcoded Q&A for common questions
  const hardcodedQA = {
    "tell me about this system": "Our load balancing system is a maritime solution that provides real-time stability monitoring, automated weight distribution, safety compliance verification, and fuel efficiency optimization.",
    "how does the system safty works?": "The system verifies safety compliance by continuously monitoring cargo distribution and ship stability to prevent unsafe conditions.",
    "who developed the system": "The system was developed by industry experts with over 35 years of maritime experience.",
    "what are the key features": "Key features include real-time load monitoring, automated weight distribution, safety compliance verification, and fuel efficiency optimization."
  };

  useEffect(() => {
    // Scroll to bottom when messages update
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Check for hardcoded answers
    const userTextLower = userMessage.text.toLowerCase();
    const hardcodedAnswer = Object.keys(hardcodedQA).find(question => userTextLower.includes(question));
    if (hardcodedAnswer) {
      setMessages(prev => [...prev, { sender: 'bot', text: hardcodedQA[hardcodedAnswer] }]);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant knowledgeable about a maritime load balancing system that provides real-time stability monitoring, automated weight distribution, safety compliance verification, and fuel efficiency optimization. Answer user questions based on this context.' },
            ...messages.map(m => ({
              role: m.sender === 'bot' ? 'assistant' : 'user',
              content: m.text,
            })),
            { role: 'user', content: userMessage.text },
          ],
          max_tokens: 150,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        const botMessage = { sender: 'bot', text: data.choices[0].message.content.trim() };
        setMessages(prev => [...prev, botMessage]);
      } else {
        setMessages(prev => [...prev, { sender: 'bot', text: 'Sorry, I did not understand that.' }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Error: Unable to get response from AI.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <button style={styles.openButton} onClick={() => setIsOpen(true)}>
          Ask from AI
        </button>
      )}
      {isOpen && (
        <div style={styles.chatbotContainer}>
          <div style={styles.header}>
            AI Chatbot
            <button style={styles.closeButton} onClick={() => setIsOpen(false)} aria-label="Close chatbot">
              ×
            </button>
          </div>
          <div style={styles.messagesContainer}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={msg.sender === 'bot' ? styles.botMessage : styles.userMessage}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <textarea
            style={styles.textarea}
            placeholder="Type your message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <button
            style={styles.sendButton}
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      )}
    </>
  );
}

const styles = {
  openButton: {
    position: 'fixed',
    top: '50%',
    right: '0',
    transform: 'translateY(-50%)',
    backgroundColor: '#6c63ff',
    color: '#fff',
    border: 'none',
    padding: '14px 24px',
    borderRadius: '24px 0 0 24px',
    fontWeight: '700',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(108,99,255,0.6)',
    zIndex: 10000,
    transition: 'background-color 0.3s ease',
  },
  chatbotContainer: {
    position: 'fixed',
    top: '50%',
    right: '0',
    transform: 'translateY(-50%)',
    width: '350px',
    maxHeight: '450px',
    backgroundColor: '#1e1e2f',
    borderRadius: '12px 0 0 12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    zIndex: 10000,
    color: '#e0e0e0',
  },
  closeButton: {
    background: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '24px',
    fontWeight: '700',
    cursor: 'pointer',
    float: 'right',
    lineHeight: '1',
  },
  header: {
    backgroundColor: '#3f51b5',
    color: '#fff',
    padding: '14px 20px',
    fontWeight: '700',
    fontSize: '18px',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messagesContainer: {
    flex: 1,
    padding: '15px 20px',
    overflowY: 'auto',
    backgroundColor: '#2c2c44',
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
  },
  botMessage: {
    backgroundColor: '#3f51b5',
    padding: '12px 16px',
    borderRadius: '16px',
    marginBottom: '12px',
    alignSelf: 'flex-start',
    maxWidth: '75%',
    whiteSpace: 'pre-wrap',
    boxShadow: '0 2px 8px rgba(63,81,181,0.5)',
  },
  userMessage: {
    backgroundColor: '#6c63ff',
    color: '#fff',
    padding: '12px 16px',
    borderRadius: '16px',
    marginBottom: '12px',
    alignSelf: 'flex-end',
    maxWidth: '75%',
    whiteSpace: 'pre-wrap',
    boxShadow: '0 2px 8px rgba(108,99,255,0.6)',
  },
  textarea: {
    resize: 'none',
    border: 'none',
    borderTop: '1px solid #444',
    padding: '14px 20px',
    fontSize: '15px',
    fontFamily: 'inherit',
    outline: 'none',
    height: '70px',
    backgroundColor: '#1e1e2f',
    color: '#e0e0e0',
    borderBottomLeftRadius: '12px',
  },
  sendButton: {
    backgroundColor: '#6c63ff',
    color: '#fff',
    border: 'none',
    padding: '14px 20px',
    cursor: 'pointer',
    fontWeight: '700',
    borderBottomRightRadius: '12px',
    transition: 'background-color 0.3s ease',
  },
};

export default Chatbot;
