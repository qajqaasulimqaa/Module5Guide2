"use server"

import clientPromise from "@/lib/mongodb";

export async function getUsers() {
  const client = await clientPromise;
  const users = await client
    .db("Module5")
    .collection("users")
    .find({})
    .toArray();
  
  // Convert ObjectIds to strings for client
  return users.map(user => ({
    ...user,
    _id: user._id.toString()
  }));
}