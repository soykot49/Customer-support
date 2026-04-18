const TaskStatus = ({ tasks, onComplete }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Task Status</h2>

      {/* Empty State */}
      {tasks.length === 0 && (
        <div className="bg-white text-gray-500 py-4 rounded-lg text-center border border-gray-200">
          No tasks in progress yet.
        </div>
      )}

      {/* Task List */}
      {tasks.map((t) => (
        <div
          key={t.id}
          className="bg-white shadow-sm border border-gray-200 p-3 rounded-lg mb-3 flex flex-col gap-3"
        >
          {/* Task Title */}
          <div className="font-medium text-[14px]">
            {t.title}
          </div>

          {/* Full-width Button (always below the title) */}
          <button
            onClick={() => onComplete(t.id)}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded text-sm w-full"
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskStatus;
