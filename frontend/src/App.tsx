import './App.css';
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import router from './router';

function App() {
  const content = useRoutes(router);

  return (
    <div className="flex h-screen w-screen flex-col md:flex-row">
      <Suspense fallback={<div>Loading...</div>}>{content}</Suspense>
    </div>
  );
}

export default App;
