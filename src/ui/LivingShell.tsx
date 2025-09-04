import React from 'react';
import ClockPanel from './ClockPanel';

export default function LivingShell() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Always-on clock in top-right */}
      <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 50 }}>
        <ClockPanel />
      </div>
      {/* Sidebar for plugins */}
      <aside style={{ width: '16rem', background: '#f3f4f6', padding: '1rem' }}>
        {/* plugin list would go here */}
      </aside>
      {/* Main content area */}
      <main style={{ flex: 1, padding: '1rem' }}>
        {/* plugin render area */}
      </main>
    </div>
  );
}
