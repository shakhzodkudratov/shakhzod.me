import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl">&lt;--- you better look there</p>
      <p className="mt-4 text-xl">
        or click &nbsp;
        <Link href="/" className="mt-6 underline">
          here
        </Link>
      </p>
    </div>
  );
}
