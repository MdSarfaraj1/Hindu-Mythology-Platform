
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';


function TopicChatbot({ topic  }) {
  const [messages, setMessages] = useState([
    {
      role: 'system',
      contentType:"text",
      content: `I'm an AI assistant specialized in ${topic}. Ask me any questions about this topic!`
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSendMessage = async() => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage = { role: 'user',contentType:"text" ,content: inputValue };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
 
  
       const response = await axios.post('http://localhost:8085/topics/askQuestion', {question:inputValue, topic},{withCredentials:true});
      setMessages(prevMessages => [...prevMessages, { role: 'assistant', contentType:"json",content: response.data.AIresponse }]);
      setIsLoading(false);
  
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  return (
    <div className="d-flex flex-column  rounded shadow-sm overflow-hidden ">
      {/* Header */}
      <div className="bg-primary text-white p-3">
        <h3 className="h6 mb-0 fw-bold">AI Assistant</h3>
        <p className="small mb-0">Ask me anything about {topic}</p>
      </div>

      {/* Messages */}
      <div
        className="flex-grow-1 p-3 overflow-y-auto bg-white"
        style={{ maxHeight: "400px" }}
      >
        {messages
          .filter((msg) => msg.role !== "system")
          .map((message, index) => (
            <div key={index} className={`mb-3 ${ message.role === "user" ? "text-end" : "text-start" }`}>
              <div
                className={`d-inline-block p-2 rounded-3 ${ message.role === "user"? "bg-primary text-white " : "bg-light text-dark" }`}
              >
                {message.contentType === "text" ?(message.content)  : 
                (
                  <div className="structured-content">
                    <h2>{message.content.title}</h2>
                    <p className="summary">{message.content.summary}</p>
                    {message.content.key_points?.map((point, i) => (
                      <div key={i} className="key-point">
                        <h3>{point.title}</h3>
                        <p>{point.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        {isLoading && (
          <div className="text-start mb-3">
            <div className="d-inline-block p-2 rounded-3 bg-white text-dark rounded-bottom-start-0 small">
              <div className="d-flex gap-1">
                <div
                  className="spinner-grow spinner-grow-sm text-secondary"
                  role="status"
                  style={{ width: "6px", height: "6px" }}
                ></div>
                <div
                  className="spinner-grow spinner-grow-sm text-secondary"
                  role="status"
                  style={{
                    width: "6px",
                    height: "6px",
                    animationDelay: "0.2s",
                  }}
                ></div>
                <div
                  className="spinner-grow spinner-grow-sm text-secondary"
                  role="status"
                  style={{
                    width: "6px",
                    height: "6px",
                    animationDelay: "0.4s",
                  }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-top p-2 bg-white">
        <div className="input-group">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleEnterKeyPress}
            placeholder={`Ask about ${topic}...`}
            className="form-control"
          />
          <button
            onClick={handleSendMessage}
            disabled={inputValue.trim() === "" || isLoading}
            className="btn btn-primary"
          >
            <i className="bi bi-send"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopicChatbot