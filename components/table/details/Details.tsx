"use client";
import { Fragment, useState } from "react";
import { EventType } from "@/constants/mockdata";
import TableDataDetails from "./table_data/TableDataDetails";
import moment from "moment";
const Details = ({
  id,
  object,
  actor_id,
  actor_name,
  group,
  action,
  target_id,
  target_name,
  location,
  occurred_at,
  metadata,
}: EventType) => {
  const headings_1: string[] = ["ACTOR", "ACTING", "DATE"];
  const headings_2: string[] = ["METADATA", "Target"];
  const [details, setDetails] = useState<boolean>(false);
  // Function to generate a random gradient background or a solid color
  const getRandomGradient = () => {
    const random = Math.random();
    if (random < 0.3) {
      // 30% chance of a solid color
      const hue = Math.floor(Math.random() * 40) + 330; // Shades of red/violet/orange
      return `hsl(${hue}, 70%, 50%)`;
    } else {
      // 70% chance of a gradient
      const hue1 = Math.floor(Math.random() * 40) + 330; // Shades of red/violet/orange
      const hue2 = (hue1 + 20) % 360; // Slightly different hue for gradient effect
      return `linear-gradient(45deg, hsl(${hue1}, 70%, 50%), hsl(${hue2}, 70%, 50%))`;
    }
  };

  const date = moment(occurred_at).utc().format("MMM DD, h:m A");

  return (
    <Fragment key={action.id}>
      {details ? (
        <tr onClick={() => setDetails(!details)}>
          <td colSpan={3}>
            <div className="w-full lg:w-[103%] lg:left-[-1.5%] relative bg-white rounded-xl border-2 shadow-slate-400 shadow">
              <div className="w-full lg:w-[97.5901%]">
                <table className="w-full  lg:table-fixed lg:ml-3.5">
                  <thead>
                    <tr>
                      {headings_1.map((heading) => (
                        <th
                          className="px-6 py-3 font-medium text-gray-400 text-lg lg:text-xl text-left"
                          key={heading}
                        >
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <TableDataDetails title="Name">
                        {actor_name}
                      </TableDataDetails>

                      <TableDataDetails title="Email">
                        {action.name}
                      </TableDataDetails>
                      <TableDataDetails title="Readable">
                        {date}
                      </TableDataDetails>
                    </tr>
                    <tr>
                      <TableDataDetails title="Email">
                        {target_name}
                      </TableDataDetails>
                      <TableDataDetails title="Object">
                        {action.object}
                      </TableDataDetails>
                    </tr>
                    <tr>
                      <TableDataDetails title="ID">{actor_id}</TableDataDetails>
                      <TableDataDetails title="ID">
                        {action.id}
                      </TableDataDetails>
                    </tr>
                  </tbody>
                </table>
                <table className="w-2/3 table-fixed lg:ml-3.5">
                  <thead>
                    <tr>
                      {headings_2.map((heading) => (
                        <th
                          className="px-6 py-3 font-medium text-gray-400 text-lg lg:text-xl text-left"
                          key={heading}
                        >
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <TableDataDetails title="Redirect">
                        {metadata.redirect}
                      </TableDataDetails>
                      <TableDataDetails title="Name">
                        {target_name}
                      </TableDataDetails>
                    </tr>
                    <tr>
                      <TableDataDetails title="Description">
                        {metadata.description}
                      </TableDataDetails>
                      <TableDataDetails title="ID">
                        {target_id}
                      </TableDataDetails>
                    </tr>
                    <tr>
                      <TableDataDetails title="ID">
                        {metadata.x_request_id}
                      </TableDataDetails>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </td>
        </tr>
      ) : (
        <tr
          className="cursor-pointer hover:bg-gray-200"
          onClick={() => setDetails(!details)}
        >
          <td className="whitespace-nowrap px-6 py-4 text-sm lg:text-base">
            <div
              style={{ background: getRandomGradient() }}
              className="inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full mr-2"
            >
              <span className="text-white font-semibold">
                {target_name.charAt(0).toUpperCase()}
              </span>
            </div>

            {action.name}
          </td>
          <td className="whitespace-nowrap text-sm lg:text-base px-6 py-4">
            {action.name}
          </td>
          <td className="whitespace-nowrap text-sm lg:text-base px-6 py-4 break-words">
            {date}
          </td>
        </tr>
      )}
    </Fragment>
  );
};

export default Details;
