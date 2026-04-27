import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { LayoutGrid, AppWindow, FolderOpen, HeadphonesIcon, Bot, Globe, UserCircle2 } from 'lucide-react';

export default function DashboardLayout() {
  const location = useLocation();

  const navLinks = [
    { name: 'Schemes', path: '/dashboard/schemes' },
    { name: 'Jobs', path: '/dashboard/jobs' },
    { name: 'Vault', path: '/dashboard/vault' },
    { name: 'Redressal', path: '/dashboard/redressal' }
  ];

  const sidebarLinks = [
    { name: 'Home', icon: <LayoutGrid size={20} />, path: '/dashboard' },
    { name: 'My Apps', icon: <AppWindow size={20} />, path: '/dashboard/apps' },
    { name: 'Documents', icon: <FolderOpen size={20} />, path: '/dashboard/vault' },
    { name: 'Support', icon: <HeadphonesIcon size={20} />, path: '/dashboard/redressal' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: 'var(--bg-light)' }}>
      
      <div style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', background: 'linear-gradient(90deg, var(--brand-blue) 0%, rgba(11,29,66,0.9) 100%)', color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '0.5px' }}>Sovereign Portal</h1>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          {navLinks.map(link => (
            <NavLink 
              key={link.name} 
              to={link.path}
              style={({ isActive }) => ({
                color: isActive || location.pathname.includes(link.path) ? 'var(--brand-yellow)' : 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontWeight: 600,
                borderBottom: isActive || location.pathname.includes(link.path) ? '2px solid var(--brand-yellow)' : '2px solid transparent',
                paddingBottom: '23px', 
                marginTop: '25px',
                transition: 'all 0.2s'
              })}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Globe size={20} style={{ opacity: 0.8, cursor: 'pointer' }} />
          <UserCircle2 size={24} style={{ cursor: 'pointer' }} />
        </div>
      </div>

      
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        
        <div style={{ width: '260px', background: 'white', display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--border-light)' }}>
          <div style={{ padding: '1.5rem' }}>
            <div style={{ background: 'var(--bg-light)', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: 'var(--brand-blue)', color: 'white', padding: '8px', borderRadius: '8px' }}><UserCircle2 size={20} /></div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--brand-blue)' }}>Citizen Identity</div>
                <div style={{ fontSize: '0.75rem', color: 'green', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{width: 6, height: 6, borderRadius: '50%', background: 'green'}}></div> VERIFIED STATUS
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ padding: '1rem 0' }}>
            {sidebarLinks.map(link => {
              const isActive = location.pathname === link.path || (link.path !== '/dashboard' && location.pathname.includes(link.path));
              return (
                <NavLink 
                  key={link.name}
                  to={link.path}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 2rem',
                    color: isActive ? 'var(--brand-blue)' : 'var(--text-muted)',
                    background: isActive ? 'var(--bg-light)' : 'transparent',
                    borderRight: isActive ? '3px solid var(--brand-blue)' : '3px solid transparent',
                    textDecoration: 'none', fontWeight: isActive ? 600 : 500,
                  }}
                >
                  <div style={{ opacity: isActive ? 1 : 0.7 }}>{link.icon}</div>
                  {link.name}
                </NavLink>
              );
            })}
          </div>

          <div style={{ marginTop: 'auto', padding: '1.5rem' }}>
            <NavLink to="/dashboard/ai-assistant" style={{ textDecoration: 'none' }}>
              <div className="btn-primary" style={{ width: '100%', padding: '1rem', justifyContent: 'flex-start', background: location.pathname.includes('ai') ? 'var(--brand-blue-hover)' : 'var(--brand-blue)' }}>
                <Bot size={20} /> AI Assistant
              </div>
            </NavLink>
          </div>
        </div>

        
        <div style={{ flex: 1, overflowY: 'auto', padding: '2rem 3rem' }}>
          <Outlet />
        </div>

      </div>
    </div>
  );
}
