import Link from 'next/link';

export default function Custom404() {
  return (
    <main className="mx-auto flex flex-col items-center justify-center px-6 py-24 sm:py-64 lg:px-8">
      <p className="text-base font-semibold leading-8 text-black">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        Sorry, we couldnt find the page you&#39;re looking for.
      </p>
      <div className="mt-10">
        <Link href="/" className="text-sm font-semibold leading-7 text-bw-azure">
          <span aria-hidden="true">&larr;</span> Back to home
        </Link>
      </div>
    </main>
  );
}
