import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

export async function POST(req: Request) {
      console.log("✅ POST /api/users hit")

  const { name, email, age } = await req.json();

  const client = new MongoClient(uri!);
  await client.connect();

  await client
    .db("Module5")
    .collection("users")
    .insertOne({
      name,
      email,
      age: Number(age),
      date: new Date(),
    });

  await client.close();

  return Response.json({ ok: true });
}
