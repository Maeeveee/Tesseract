import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form({ notes, setNotes, editingNote, setEditingNote }) {
    const [noteText, setNoteText] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (editingNote !== null) {
            setNoteText(editingNote.text);
        }
    }, [editingNote]);

    const handleChange = (e) => {
        setNoteText(e.target.value);
    };

    const handleSave = () => {
        let newNotes;
        if (editingNote !== null) {
            newNotes = notes.map((n, idx) =>
                idx === editingNote.index ? { text: noteText } : n
            );
        } else {
            newNotes = [...notes, { text: noteText }];
        }
        setNotes(newNotes);
        localStorage.setItem("my_notes", JSON.stringify(newNotes));
        setNoteText("");
        setEditingNote(null);
        navigate("/history");
    };

    const handleDelete = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
        localStorage.setItem("my_notes", JSON.stringify(updatedNotes));
        setNoteText("");
        setEditingNote(null);
        navigate("/history");
    };


    useEffect(() => {
        const saved = localStorage.getItem("my_notes");
        if (saved) {
            setNotes(JSON.parse(saved));
        }
    }, []);

    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <textarea
                    rows={28}
                    value={noteText}
                    onChange={handleChange}
                    className="outline-none block p-2.5 w-full text-sm text-white bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                    placeholder="Add notes..."
                ></textarea>
                <div className="flex justify-center lg:justify-end">
                {editingNote !== null && (
                        <button
                            type="button"
                            onClick={() => handleDelete(editingNote.index)}
                            className="text-white bg-red-700 hover:bg-gray-900 font-medium rounded-full text-sm px-5 py-2.5 me-2 mt-4"
                        >
                            Delete
                        </button>
                    )}
                    <button type="button" onClick={handleSave} className=" text-white bg-gray-700 hover:bg-gray-900 font-medium rounded-full text-sm px-7 py-2.5 me-2 mt-4">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
