import React, { useState, useRef, useEffect } from 'react';
import { Bot, Search, MoreVertical, Send, Mic, Building2, Shield, HeartPulse, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function AIAssistant() {

  // 👉 Chat messages state (initial bot + user message)
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Based on your verified profile, you are eligible for the National Merit Scholarship 2024. Would you like to view details or start your application?',
      widget: true // 👉 ye batata hai ki niche card show hoga
    },
    {
      sender: 'user',
      text: 'What documents do I need for this application?'
    }
  ]);

  // 👉 Input field ka state
  const [inputVal, setInputVal] = useState('');

  // 👉 Auto scroll ke liye reference
  const chatEndRef = useRef(null);

  // 👉 Message send function
  const handleSend = () => {

    // 👉 Empty message send na ho
    if (!inputVal.trim()) return;

    // 👉 User ka message add karo chat me
    setMessages(prev => [...prev, { sender: 'user', text: inputVal }]);

    setInputVal('');

    // 👉 Fake AI delay (real API lagane ke liye yahan replace kar sakta hai)
    setTimeout(() => {

      let reply = '';

      const userMsg = inputVal.toLowerCase();

      // 👉 Basic AI logic (conditions ke through smart reply)
      if (userMsg.includes('hi') || userMsg.includes('hello')) {
        reply = 'Hello 👋 Welcome to the State Portal Assistant. I can help you with scholarships, documents, applications, and more. What would you like to explore today?';

      } else if (userMsg.includes('document')) {
        reply = 'For the National Merit Scholarship, you typically need the following documents:\n\n• Aadhaar Card\n• Income Certificate\n• Previous Academic Marksheet\n• Bank Account Details\n• Passport Size Photo\n\nMake sure all documents are scanned clearly before uploading. Would you like help uploading them?';

      } else if (userMsg.includes('scholarship')) {
        reply = 'The National Merit Scholarship provides financial assistance to students from economically weaker sections. You can apply online, track status, and receive benefits directly in your bank account.\n\nWould you like me to guide you through the application process step-by-step?';

      } else {
        // 👉 Default AI response (improved)
        reply = 'I am securely processing your request 🔐\n\nBased on available government records, I can assist you with:\n\n• Finding schemes you are eligible for\n• Tracking application status\n• Document verification & upload\n• Nearby services like hospitals & offices\n\nPlease tell me more about what you need so I can guide you better.';
      }

      // 👉 Bot ka response add karo
      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);

    }, 1000);

  };

  // 👉 Har new message pe scroll bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={{ height: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column', maxWidth: '900px', margin: '0 auto', background: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', overflow: 'hidden' }}>

      {/* 👉 HEADER */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid var(--border-light)' }}>

        {/* 👉 Left side (logo + name) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: 'var(--brand-yellow)', padding: '0.5rem', borderRadius: '8px' }}>
            <Bot size={24} color="var(--brand-blue)" />
          </div>

          <div>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--brand-blue)', fontWeight: 700 }}>
              Portal Assistant
            </h3>

            {/* 👉 Online indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#16a34a', fontWeight: 600 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#16a34a' }}></div>
              ONLINE & SECURED
            </div>
          </div>
        </div>

        {/* 👉 Right side icons */}
        <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)' }}>
          <Search size={20} style={{ cursor: 'pointer' }} />
          <MoreVertical size={20} style={{ cursor: 'pointer' }} />
        </div>
      </div>

      {/* 👉 CHAT BODY */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#fafafa' }}>

        {/* 👉 Messages rendering */}
        {messages.map((msg, idx) => (

          msg.sender === 'bot' ? (

            // 👉 Bot message UI
            <div key={idx}>
              {/* Bot bubble */}
              {msg.text}
            </div>

          ) : (

            // 👉 User message UI
            <div key={idx}>
              {msg.text}
            </div>

          )
        ))}

        <div ref={chatEndRef} />
      </div>

      {/* 👉 INPUT BOX */}
      <div style={{ padding: '1.5rem 2rem', background: 'white', borderTop: '1px solid var(--border-light)' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>

          <input
            type="text"
            placeholder="Type your query here..."
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
          />

          {/* 👉 Send button */}
          <button onClick={handleSend}>
            <Send size={18} />
          </button>

        </div>
      </div>

    </div>
  );
}