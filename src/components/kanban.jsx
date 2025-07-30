import React, { useState, useEffect } from 'react';

export default function Kanban() {
  // Inisialisasi state dari localStorage jika ada, fallback ke default
  const [columns, setColumns] = useState(() => {
    const savedColumns = localStorage.getItem('kanban-columns');
    return savedColumns
      ? JSON.parse(savedColumns)
      : {
          todo: {
            id: 'todo',
            title: 'To Do',
            tasks: [],
          },
          inProgress: {
            id: 'inProgress',
            title: 'In Progress',
            tasks: [],
          },
          done: {
            id: 'done',
            title: 'Done',
            tasks: [],
          },
        };
  });

  // State untuk form input (tambah task)
  const [newTask, setNewTask] = useState('');
  // State untuk edit task
  const [editingTask, setEditingTask] = useState(null); // { id, columnId, content }

  // Simpan columns ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem('kanban-columns', JSON.stringify(columns));
  }, [columns]);

  // Fungsi untuk menambah task baru
  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const newTaskId = `task-${Date.now()}`;
    setColumns({
      ...columns,
      todo: {
        ...columns.todo,
        tasks: [...columns.todo.tasks, { id: newTaskId, content: newTask }],
      },
    });
    setNewTask('');
  };

  // Fungsi untuk memindahkan task ke kolom lain
  const moveTask = (taskId, sourceColumnId, destColumnId) => {
    const sourceColumn = columns[sourceColumnId];
    const destColumn = columns[destColumnId];
    const sourceTasks = [...sourceColumn.tasks];
    const destTasks = [...destColumn.tasks];
    const [movedTask] = sourceTasks.splice(
      sourceTasks.findIndex((task) => task.id === taskId),
      1
    );

    destTasks.push(movedTask);
    setColumns({
      ...columns,
      [sourceColumnId]: {
        ...sourceColumn,
        tasks: sourceTasks,
      },
      [destColumnId]: {
        ...destColumn,
        tasks: destTasks,
      },
    });
    // Hentikan edit mode jika task yang dipindahkan sedang diedit
    if (editingTask && editingTask.id === taskId) {
      setEditingTask(null);
    }
  };

  // Fungsi untuk memulai edit task
  const startEditTask = (taskId, columnId, content) => {
    setEditingTask({ id: taskId, columnId, content });
  };

  // Fungsi untuk menyimpan perubahan task
  const saveTask = (taskId, columnId, newContent) => {
    if (!newContent.trim()) return; // Jangan simpan jika kosong

    setColumns({
      ...columns,
      [columnId]: {
        ...columns[columnId],
        tasks: columns[columnId].tasks.map((task) =>
          task.id === taskId ? { ...task, content: newContent } : task
        ),
      },
    });
    setEditingTask(null); // Keluar dari edit mode
  };

  // Fungsi untuk membatalkan edit
  const cancelEdit = () => {
    setEditingTask(null);
  };

  return (
    <section className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-bold text-white mb-4">Kanban</h2>
        </div>
        <div className="container mx-auto">
          {/* Form untuk menambah task */}
          <form onSubmit={addTask} className="mb-6 flex gap-2">
            <input
              type="text"
              className="flex-1 border border-gray-700 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-gray-700 text-sky-50"
              placeholder="Add new task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              type="submit"
              className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-5 py-2.5"
            >
              Add Task
            </button>
          </form>

          {/* Kanban Board */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.values(columns).map((column) => (
              <div key={column.id} className="border-2 border-gray-700 border-dashed rounded-lg shadow-md">
                <div className="text-gray-200 p-4 border-b-2 bg-gray-800/60 border-gray-700 border-dashed rounded-lg">
                  <h5 className="font-bold text-lg ">{column.title}</h5>
                </div>
                <div className="p-4 min-h-[200px]">
                  {column.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="text-gray-200 p-3 mb-2 border-2 border-gray-700 border-dashed rounded-lg shadow-sm hover:shadow-md transition flex justify-between items-center"
                    >
                      {editingTask && editingTask.id === task.id ? (
                        // Mode Edit
                        <div className="flex-1 flex gap-2">
                          <input
                            type="text"
                            className="flex-1 border border-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-700 text-sky-50"
                            value={editingTask.content}
                            onChange={(e) =>
                              setEditingTask({ ...editingTask, content: e.target.value })
                            }
                          />
                          <button
                            className="text-gray-200 text-sm py-1"
                            onClick={() => saveTask(task.id, column.id, editingTask.content)}
                          >
                            Save
                          </button>
                          <button
                            className="text-gray-200 text-sm py-1"
                            onClick={cancelEdit}
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        // Mode Tampilan
                        <>
                          <span>{task.content}</span>
                          <div className="flex gap-2">
                            {column.id !== 'todo' && (
                              <button
                                className="text-gray-200 hover:text-gray-200 text-sm"
                                onClick={() =>
                                  moveTask(
                                    task.id,
                                    column.id,
                                    column.id === 'inProgress' ? 'todo' : 'inProgress'
                                  )
                                }
                              >
                                ←
                              </button>
                            )}
                            <button
                              className="text-gray-200 hover:text-gray-200 text-sm"
                              onClick={() => startEditTask(task.id, column.id, task.content)}
                            >
                              Edit
                            </button>
                            {column.id !== 'done' && (
                              <button
                                className="text-gray-200 hover:text-gray-200 text-sm"
                                onClick={() =>
                                  moveTask(
                                    task.id,
                                    column.id,
                                    column.id === 'todo' ? 'inProgress' : 'done'
                                  )
                                }
                              >
                                →
                              </button>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}