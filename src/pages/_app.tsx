// pages/_app.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';

function WaldheimApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default WaldheimApp;