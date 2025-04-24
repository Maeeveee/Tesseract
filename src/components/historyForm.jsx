import { Link, useNavigate } from "react-router-dom";

export default function HistoryForm({ notes, setEditingNote }) {
    const navigate = useNavigate();

    const handleClick = (note, index) => {
        setEditingNote({ text: note.text, index });
        navigate("/form");
    };

    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-white mb-4">Note History</h2>
                    <Link to="/form" className="mb-4 text-white bg-gray-800 hover:bg-gray-700 text-md font-semibold rounded-full px-3 py-1 inline-block">New</Link>
                </div>
                {notes.map((note, index) => (
                    <div key={index} onClick={() => handleClick(note, index)} className="text-white cursor-pointer p-2 mb-2 rounded bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                        {note.text.substring(0, 100)}...
                    </div>
                ))}
            </div>
        </div>
    );
}
