import React, { useState } from 'react';
import api from '../api';

export default function Login({ onLogin }){
  const [email,setEmail]=useState('');
  const [pw,setPw]=useState('');
  const [err,setErr]=useState('');

  async function login(){
    try{
      const r = await api.post('/auth/login', { email, password: pw });
      onLogin(r.data.user, r.data.token);
    }catch(e){
      setErr(e?.response?.data?.error || 'Login failed');
    }
  }

  return (
    <div className="max-w-md mx-auto mt-12">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Admin Login</h2>
        {err && <div className="text-red-600 mb-2">{err}</div>}
        <input className="w-full p-2 border rounded mb-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full p-2 border rounded mb-4" placeholder="Password" type="password" value={pw} onChange={e=>setPw(e.target.value)} />
        <button onClick={login} className="w-full bg-primary text-white p-2 rounded">Login</button>
      </div>
    </div>
  );
}
