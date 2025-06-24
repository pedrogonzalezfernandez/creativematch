// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';

export default function Login() {
  const [email, setEmail]   = useState('');
  const [password, setPass] = useState('');
  const [error, setError]   = useState(null);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return setError(error.message);
    router.push('/waiting-room');
  }

  return (
    <main style={pageStyle}>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="email" placeholder="E-mail"
          value={email} onChange={e => setEmail(e.target.value)} required
        />
        <input
          type="password" placeholder="Password"
          value={password} onChange={e => setPass(e.target.value)} required
        />
        <button type="submit">Log in</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </main>
  );
}

const pageStyle = { padding:'2rem', fontFamily:'sans-serif' };
const formStyle = { display:'flex', flexDirection:'column', gap:'0.5rem', maxWidth:'260px' };

