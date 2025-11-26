import { useState, useRef, useEffect } from 'react';
import { IoChatbubbleEllipses, IoClose, IoSend } from 'react-icons/io5';
import { BsRobot } from 'react-icons/bs';
import { chatbotTrainingData, fallbackResponses, quickResponses } from './chatbotData';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Royal's AI assistant. I can help you learn more about Royal Sachan, his skills, experience, and projects. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Enhanced AI response function with better matching
  const generateResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for exact matches first
    for (const [category, data] of Object.entries(chatbotTrainingData)) {
      if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return data.response;
      }
    }

    // Check for partial matches with higher threshold
    let bestMatch = null;
    let bestScore = 0;

    for (const [category, data] of Object.entries(chatbotTrainingData)) {
      const score = data.keywords.reduce((total, keyword) => {
        if (lowerMessage.includes(keyword)) {
          return total + keyword.length; // Longer keywords get higher weight
        }
        return total;
      }, 0);

      if (score > bestScore) {
        bestScore = score;
        bestMatch = data.response;
      }
    }

    // Return best match if score is high enough, otherwise fallback
    if (bestScore > 3) {
      return bestMatch;
    }

    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: generateResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleQuickResponse = (quickResponse) => {
    setInputMessage(quickResponse);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Render message text with clickable links and preserved line breaks
  const renderTextWithLinks = (text) => {
    if (!text) return null;
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const elements = [];
    let lastIndex = 0;
    let match;

    while ((match = urlRegex.exec(text)) !== null) {
      const { index } = match;
      const url = match[0];
      if (index > lastIndex) {
        elements.push(text.slice(lastIndex, index));
      }
      // push link element
      elements.push(
        <a
          key={`link-${index}-${url}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4DB6FF] underline break-words"
        >
          {url}
        </a>
      );
      lastIndex = index + url.length;
    }

    if (lastIndex < text.length) {
      elements.push(text.slice(lastIndex));
    }

    // Now convert newline characters to <br /> while preserving React nodes
    const withLineBreaks = [];
    elements.forEach((el, i) => {
      if (typeof el === 'string') {
        const parts = el.split(/\n/);
        parts.forEach((part, pi) => {
          if (part) withLineBreaks.push(part);
          if (pi < parts.length - 1) withLineBreaks.push(<br key={`br-${i}-${pi}`} />);
        });
      } else {
        withLineBreaks.push(el);
      }
    });

    return withLineBreaks;
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 theme-gradient-bg text-[#E8F1FF] rounded-full border border-[#4DB6FF]/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
      >
        {isOpen ? <IoClose size={20} className="sm:text-2xl" /> : <IoChatbubbleEllipses size={20} className="sm:text-2xl" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-16 sm:bottom-20 right-2 sm:right-6 z-40 w-[calc(100vw-1rem)] sm:w-80 h-96 sm:h-96 theme-card flex flex-col max-w-sm sm:max-w-none overflow-hidden animate-fade-in">
            {/* Chat Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-blue-400/30 theme-gradient-bg text-white rounded-t-2xl">
              <div className="flex items-center gap-2">
                <BsRobot size={16} className="sm:text-xl" />
                <span className="font-semibold text-sm sm:text-base">Royal's AI Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <IoClose size={16} className="sm:text-lg" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 bg-slate-900/40 border-y border-blue-400/20 backdrop-blur-xl">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] p-3 rounded-2xl border ${
                      message.sender === 'user'
                        ? 'theme-gradient-bg text-white rounded-br-md border-transparent shadow-lg shadow-[#1E90FF]/40'
                        : 'bg-slate-900/70 text-[#B7C8E6] rounded-bl-md border-blue-400/20 backdrop-blur-md'
                    }`}
                  >
                    <div className="text-sm sm:text-sm leading-relaxed break-words break-all">{renderTextWithLinks(message.text)}</div>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-900/70 text-[#B7C8E6] p-3 rounded-2xl rounded-bl-md border border-blue-400/20 backdrop-blur-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Response Suggestions */}
              {messages.length === 1 && !isTyping && (
                <div className="space-y-2">
                  <p className="text-xs text-[#B7C8E6] text-center font-medium">Quick questions:</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                    {quickResponses.map((response, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickResponse(response)}
                        className="px-2 py-1 text-xs bg-slate-900/60 text-[#B7C8E6] rounded-full border border-blue-400/20 hover:bg-white/10 hover:text-[#4DB6FF] transition-colors font-medium backdrop-blur-md"
                      >
                        {response}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 sm:p-4 border-t border-blue-400/20 bg-slate-900/60 backdrop-blur-xl">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Royal..."
                  className="flex-1 px-3 py-2 border border-blue-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E90FF] bg-slate-900/60 text-[#E8F1FF] text-sm placeholder:text-[#B7C8E6] backdrop-blur-md"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="px-3 py-2 theme-gradient-bg text-white rounded-lg border border-[#4DB6FF]/30 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <IoSend size={14} className="sm:text-base" />
                </button>
              </div>
            </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
