import React, { useState, useEffect } from 'react';
import { Shield, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Redressal() {
  const [grievance, setGrievance] = useState({ category: 'Infrastructure & Road Safety', description: '' });
  const [grievances, setGrievances] = useState([]);

  const fetchGrievances = () => {
    const userId = localStorage.getItem('userId');
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    const url = userId ? `${baseUrl}/api/grievances?userId=${userId}` : `${baseUrl}/api/grievances`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if(data.grievances) setGrievances(data.grievances);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchGrievances();
  }, []);

  const handleSubmit = () => {
    if(!grievance.description) return alert('Please enter description');
    const userId = localStorage.getItem('userId');
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    fetch(`${baseUrl}/api/grievances`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        category: grievance.category,
        title: grievance.description.substring(0, 25) + '...',
        description: grievance.description,
        userId: userId || null
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.success) {
        alert('Grievance Submitted!');
        setGrievance({ ...grievance, description: '' });
        fetchGrievances();
      }
    });
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--brand-blue)', marginBottom: '0.5rem', fontWeight: 700 }}>Redressal Portal</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.5 }}>
          Your direct line to sovereign accountability. Submit, track, and resolve grievances with transparent digital oversight.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
        
        
        <div style={{ flex: 2, background: 'var(--brand-blue)', borderRadius: '16px', padding: '2rem', color: 'white', position: 'relative', overflow: 'hidden' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Submit New Grievance</h3>
          <p style={{ opacity: 0.8, marginBottom: '2rem', maxWidth: '300px', fontSize: '0.9rem', lineHeight: 1.5 }}>
            Immediate priority assignment for urgent civic or administrative issues.
          </p>
          <button className="btn-yellow" style={{ display: 'inline-flex' }}>
            + Start New Redressal
          </button>
          
          
          <div style={{ position: 'absolute', right: '-20px', bottom: '-40px', width: '200px', height: '200px', opacity: 0.1 }}>
            <div style={{ width: '100%', height: '30px', background: 'white', transform: 'rotate(-45deg)', marginBottom: '20px' }}></div>
            <div style={{ width: '100%', height: '30px', background: 'white', transform: 'rotate(-45deg)', marginBottom: '20px' }}></div>
            <div style={{ width: '100%', height: '30px', background: 'white', transform: 'rotate(-45deg)' }}></div>
          </div>
        </div>

        
        <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.5px' }}>ACTIVE REDRESSALS</div>
          <div style={{ fontSize: '4rem', fontWeight: 700, color: 'var(--brand-blue)', lineHeight: 1 }}>04</div>
          <div style={{ color: '#16a34a', fontSize: '0.9rem', fontWeight: 600, marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <TrendingUpIcon /> 2 Resolved this week
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', gap: '2rem' }}>
        
        
        <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--brand-blue)' }}>Ongoing Redressals</h3>
              <div style={{ color: 'var(--brand-blue)', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                View History <ArrowRight size={16} />
              </div>
            </div>

            {grievances.length === 0 ? (
               <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>No recent grievances found.</div>
            ) : (
               grievances.map((g, i) => (
                 <div key={g.grievanceId || i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)' }}>
                   <div>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                       <span style={{ fontSize: '0.65rem', fontWeight: 700, background: '#fef3c7', color: '#92400e', padding: '4px 8px', borderRadius: '4px' }}>{g.category.toUpperCase()}</span>
                       <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>REF: {g.grievanceId}</span>
                     </div>
                     <h4 style={{ fontSize: '1.1rem', color: 'var(--brand-blue)', marginBottom: '0.5rem' }}>{g.title}</h4>
                     <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '400px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                       {g.description}
                     </p>
                   </div>
                   <div style={{ textAlign: 'right' }}>
                     <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>STATUS</div>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--brand-yellow)', fontWeight: 600, marginBottom: '0.5rem' }}>
                       <div style={{width:8, height:8, borderRadius:'50%', background:'var(--brand-yellow)'}}></div> {g.status || 'Submitted'}
                     </div>
                     <button className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Track Details</button>
                   </div>
                 </div>
               ))
            )}
          </div>
        </div>

        
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div className="card">
            <h3 style={{ fontSize: '1.25rem', color: 'var(--brand-blue)', marginBottom: '1.5rem' }}>Formal Submission</h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', letterSpacing: '0.5px' }}>GRIEVANCE CATEGORY</label>
              <select value={grievance.category} onChange={e => setGrievance({...grievance, category: e.target.value})} style={{ padding: '0.8rem', background: 'var(--bg-light)', border: 'none', borderRadius: '6px', width: '100%' }}>
                <option>Infrastructure & Road Safety</option>
                <option>Public Services</option>
                <option>Education</option>
                <option>Healthcare</option>
              </select>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', letterSpacing: '0.5px' }}>DETAILED DESCRIPTION</label>
              <textarea value={grievance.description} onChange={e => setGrievance({...grievance, description: e.target.value})} rows="4" placeholder="Explain the issue with dates, specific locations, and impact..." style={{ padding: '0.8rem', background: 'var(--bg-light)', border: 'none', borderRadius: '6px', resize: 'none', width: '100%' }}></textarea>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={handleSubmit} className="btn-primary" style={{ padding: '0.75rem 2rem' }}>Submit</button>
            </div>
          </div>

          <div style={{ borderRadius: '16px', overflow: 'hidden', position: 'relative', height: '180px' }}>
             <img src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=600&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Government Building" />
             <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,29,66,0.9), rgba(11,29,66,0.3))', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem', color: 'white' }}>
               <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Institutional Accountability</h4>
               <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>Your voice is protected by constitutional digital mandates.</p>
             </div>
          </div>
          
          <div style={{ background: '#fefce8', border: '1px solid #fef08a', borderRadius: '16px', padding: '1.5rem', display: 'flex', gap: '1rem' }}>
            <ShieldCheck size={24} color="#a16207" />
            <div>
              <h4 style={{ color: '#854d0e', marginBottom: '0.5rem' }}>Encrypted & Anonymized</h4>
              <p style={{ fontSize: '0.85rem', color: '#a16207', lineHeight: 1.5 }}>
                Your submissions are encrypted. Identity data is only accessible by the investigating officer under strict data compliance.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

function TrendingUpIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>;
}
