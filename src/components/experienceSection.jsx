export default function ExperienceSection() {
    const steps = [
        {
            icon: (
                <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
                </svg>
            ),
            desc: [
                "Madrasah Aliyah Negeri 1 Malang - Science",
                "State Polytechnic of Malang - Informatics Engineering",
            ],
            period: ["2020 - 2023","2023 - Present"],
        },
        {
            icon: (
                <svg className="w-4 h-4 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M16 21v-2a4 4 0 00-8 0v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            ),
            desc: [
                "Turen Indah Bangunan - Fullstack Developer Intern",
            ],
            period: ["July - August 2025"],
        },
        {
            icon: (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3" />
                    <circle cx="12" cy="12" r="10" />
                </svg>
            ),
            desc: [
                "Building CendekiaUM (carried by rio) - Frontend Developer",
            ],
            period: ["2024",],
            github: "https://github.com/ckckckcz",
        },
        {
            icon: (
                <svg className="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" />
                </svg>
            ),
            desc: [
                "I have a big dream, and I need to chase it before I can unfold it here."
            ],
            period: ["present - Future"],
        },
    ];

    return (
        <section className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div className="p-6">
                <h2 className="text-4xl text-white font-bold mb-4">Experience & Journey</h2>
                <p className="text-md lg:text-xl text-gray-400 mb-8">
                    The journey of <span className="font-semibold text-gray-200">Raja React</span>.
                </p>
                <ol className="relative border-s ml-4 border-gray-700">
                    {steps.map((step, idx) => (
                        <li key={idx} className="mb-10 ms-6">
                            <span className="absolute -start-4 flex items-center justify-center w-8 h-8 rounded-full ring-4 ring-[#181924] bg-gray-800">
                                {step.icon}
                            </span>
                            <h3 className="text-lg font-semibold text-white mb-1">
                                {["Education", "Intern", "Freelance", "Next Journey"][idx]}
                            </h3>
                            {step.desc.map((d, i) => (
                                <div key={i} className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div className="flex flex-col">
                                        <p className="text-sm text-gray-400">{d}</p>
                                        {step.github && idx === 2 && i === 0 && (
                                            <a
                                                href={step.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-400 text-sm mb-2"
                                            >
                                                visit his github
                                            </a>
                                        )}
                                    </div>
                                    <span className="text-xs text-gray-200 md:ml-4 md:text-right mt-1 md:mt-0 min-w-[120px] mb-4">
                                        {Array.isArray(step.period) ? (step.period[i] || "") : (i === 0 ? step.period : "")}
                                    </span>
                                </div>
                            ))}
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}