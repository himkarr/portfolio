import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>404</h1>
      <p>The page you requested could not be found.</p>
      <Link href="/">Return home</Link>
    </main>
  );
}
