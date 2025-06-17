import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          {/* Etiquetas meta adicionales */}
          <meta name="application-name" content="La Odisea del Pensamiento" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Odisea" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          
          {/* Iconos para Apple */}
          <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
          <link rel="apple-touch-icon" sizes="167x167" href="/icons/icon-152x152.png" />
          
          {/* Splash screens para iOS */}
          <link rel="apple-touch-startup-image" href="/icons/icon-512x512.png" />
          
          {/* Precargar fuentes */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;