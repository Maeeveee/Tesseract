import { useState } from "react";

export default function ProjectSection() {
    const projects = [
        {
            title: "Tesseract",
            desc: "you’ve been here before, haven’t you?",
            url: "https://Tesseract-maeve.vercel.app",
            stacks: ["/vite.svg", "/react.svg" ,"/tailwind.svg"],
        },
        {
            title: "Splendor",
            desc: "couldn’t find a simple version online, so I built one myself",
            url: "https://tempatkamulatihan.vercel.app",
            stacks: ["/react.svg", "/whiteNext.png", "/tailwind.svg"],
        },
        {
            title: "WhereIsMyCursor",
            desc: "my custom cursor library, pick yours",
            url: "https://whereismycursor.vercel.app",
            stacks: ["/vite.svg", "/react.svg", "/tailwind.svg"],
        },
        {
            title: "Turen Indah Bangunan",
            desc: "an intern project I’m proud of, a catalog system for a local building store",
            url: "https://turen-indah-bangunan.vercel.app",
            stacks: ["/vite.svg", "/react.svg" ,"/tailwind.svg", "/supabase.svg"],
        },
        {
            title: "Undangan",
            desc: "try to ask ur friend hangout with this",
            url: "https://undangan-buat-kamu.vercel.app",
            stacks: ["/react.svg", "/whiteNext.png", "/tailwind.svg"],
        },
        {
            title: "kertas Batu Gunting",
            desc: "built this during some free time at my internship",
            url: "https://kertasbatugunting.vercel.app",
            stacks: ["/vite.svg", "/react.svg" ,"/tailwind.svg"],
        },
        {
            title: "Kalku Fit",
            desc: "a simple calorie calculator for your daily needs",
            url: "https://kalku-fit.vercel.app",
            stacks: ["/vite.svg", "/react.svg" ,"/tailwind.svg"],
        },
        {
            title: "The Sacred Timeline",
            desc: "this one is classified, i cant tell u",
            url: null,
            stacks: ["/vite.svg", "/react.svg" ,"/tailwind.svg"],
        },
        {
            title: "Twogether",
            desc: "a twitter look-alike. where we share our moments, just between us",
            url: null,
            stacks: ["/vite.svg", "/react.svg" ,"/tailwind.svg", "/supabase.svg"],
        },
    ];

    const [showCount, setShowCount] = useState(3);
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
    const displayedProjects = isMobile ? projects.slice(0, showCount) : projects;

    return (
        <section className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div className="p-6">
                <h1 className="text-4xl text-white font-bold mb-4">My Projects</h1>
                <p className="text-md lg:text-xl text-gray-400 mb-8">
                    Here you can find a showcase of my work as a <span className="font-semibold text-gray-200">Raja React</span>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedProjects.map((project, idx) =>
                        project.url ? (
                            <a
                                key={idx}
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col justify-between border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 bg-white/10 dark:bg-gray-800/40 p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:border-blue-400"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition">{project.title}</h2>
                                        <div className="flex gap-1 ml-2">
                                            {project.stacks?.map((icon, i) =>
                                                typeof icon === "string" && icon.startsWith("/") ? (
                                                    <img
                                                        key={i}
                                                        src={icon}
                                                        alt=""
                                                        className="w-5 h-5 object-contain"
                                                    />
                                                ) : (
                                                    <span key={i} className="text-xl">{icon}</span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-400">{project.desc}</p>
                                </div>
                                <span className="inline-block mt-auto pt-4 text-blue-400 font-semibold">
                                    Visit Project &rarr;
                                </span>
                            </a>
                        ) : (
                            <div
                                key={idx}
                                className="relative group flex flex-col justify-between border-2 border-gray-200 border-dashed rounded-lg hover:border-red-500 dark:border-gray-700 bg-white/10 dark:bg-gray-800/40 p-6 opacity-80 cursor-not-allowed overflow-hidden transition-all duration-200 hover:bg-red-900/30"
                            >
                                {/* SVG Tumpuk */}
                                <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                    <svg
                                        width="48"
                                        height="48"
                                        viewBox="0 0 48 48"
                                        className="text-red-500"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <line
                                            x1="12"
                                            y1="12"
                                            x2="36"
                                            y2="36"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                        />
                                        <line
                                            x1="36"
                                            y1="12"
                                            x2="12"
                                            y2="36"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>

                                {/* Isi Card */}
                                <div className="z-0">
                                    <div className="flex items-center justify-between mb-2">
                                        <h2 className="text-xl font-bold text-white transition mb-0">{project.title}</h2>
                                        <div className="flex gap-1 ml-2">
                                            {project.stacks?.map((icon, i) =>
                                                typeof icon === "string" && icon.startsWith("/") ? (
                                                    <img
                                                        key={i}
                                                        src={icon}
                                                        alt=""
                                                        className="w-5 h-5 object-contain"
                                                    />
                                                ) : (
                                                    <span key={i} className="text-xl">{icon}</span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-400">{project.desc}</p>
                                </div>

                                {/* Footer */}
                                <span className="inline-block mt-auto pt-4 text-red-400 font-semibold">
                                    Classified
                                </span>
                            </div>
                        )
                    )}
                </div>
                {isMobile && showCount < projects.length && (
                    <div className="flex justify-center mt-4">
                        <button
                            className="px-6 py-2 rounded-xl font-semibold border-2 border-gray-700 bg-white/10 dark:bg-gray-600/40 text-gray-300 hover:bg-white/20 hover:dark:bg-gray-800/60 hover:text-white transition-all duration-200"
                            onClick={() => setShowCount(showCount + 3)}
                        >
                            Show More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}