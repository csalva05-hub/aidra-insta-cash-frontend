import React, { useEffect, useState } from 'react';
import api from '../api';

export default function Reports(){
  const [date,setDate]=useState(new Date().toISOString().slice(0,10));
  const [area,setArea]=useState('');
  const [data,setData]=useState(null);

  async function load(){
    try{
      const r = await api.get('/reports/daily?date=' + date + (area ? '&area_id='+area : ''));
      setData(r.data);
    }catch(e){ console.error(e); }
  }

  useEffect(()=>{ load(); }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-4">Reports</h3>
      <div className="mb-2">
        <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="p-2 border rounded mr-2" />
        <select value={area} onChange={e=>setArea(e.target.value)} className="p-2 border rounded">
          <option value="">All Areas</option>
          <option value="1">Area 1</option>
          <option value="2">Area 2</option>
          <option value="3">Area 3</option>
        </select>
        <button onClick={load} className="ml-2 px-3 py-2 bg-primary text-white rounded">Load</button>
      </div>

      <div>Paid: ₱{data?.total_paid ?? '0.00'}</div>
    </div>
);
}
