import React, { useEffect, useState } from 'react';
import { FileText, Building2, MapPin, Search, Briefcase } from 'lucide-react';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState({});
  const [isBuilding, setIsBuilding] = useState(false);
  
  const [sectorFilter, setSectorFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [skillFilter, setSkillFilter] = useState('');

  const filteredJobs = jobs.filter(job => {
    if (sectorFilter && job.tag !== sectorFilter) return false;
    if (locationFilter && !job.org.toLowerCase().includes(locationFilter.toLowerCase())) return false;
    if (skillFilter && !job.title.toLowerCase().includes(skillFilter.toLowerCase())) return false;
    return true;
  });

  const handleBuildResume = () => {
    setIsBuilding(true);
    alert('AI is extracting your profile data...');
    setTimeout(() => {
      setIsBuilding(false);
      alert('Professional Resume successfully generated and saved to Vault!');
    }, 2500);
  };

  const handleApply = (id, title) => {
    alert(`Your profile has been submitted for: ${title}`);
    setAppliedJobs(prev => ({ ...prev, [id]: true }));
  };

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    fetch(`${baseUrl}/api/jobs`)
      .then(res => res.json())
      .then(data => {
        if (data.jobs) setJobs(data.jobs);
      })
      .catch(err => console.error('Database connection failed', err));
  }, []);

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      
      
      <div style={{ background: 'var(--brand-blue)', borderRadius: '16px', padding: '3rem', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div style={{ maxWidth: '500px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
            Craft your <span style={{ color: 'var(--brand-yellow)' }}>Professional<br/>Identity</span>
          </h2>
          <p style={{ opacity: 0.8, fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.5 }}>
            Use our AI-powered Resume Builder to create a globally recognized professional profile in under 5 minutes.
          </p>
          <button 
            className="btn-yellow" 
            onClick={handleBuildResume}
            disabled={isBuilding}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', opacity: isBuilding ? 0.7 : 1, cursor: isBuilding ? 'wait' : 'pointer' }}
          >
            <FileText size={18} /> {isBuilding ? 'Building AI Resume...' : 'Build My Resume'}
          </button>
        </div>
        <div style={{ background: 'white', padding: '10px', borderRadius: '12px', transform: 'rotate(5deg)' }}>
          <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80" alt="Resume" style={{ width: '200px', borderRadius: '8px' }} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '3rem' }}>
        
        
        <div style={{ width: '280px' }}>
          <div className="card" style={{ padding: '2rem 1.5rem' }}>
            <h4 style={{ color: 'var(--brand-blue)', fontSize: '0.9rem', letterSpacing: '1px', marginBottom: '1.5rem', fontWeight: 700 }}>REFINE OPPORTUNITIES</h4>
            
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.75rem' }}>JOB SECTOR</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div onClick={() => setSectorFilter(sectorFilter === 'GOVERNMENT' ? '' : 'GOVERNMENT')} style={{ padding: '0.8rem', border: '1px solid var(--border-light)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: sectorFilter === 'GOVERNMENT' ? '#f8fafc' : 'transparent', cursor: 'pointer' }}>
                  <span style={{ fontWeight: 600, color: sectorFilter === 'GOVERNMENT' ? 'var(--brand-blue)' : 'var(--text-muted)' }}>Government</span>
                  <Building2 size={16} color={sectorFilter === 'GOVERNMENT' ? 'var(--brand-blue)' : 'var(--text-muted)'} />
                </div>
                <div onClick={() => setSectorFilter(sectorFilter === 'PRIVATE' ? '' : 'PRIVATE')} style={{ padding: '0.8rem', border: '1px solid var(--border-light)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: sectorFilter === 'PRIVATE' ? '#f8fafc' : 'transparent', cursor: 'pointer' }}>
                  <span style={{ fontWeight: 600, color: sectorFilter === 'PRIVATE' ? 'var(--brand-blue)' : 'var(--text-muted)' }}>Private Sector</span>
                  <Building2 size={16} color={sectorFilter === 'PRIVATE' ? 'var(--brand-blue)' : 'var(--text-muted)'} />
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.75rem' }}>LOCATION</label>
              <div style={{ position: 'relative' }}>
                <input type="text" placeholder="City or State" value={locationFilter} onChange={e => setLocationFilter(e.target.value)} style={{ padding: '0.8rem', paddingRight: '2rem', width:'100%', boxSizing:'border-box', border:'1px solid var(--border-light)', borderRadius:'8px' }} />
                <MapPin size={16} style={{ position: 'absolute', right: '12px', top: '14px', color: 'var(--text-muted)' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.75rem' }}>POPULAR SKILLS</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Cloud Architecture', 'Data Science', 'Public Policy', 'AI/ML', 'Design'].map(skill => (
                   <span key={skill} onClick={() => setSkillFilter(skillFilter === skill ? '' : skill)} style={{ cursor: 'pointer', background: skillFilter === skill ? 'var(--brand-yellow)' : 'var(--bg-light)', color: skillFilter === skill ? 'var(--brand-blue)' : 'inherit', padding: '6px 12px', borderRadius: '16px', fontSize: '0.8rem', border: skillFilter === skill ? 'none' : '1px solid var(--border-light)', fontWeight: skillFilter === skill ? 600 : 'normal' }}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
             <h3 style={{ fontSize: '1.5rem', color: 'var(--brand-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               Latest Opportunities <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 400 }}>({filteredJobs.length} matches)</span>
             </h3>
             <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
               Sort by: <span style={{ fontWeight: 600, color: 'var(--brand-blue)' }}>Newest ▾</span>
             </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filteredJobs.length === 0 ? (
               <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)', background: 'white', borderRadius: '12px' }}>No jobs match your selected filters.</div>
            ) : filteredJobs.map((job) => (
              <div key={job.id} className="card" style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '8px', background: 'var(--bg-light)', overflow: 'hidden' }}>
                  {job.tag === 'GOVERNMENT' ? (
                     <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&auto=format&fit=crop" alt="Gov" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                  ) : (
                     <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=200&auto=format&fit=crop" alt="Private" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                  )}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '4px 8px', borderRadius: '4px', background: job.tag === 'GOVERNMENT' ? '#dcfce7' : '#f1f5f9', color: job.tag === 'GOVERNMENT' ? '#166534' : '#475569' }}>
                      {job.tag}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Posted {job.posted}</span>
                  </div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--brand-blue)', marginBottom: '0.25rem' }}>{job.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>{job.org}</p>
                  <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-dark)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{fontWeight:600}}>{job.salary}</span></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Briefcase size={14} color="var(--brand-blue)" /> {job.type}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
                  <button 
                    className={appliedJobs[job.id || job._id] ? "" : "btn-primary"} 
                    onClick={() => handleApply(job.id || job._id, job.title)}
                    style={{ 
                      padding: '0.5rem 2rem', 
                      background: appliedJobs[job.id || job._id] ? '#16a34a' : '', 
                      color: appliedJobs[job.id || job._id] ? 'white' : '',
                      border: appliedJobs[job.id || job._id] ? 'none' : '',
                      borderRadius: '8px',
                      fontWeight: 600,
                      cursor: appliedJobs[job.id || job._id] ? 'default' : 'pointer'
                    }}
                    disabled={appliedJobs[job.id || job._id]}
                  >
                    {appliedJobs[job.id || job._id] ? 'Applied ✅' : 'Apply'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
