import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import api from './api';

export default function App(){
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || 'null'));
  const navigate = useNavigate();

  useEffect(()=>{
    if(!user) navigate('/login');
  },[user]);

  function onLogin(u, token){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(u));
    setUser(u);
    navigate('/');
  }
  function logout(){
    localStorage.removeItem('token'); localStorage.removeItem('user'); setUser(null); navigate('/login');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold text-primary">Aidra InstaCash</div>
          <nav className="space-x-2">
            {user && <Link to="/" className="text-sm">Dashboard</Link>}
            {user && <Link to="/reports" className="text-sm">Reports</Link>}
            {user ? <button onClick={logout} className="ml-4 text-sm text-red-600">Logout</button> : <Link to="/login" className="text-sm">Login</Link>}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4">
        <Routes>
          <Route path="/login" element={<Login onLogin={onLogin} />} />
          <Route path="/" element={<Dashboard user={user} />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </main>
    </div>
  );
}
