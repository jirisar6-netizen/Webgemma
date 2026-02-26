// [AUDIT_ID]: AISS-OS-CORE-001 | Tata-OS Dashboard
import React, { useState } from 'react';

export default function AISS_OS_Dashboard() {
  // Tvoje aktuální adresa z posledního screenshotu
  const GEMMA_URL = "https://prepaid-particular-timber-nextel.trycloudflare.com/api/chat";
  const SEATABLE_TOKEN = "93d62495e34f96730c32f8b32bb02ca80bdff9ad"; //

  const [status, setStatus] = useState('Checking...');

  return (
    <div style={{ 
      backgroundColor: '#300a24', // Ubuntu Purple
      color: 'white', 
      minHeight: '100vh', 
      padding: '20px',
      fontFamily: 'Ubuntu, sans-serif'
    }}>
      <header style={{ borderBottom: '2px solid #E95420', paddingBottom: '10px' }}>
        <h1>AISS-OS <span style={{ fontSize: '0.5em' }}>v1.0</span></h1>
        <p>Admin: mallfuriionn@gmail.com | Device: Xiaomi 13T Pro</p>
      </header>

      <main style={{ marginTop: '30px' }}>
        <div style={{ background: '#5E2750', padding: '15px', borderRadius: '8px' }}>
          <h3>Status Systému</h3>
          <ul>
            <li><strong>Gemma 2:</strong> {GEMMA_URL ? '📡 Connected' : '❌ Disconnected'}</li>
            <li><strong>Model:</strong> gemma2:2b</li>
            <li><strong>SeaTable:</strong> Active</li>
          </ul>
        </div>

        <section style={{ marginTop: '20px' }}>
          <button 
            onClick={() => alert('Odesílám ping na Gemmu...')}
            style={{ backgroundColor: '#E95420', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}
          >
            Aktivovat Agenta Správce
          </button>
        </section>
      </main>

      <footer style={{ marginTop: '50px', fontSize: '0.8em', opacity: 0.7 }}>
        Pro Jiříka a Štěpánka | 2026 AISS-OS
      </footer>
    </div>
  );
}
