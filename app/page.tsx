"use client"; // Toto musí být na prvním řádku!

import React, { useState } from 'react';

export default function AISS_Dashboard() {
  const [status, setStatus] = useState('Čekám na příkaz...');
  
  // Tvoje data z fotek
  const GEMMA_URL = "https://prepaid-particular-timber-nextel.trycloudflare.com";
  const ADMIN_NAME = "Jiří";

  const testConnection = async () => {
    setStatus('Zkouším spojení s Xiaomi 13T Pro...');
    try {
      const res = await fetch(`${GEMMA_URL}/api/tags`);
      if (res.ok) setStatus('✅ Gemma je ONLINE a připravena!');
      else setStatus('❌ Tunel běží, ale Gemma neodpovídá (403/500).');
    } catch (err) {
      setStatus('❌ Spojení selhalo. Zkontroluj Termux v tabletu.');
    }
  };

  return (
    <div style={{ backgroundColor: '#4c1d95', minHeight: '100vh', color: 'white', padding: '40px', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '2px solid #8b5cf6', paddingBottom: '20px', marginBottom: '40px' }}>
        <h1>AISS-OS: Agent Dashboard</h1>
        <p>Vítej, operátore {ADMIN_NAME}.</p>
      </header>

      <main style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '12px' }}>
          <h3>Status Systému</h3>
          <p style={{ fontSize: '1.2rem', color: '#a78bfa' }}>{status}</p>
          <button 
            onClick={testConnection}
            style={{ backgroundColor: '#8b5cf6', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', marginTop: '10px' }}
          >
            Prověřit spojení
          </button>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '12px' }}>
          <h3>Konfigurace (Registr)</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>📡 <strong>Ollama:</strong> Gemma 2 (arm64)</li>
            <li>🔗 <strong>Endpoint:</strong> {GEMMA_URL}</li>
            <li>🆔 <strong>User:</strong> {ADMIN_NAME} (35 let)</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
