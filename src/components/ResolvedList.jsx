const ResolvedList = ({ resolved }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mt-5 shadow-sm">
      <h2 className="text-xl font-bold mb-4">Resolved Tasks</h2>

      {/* Empty State */}
      {resolved.length === 0 && (
        <div className="bg-white text-gray-500 py-4 rounded-lg text-center border border-gray-200">
          No resolved tasks yet.
        </div>
      )}

      {/* Resolved Task List */}
      {resolved.map((r) => (
        <div
          key={r.id}
          className="bg-[#E0E7FF] border border-blue-200 shadow-sm p-3 rounded-lg mb-3"
        >
          <p className="font-medium text-[14px]">{r.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ResolvedList;
