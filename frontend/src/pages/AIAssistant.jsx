import React, { useState, useRef, useEffect } from 'react';
import { Bot, Search, MoreVertical, Send, Mic, Building2, Shield, HeartPulse, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Based on your verified profile, you are eligible for the National Merit Scholarship 2024. Would you like to view the details or start your application?',
      widget: true
    },
    {
      sender: 'user',
      text: 'What documents do I need for this application?'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const chatEndRef = useRef(null);

  const handleSend = () => {
    if (!inputVal.trim()) return;
    setMessages(prev => [...prev, { sender: 'user', text: inputVal }]);
    setInputVal('');

    setTimeout(() => {
      let reply = 'I am processing your query securely. Here is the relevant information from state databases.';
      if (inputVal.toLowerCase().includes('hi') || inputVal.toLowerCase().includes('hello')) {
        reply = 'Hello! How can I assist you with state services today?';
      }
      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 1000);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={{ height: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column', maxWidth: '900px', margin: '0 auto', background: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', overflow: 'hidden' }}>


      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid var(--border-light)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: 'var(--brand-yellow)', padding: '0.5rem', borderRadius: '8px' }}>
            <Bot size={24} color="var(--brand-blue)" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--brand-blue)', fontWeight: 700 }}>Portal Assistant</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#16a34a', fontWeight: 600 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#16a34a' }}></div> ONLINE & SECURED
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)' }}>
          <Search size={20} style={{ cursor: 'pointer' }} />
          <MoreVertical size={20} style={{ cursor: 'pointer' }} />
        </div>
      </div>


      <div style={{ flex: 1, overflowY: 'auto', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#fafafa' }}>


        <div style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '2rem' }}>
          <div style={{ background: 'var(--brand-blue)', width: '60px', height: '60px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', transform: 'rotate(45deg)' }}>
            <div style={{ width: '12px', height: '12px', background: 'white', borderRadius: '50%', transform: 'rotate(-45deg)' }}></div>
          </div>
          <h2 style={{ fontSize: '2rem', color: 'var(--brand-blue)', fontWeight: 700, marginBottom: '1rem' }}>How can the State assist you today?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.5 }}>
            I can help you find schemes, track applications, or locate essential citizen services in real-time.
          </p>
        </div>


        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%', maxWidth: '700px', marginBottom: '3rem' }}>
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)', cursor: 'pointer' }}>
            <h4 style={{ color: 'var(--brand-blue)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><GraduationCap size={18} /> Higher Education</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>How to apply for a scholarship?</p>
          </div>
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)', cursor: 'pointer' }}>
            <h4 style={{ color: 'var(--brand-blue)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><HeartPulse size={18} /> Emergency Services</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Find me nearby hospitals</p>
          </div>
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)', cursor: 'pointer' }}>
            <h4 style={{ color: 'var(--brand-blue)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Building2 size={18} /> Welfare Tracking</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Where is my Ration Card?</p>
          </div>
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)', cursor: 'pointer' }}>
            <h4 style={{ color: 'var(--brand-blue)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Shield size={18} /> Identity Vault</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Download my verified Degree</p>
          </div>
        </div>

        {messages.map((msg, idx) => (
          msg.sender === 'bot' ? (
            <div key={idx} style={{ width: '100%', maxWidth: '700px', display: 'flex', gap: '1.5rem', marginBottom: '2rem', alignSelf: 'center' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--brand-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Bot size={20} color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ background: '#f0f4f8', padding: '1.25rem', borderRadius: '0 16px 16px 16px', color: 'var(--text-dark)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: msg.widget ? '1rem' : '0' }}>
                  {msg.text}
                </div>
                {msg.widget && (
                  <div style={{ display: 'flex', background: 'white', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-light)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <div style={{ padding: '1.5rem', flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#16a34a', fontSize: '0.7rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '0.5px' }}>
                        <CheckCircle2 size={14} /> RECOMMENDED SERVICE
                      </div>
                      <h4 style={{ fontSize: '1.1rem', color: 'var(--brand-blue)', marginBottom: '0.5rem' }}>National Merit Scholarship Program</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                        Providing financial aid to meritorious students from economically weaker sections.
                      </p>
                      <button className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.85rem' }}>Apply Now</button>
                    </div>
                    <div style={{ width: '180px', position: 'relative' }}>
                      <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=400&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="University" />
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(22, 163, 74, 0.4)', mixBlendMode: 'multiply' }}></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div key={idx} style={{ width: '100%', maxWidth: '700px', display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginBottom: '2rem', alignSelf: 'center' }}>
              <div style={{ background: 'var(--brand-blue)', color: 'white', padding: '1rem 1.25rem', borderRadius: '16px 0 16px 16px', fontSize: '0.95rem' }}>
                {msg.text}
              </div>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#e2e8f0', overflow: 'hidden', flexShrink: 0 }}>
                <img src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff" style={{ width: '100%' }} alt="User" />
              </div>
            </div>
          )
        ))}
        <div ref={chatEndRef} />

      </div>


      <div style={{ padding: '1.5rem 2rem', background: 'white', borderTop: '1px solid var(--border-light)' }}>
        <div style={{ display: 'flex', alignItems: 'center', background: '#f1f5f9', padding: '0.5rem 0.5rem 0.5rem 1.5rem', borderRadius: '100px' }}>
          <Bot size={20} color="var(--text-muted)" style={{ marginRight: '1rem' }} />
          <input
            type="text"
            placeholder="Type your query here..."
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', padding: '0', fontSize: '0.95rem', height: '40px' }}
          />
          <button style={{ background: 'transparent', border: 'none', padding: '0.5rem', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <Mic size={20} />
          </button>
          <button onClick={handleSend} style={{ background: 'var(--brand-blue)', color: 'white', border: 'none', padding: '0.6rem 1rem', borderRadius: '100px', marginLeft: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Send size={18} />
          </button>
        </div>
        <div style={{ textAlign: 'center', fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '1rem', letterSpacing: '1px', fontWeight: 600 }}>
          END-TO-END ENCRYPTED SOVEREIGN CHANNEL
        </div>
      </div>

    </div>
  );
}
