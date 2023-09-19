"use client";
import { useState } from "react";
import FilterIcon from "@/assets/icons/FilterIcon";
import ExportIcon from "@/assets/icons/ExportIcon";
const SearchBar = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: Function;
}) => {
  const [filterMenu, setFilterMenu] = useState<boolean>(false);
  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(search);
  };
  
  return (
    <form onSubmit={handleSubmit} className="m-5">
      <div className="h-10 flex w-full rounded-lg border-gray-300 divide-x-2 ">
        <div className="rounded-l-lg w-full overflow-hidden">
          <input
            type="search"
            value={search}
            onChange={handleChange}
            className="h-10 w-full border-none focus:border-none focus:shadow-none ring-transparent"
            id="search"
            placeholder="Search name, email or action..."
          />
        </div>
        <div className="relative ">
          <button
            onClick={() => setFilterMenu(!filterMenu)}
            className="p-2.5 text-sm font-medium h-10 w-fit bg-white hover:bg-slate-200 flex justify-center items-center text-gray-400"
          >
            <FilterIcon />
            FILTER
          </button>
          <ul
            className={`absolute ${
              filterMenu ? "block" : "hidden"
            } text-gray-700 pt-1 w-[200px]`}
          >
            <li className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-600 ring-0 focus:ring-0 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"
              />{" "}
              <label
                 
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Default checkbox
              </label>
            </li>
            <li>
              <a
                className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Two
              </a>
            </li>
            <li>
              <a
                className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Three
              </a>
            </li>
          </ul>
        </div>

        <button className="p-2.5 text-sm font-medium h-10 w-fit bg-white hover:bg-slate-200  flex justify-center items-center text-gray-400 rounded-r-lg">
          <ExportIcon />
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
