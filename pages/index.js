// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>CreativeMatch Prototype</h1>
      <p>Select an action:</p>
      <ul>
        <li><Link href="/register">Register</Link></li>
        <li><Link href="/login">Log in</Link></li>
      </ul>
    </main>
  );
}

