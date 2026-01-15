export const revalidate = 0; // This disables caching for this page

import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("environment variable MONGODB_URI is not defined");
}

// Create a MongoClient with Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const users = await client
      .db("Module5")
      .collection("users")
      .find({})
      .toArray(); 

    console.log(JSON.stringify(users, null, 2)); // prints users

    return users;
  } finally {
    await client.close();
  }
}

export default async function Database() {
  const users = await run();
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
