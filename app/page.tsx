'use client'
import { useEffect } from "react"
import Button from "./components/button";
import AddUser from "./components/AddUser";


export default function Front(){
  useEffect(() => {
  console.log("hello from the front end ")})

  return (<>
  <h1>Welcome, to Guide 2 in Module 5!</h1>
  <h2>Enter data and press the button below</h2>
  <AddUser />
    <Button />
    </>
  )
}; 