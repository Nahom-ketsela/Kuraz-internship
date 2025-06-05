import { useState } from 'react';

function TaskManager() {
  // Initial tasks data
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Take a test', completed: false },
    { id: 2, title: 'Eat dinner', completed: false },
    { id: 3, title: 'Take a shower', completed: true },
    { id: 4, title: 'Read 20 Pages', completed: true },
  ]);

  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', or 'completed'

  // Add a new task
  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    const task = {
      id: Date.now(),
      title: newTask,
      completed: false
    };

    setTasks([...tasks, task]);
    setNewTask('');
  };

  // Toggle task completion status
  const handleToggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete a task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Filter tasks based on selected filter
  const getFilteredTasks = () => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div className="min-h-screen bg-gray-600 p-4">
      <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-md">

        {/* Header */}
        <div className="bg-gray-700 p-4 rounded-t-lg">
          <h1 className="text-2xl font-bold text-white text-center">
            Task Manager
          </h1>
        </div>

        {/* Main content */}
        <div className="p-4">

          {/* Add task form */}
          <div className="flex mb-4">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
              placeholder="Enter a new task..."
              className="flex-1 p-2 bg-gray-700 text-white border border-gray-600 rounded-l focus:outline-none"
            />
            <button
              onClick={handleAddTask}
              className="px-4 bg-gray-600 text-white rounded-r hover:bg-gray-500"
            >
              Add
            </button>
          </div>

          {/* Filter buttons */}
          <div className="flex justify-around mb-4 bg-gray-700 p-1 rounded">
            {['all', 'active', 'completed'].map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-3 py-1 rounded text-sm ${filter === option ? 'bg-gray-600 text-white' : 'text-gray-300'}`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>

          {/* Task list */}
          <ul className="space-y-2">
            {filteredTasks.map(task => (
              <li
                key={task.id}
                className="flex items-center justify-between p-3 bg-gray-700 rounded border border-gray-600"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleTask(task.id)}
                    className="mr-3"
                  />
                  <span className={task.completed ? 'line-through text-gray-400' : 'text-white'}>
                    {task.title}
                  </span>
                </div>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="text-gray-400 hover:text-red-400"
                >
                  Delete

                </button>
              </li>
            ))}
          </ul>

          {/* Empty state message */}
          {filteredTasks.length === 0 && (
            <p className="text-center text-gray-400 mt-4">
              {filter === 'all'
                ? 'No tasks found. Add your first task!'
                : `No ${filter} tasks`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskManager;