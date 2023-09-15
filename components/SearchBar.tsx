"use client";
import { useState } from "react";
import FilterIcon from "../assets/filter-svgrepo-com.svg";
import DownloadIcon from "../assets/download-svgrepo-com.svg";
import Image from "next/image";
const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <form onSubmit={handleSubmit} className="m-5">
      <div className="h-10 flex w-full rounded-lg overflow-hidden border-gray-300 divide-x-2 ">
        <input
          type="search"
          value={search}
          onChange={handleChange}
          className="h-10 w-full border-none focus:border-none focus:shadow-none ring-transparent"
          id="search"
          placeholder="Search name, email or action..."
          required
        />
        <button className="p-2.5 text-sm font-medium h-10 w-fit bg-white hover:bg-slate-200 focus:bg-slate-300 flex  justify-center items-center text-gray-500">
          <svg
            viewBox="0 0 25 25"
            width="20"
            height="20"
            className="mr-1 fill-gray-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17Z"
              ></path>{" "}
            </g>
          </svg>
          FILTER
        </button>
        <button className="p-2.5 text-sm font-medium h-10 w-fit bg-white hover:bg-slate-200 focus:bg-slate-300  flex justify-center items-center text-gray-500">
          <svg
            viewBox="0 0 25 25"
            width="15"
            height="15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 fill-gray-500"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V12.9726L9.56944 11.0119C9.29988 10.6974 8.8264 10.661 8.51191 10.9306C8.19741 11.2001 8.16099 11.6736 8.43056 11.9881L11.4306 15.4881C11.573 15.6543 11.7811 15.75 12 15.75C12.2189 15.75 12.427 15.6543 12.5694 15.4881L15.5694 11.9881C15.839 11.6736 15.8026 11.2001 15.4881 10.9306C15.1736 10.661 14.7001 10.6974 14.4306 11.0119L12.75 12.9726L12.75 2C12.75 1.58579 12.4142 1.25 12 1.25Z"
              ></path>{" "}
              <path d="M14.25 9V9.37828C14.9836 9.11973 15.8312 9.2491 16.4642 9.79167C17.4077 10.6004 17.517 12.0208 16.7083 12.9643L13.7083 16.4643C13.2808 16.963 12.6568 17.25 12 17.25C11.3431 17.25 10.7191 16.963 10.2916 16.4643L7.29163 12.9643C6.48293 12.0208 6.5922 10.6004 7.53568 9.79167C8.16868 9.2491 9.01637 9.11973 9.74996 9.37828V9H8C5.17157 9 3.75736 9 2.87868 9.87868C2 10.7574 2 12.1716 2 15V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 7.99999 22H16C18.8284 22 20.2426 22 21.1213 21.1213C22 20.2426 22 18.8284 22 16V15C22 12.1716 22 10.7574 21.1213 9.87868C20.2426 9 18.8284 9 16 9H14.25Z"></path>{" "}
            </g>
          </svg>
          EXPORT
        </button>
      </div>

      <button className="hidden" type="submit" id="button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
