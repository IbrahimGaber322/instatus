import Image from "next/image";

const Table = () => {
  const headings: string[] = ["ACTOR", "ACTING", "DATE"];
  const mockData: { actor: string; action: string; date: string }[] = [
    {
      actor: "ali@instatus.com",
      action: "user.searched_activity_log_events",
      date: "Aug 7, 5:38 PM",
    },
    {
      actor: "john@example.com",
      action: "user.logged_in",
      date: "Sep 2, 9:15 AM",
    },
    {
      actor: "susan@example.com",
      action: "user.updated_profile",
      date: "Jul 15, 3:22 PM",
    },
    {
      actor: "mike@example.com",
      action: "user.added_new_item",
      date: "Oct 12, 11:47 AM",
    },
  ];
  return (
    <div className="overflow-x-auto h-full bg-white">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            {headings.map((heading) => (
              <th
                className="px-6 py-3 font-medium text-gray-600 uppercase text-xl text-left"
                key={heading}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mockData.map((row, i) => (
            <tr className="!h-20" key={i}>
              <td className="whitespace-nowrap px-6 py-4">
                {
                  <div className="inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-600 mr-2">
                    <span className="font-medium text-gray-600 dark:text-gray-300">
                      {row.actor.charAt(0).toUpperCase()}
                    </span>
                  </div>
                }
                {row.actor}
              </td>
              <td className="whitespace-nowrap px-6 py-4">{row.action}</td>
              <td className="whitespace-nowrap px-6 py-4">{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
