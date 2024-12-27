import { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { IStaticMethods } from 'flyonui/flyonui';
import 'notyf/notyf.min.css';
import ObserverProvider from './components/ObserverProvider';
import  useLocalStorage  from 'use-local-storage';

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
    <ObserverProvider> 
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-base-200/60' : ''} `} data-theme={theme}>
        <Routes>
          <Route path="/" element={<Home switchTheme={switchTheme}/>} />
        </Routes>
    </div>
    </ObserverProvider>
  );
}

export default App;
