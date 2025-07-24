import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Dashboard from './components/dashboard';
import Form from './components/form';
import Music from "./components/music";
import Kanban from "./components/kanban";
import HistoryForm from './components/historyForm';
import Sudoku from "./components/sudoku";
import './assets/css/App.css';

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/music" element={<Music />} />
        <Route path="/puzzle" element={<Sudoku />} />
        <Route path="/form" element={
          <Form 
            notes={notes} 
            setNotes={setNotes} 
            editingNote={editingNote}
            setEditingNote={setEditingNote}
          />
        } />
        <Route path="/history" element={
          <HistoryForm 
            notes={notes}
            setEditingNote={setEditingNote}
          />
        } />
      </Routes>
    </>
  );
}

export default App;
