import React, { useEffect, useState } from 'react';
import { AdminAPI } from '../../services/api';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    AdminAPI.users().then((res) => setUsers(res.data || [])).catch(() => setUsers([]));
  }, []);

  return (
    <div className="page">
      <h2>User Management</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id || u.email}>{u.email} — {u.role}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;


