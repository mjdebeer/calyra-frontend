import { useState, useEffect, useRef } from 'react';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        setMessages(prev => [...prev, { sender: 'user', text: input }]);

        try {
            const response = await fetch('http://localhost:8080/api/v1/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ botId: 'calyra', message: input }),
            });

            const data = await response.json();

            setMessages(prev => [...prev, { sender: 'bot', text: data.response }]);
        } catch (error) {
            console.error('Error talking to Cal:', error);
            setMessages(prev => [...prev, { sender: 'bot', text: "Sorry, something went wrong." }]);
        }

        setInput('');
    };

    return (
        <>
            {/* Floating Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-cyan-700 text-black font-bold p-4 rounded-full shadow-lg hover:bg-cyan-700 transition z-50 w-14"
            >
                {isOpen ? 'x' : '💬'}
            </button>

            {/* Floating Chat Box */}
            {isOpen && (
                <div className="fixed bottom-20 right-6 w-80 h-96 bg-gray-950 border border-gray-700 rounded-xl shadow-2xl flex flex-col overflow-hidden z-40">
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-900 space-y-2">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                                    msg.sender === 'user'
                                        ? 'bg-cyan-700 text-white'
                                        : 'bg-gray-300 text-black'
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="flex p-2 border-none bg-gray-800">
                        <input
                            type="text"
                            className="flex-1 p-2 text-sm border rounded-l focus:outline-none"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button
                            onClick={handleSend}
                            className="bg-black text-white px-4 py-2 rounded-r hover:bg-gray-800"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
