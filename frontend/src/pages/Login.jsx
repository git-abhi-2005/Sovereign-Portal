import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, UserSearch, Fingerprint } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if(mobile.length > 5) {
      const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      fetch(`${baseUrl}/api/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobileNumber: mobile, otp: '123456' })
      })
      .then(res => res.json())
      .then(data => {
        if(data.success) {
           localStorage.setItem('userId', data.userId);
           navigate('/profile-setup');
        } else {
           navigate('/profile-setup');
        }
      }).catch(() => navigate('/profile-setup'));
    }
  };

  return (
    <div className="layout-container" style={{ height: '100vh', overflow: 'hidden' }}>
      
      <div style={{ flex: 1, backgroundColor: 'var(--brand-blue)', color: 'white', padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
          <div style={{ background: 'var(--brand-yellow)', padding: '0.5rem', borderRadius: '4px' }}><Shield size={24} color="var(--brand-blue)" /></div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Sovereign Portal</h2>
        </div>
        
        <h1 style={{ fontSize: '4rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '2rem' }}>
          The Digital <br /> Architecture of <br /> <span style={{ color: 'var(--brand-yellow)' }}>Progress.</span>
        </h1>
        
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '400px', opacity: 0.9, marginBottom: '3rem' }}>
          Access unified national services with enterprise-grade security and a seamless, dignified experience designed for every citizen.
        </p>

        <div style={{ display: 'flex', gap: '4rem' }}>
          <div>
            <h3 style={{ fontSize: '2rem', color: 'var(--brand-yellow)', marginBottom: '0.5rem' }}>1.4B+</h3>
            <p style={{ fontSize: '0.8rem', opacity: 0.7, letterSpacing: '1px' }}>CITIZENS EMPOWERED</p>
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', color: 'var(--brand-yellow)', marginBottom: '0.5rem' }}>100%</h3>
            <p style={{ fontSize: '0.8rem', opacity: 0.7, letterSpacing: '1px' }}>VERIFIED IDENTITY</p>
          </div>
        </div>
      </div>

      
      <div style={{ flex: 1, backgroundColor: 'white', padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--brand-blue)' }}>Welcome Back</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Please verify your identity to continue to your dashboard.</p>
          
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--brand-blue)' }}>Mobile Number</label>
              <input 
                type="text" 
                placeholder="+91 00000 00000" 
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                style={{ padding: '1rem', fontSize: '1rem' }}
                required
              />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}>
              Generate OTP →
            </button>
          </form>

          <div style={{ margin: '2rem 0', display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--border-light)' }}></div>
            <span style={{ padding: '0 1rem' }}>SECURE IDENTITY BRIDGE</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--border-light)' }}></div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <button onClick={() => navigate('/profile-setup')} className="btn-outline" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', padding: '1.5rem', border: 'none', background: 'var(--bg-light)' }}>
              <Fingerprint size={28} color="var(--brand-blue)" />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-dark)' }}>Aadhaar Connect</span>
            </button>
            <button onClick={() => navigate('/profile-setup')} className="btn-outline" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', padding: '1.5rem', border: 'none', background: 'var(--bg-light)' }}>
              <UserSearch size={28} color="var(--brand-blue)" />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-dark)' }}>Face Login</span>
            </button>
          </div>
          
          <div onClick={() => navigate('/profile-setup')} style={{ background: 'var(--bg-light)', padding: '1rem', borderRadius: '6px', textAlign: 'center', fontSize: '0.9rem', fontWeight: 600, color: 'var(--brand-blue)', cursor: 'pointer' }}>
             <Shield size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }}/> 
             Digital Certificate (DSC)  &gt;
          </div>
        </div>
      </div>
    </div>
  );
}
