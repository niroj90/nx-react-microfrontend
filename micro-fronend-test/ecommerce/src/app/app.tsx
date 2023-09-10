import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Electronic = React.lazy(() => import('electronic/Module'));

const ElectronicFashionHome = React.lazy(
  () => import('electronic-fashion-home/Module')
);

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/electronic">Electronic</Link>
        </li>

        <li>
          <Link to="/electronic-fashion-home">ElectronicFashionHome</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="ecommerce" />} />
        <Route path="/electronic" element={<Electronic />} />

        <Route
          path="/electronic-fashion-home"
          element={<ElectronicFashionHome />}
        />
      </Routes>
    </React.Suspense>
  );
}

export default App;
