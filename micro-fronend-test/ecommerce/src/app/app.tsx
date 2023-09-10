import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Fashion = React.lazy(() => import('fashion/Module'));

const Electronic = React.lazy(() => import('electronic/Module'));


export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/fashion">Fashion</Link>
        </li>
        <li>
          <Link to="/electronic">Electronic</Link>
        </li>

        
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="ecommerce" />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/electronic" element={<Electronic />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
