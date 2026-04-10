import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-4 text-slate-600">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 inline-block rounded bg-slate-900 px-4 py-2 text-white">
        Back home
      </Link>
    </section>
  );
}
