import { useEffect } from 'react';
import Head from 'next/head';
import { UserProvider } from '../context/UserContext';
import { ProgressProvider } from '../context/ProgressContext';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  // Registrar el service worker para PWA
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(
          function(registration) {
            console.log('Service Worker registration successful with scope: ', registration.scope);
          },
          function(err) {
            console.log('Service Worker registration failed: ', err);
          }
        );
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="description" content="Aplicación educativa gamificada sobre Historia del Pensamiento para estudiantes de secundaria" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/icon.svg" />
        <title>La Odisea del Pensamiento</title>
      </Head>
      <UserProvider>
        <ProgressProvider>
          <Component {...pageProps} />
        </ProgressProvider>
      </UserProvider>
    </>
  );
}

export default MyApp;