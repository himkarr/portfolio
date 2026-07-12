import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold tracking-tight">404</h1>
      <h2 className="mt-6 text-xl font-semibold">Page not found</h2>
      <p className="mt-3 text-sm text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
        >
          Home
        </Link>
        <Link
          href="/resume"
          className="rounded-md border px-6 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          Resume
        </Link>
      </div>
    </div>
  );
}
