'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center justify-center w-36 h-36 rounded-full border-4 border-blue-600 dark:border-blue-400">
        <span
          className="text-5xl font-bold text-blue-600 dark:text-blue-400 tabular-nums"
          aria-live="polite"
          aria-label={`Counter value: ${count}`}
        >
          {count}
        </span>
      </div>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="px-8 py-3 bg-[#ff1493] hover:bg-[#e0007e] active:bg-[#c2006d] text-white text-lg font-semibold rounded-lg shadow-md shadow-[#ff149366] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff1493] focus:ring-offset-2"
      >
        Increment
      </button>
    </div>
  )
}
