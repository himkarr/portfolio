import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0d0d0d] font-sans text-white">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-6xl font-bold tracking-tight text-gray-200">404</h1>
        <h2 className="mt-6 text-xl font-semibold text-gray-100">
          Page not found
        </h2>
        <p className="mt-3 text-sm text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/"
            className="rounded-md bg-gray-200 px-6 py-2 text-sm font-medium text-black transition-colors hover:bg-white"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="rounded-md border border-gray-700 bg-[#141414] px-6 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-800"
          >
            Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
