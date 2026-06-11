"use client";

export default function OrganizationManageEvent({ events = [] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900 p-4">
      
      {/* Title */}
      <h2 className="text-xl font-bold text-white mb-4">
        All Events
      </h2>

      <table className="w-full text-left text-sm text-slate-300">
        <thead className="text-slate-400 border-b border-slate-700">
          <tr>
            <th className="py-3 px-2">Title</th>
            <th className="py-3 px-2">Category</th>
            <th className="py-3 px-2">Date</th>
            <th className="py-3 px-2">Seats</th>
            <th className="py-3 px-2">Price</th>
            <th className="py-3 px-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {events.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="text-center py-10 text-slate-500"
              >
                No events found
              </td>
            </tr>
          ) : (
            events.map((event, index) => (
              <tr
                key={index}
                className="border-b border-slate-800 hover:bg-slate-800/50 transition"
              >
                {/* Title */}
                <td className="py-3 px-2 font-medium text-white">
                  {event.title}
                </td>

                {/* Category */}
                <td className="py-3 px-2 capitalize">
                  {event.category}
                </td>

                {/* Date */}
                <td className="py-3 px-2">
                  {event.date}
                </td>

                {/* Seats */}
                <td className="py-3 px-2">
                  {event.seats}
                </td>

                {/* Price */}
                <td className="py-3 px-2">
                  ${event.price}
                </td>

                {/* Status */}
                <td className="py-3 px-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.status === "active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {event.status || "active"}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}