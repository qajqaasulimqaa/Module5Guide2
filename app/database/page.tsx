"use client"

import { useEffect, useState } from "react"; 
import { getUsers } from "../lib/getusers"; 

export default function Database() {
  const [users, setUsers] = useState<any[]>([]);  // ✅ Added type
  const [loading, setLoading] = useState(true);   // ✅ Added loading state
  
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    }
    getData(); 
  }, []);  // ✅ Added dependency array!

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <h1>Users</h1>
      {users.map(user => (
        <div key={user._id.toString()}>
          <strong>Name:</strong> {user.name}<br />
          <strong>Email:</strong> {user.email}<br />
          <strong>Age:</strong> {user.age}
        </div>
      ))}
    </>
  );
}