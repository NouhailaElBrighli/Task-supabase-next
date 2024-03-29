"use client"
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/');
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>this is yourpage</p>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}