import clientPromise from "../../../lib/mongodb"; // Adjust path as needed

export async function POST(req: Request) {
  console.log("Adding user...");

  const { name, email, age } = await req.json();

  const client = await clientPromise;

  await client
    .db("Module5")
    .collection("users")
    .insertOne({
      name,
      email,
      age: Number(age),
      date: new Date(),
    });

  // Don't close the connection - clientPromise manages it

  return Response.json(
    { ok: true },
    {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      }
    }
  );
}

// Add these exports to disable caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;