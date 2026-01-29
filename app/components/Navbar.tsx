import HomeTab from "./navbar/HomeTab";
import AboutTab from "./navbar/AboutTab";
import ContactTab from "./navbar/ContactTab";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:h-16 py-4 sm:py-0 gap-4 sm:gap-0 relative">
          {/* Name and Title */}
          <div className="flex flex-col flex-shrink-0">
            <span className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Alex Gurinovich
            </span>
            <span className="text-sm sm:text-normal text-zinc-600 dark:text-zinc-400">
              Product Manager Portfolio
            </span>
          </div>

          {/* Navigation tabs - centered on desktop, full width on mobile */}
          <div className="flex flex-wrap gap-4 sm:gap-8 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:flex-nowrap">
            <HomeTab />
            <AboutTab />
            <ContactTab />
          </div>

          {/* Spacer for desktop layout balance */}
          <div className="hidden sm:block flex-1" aria-hidden />
        </div>
      </div>
    </nav>
  );
}



