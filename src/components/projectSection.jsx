export default function ProjectSection() {
    return (
        <div className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div className="p-6">
                <h1 className="text-4xl text-white font-bold mb-4">My Projects</h1>
                <p className="text-xl text-gray-400 indent-8">Here you can find a showcase of my work as a <span className="font-semibold text-gray-200">Raja React</span>.</p>
                <iframe
                    src="https://kalku-fit.vercel.app/"
                    title="Kalku Fit"
                    className="w-80 h-56 rounded-lg border shadow-md"
                    allowFullScreen
                />
            </div>
        </div>
    );
}