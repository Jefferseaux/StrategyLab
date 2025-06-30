export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <img
        src="/strategy-lab-hero.png"
        alt="Strategy Lab Hero"
        className="w-full max-w-screen-xl"
      />
      <h1 className="text-4xl font-bold text-center text-gray-900 mt-8">
        Strategy Lab
      </h1>
      <p className="text-lg text-center text-gray-700 mt-4 px-4 max-w-xl">
        Marketing Built on Science, Not Guesswork.
      </p>
    </main>
  );
}
