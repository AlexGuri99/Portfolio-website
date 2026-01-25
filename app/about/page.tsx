"use client";

import { useState } from "react";
import { User, BriefcaseBusiness, Wrench, ArrowDown } from "lucide-react";

export default function About() {
    const [activeSection, setActiveSection] = useState("Who am i?");

    const sections = [
        { name: "Who am i?", icon: User },
        { name: "My Experience", icon: BriefcaseBusiness },
        { name: "My Projects", icon: Wrench },
    ];

    return (
        <div className="flex min-h-screen items-start justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-7xl flex-row gap-8 py-10 px-16 bg-white dark:bg-black">
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
                                        className={`flex items-center gap-3 text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${activeSection === section.name
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
                                <div className="space-y-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                                    <p>
                                        I'm the average 26 years old, living in Petah Tikva, Israel with my girlfriend, Danielle, and our two fish.
                                    </p>
                                    <p>
                                        I've got my CS degree from HIT and might head back for a Master's one day, but for now, I'm just enjoying the ride.
                                    </p>
                                    <p>
                                        I'm fluent in Hebrew, English, and Russian, and currently trying to wrap my head around Spanish.
                                    </p>
                                    <p>
                                        When I'm not at my desk, I'm usually at the gym, hanging with friends, or traveling.
                                    </p>
                                    <p>
                                        I'm a total sponge for info, you'll always find me listening to podcasts about tech, investments, or history on my way to work, I'm also big into sports and F1.
                                    </p>
                                    <p>
                                        At the end of the day, I'm just a curious guy trying to experience as much of this world as possible.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeSection === "My Experience" && (
                            <div>
                                <h2 className="text-3xl font-semibold mb-8 text-black dark:text-zinc-50">
                                    My Experience
                                </h2>
                                <div className="space-y-6">
                                    {/* Project Manager @ Hola */}
                                    <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-1">
                                            Project Manager @ Hola
                                        </h3>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                                            Feb 2025 – Present
                                        </p>
                                        <ul className="space-y-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-zinc-400 dark:text-zinc-500 mt-1">•</span>
                                                <span><strong className="text-zinc-900 dark:text-zinc-200">Product Strategy:</strong> Owning the product lifecycle by defining vision and requirements based on user feedback and market trends.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-zinc-400 dark:text-zinc-500 mt-1">•</span>
                                                <span><strong className="text-zinc-900 dark:text-zinc-200">AI & Automation:</strong> Developing internal AI solutions (n8n, OpenRouter) that automated customer support, achieving up to a 48% ticket closure rate.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-zinc-400 dark:text-zinc-500 mt-1">•</span>
                                                <span><strong className="text-zinc-900 dark:text-zinc-200">Technical Writing:</strong> Managing comprehensive documentation (API specs, tutorials) using Mintlify and GitHub to improve user adoption.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-zinc-400 dark:text-zinc-500 mt-1">•</span>
                                                <span><strong className="text-zinc-900 dark:text-zinc-200">Operations:</strong> Leading QA testing for new features and managing internal tools like Status Pages and AI Dashboards.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex justify-center">
                                        <ArrowDown size={24} className="text-zinc-400 dark:text-zinc-500" />
                                    </div>

                                    {/* QA & NOC Supervisor @ Bright Data */}
                                    <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-1">
                                            QA & NOC Supervisor @ Bright Data
                                        </h3>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                                            May 2024 – Feb 2025
                                        </p>
                                        <ul className="space-y-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-zinc-400 dark:text-zinc-500 mt-1">•</span>
                                                <span><strong className="text-zinc-900 dark:text-zinc-200">Leadership:</strong> Directed team workflows, mentored staff, and conducted interviews for new candidates.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-zinc-400 dark:text-zinc-500 mt-1">•</span>
                                                <span><strong className="text-zinc-900 dark:text-zinc-200">Incident Management:</strong> Managed the full lifecycle of technical incidents, from detection and analysis to R&D notification.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-zinc-400 dark:text-zinc-500 mt-1">•</span>
                                                <span><strong className="text-zinc-900 dark:text-zinc-200">Process Improvement:</strong> Optimized operational efficiency through continuous process evaluation and cross-departmental collaboration.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex justify-center">
                                        <ArrowDown size={24} className="text-zinc-400 dark:text-zinc-500" />
                                    </div>

                                    {/* QA & NOC Engineer @ Bright Data */}
                                    <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-1">
                                            QA & NOC Engineer @ Bright Data
                                        </h3>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                                            Jun 2023 – May 2024
                                        </p>
                                        <ul className="space-y-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-zinc-400 dark:text-zinc-500 mt-1">•</span>
                                                <span><strong className="text-zinc-900 dark:text-zinc-200">Technical Monitoring:</strong> Maintained network infrastructure and monitored production servers to resolve errors in real-time.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-zinc-400 dark:text-zinc-500 mt-1">•</span>
                                                <span><strong className="text-zinc-900 dark:text-zinc-200">Testing:</strong> Executed daily/weekly QA tests, reviewed logs, and documented software bugs across Linux, Windows, and Apple systems.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex justify-center">
                                        <ArrowDown size={24} className="text-zinc-400 dark:text-zinc-500" />
                                    </div>

                                    {/* Front Desk Staff @ Prima Hotels */}
                                    <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-1">
                                            Front Desk Staff @ Prima Hotels Israel
                                        </h3>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                                            Jul 2022 – Jun 2023
                                        </p>
                                        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
                                            Managed reservations, guest check-ins/outs, and provided high-level customer service in a fast-paced environment.
                                        </p>
                                    </div>

                                    <div className="flex justify-center">
                                        <ArrowDown size={24} className="text-zinc-400 dark:text-zinc-500" />
                                    </div>

                                    {/* Helicopter Mechanic @ Israeli Air Force */}
                                    <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-1">
                                            Helicopter Mechanic @ Israeli Air Force
                                        </h3>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                                            Nov 2017 – Jun 2020
                                        </p>
                                        <ul className="space-y-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-zinc-400 dark:text-zinc-500 mt-1">•</span>
                                                <span><strong className="text-zinc-900 dark:text-zinc-200">Rank:</strong> Discharged as Staff Sergeant.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-zinc-400 dark:text-zinc-500 mt-1">•</span>
                                                <span><strong className="text-zinc-900 dark:text-zinc-200">Technical Expertise:</strong> Resolved complex malfunctions on advanced equipment and trained fellow mechanics on technical workflows.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === "My Projects" && (
                            <div>
                                <h2 className="text-3xl font-semibold mb-8 text-black dark:text-zinc-50">
                                    My Projects
                                </h2>
                                <div className="space-y-6">
                                    {/* Zendesk & Mintlify Automation */}
                                    <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6 border border-blue-100 dark:border-blue-900/50">
                                        <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                                            Zendesk & Mintlify Automation
                                        </h3>
                                        <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                                            I built an AI-powered n8n workflow that connects Zendesk support with Mintlify documentation. The system automatically scans your docs for relevant answers to customer inquiries and generates instant, accurate replies. This bridge significantly reduces manual support volume by leveraging existing technical content for real-time problem-solving.
                                        </p>
                                        <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                                            <a href="https://n8n.io/workflows/5046-automate-customer-support-with-mintlify-documentation-and-zendesk-ai-agent/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium">Link to the project</a>
                                        </p>
                                    </div>

                                    {/* Custom n8n Nodes */}
                                    <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6 border border-blue-100 dark:border-blue-900/50">
                                        <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                                            Custom n8n Nodes
                                        </h3>
                                        <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                                            I developed custom n8n nodes to simplify API interactions for{" "}
                                            <a
                                                href="https://toolip.io/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium"
                                            >
                                                Toolip.io
                                            </a>{" "}
                                            and{" "}
                                            <a
                                                href="https://browser.ai/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium"
                                            >
                                                BrowserAI
                                            </a>
                                            . By building these native integrations, I made complex automation workflows accessible and "no-brainer" simple. This project demonstrates how custom tooling can bridge the gap between powerful APIs and seamless, user-friendly automation.
                                        </p>
                                        <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                                            <a href="https://www.npmjs.com/package/n8n-nodes-toolip" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium">Toolip.io node</a>
                                        </p>
                                        <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                                            <a href="https://www.npmjs.com/package/n8n-nodes-browserai" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium">BrowserAI node</a>
                                        </p>
                                    </div>

                                    {/* AI-Powered F1 Newsletter */}
                                    <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6 border border-blue-100 dark:border-blue-900/50">
                                        <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                                            AI-Powered F1 Newsletter
                                        </h3>
                                        <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                                            Combining my passion for F1 with AI, I built an automated newsletter via n8n and{" "}
                                            <a
                                                href="https://brightdata.com/ai/mcp-server"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium"
                                            >
                                                Bright Data's MCP
                                            </a>
                                            . The system hunts down, collects, and translates the latest global F1 news into Hebrew, delivering it directly to a dedicated channel. It's a hands-off solution for staying updated in real-time.
                                        </p>
                                        <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                                            <a href="https://t.me/f1israel" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium">Join the Telegram channel</a>
                                        </p>
                                    </div>

                                    {/* ChatBot Dashboard */}
                                    <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6 border border-blue-100 dark:border-blue-900/50">
                                        <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                                            ChatBot Dashboard
                                        </h3>
                                        <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                                            I designed a minimalistic dashboard for monitoring enterprise-level AI support agents. Using vibe-coding tools, I transformed raw interaction data into a visual "messenger" style interface. It provides the product team with crucial KPIs, including conversation volume, ticket conversion rates, and the most common customer topics.
                                        </p>
                                    </div>

                                    {/* Scraping Mage */}
                                    <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6 border border-blue-100 dark:border-blue-900/50">
                                        <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                                            Scraping Mage
                                        </h3>
                                        <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                                            This personal RAG project allows users to "chat" with any website. Given a URL, the "Mage" scrapes the entire site—customizable by layers or page count—and processes the data so you can ask questions via a WhatsApp-style interface. It turns static web content into a dynamic, conversational knowledge base.
                                        </p>
                                        <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                                            <a href="https://github.com/AlexGuri99/scraping-mage" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium">Link to repo</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}