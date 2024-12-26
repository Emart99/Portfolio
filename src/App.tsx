import { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { IStaticMethods } from 'flyonui/flyonui';
import 'notyf/notyf.min.css';
import ObserverProvider from './components/ObserverProvider';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();

  useEffect(() => {
    const loadFlyonui = async () => {
      await import('flyonui/flyonui');

      window.HSStaticMethods.autoInit();
    };

    loadFlyonui();
  }, [location.pathname]);

  return (
    <ObserverProvider> 
    <div className="min-h-screen bg-base-200/60">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
    </ObserverProvider>
  );
}

export default App;
