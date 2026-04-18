const TicketCard = ({ ticket, onAdd }) => {
  // Status colors
  const statusBadge = {
    Open: "bg-green-100 text-green-700",
    "In-Progress": "bg-yellow-100 text-yellow-700",
  }[ticket.status] || "bg-gray-200 text-gray-700";

  // Priority colors
  const priorityColor = {
    "HIGH PRIORITY": "text-red-600",
    "MEDIUM PRIORITY": "text-yellow-500",
    "LOW PRIORITY": "text-green-600",
  }[ticket.priority] || "text-gray-600";

  return (
    <div
      onClick={() => onAdd(ticket)}
      className="bg-white shadow-sm hover:shadow-lg hover:bg-gray-50 transition cursor-pointer p-4 rounded-lg border border-gray-200"
    >
      {/* Title + Status Badge */}
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-[15px] leading-5 flex-1 pr-2">
          {ticket.title}
        </h3>

        <span
          className={`flex items-center gap-1 px-3 py-[3px] rounded-full text-xs font-medium ${statusBadge}`}
        >
          {/* Dot */}
          <span className="h-2 w-2 rounded-full bg-current"></span>
          {ticket.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-2 line-clamp-2 overflow-hidden max-h-[40px]">
        {ticket.description}
      </p>

      {/*id+ priority */}
      <div className="flex items-center gap-2 mt-3">
        <span className="text-xs font-semibold text-gray-500">
          #{ticket.id}
        </span>

        <span
          className={`text-xs font-extrabold uppercase tracking-tight ${priorityColor}`}
        >
          {ticket.priority}
        </span>
      </div>

      {/* Customer + Date */}
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>{ticket.customer}</span>
        <span>{ticket.createdAt}</span>
      </div>
    </div>
  );
};

export default TicketCard;
