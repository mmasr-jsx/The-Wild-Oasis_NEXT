"use client";
//Error boundary always needs to be a client component, this will get the error object itself + a function we are calling it reset,
//since this function is something that we will use in a interactive way, it has to be a client component and declared at top of the file
//error.js boundary is only able to catch rendering errors, no method related errors.

export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}!</p>

      <button
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
