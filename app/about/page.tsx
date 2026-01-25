"use client";

import { useState } from "react";
import { User, Bike, BriefcaseBusiness, Wrench } from "lucide-react";

export default function About() {
  const [activeSection, setActiveSection] = useState("Who am i?");

  const sections = [
    { name: "Who am i?", icon: User },
    { name: "My Hobbies", icon: Bike },
    { name: "My Experience", icon: BriefcaseBusiness },
    { name: "My Projects", icon: Wrench },
  ];

  return (
    <div className="flex min-h-screen items-start justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-7xl flex-row gap-8 py-32 px-16 bg-white dark:bg-black">
        {/* Sidebar */}
        <aside className="flex-shrink-0 w-64">
          <div className="sticky top-32">
            <nav className="flex flex-col gap-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.name}
                    onClick={() => setActiveSection(section.name)}
                    className={`flex items-center gap-3 text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      activeSection === section.name
                        ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
                        : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-50"
                    }`}
                  >
                    <Icon size={20} />
                    {section.name}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1">
          <div className="max-w-3xl">
            {activeSection === "Who am i?" && (
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-black dark:text-zinc-50">
                  Who am i?
                </h2>
                <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                  Content for "Who am i?" section goes here.
                </p>
              </div>
            )}

            {activeSection === "My Hobbies" && (
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-black dark:text-zinc-50">
                  My Hobbies
                </h2>
                <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                  Content for "My Hobbies" section goes here.
                </p>
              </div>
            )}

            {activeSection === "My Experience" && (
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-black dark:text-zinc-50">
                  My Experience
                </h2>
                <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                  Content for "My Experience" section goes here.
                </p>
              </div>
            )}

            {activeSection === "My Projects" && (
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-black dark:text-zinc-50">
                  My Projects
                </h2>
                <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                  Content for "My Projects" section goes here.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

