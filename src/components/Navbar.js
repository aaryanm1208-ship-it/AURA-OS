import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{padding:"15px", background:"#111", color:"#fff"}}>
      <Link href="/">Home</Link> |{" "}
      <Link href="/dashboard">Dashboard</Link> |{" "}
      <Link href="/tasks">Tasks</Link> |{" "}
      <Link href="/goals">Goals</Link> |{" "}
      <Link href="/ai">AI Assistant</Link>
    </nav>
  );
}
