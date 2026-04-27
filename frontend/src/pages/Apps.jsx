import React from 'react';
import { AppWindow } from 'lucide-react';

export default function Apps() {
  const apps = [
    { id: 1, title: 'DigiLocker', desc: 'Access your authentic digital documents.' },
    { id: 2, title: 'UMANG', desc: 'Unified Mobile Application for New-age Governance.' },
    { id: 3, title: 'mParivahan', desc: 'Digital driving license and vehicle registration.' },
  ];

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ background: 'var(--brand-blue)', borderRadius: '16px', padding: '3rem', color: 'white', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>My <span style={{ color: 'var(--brand-yellow)' }}>Apps</span></h2>
        <p style={{ opacity: 0.8, fontSize: '1.05rem' }}>Your integrated ecosystem of government applications.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        {apps.map(app => (
          <div key={app.id} className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
            <div style={{ width: '64px', height: '64px', margin: '0 auto 1rem', background: 'var(--bg-light)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AppWindow size={32} color="var(--brand-blue)" />
            </div>
            <h4 style={{ fontSize: '1.2rem', color: 'var(--brand-blue)', marginBottom: '0.5rem' }}>{app.title}</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', height: '40px' }}>{app.desc}</p>
            <button className="btn-outline" style={{ width: '100%' }} onClick={() => alert('App Launched!')}>Launch App</button>
          </div>
        ))}
      </div>
    </div>
  );
}
