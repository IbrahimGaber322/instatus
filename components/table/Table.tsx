import Image from "next/image";
import Details from "./details/Details";
import { mockEventData } from "@/constants/mockdata";
const Table = () => {
  const headings: string[] = ["ACTOR", "ACTING", "DATE"];

  return (
    <div className="overflow-x-auto h-full bg-white lg:overflow-x-visible">
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
          {mockEventData.map((data, i) => (
            <Details
              id={data.id}
              object={data.object}
              actor_id={data.actor_id}
              action={data.action}
              actor_name={data.actor_name}
              group={data.group}
              target_id={data.target_id}
              target_name={data.target_name}
              location={data.location}
              occurred_at={data.occurred_at}
              metadata={data.metadata}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
