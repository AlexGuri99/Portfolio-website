import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-start py-10 px-16 bg-white dark:bg-black">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50 mb-12">
          Nice to meet you.
        </h1>
        
        <div className="flex flex-row gap-8 items-start w-full">
          {/* Picture on the left */}
          <div className="flex-shrink-0">
            <Image
              src="/me-dumbo.jpg"
              alt="Alex Gurinovich"
              width={300}
              height={400}
              className="rounded-lg object-cover"
              priority
            />
          </div>

          {/* Text on the right */}
          <div className="flex-1">
            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Hi, I'm Alex. Currently a Project Manager, aspiring Product Manager, and automation geek obsessed with building smart, AI-driven workflows and testing new features. Throughout my career, I've specialized in hooking up LLMs with tools like n8n and BrowserAI and proxies to handle the heavy lifting. From shipping Telegram bots, scraping, RAG to automated data extraction, I love using serverless tech to kill manual grunt work, solve operational headaches, and make digital processes run way smoother, faster, and more efficiently.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
