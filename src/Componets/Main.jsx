import React, { use, useState } from "react";
import { toast } from "react-toastify";
const Main = ({
  fetchTicketsPromise,
  setStatus,
  status,
  setResolved,
  resolved,
}) => {
  const TicketsData = use(fetchTicketsPromise);
  const [tickets, setTickets] = useState(TicketsData);

  const handleCardClick = (ticket) => {
    toast("In-Progress!");
    setStatus([...status, ticket]);
  };

  // hendel btn
  const handleComplete = (task) => {
    toast("☑️ Completed!");
    setResolved([...resolved, task]);
    setStatus(status.filter((tas) => tas.id !== task.id));
    setTickets(tickets.filter((ticket) => ticket.id !== task.id));
  };
  return (
    <section className="max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
      {/* Left Div */}
      <div className="md:col-span-2 p-2 rounded sm:grid grid-cols-1">
        <h1 className="font-bold text-black mb-4">Customer Tickets</h1>
        {/* {
    
        {/* Tickets Grid */}
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
          {tickets.map((Tik) => (
            <div
              onClick={() => handleCardClick(Tik)}
              key={Tik.id}
              className="p-5 rounded-2xl shadow-md bg-white"
            >
              <div className="flex justify-between items-center mb-2">
                <h2>{Tik.title}</h2>
                <h2
                  className={`px-2 py-[2px] rounded-lg font-medium
    ${
      Tik.status === "Open"
        ? "text-white bg-green-600"
        : Tik.status === "In-Progress"
        ? "text-white bg-amber-500"
        : Tik.status === "Closed"
        ? "text-white bg-red-600"
        : "text-green-600"
    }`}
                >
                  {Tik.status}
                </h2>
              </div>
              <p className="mb-3">{Tik.description}</p>
              <div className="flex justify-between items-center gap-3 text-sm text-gray-600">
                <div className="flex gap-2 items-center">
                  <span>{Tik.id}</span>
                  <span
                    className={`font-medium ${
                      Tik.priority === "High"
                        ? "text-white bg-red-500 p-[2px] rounded-lg"
                        : Tik.priority === "Medium"
                        ? "text-white bg-amber-500 p-[2px] rounded-lg"
                        : "text-white bg-green-600 p-[2px] rounded-lg"
                    }`}
                  >
                    {Tik.priority}
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <span>{Tik.customer}</span>
                  <span>{Tik.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side */}
      <aside className="flex flex-col gap-5 w-full md:col-span-1">
        {/* Task Status */}

        <div className="bg-green-300 p-5 rounded shadow-2xl">
          <h1 className="font-bold text-black mb-2">Task Status</h1>
          {status.map((task) => (
            <div key={task.id} className="mb-2 p-3 bg-gray-100 rounded-xl">
              <h2 className="font-semibold">{task.title}</h2>

             <button className="relative bg-[#02A53B] mt-3 rounded-lg p-[5px] text-white w-full 
                   overflow-hidden transition-all duration-500 
                   hover:shadow-[0_0_20px_#02A53B]"
        onClick={() => handleComplete(task)}>
  
  
  <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-[#02A53B] to-green-600 
                   -translate-x-full hover:translate-x-0 transition-transform duration-500">
  </span>
  
  <span className="relative z-10">Complete</span>
</button>

            </div>
          ))}
        </div>

        {/* Resolved Tasks */}
        <div className="bg-green-200 p-5 rounded shadow-2xl">
          <h1 className="font-bold text-black mb-2">Resolved Task</h1>
          {resolved.map((task) => (
            <div className="mb-2 p-3 bg-gray-200 rounded-2xl">
              <h2 className="font-semibold">{task.title}</h2>
              <h2 className="text-green-600">☑️Complete</h2>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
};

export default Main;
