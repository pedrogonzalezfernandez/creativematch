// pages/_app.js
import '../styles.css';           // you can delete this line later if you don’t add global CSS
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

