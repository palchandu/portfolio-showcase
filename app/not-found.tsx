export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0B1220] text-zinc-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8 text-lg text-zinc-500">
        Sorry, the page you are looking for does not exist.
      </p>
      <a href="/" className="px-5 py-2 rounded-xl bg-black text-white hover:bg-zinc-800">
        Go Home
      </a>
    </div>
  );
}
