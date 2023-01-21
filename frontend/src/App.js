import Search from './components/Search'
import Login from './pages/Login'
import Analyze from './components/Analyze'

import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="analyze" element={<Analyze />} />
    </Routes>
  );
}

export default App;
