
// pages/register.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';

export default function Register() {
  const [email, setEmail]   = useState('');
  const [password, setPass] = useState('');
  const [error, setError]   = useState(null);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) return setError(error.message);
    router.push('/login');
  }

  return (
    <main style={pageStyle}>
      <h1>Create account</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="email" placeholder="Institutional e-mail"
          value={email} onChange={e => setEmail(e.target.value)} required
        />
        <input
          type="password" placeholder="Password"
          value={password} onChange={e => setPass(e.target.value)} required
        />
        <button type="submit">Register</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </main>
  );
}

const pageStyle = { padding:'2rem', fontFamily:'sans-serif' };
const formStyle = { display:'flex', flexDirection:'column', gap:'0.5rem', maxWidth:'260px' };
