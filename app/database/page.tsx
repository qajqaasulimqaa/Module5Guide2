export const revalidate = 0;
export const dynamic = 'force-dynamic'; 

import clientPromise from "../lib/mongodb";

async function getUsers() {
  const client = await clientPromise;
  const users = await client
    .db("Module5")
    .collection("users")
    .find({})
    .toArray();
  
  return users;
}

export default async function Database() {
  const users = await getUsers();
  
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