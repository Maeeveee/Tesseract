export default function Sudoku() {
    return (
        <section className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-4xl font-bold text-white mb-4">Sudoku</h2>
                </div>
                <div className="flex justify-center bg-white">
                    <iframe
                        frameBorder="0"
                        scrolling="no"
                        src="https://mczak.com/code/sudoku/suframe/"
                        style={{ border: "0px solid #eee", overflow: "hidden", width: "400px", height: "500px" }}
                        width="400"
                    />
                </div>
            </div>
        </section>
    );
}
