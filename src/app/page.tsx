import Link from "next/link";

export default function page() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <Link href='/profile'>Profile</Link>
    </div>
  );
}