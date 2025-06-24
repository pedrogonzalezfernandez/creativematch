// pages/waiting-room.js
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function WaitingRoom() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user) setUserEmail(data.user.email);
    });
  }, []);

  return (
    <main style={{ padding:'2rem', fontFamily:'sans-serif' }}>
      <h1>Waiting Room</h1>
      <p>Logged in as <strong>{userEmail || '...'}</strong></p>
      <p>(Pairing logic coming soon!)</p>
    </main>
  );
}

