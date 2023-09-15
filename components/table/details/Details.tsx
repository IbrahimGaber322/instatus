"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { EventType, mockEventData } from "@/constants/mockdata";
import TableDataDetails from "./table_data/TableDataDetails";
const Details = ({
  id,
  object,
  actor_id,
  actor_name,
  group,
  action_id,
  action_object,
  action_name,
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
  const [trWidth, setTrWidth] = useState<number | null>(null); // State to hold the width of the <tr> element
  const trRef: any = useRef(null);

  useEffect(() => {
    // Calculate and set the width of the <tr> element when details change
    if (trRef.current && details) {
      setTrWidth(trRef.current.offsetWidth);
    }
  }, [details]);
  console.log(`trWidth:${trWidth}`);
  return (
    <Fragment key={action_id}>
      {details ? (
        <tr ref={trRef} onClick={() => setDetails(!details)}>
          <td colSpan={3}>
            <div className="lg:w-[103%] lg:left-[-1.5%] relative bg-white rounded-xl border-2 shadow-slate-400 shadow  ">
              <div className="w-full lg:w-[97.5901%]">
                <table className="w-full table-fixed lg:ml-3.5">
                  <thead>
                    <tr>
                      {headings_1.map((heading) => (
                        <th
                          className="px-6 py-3 font-medium text-gray-600 text-lg lg:text-xl text-left"
                          key={heading}
                        >
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <TableDataDetails>{action_name}</TableDataDetails>
                      <TableDataDetails>{action_name}</TableDataDetails>
                      <TableDataDetails>{action_name}</TableDataDetails>
                    </tr>
                    <tr>
                      <TableDataDetails>{action_name}</TableDataDetails>
                      <TableDataDetails>{action_name}</TableDataDetails>
                    </tr>
                    <tr>
                      <TableDataDetails>{action_name}</TableDataDetails>
                      <TableDataDetails>{action_name}</TableDataDetails>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </td>
        </tr>
      ) : (
        <tr onClick={() => setDetails(!details)}>
          <td className="px-6 py-4 text-sm lg:text-base">
            <div
              style={{ background: getRandomGradient() }}
              className="inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full mr-2"
            >
              <span className="text-white font-semibold">
                {action_name.charAt(0).toUpperCase()}
              </span>
            </div>

            {action_name}
          </td>
          <td className="text-sm lg:text-base px-6 py-4">{action_name}</td>
          <td className="text-sm lg:text-base px-6 py-4 break-words">{occurred_at}</td>
        </tr>
      )}
    </Fragment>
  );
};

export default Details;
