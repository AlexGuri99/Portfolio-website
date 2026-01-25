import HomeTab from "./navbar/HomeTab";
import AboutTab from "./navbar/AboutTab";
import ContactTab from "./navbar/ContactTab";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 relative">
          {/* Left side - Name and Title */}
          <div className="flex flex-col flex-1">
            <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Alex Gurinovich
            </span>
            <span className="text-normal text-zinc-600 dark:text-zinc-400">
              Product Manager Portfolio
            </span>
          </div>

          {/* Center - Navigation tabs */}
          <div className="flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <HomeTab />
            <AboutTab />
            <ContactTab />
          </div>

          {/* Right side - Empty for balance */}
          <div className="flex-1"></div>
        </div>
      </div>
    </nav>
  );
}



