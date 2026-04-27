import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Briefcase, MapPin } from 'lucide-react';

export default function ProfileSetup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', age: '', occupation: '', income: '2.5 Lakhs - ₹7.5 Lakhs'
  });

  const handleContinue = () => {
    if (formData.name) {
      localStorage.setItem('userName', formData.name);
    }
    const userId = localStorage.getItem('userId');
    if (userId) {
      const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      fetch(`${baseUrl}/api/user/profile`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, ...formData })
      }).then(() => navigate('/dashboard')).catch(() => navigate('/dashboard'));
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="layout-container" style={{ height: '100vh', padding: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      <div style={{ display: 'flex', width: '100%', maxWidth: '1000px', height: '80vh', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', background: 'white' }}>
        
        
        <div style={{ flex: '0 0 35%', backgroundColor: 'var(--brand-blue)', color: 'white', padding: '3rem', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Sovereign Portal</h2>
          <p style={{ fontSize: '1rem', opacity: 0.8, lineHeight: 1.5, marginBottom: 'auto' }}>
            Your journey toward verified digital citizenship begins here.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '4rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ background: 'var(--brand-yellow)', padding: '10px', borderRadius: '12px' }}><User size={20} color="var(--brand-blue)" /></div>
              <div>
                <div style={{ fontWeight: 600 }}>Identity</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Basic Information</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', opacity: 0.5 }}>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '12px' }}><Briefcase size={20} color="white" /></div>
              <div>
                <div style={{ fontWeight: 600 }}>Status</div>
                <div style={{ fontSize: '0.8rem' }}>Occupation & Income</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', opacity: 0.5 }}>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '12px' }}><MapPin size={20} color="white" /></div>
              <div>
                <div style={{ fontWeight: 600 }}>Residency</div>
                <div style={{ fontSize: '0.8rem' }}>State & City</div>
              </div>
            </div>
          </div>
        </div>

        
        <div style={{ flex: 1, padding: '4rem', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
               <div style={{ width: '40px', height: '4px', background: 'var(--brand-blue)', borderRadius: '2px' }}></div>
               <div style={{ width: '40px', height: '4px', background: 'var(--border-light)', borderRadius: '2px' }}></div>
               <div style={{ width: '40px', height: '4px', background: 'var(--border-light)', borderRadius: '2px' }}></div>
            </div>
            <button style={{ background: 'none', border: 'none', color: 'var(--brand-blue)', fontWeight: 600, cursor: 'pointer' }}>Skip for Now</button>
          </div>

          <h2 style={{ fontSize: '2.5rem', color: 'var(--brand-blue)', marginBottom: '0.5rem' }}>Welcome to Portal</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Let's set up your profile to personalize your experience.</p>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--brand-blue)', marginBottom: '0.5rem', letterSpacing: '0.5px' }}>FULL LEGAL NAME</label>
            <input type="text" placeholder="e.g. Advait Singh" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ padding: '1rem', border: 'none', background: 'var(--bg-light)', width: '100%', boxSizing: 'border-box' }} />
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--brand-blue)', marginBottom: '0.5rem', letterSpacing: '0.5px' }}>AGE</label>
              <input type="number" placeholder="25" style={{ padding: '1rem', border: 'none', background: 'var(--bg-light)' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--brand-blue)', marginBottom: '0.5rem', letterSpacing: '0.5px' }}>OCCUPATION</label>
              <select style={{ padding: '1rem', border: 'none', background: 'var(--bg-light)' }}>
                <option>Select Role</option>
                <option>Student</option>
                <option>Farmer</option>
                <option>Private Job</option>
                <option>Government Duty</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--brand-blue)', marginBottom: '0.5rem', letterSpacing: '0.5px' }}>ANNUAL INCOME RANGE</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Below ₹2.5 Lakhs', '₹2.5 Lakhs - ₹7.5 Lakhs', 'Above ₹7.5 Lakhs'].map(range => (
                <div key={range} onClick={() => setFormData({...formData, income: range})} style={{ padding: '1rem', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: formData.income === range ? '1px solid var(--brand-blue)' : '1px solid transparent', background: formData.income === range ? '#eef2fa' : 'var(--bg-light)' }}>
                  <span style={{ fontWeight: formData.income === range ? 600 : 400, color: formData.income === range ? 'var(--brand-blue)' : 'var(--text-dark)' }}>{range}</span>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: formData.income === range ? '5px solid var(--brand-blue)' : '2px solid var(--border-light)', background: 'white' }}></div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={handleContinue} className="btn-primary" style={{ padding: '1rem 3rem', borderRadius: '8px' }}>Continue →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
