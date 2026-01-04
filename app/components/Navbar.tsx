import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 relative">
          {/* Left side - Name and Title */}
          <div className="flex flex-col flex-1">
            <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Alex Gurinovich
            </span>
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              Product Manager Portfolio
            </span>
          </div>

          {/* Center - Navigation tabs */}
          <div className="flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/"
              className="inline-flex flex-col items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <span>🏠 Home</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex flex-col items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <span>👤 About</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex flex-col items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <span>📧 Contact</span>
            </Link>
          </div>

          {/* Right side - Empty for balance */}
          <div className="flex-1"></div>
        </div>
      </div>
    </nav>
  );
}

