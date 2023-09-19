import Image from "next/image";
import Details from "./details/Details";
import { FetchedEventType } from "@/constants/types";
const Table = ({
  events,
  filterMenuItems,
}: {
  events: FetchedEventType[];
  filterMenuItems: { name: string; checked: boolean }[];
}) => {
  const headings: string[] = ["ACTOR", "ACTION", "DATE"];
  console.log(events);

  return (
    <>
      {events.length > 0 ? (
        <div className="overflow-x-auto h-full bg-white lg:overflow-x-visible flex-grow">
          <table className="w-full  lg:table-fixed">
            <thead>
              <tr className="bg-gray-200">
                {headings.map((heading) => (
                  <th
                    className="px-6 py-3 font-medium text-gray-600 uppercase text-lg lg:text-xl text-left"
                    key={heading}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {events.map((data, i) => (
                <Details
                  key={i}
                  id={data.id}
                  object={data.object}
                  actor_id={data.actor_id}
                  action={data.action[0]}
                  actor_name={data.actor_name}
                  group={data.group}
                  target_id={data.target_id}
                  target_name={data.target_name}
                  location={data.location}
                  occurred_at={data.occurred_at}
                  metadata={data.metadata[0]}
                  filterMenuItems={filterMenuItems}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-white h-full w-full p4">
          <p className="text-center text-lg font-semibold">No Events.</p>
        </div>
      )}
    </>
  );
};

export default Table;
