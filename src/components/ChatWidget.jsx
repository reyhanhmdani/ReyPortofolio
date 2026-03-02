import React, { useState, useRef, useEffect } from 'react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi there! 👋 I am Rey's AI assistant. You can ask me about his tech stack, experience, or projects. How can I help?", isAi: true }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const [chatHistory, setChatHistory] = useState([]);
    
    // WARNING: Storing API keys in frontend code is generally unsafe for production.
    // Consider moving this to an environment variable or entirely to a backend proxy in the future.
    const apiKey = "[ENCRYPTION_KEY]"; 

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async () => {
        const text = input.trim();
        if (!text) return;

        // Add user message to UI
        setMessages(prev => [...prev, { text, isAi: false }]);
        setInput('');
        setIsTyping(true);

        // Prepare history for API
        const userPayloadObj = { role: 'user', parts: [{ text: text }] };
        const newHistory = [...chatHistory, userPayloadObj];
        setChatHistory(newHistory);

        try {
            const responseText = await fetchGeminiResponse(text, newHistory);
            
            // Add AI response to UI
            setMessages(prev => [...prev, { text: responseText, isAi: true }]);
            // Update history with AI response
            setChatHistory(prev => [...prev, { role: 'model', parts: [{ text: responseText }] }]);
            
        } catch (error) {
            console.error("Gemini API Error:", error);
            setMessages(prev => [...prev, { text: "I'm sorry, I'm having trouble connecting right now. Please email Raihan directly!", isAi: true }]);
        } finally {
            setIsTyping(false);
        }
    };

    const fetchGeminiResponse = async (userText, currentHistory = [], retries = 5) => {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
        
        const systemPrompt = "You are the AI assistant for Raihan Hamdani, a Senior Creative Developer and AI Specialist. Your goal is to represent him professionally and answer questions from recruiters or clients. His skills include PHP, Laravel, JS, React, AI Engineering, Docker, Go, and Performance Ads. He has marketing experience managing ads for products like 'Detcha' and 'Arinna'. He also worked as a Software Engineer and Data Analyst at 'Ayobuatbaik' and 'DKM Masjid Salam Selfa', and previously interned at 'B_erl Cosmetics'. His projects include 'Ayobuatbaik.com', 'Andreraditya.guru', and 'Selfa.sch.id'. His contact is hello@raihanhamdani.dev. Keep answers concise, friendly, and highly professional. Reply in the language the user speaks.";
        
        // We need to send the history WITHOUT the very last user message that we JUST added above 
        // to `contents`, because we will append current msg manually or just pass `newHistory` fully.
        // Actually, `newHistory` already includes the user's latest query at the end. It's ready.
        
        const payload = {
            contents: currentHistory,
            systemInstruction: { parts: [{ text: systemPrompt }] }
        };

        let delay = 1000;
        for (let i = 0; i < retries; i++) {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                
                const data = await response.json();
                return data.candidates[0].content.parts[0].text;
            } catch (error) {
                if (i === retries - 1) throw error;
                await new Promise(res => setTimeout(res, delay));
                delay *= 2; 
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="ai-widget-container">
            <div id="ai-chat-window" className={`ai-chat-window ${!isOpen ? 'hidden' : ''}`}>
                <div className="chat-header">
                    <div>
                        <h4 style={{ color: 'var(--stone-dark)', margin: '0', fontSize: '1.1rem', fontFamily: 'var(--font-display)' }}>Rey's AI ✨</h4>
                        <span style={{ fontSize: '0.75rem', color: 'var(--taupe-accent)' }}>Ask about my experience</span>
                    </div>
                    <button id="close-chat" style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--taupe-accent)' }} onClick={() => setIsOpen(false)}>
                        &times;
                    </button>
                </div>
                <div id="chat-messages" className="chat-messages">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`message ${msg.isAi ? 'ai-message' : 'user-message'}`}>
                            {msg.text}
                        </div>
                    ))}
                    {isTyping && (
                        <div className="typing-indicator" id="typing-indicator">
                            <span></span><span></span><span></span>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                <div className="chat-input-area">
                    <input 
                        type="text" 
                        id="chat-input" 
                        placeholder="e.g. What is his backend stack?" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button id="send-btn" className="send-btn" onClick={handleSend} disabled={isTyping}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                </div>
            </div>
            
            <button id="ai-toggle-btn" className="btn btn-primary ai-toggle-btn" style={{ display: isOpen ? 'none' : 'flex' }} onClick={() => setIsOpen(true)}>
                <span style={{ fontSize: '1.2rem', marginRight: '8px' }}>✨</span> Ask My AI
            </button>
        </div>
    );
};

export default ChatWidget;
