import Login from './pages/Login'
import Analyze from './components/Analyze'
import Dashboard from './pages/Dashboard'
import Poster from './components/Poster'
import Topic from './components/Topic'

import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="analyze" element={<Analyze />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="poster" element={<Poster />} />
      <Route path="topic" element={<Topic />} />

    </Routes>
  );
}

export default App;


// /Users/ryangao/Documents/gitgoin/frontend/src/cybernetic-zoo-375501-f1a2c4d4fba0.json