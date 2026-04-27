import React, { useState } from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';

export default function Schemes() {
  const schemes = [
    { id: 1, title: 'National Merit Scholarship 2024', desc: 'Financial aid for higher education. Deadline in 5 days.', category: 'Education' },
    { id: 2, title: '青年 Internship Yojana', desc: 'Skill-building internships in top corporations.', category: 'Employment' },
    { id: 3, title: 'PM Kisan Samman Nidhi', desc: 'Financial benefit of ₹6000 per year to eligible farmer families.', category: 'Agriculture' },
  ];

  const [appliedSchemes, setAppliedSchemes] = useState({});

  const handleApply = (id, title) => {
    alert(`Application for ${title} Initiated Successfully!`);
    setAppliedSchemes(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ background: 'var(--brand-blue)', borderRadius: '16px', padding: '3rem', color: 'white', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>National <span style={{ color: 'var(--brand-yellow)' }}>Schemes</span></h2>
        <p style={{ opacity: 0.8, fontSize: '1.05rem' }}>Discover and apply for welfare schemes you are eligible for.</p>
      </div>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {schemes.map(s => (
          <div key={s.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
               <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <BookOpen size={24} color="#166534" />
               </div>
               <div>
                 <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>{s.category.toUpperCase()}</span>
                 <h4 style={{ fontSize: '1.2rem', color: 'var(--brand-blue)', marginBottom: '0.25rem' }}>{s.title}</h4>
                 <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{s.desc}</p>
               </div>
            </div>
            <button 
              className={appliedSchemes[s.id] ? "" : "btn-primary"} 
              onClick={() => handleApply(s.id, s.title)}
              style={{ 
                padding: '0.75rem 1.5rem',
                background: appliedSchemes[s.id] ? '#16a34a' : '', 
                color: appliedSchemes[s.id] ? 'white' : '',
                border: appliedSchemes[s.id] ? 'none' : '',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: appliedSchemes[s.id] ? 'default' : 'pointer'
              }}
              disabled={appliedSchemes[s.id]}
            >
              {appliedSchemes[s.id] ? 'Applied ✅' : 'Apply Now'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
