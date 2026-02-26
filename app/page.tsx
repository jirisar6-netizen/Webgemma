"use client";

import React, { useState } from 'react';

export default function AISS_Chat() {
  const [messages, setMessages] = useState<{role: string, content: string}[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // --- REGISTR DAT (Ověřeno z tvých screenshotů) ---
  const GEMMA_URL = "https://respective-tales-sue-courier.trycloudflare.com"; //
  const ADMIN = "Jiří";

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(`${GEMMA_URL}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          model: 'gemma2:2b', 
          prompt: input, 
          stream: false 
        }),
      });

      if (!response.ok) throw new Error('Gemma neodpovídá');
      
      const data = await response.json();
      // Oprava: Ollama vrací text v poli "response"
      const aiMsg = { role: 'assistant', content: data.response };
      setMessages(prev => [...prev, aiMsg]);
      
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: '⚠️ Chyba spojení s Xiaomi 13T Pro.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#2e1065', minHeight: '100vh', color: 'white', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '2px solid #7c3aed', marginBottom: '20px', paddingBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ margin: 0 }}>AISS-OS Chat</h2>
          <small style={{ color: '#a78bfa' }}>Operátor: {ADMIN} (táta Jiříka a Štěpánka)</small>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '0.8rem', background: '#059669', padding: '4px 8px', borderRadius: '4px' }}>📡 ONLINE</span>
        </div>
      </header>

      <div style={{ height: '65vh', overflowY: 'auto', marginBottom: '20px', padding: '15px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', border: '1px solid #4c1d95' }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: '20px', textAlign: m.role === 'user' ? 'right' : 'left' }}>
            <div style={{ 
              display: 'inline-block', 
              padding: '12px 18px', 
              borderRadius: '15px', 
              maxWidth: '80%',
              background: m.role === 'user' ? '#7c3aed' : '#4c1d95',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '0.7rem', marginBottom: '5px', opacity: 0.8 }}>{m.role === 'user' ? ADMIN : 'GEMMA 2'}</div>
              {m.content}
            </div>
          </div>
        ))}
        {loading && <div style={{ color: '#a78bfa', fontStyle: 'italic' }}>Gemma v tabletu přemýšlí...</div>}
      </div>

      <div style={{ display: 'flex', gap: '10px', position: 'fixed', bottom: '20px', left: '20px', right: '20px' }}>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Zadej příkaz pro AISS..."
          style={{ flex: 1, padding: '15px', borderRadius: '10px', border: '1px solid #7c3aed', background: '#1e1b4b', color: 'white', fontSize: '1rem' }}
        />
        <button 
          onClick={sendMessage} 
          disabled={loading}
          style={{ padding: '0 25px', borderRadius: '10px', background: '#8b5cf6', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
        >
          ODESLAT
        </button>
      </div>
    </div>
  );
}
