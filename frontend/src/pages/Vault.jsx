import React, { useState, useRef } from 'react';
import { UploadCloud, QrCode, RefreshCcw, FileText, CheckCircle2, Download, MoreVertical, Plus, LayoutGrid, Eye, EyeOff } from 'lucide-react';

export default function Vault() {
  const [isFetching, setIsFetching] = useState(false);
  const [unmasked, setUnmasked] = useState({});
  const fileInputRef = useRef(null);

  const toggleMask = (idx) => setUnmasked(prev => ({ ...prev, [idx]: !prev[idx] }));
  const handleAction = (msg) => alert(msg);

  const handleFileTrigger = () => {
    if(fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if(e.target.files && e.target.files.length > 0) {
      alert(`File "${e.target.files[0].name}" selected successfully and is ready for secure encryption!`);
    }
  };

  const handleDownload = (docName) => {
    const blob = new Blob([`SOVEREIGN PORTAL - VERIFIED DOCUMENT\n\nDocument Name: ${docName}\nStatus: Verified cryptographically.`], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${docName.replace(/\s+/g, '_')}_Verified.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleFetchDigilocker = () => {
    setIsFetching(true);
    setTimeout(() => {
      setIsFetching(false);
      alert('DigiLocker synchronization complete! Verified documents updated.');
    }, 2000);
  };

  const documents = [
    { name: 'Aadhaar Card', desc: 'Identity Proof', num: '1234-5678-8902', masked: 'XXXX-XXXX-8902', status: 'VERIFIED', icon: <UserCardIcon /> },
    { name: 'PAN Card', desc: 'Tax Identification', num: 'ABCDE1234F', masked: 'XXXXX1234X', status: 'VERIFIED', icon: <CreditCardIcon /> },
    { name: 'Income Certificate', desc: 'Financial Record (2024)', num: 'REF: IC/2024/99120', masked: 'REF: IC/XXXX/XXXXX', status: 'PENDING', icon: <FileText size={24} color="var(--brand-blue)" /> },
    { name: 'Driving License', desc: 'Valid until Oct 2032', num: 'DL-042021000123', masked: 'DL-XXXXXXXXX123', status: 'VERIFIED', icon: <CarIcon /> }
  ];

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} accept=".pdf,.jpg,.jpeg,.png" />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--brand-blue)', marginBottom: '0.5rem', fontWeight: 700 }}>Document Vault</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.5 }}>
            Your secure, sovereign digital locker for verified national identities and essential certifications.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button onClick={() => handleAction('Generating Secure QR Code for identity verification...')} className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: '#eef2fa', border: 'none' }}>
            <QrCode size={18} /> Share QR Code
          </button>
          <button onClick={handleFetchDigilocker} disabled={isFetching} className="btn-yellow" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', opacity: isFetching ? 0.7 : 1, cursor: isFetching ? 'wait' : 'pointer' }}>
            <RefreshCcw size={18} /> {isFetching ? 'Syncing...' : 'Fetch from DigiLocker'}
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
        
        <div style={{ flex: 2, background: 'var(--brand-blue)', borderRadius: '16px', padding: '2rem', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ zIndex: 1 }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Upload New Document</h3>
            <p style={{ opacity: 0.8, marginBottom: '1.5rem', maxWidth: '300px', fontSize: '0.9rem', lineHeight: 1.5 }}>Securely encrypt and store your personal certificates on the Sovereign Cloud.</p>
            <button onClick={handleFileTrigger} className="btn-primary" style={{ background: 'white', color: 'var(--brand-blue)' }}>
              <Plus size={18} /> Select Files
            </button>
          </div>
          <UploadCloud size={160} color="rgba(255,255,255,0.05)" style={{ position: 'absolute', right: '-20px', bottom: '-20px' }} />
        </div>

        
        <div style={{ flex: 1, background: 'white', borderRadius: '16px', padding: '2rem', border: '1px solid var(--border-light)' }}>
          <h4 style={{ color: 'var(--brand-blue)', marginBottom: '0.5rem' }}>Vault Health</h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '1px', marginBottom: '1.5rem' }}>STORAGE STATUS</p>
          
          <div style={{ width: '100%', height: '8px', background: 'var(--bg-light)', borderRadius: '4px', marginBottom: '1.5rem', overflow: 'hidden' }}>
            <div style={{ width: '45%', height: '100%', background: '#22c55e' }}></div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div>
              <div style={{ fontWeight: 600 }}>12 Documents</div>
            </div>
            <div style={{ color: '#22c55e', fontWeight: 600 }}>Verified</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#22c55e', fontSize: '0.8rem' }}>
            <CheckCircle2 size={14} /> Everything is up to date
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--brand-blue)' }}>Your Documents</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
           <div style={{ padding: '0.5rem', background: 'white', borderRadius: '4px', cursor: 'pointer', border: '1px solid var(--border-light)' }}><LayoutGrid size={20} /></div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {documents.map((doc, idx) => (
          <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ background: 'var(--bg-light)', padding: '1rem', borderRadius: '12px' }}>{doc.icon}</div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--brand-blue)', fontSize: '1.1rem' }}>{doc.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{doc.desc}</div>
                </div>
              </div>
              {doc.status === 'VERIFIED' ? (
                <div style={{ background: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <CheckCircle2 size={12} /> VERIFIED
                </div>
              ) : (
                <div style={{ background: '#fef3c7', color: '#92400e', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700 }}>
                  PENDING
                </div>
              )}
            </div>

            <div style={{ background: 'var(--bg-light)', padding: '0.75rem', borderRadius: '6px', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'monospace', fontWeight: 600 }}>{unmasked[idx] ? doc.num : doc.masked}</span>
              <span onClick={() => toggleMask(idx)} style={{ cursor: 'pointer', color: 'var(--brand-blue)' }}>
                {unmasked[idx] ? <EyeOff size={16} /> : <Eye size={16} />}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
              <button 
                onClick={() => doc.status === 'VERIFIED' ? handleDownload(doc.name) : handleAction(`Fetching pending details from issuing authority...`)} 
                className={doc.status === 'VERIFIED' ? "btn-primary" : "btn-outline"} 
                style={{ flex: 1, padding: '0.75rem' }}
              >
                {doc.status === 'VERIFIED' ? 'Download' : 'View Details'}
              </button>
              <button onClick={() => handleAction('Opening document context menu...')} className="btn-outline" style={{ padding: '0.75rem' }}>
                <MoreVertical size={20} />
              </button>
            </div>
          </div>
        ))}

        
        <div onClick={handleFileTrigger} className="card" style={{ border: '2px dashed var(--border-light)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'transparent', cursor: 'pointer', minHeight: '230px' }}>
          <div style={{ background: 'var(--border-light)', padding: '1rem', borderRadius: '50%', marginBottom: '1rem' }}>
            <Plus size={24} color="var(--text-muted)" />
          </div>
          <div style={{ fontWeight: 600, color: 'var(--brand-blue)' }}>Add Document</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>PDF, JPG up to 10MB</div>
        </div>
      </div>

    </div>
  );
}


function UserCardIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><path d="M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path><path d="M15 8h2"></path><path d="M15 12h2"></path><path d="M15 16h2"></path><path d="M5 16h8"></path></svg>;
}

function CreditCardIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>;
}

function CarIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H5a2 2 0 0 0-2 2v7h2"></path><circle cx="7" cy="16" r="2"></circle><circle cx="17" cy="16" r="2"></circle></svg>;
}

function LayoutGridIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>;
}
