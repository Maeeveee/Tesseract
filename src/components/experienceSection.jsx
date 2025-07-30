export default function ExperienceSection() {
    const steps = [
        {
            icon: (
                <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
                </svg>
            ),
            title: "Education",
            desc: "State Polytechnic of Malang - Informatics Engineering",
            period: "2023 - Present",
        },
        {
            icon: (
                <svg className="w-4 h-4 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M16 21v-2a4 4 0 00-8 0v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            ),
            title: "Internship",
            desc: "Turen Indah Bangunan - Fullstack Developer Intern",
            period: "July - August 2025",
        },
        {
            icon: (
                <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3" />
                    <circle cx="12" cy="12" r="10" />
                </svg>
            ),
            title: "Freelance & Projects",
            desc: "Building CendekiaUM (carried by rio)",
            period: "2024",
            github: "https://github.com/ckckckcz",
        },
        {
            icon: (
                <svg className="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" />
                </svg>
            ),
            title: "Next Journey",
            desc: "I have a big dream, and I need to chase it before I can unfold it here.",
            period: "present - Future",
        },
    ];

    return (
        <section className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div className="p-6">
                <h2 className="text-3xl font-bold text-white mb-8">Experience & Journey</h2>
                <ol className="relative border-s ml-4 border-gray-700">
                    {steps.map((step, idx) => (
                        <li key={idx} className="mb-10 ms-6">
                            <span className="absolute -start-4 flex items-center justify-center w-8 h-8 rounded-full ring-4 ring-[#181924] bg-gray-800">
                                {step.icon}
                            </span>
                            <div className="flex items-center justify-between  lg:flex-row md:flex-row md:items-center md:justify-between">
                                <h3 className="font-semibold text-lg text-gray-100">{step.title}</h3>
                                <span className="text-xs text-gray-400 md:ml-4">{step.period}</span>
                            </div>
                            <p className="text-sm text-gray-400">{step.desc}</p>
                            {step.github && (
                                <a
                                    href={step.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-2 text-blue-400 text-sm"
                                >
                                    visit his github
                                </a>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}