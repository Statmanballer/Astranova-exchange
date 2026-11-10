
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/dashboard">Visit Dashboard</Link>
    </main>
  )
}
