"use client";
import { Fragment, useState } from "react";
import { DetailsProps } from "@/constants/types";
import TableDataDetails from "./table_data/TableDataDetails";
import CloseCircleIcon from "@/assets/icons/CloseCircleIcon";
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
  filterMenuItems,
}: DetailsProps) => {
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
    <Fragment>
      {details ? (
        <tr>
          <td colSpan={3}>
            <div className="w-full lg:w-[103%] lg:left-[-1.5%] relative bg-white rounded-xl border-2 shadow-slate-400 shadow">
              <button
                onClick={() => setDetails(!details)}
                className="absolute top-0 right-0 m-2 bg-white rounded-full hover:bg-gray-200"
              >
                <CloseCircleIcon />
              </button>
              <div className="w-full lg:w-[97.5901%]">
                <table className="w-full  lg:table-fixed lg:ml-3.5">
                  <thead>
                    <tr>
                      {filterMenuItems.slice(0, 3).map(
                        (item, i) =>
                          item?.checked && (
                            <th
                              className="px-6 py-3 font-medium text-gray-400 text-lg lg:text-xl text-left"
                              key={i}
                            >
                              {item?.name}
                            </th>
                          )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {filterMenuItems.map((item, i) => {
                        if (item?.name === "ACTOR" && item?.checked) {
                          return (
                            <TableDataDetails title="Name" key={i}>
                              {actor_name}
                            </TableDataDetails>
                          );
                        } else if (item?.name === "ACTION" && item?.checked) {
                          return (
                            <TableDataDetails title="Email" key={i}>
                              {action?.name}
                            </TableDataDetails>
                          );
                        } else if (item?.name === "DATE" && item?.checked) {
                          return (
                            <TableDataDetails title="Readable" key={i}>
                              {date}
                            </TableDataDetails>
                          );
                        }
                        return null;
                      })}
                    </tr>
                    <tr>
                      {filterMenuItems.map((item, i) => {
                        if (item?.name === "ACTOR" && item?.checked) {
                          return (
                            <TableDataDetails title="Email" key={i}>
                              {target_name}
                            </TableDataDetails>
                          );
                        } else if (item?.name === "ACTION" && item?.checked) {
                          return (
                            <TableDataDetails title="Object" key={i}>
                              {action?.object}
                            </TableDataDetails>
                          );
                        }
                        return null;
                      })}
                    </tr>
                    <tr>
                      {filterMenuItems.map((item, i) => {
                        if (item?.name === "ACTOR" && item?.checked) {
                          return (
                            <TableDataDetails title="ID" key={i}>
                              {actor_id}
                            </TableDataDetails>
                          );
                        } else if (item?.name === "ACTION" && item?.checked) {
                          return (
                            <TableDataDetails title="ID" key={i}>
                              {action?.id}
                            </TableDataDetails>
                          );
                        }
                        return null;
                      })}
                    </tr>
                  </tbody>
                </table>
                <table className="w-2/3 table-fixed lg:ml-3.5">
                  <thead>
                    <tr>
                      {filterMenuItems.slice(3, 5).map(
                        (item, i) =>
                          item?.checked && (
                            <th
                              className="px-6 py-3 font-medium text-gray-400 text-lg lg:text-xl text-left"
                              key={i}
                            >
                              {item?.name}
                            </th>
                          )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {filterMenuItems.map((item, i) => {
                        if (item?.name === "METADATA" && item?.checked) {
                          return (
                            <TableDataDetails title="Redirect" key={i}>
                              {metadata?.redirect}
                            </TableDataDetails>
                          );
                        } else if (item?.name === "TARGET" && item?.checked) {
                          return (
                            <TableDataDetails title="Name" key={i}>
                              {target_name}
                            </TableDataDetails>
                          );
                        }
                        return null;
                      })}
                    </tr>
                    <tr>
                      {filterMenuItems.map((item, i) => {
                        if (item?.name === "METADATA" && item?.checked) {
                          return (
                            <TableDataDetails title="Description" key={i}>
                              {metadata?.description}
                            </TableDataDetails>
                          );
                        } else if (item?.name === "TARGET" && item?.checked) {
                          return (
                            <TableDataDetails title="ID" key={i}>
                              {target_id}
                            </TableDataDetails>
                          );
                        }
                        return null;
                      })}
                    </tr>
                    <tr>
                      {filterMenuItems.map((item, i) => {
                        if (item?.name === "METADATA" && item?.checked) {
                          return (
                            <TableDataDetails title="ID" key={i}>
                              {metadata?.x_request_id}
                            </TableDataDetails>
                          );
                        }
                        return null;
                      })}
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
                {target_name?.charAt(0).toUpperCase()}
              </span>
            </div>

            {target_name}
          </td>
          <td className="whitespace-nowrap text-sm lg:text-base px-6 py-4">
            {action?.name}
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
