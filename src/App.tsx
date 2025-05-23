import { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { IStaticMethods } from 'flyonui/flyonui';
import 'notyf/notyf.min.css';
import ObserverProvider from './components/ObserverProvider';
import  useLocalStorage  from 'use-local-storage';
import { HelmetProvider,Helmet } from 'react-helmet-async';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}


function App() {
  const defaultTheme = 'light';
  const [theme,setTheme] = useLocalStorage('theme',defaultTheme ? 'light' : 'dark');
  const location = useLocation();
  
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  useEffect(() => {
    const loadFlyonui = async () => {
      await import('flyonui/flyonui');

      window.HSStaticMethods.autoInit();
    };

    loadFlyonui();
  }, [location.pathname]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Ezequiel Martino</title>
        <meta name="description" content="Portfolio of Ezequiel Martino, a web developer specialized in React, TailwindCSS, Java and Springboot." />
        <meta name="keywords" content="Ezequiel Martino, web developer, React, TailwindCSS, Java, microservices, portfolio, programming" />
        <meta name="author" content="Ezequiel Martino" />
        <meta property="og:title" content="Ezequiel Martino Portfolio" />
        <meta property="og:description" content="Check out my projects built with React, TailwindCSS, Java, and more." />
        <meta property="og:image" content="/portfolio-preview.webp?url" />
        <meta property="og:url" content="https://ezequiel-martino-portfolio.netlify.app/portfolio-preview.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <html lang="en" />
      </Helmet>
    <ObserverProvider> 
    <main className={`min-h-screen ${theme === 'dark' ? 'bg-base-200' : ''} `} data-theme={theme}>
        <Routes>
          <Route path="/" element={<Home switchTheme={switchTheme}/>} />
        </Routes>
    </main>
    </ObserverProvider>
    </HelmetProvider>
  );
}

export default App;
