import React from 'react';

export default function ClockPanel() {
  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const date = now.toLocaleDateString([], { weekday: 'short', month: 'short', day: '2-digit' });

  return (
    <div style={{
      padding: '12px 14px',
      borderRadius: 12,
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      backdropFilter: 'blur(6px)',
      border: '1px solid rgba(0,0,0,0.06)',
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      minWidth: 140
    }}>
      <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1 }}>{time}</div>
      <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>{date}</div>
    </div>
  );
}
