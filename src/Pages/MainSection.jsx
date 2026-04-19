import { useState } from "react";
import { ticketsData } from "../data/ticketData";
import TicketCard from "../components/TicketCard";
import TaskStatus from "../components/TaskStatus";
import ResolvedList from "../components/ResolvedList";
import Banner from "../components/Banner";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainSection = () => {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  // When card clicked → add to Task Status
  const handleAdd = (ticket) => {
    if (!inProgress.find((t) => t.id === ticket.id)) {
      setInProgress([...inProgress, ticket]);
      toast.success("Added to Task Status");
    } else {
      toast.warning("Already added to task!");
    }
  };

  // When Complete button is clicked
  const handleComplete = (id) => {
    const task = inProgress.find((t) => t.id === id);

    // Move to resolved
    setResolved([...resolved, task]);

    // Remove from in-progress
    setInProgress(inProgress.filter((t) => t.id !== id));

    // Remove from main ticket list
    setTickets(tickets.filter((t) => t.id !== id));

    toast.success("Task Completed!");
  };

  return (
    <div className="w-[90%] mx-auto my-10">

      {/* Banner */}
      <Banner inProgress={inProgress.length} resolved={resolved.length} />

      {/* Heading */}
      <h2 className="text-xl font-bold mt-10">Customer Tickets</h2>

      {/* Layout */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-6">

        {/* LEFT SIDE — Tickets */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tickets.length > 0 ? (
            tickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} onAdd={handleAdd} />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-2">
              No more tickets to show.
            </p>
          )}
        </div>

        {/* RIGHT SIDE — Task Status + Resolved */}
        <div>
          <TaskStatus tasks={inProgress} onComplete={handleComplete} />
          <ResolvedList resolved={resolved} />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
