import Counter from '@/components/ui/Counter'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to New Project Test
          </h1>
          
          <p className="text-xl text-center text-gray-600 dark:text-gray-400">
            Get started by editing{' '}
            <code className="font-mono font-bold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              src/app/page.tsx
            </code>
          </p>

          <Counter />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full">
            <a
              href="https://nextjs.org/docs"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Docs{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  →
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Learn{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  →
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href="https://tailwindcss.com/docs"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Tailwind{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  →
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Explore the Tailwind CSS documentation and utilities.
              </p>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
