"use client";
import { useEffect } from "react";
import { redirect } from 'next/navigation'

export default function Home() {
  // const router = useRouter();

  useEffect(() => {
    if (!document.cookie) {
      // router.push("/login"); // Redirect to the login page or any other page
      redirect(`/login`);
    }
    else{
      // router.push("/attendence");
      redirect("/attendence");
    }
  }, []);
}