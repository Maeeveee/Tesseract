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
            certificate: "https://drive.google.com/file/d/1ovgBwzPF0ps9C-5OnP3r0JHZ1x815bC_/view?usp=drive_link",
        },
        {
            icon: (
                <svg className="w-4 h-4 text-yellow-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
            ),
            desc: [
                "Hacksphere (President University) - Contestant",
            ],
            period: ["October 2025"],
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
                <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: "rotate(45deg)" }}
                >
                    <path
                        d="M476.811,492.379L268.639,8.332c-2.172-5.047-7.141-8.328-12.641-8.328s-10.469,3.281-12.641,8.328
                        L35.186,492.379c-2.656,5.625-1.203,12.344,3.547,16.359c4.766,4.016,11.625,4.359,16.734,0.813l200.531-139.032
                        l200.547,139.032c5.109,3.547,11.969,3.203,16.734-0.813C478.029,504.723,479.467,498.004,476.811,492.379z"
                        fill="#ff8000"
                    />
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
                                {["Education", "Intern", "Competition", "Freelance", "Next Journey"][idx]}
                            </h3>
                            {step.desc.map((d, i) => (
                                <div key={i} className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div className="flex flex-col">
                                        <p className="text-sm text-gray-400">{d}</p>
                                        {step.certificate && idx === 1 && i === 0 && (
                                            <a
                                                href={step.certificate}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-green-400 text-sm mb-2 self-start"
                                            >
                                                view certificate
                                            </a>
                                        )}
                                        {step.github && idx === 3 && i === 0 && (
                                            <a
                                                href={step.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-400 text-sm mb-2 self-start"
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