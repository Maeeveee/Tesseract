export default function ProjectSection() {
    return (
        <div className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div className="p-6">
                <h1 className="text-4xl text-white font-bold mb-4">My Projects</h1>
                <p className="text-xl text-gray-400 indent-8">Here you can find a showcase of my work as a <span className="font-semibold text-gray-200">Raja React</span>.</p>

                <div className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-8">
                    <h2 className="text-2xl text-white font-bold p-4">Tesseract</h2>
                    <div className="scale-[0.85] origin-top-left w-[117.6%] h-[117.6%]">
                        <iframe
                            src="https://Tesseract-maeve.vercel.app"
                            width="100%"
                            height="800"
                            className="border-none"
                        ></iframe>
                    </div>
                </div>

                <div className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-8">
                    <h2 className="text-2xl text-white font-bold p-4">Kalku Fit</h2>
                    <div className="scale-[0.85] origin-top-left w-[117.6%] h-[117.6%]">
                        <iframe
                            src="https://kalku-fit.vercel.app"
                            width="100%"
                            height="800"
                            className="border-none"
                        ></iframe>
                    </div>
                </div>


            </div>
        </div>
    );
}