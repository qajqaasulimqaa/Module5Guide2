'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, age }),
    });

    // Clear the form
    setName('');
    setEmail('');
    setAge('');

    // THIS IS THE KEY LINE - Forces Next.js to refetch the page data
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Name"
      />
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email"
      />
      <input 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
        placeholder="Age"
      />
      <button type="submit">Add User</button>
    </form>
  );
}