import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-start py-8 sm:py-10 px-4 sm:px-8 md:px-16 bg-white dark:bg-black">
        <h1 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50 mb-8 sm:mb-12">
          Nice to meet you.
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start w-full">
          {/* Picture - full width on mobile, fixed width on larger */}
          <div className="w-full sm:w-auto sm:flex-shrink-0 mx-auto sm:mx-0">
            <Image
              src="/me-dumbo.jpg"
              alt="Alex Gurinovich"
              width={300}
              height={400}
              className="rounded-lg object-cover w-full max-w-[280px] sm:max-w-none sm:w-[300px] h-auto mx-auto sm:mx-0"
              priority
            />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0 w-full">
            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-zinc-600 dark:text-zinc-400">
              Hi, I'm Alex. Currently a Project Manager, aspiring Product Manager, and automation geek obsessed with building smart, AI-driven workflows and testing new features. Throughout my career, I've specialized in hooking up LLMs with tools like n8n and BrowserAI and proxies to handle the heavy lifting. From shipping Telegram bots, scraping, RAG to automated data extraction, I love using serverless tech to kill manual grunt work, solve operational headaches, and make digital processes run way smoother, faster, and more efficiently.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
