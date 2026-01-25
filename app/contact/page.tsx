import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-start py-10 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-8 text-center w-full">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
            Contact Me
          </h1>
          
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Feel free to contact whenever needed or just say hello!
          </p>

          <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
            {/* Top row - Email and LinkedIn */}
            <div className="flex flex-row gap-6 w-full justify-center">
              {/* Email */}
              <div className="flex flex-col items-center gap-2 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors w-64">
                <span className="text-2xl mb-2">📧</span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">Email</span>
                <a
                  href="mailto:alexgurinm99@gmail.com"
                  className="text-base font-medium text-zinc-900 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors text-center"
                >
                  alexgurinm99@gmail.com
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex flex-col items-center gap-2 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors w-64">
                <span className="text-2xl mb-2">💼</span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/alex-gurinovich/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-zinc-900 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors text-center"
                >
                  alex-gurinovich
                </a>
              </div>
            </div>

            {/* Bottom - GitHub centered */}
            <div className="flex justify-center">
              <div className="flex flex-col items-center gap-2 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors w-64">
                <span className="text-2xl mb-2">💻</span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">GitHub</span>
                <a
                  href="https://github.com/AlexGuri99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-zinc-900 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors text-center"
                >
                  AlexGuri99
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

