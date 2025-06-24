import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Interface for chats
interface Chat {
  id: number;
  title: string;
  history: Message[];
}

// Interface for messages
interface Message {
  id: number;
  text: string;
  isSent: boolean;
}

// Sample chats
const initialChats: Chat[] = [
  { id: 1, title: "React Basics", history: [] },
  { id: 2, title: "Azure Certification Prep", history: [] },
  { id: 3, title: "AI Chat - Job Interview Tips", history: [] },
  { id: 4, title: "Python for Beginners", history: [] },
  { id: 5, title: "Web Development Q&A", history: [] },
];

const Chatpage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [chats, setChats] = useState<Chat[]>(initialChats);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Predefined responses
  const responses: string[] = [
    'Hi! Good morning, how can I help you?',
    'Hello! Nice to see you, what’s up?',
    'Hey there! How can I assist you today?',
    'Hi! Hope you’re having a great day!',
  ];

  // Initialize with default message on component mount
  useEffect(() => {
    const defaultMessage: Message = {
      id: 1,
      text: 'Welcome! Type "hi" or "hello" to start chatting with me.',
      isSent: false,
    };
    setMessages([defaultMessage]);
  }, []);

  // Scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle sending message
  const sendMessage = (text: string) => {
    const trimmedText = text.trim().toLowerCase();
      // Add sent message
      const newSentMessage: Message = {
        id: messages.length + 1,
        text: trimmedText,
        isSent: true,
      };
      setMessages([...messages, newSentMessage]);
      setInput('');
      setError('');

      // Simulate bot response after a short delay
      setTimeout(() => {
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        const newReceivedMessage: Message = {
          id: messages.length + 2,
          text: randomResponse,
          isSent: false,
        };
        setMessages(prev => [...prev, newReceivedMessage]);
      }, 500);
    
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setError(''); // Clear error on input change
  };

  // Handle form submission on Enter key
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      sendMessage(input);
    }
  };

  // Handle Send button click
  const handleSendClick = () => {
    if (input.trim()) {
      sendMessage(input);
    }
  };

  // Handle New Chat button click
  const handleNewChat = () => {
    // Find the first user-sent message for the title
    const firstUserMessage = messages.find(msg => msg.isSent)?.text || 'New Chat';
    const newChatTitle = firstUserMessage === 'hi' || firstUserMessage === 'hello' ? `Chat ${chats.length + 1}` : firstUserMessage;

    // Save current chat history
    const newChat: Chat = {
      id: chats.length + 1,
      title: newChatTitle,
      history: messages,
    };

    // Update chats array
    setChats([...chats, newChat]);

    // Reset messages to default welcome message
    const defaultMessage: Message = {
      id: 1,
      text: 'Welcome! Type "hi" or "hello" to start chatting with me.',
      isSent: false,
    };
    setMessages([defaultMessage]);
    setInput('');
    setError('');
  };

  return (
<div className="flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden bg-black text-white">
      {/* Sidebar */}
      <aside className="hidden md:flex md:w-64 flex-col bg-gray-900 border-r border-gray-800">
        <div className="p-4 font-bold text-xl border-b border-gray-700">
          🧠 My Chats
        </div>
        <div className="flex-1 overflow-y-auto">
          {[...chats].sort((a, b) => b.id - a.id).map((chat) => (
            <button
              key={chat.id}
              className="w-full text-left px-4 py-3 hover:bg-gray-800 border-b border-gray-800"
            >
              {chat.title}
            </button>
          ))}
        </div>
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleNewChat}
            className="w-full py-2 bg-gray-700 hover:bg-gray-800 rounded-full font-medium"
          >
            + New Chat
          </button>
        </div>
      </aside>

      {/* Chat Window */}
      <main className="flex-1 flex flex-col">
        

        <div className="flex-1 flex ">
          <div className="w-full px-32 flex flex-col border border-gray-700 bg-gray-900 shadow-lg overflow-hidden">
            {/* Scrollable Message Area */}
            <div className="flex-1 overflow-y-auto p-4">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.isSent ? 'justify-end' : 'justify-start'} mb-4 items-start`}
                >
                  {!message.isSent && (
                    <div className="w-8 h-8 mr-2 mt-1">
                      <svg
                        className="w-full h-full text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                      </svg>
                    </div>
                  )}
                  <div
                    className={`max-w-xs md:max-w-md p-3 rounded-lg ${
                      message.isSent
                        ? 'bg-gray-500 text-white'
                        : 'bg-white text-gray-800 shadow-md'
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                  {message.isSent && (
                    <div className="w-8 h-8 ml-2 mt-1">
                      <svg
                        className="w-full h-full text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12m-3.2 0a3.2 3.2 0 1 0 6.4 0 3.2 3.2 0 1 0-6.4 0M12 2a10 10 0 0 0-9 5.6L3 21l13.4-1A10 10 0 0 0 12 2Z" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Fixed Input Area */}
            <div className="p-4 ">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Type 'hi' or 'hello'..."
                  className={`flex-1 p-3 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500 ${
                    error ? 'border border-red-500' : ''
                  }`}
                />
                <button
                  onClick={handleSendClick}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-full"
                >
                  Send
                </button>
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chatpage;