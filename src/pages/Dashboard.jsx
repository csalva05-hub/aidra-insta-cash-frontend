import React, { useEffect, useState } from 'react';
import api from '../api';

export default function Dashboard(){
  const [summary, setSummary] = useState(null);

  useEffect(()=>{
    async function load(){
      try{
        const r = await api.get('/reports/daily?date=' + new Date().toISOString().slice(0,10));
        setSummary(r.data);
      }catch(e){ console.error(e); }
    }
    load();
  },[]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-2">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Summary (Today)</h3>
          <div>Paid: ₱{summary?.total_paid ?? '0.00'}</div>
        </div>

        <div className="bg-white p-4 rounded shadow mt-4">
          <h3 className="font-semibold mb-2">Quick Actions</h3>
          <div className="space-x-2">
            <button className="px-3 py-2 bg-primary text-white rounded">Add Borrower</button>
            <button className="px-3 py-2 border rounded">New Loan</button>
          </div>
        </div>
      </div>

      <aside className="bg-white p-4 rounded shadow">
        <h4 className="font-semibold mb-2">Areas</h4>
        <ul>
          <li>Area 1</li>
          <li>Area 2</li>
          <li>Area 3</li>
        </ul>
      </aside>
    </div>
  );
}
