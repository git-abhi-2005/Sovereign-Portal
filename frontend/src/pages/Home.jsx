import React from 'react';
import { Bell, FileText, Briefcase, AlertTriangle, ArrowRight, BookOpen, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName') || 'Advait Singh';

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>


      <div style={{ background: 'var(--brand-blue)', borderRadius: '16px', padding: '2.5rem', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Welcome back, <span style={{ color: 'var(--brand-yellow)' }}>{userName} 👋</span></h2>
          <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>Here is your personalized summary and latest national updates.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={() => navigate('/dashboard/ai-assistant')} className="btn-yellow" style={{ display: 'inline-flex' }}>Talk to AI Assistant</button>
        </div>
      </div>


      <div>
        <h3 style={{ fontSize: '1.25rem', color: 'var(--brand-blue)', marginBottom: '1rem' }}>Quick Access</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          <div onClick={() => navigate('/dashboard/vault')} className="card" style={{ cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s', borderTop: '4px solid #3b82f6' }}>
            <FileText size={32} color="#3b82f6" style={{ margin: '0 auto 1rem' }} />
            <h4 style={{ color: 'var(--brand-blue)' }}>Documents</h4>
          </div>
          <div onClick={() => navigate('/dashboard/schemes')} className="card" style={{ cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s', borderTop: '4px solid #10b981' }}>
            <BookOpen size={32} color="#10b981" style={{ margin: '0 auto 1rem' }} />
            <h4 style={{ color: 'var(--brand-blue)' }}>Schemes</h4>
          </div>
          <div onClick={() => navigate('/dashboard/jobs')} className="card" style={{ cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s', borderTop: '4px solid #f59e0b' }}>
            <Briefcase size={32} color="#f59e0b" style={{ margin: '0 auto 1rem' }} />
            <h4 style={{ color: 'var(--brand-blue)' }}>Jobs</h4>
          </div>
          <div onClick={() => navigate('/dashboard/redressal')} className="card" style={{ cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s', borderTop: '4px solid #ef4444' }}>
            <AlertTriangle size={32} color="#ef4444" style={{ margin: '0 auto 1rem' }} />
            <h4 style={{ color: 'var(--brand-blue)' }}>Complaints</h4>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2rem' }}>


        <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '2rem' }}>


          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--brand-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={20} color="var(--brand-yellow)" /> Recommended Schemes
              </h3>
              <span onClick={() => navigate('/dashboard/schemes')} style={{ fontSize: '0.85rem', color: 'var(--brand-blue)', fontWeight: 600, cursor: 'pointer' }}>View All →</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ padding: '1rem', border: '1px solid var(--border-light)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ color: 'var(--brand-blue)', marginBottom: '0.25rem' }}>National Merit Scholarship 2024</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Financial aid for higher education.</p>
                </div>
                <button onClick={() => alert('Application for National Merit Scholarship 2024 initiated!')} className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Apply Now</button>
              </div>
              <div style={{ padding: '1rem', border: '1px solid var(--border-light)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ color: 'var(--brand-blue)', marginBottom: '0.25rem' }}>青年 Internship Yojana</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Skill-building internships in top corporations.</p>
                </div>
                <button onClick={() => alert('Application for 青年 Internship Yojana initiated!')} className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Apply Now</button>
              </div>
            </div>
          </div>


          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--brand-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Briefcase size={20} color="var(--brand-yellow)" /> Job Alerts
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: 40, height: 40, background: '#dcfce7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Briefcase size={20} color="#166534" />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--brand-blue)' }}>Junior Analyst - Dept. of Space</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Based on your previous searches</p>
                </div>
                <button onClick={() => navigate('/dashboard/jobs')} className="btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>View</button>
              </div>
            </div>
          </div>

        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>


          <div className="card" style={{ background: '#fef2f2', border: '1px solid #fee2e2' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#b91c1c', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={18} /> Important Deadlines
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'white', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-dark)' }}>Tax Return Filing</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Due in 5 days (July 31)</p>
              </div>
              <div style={{ background: 'white', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-dark)' }}>Aadhaar Update</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Due next month</p>
              </div>
            </div>
          </div>


          <div className="card">
            <h3 style={{ fontSize: '1.1rem', color: 'var(--brand-blue)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Bell size={18} /> Latest Updates
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--border-light)' }}>
                <span style={{ fontSize: '0.7rem', color: '#2563eb', fontWeight: 600 }}>ANNOUNCEMENT</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-dark)', marginTop: '0.25rem', lineHeight: 1.4 }}>
                  New EV Subsidy Scheme launched for Tier-2 cities. Apply through the portal.
                </p>
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', color: '#16a34a', fontWeight: 600 }}>MAINTENANCE</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-dark)', marginTop: '0.25rem', lineHeight: 1.4 }}>
                  DigiLocker sync might be delayed this weekend due to scheduled maintenance.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
