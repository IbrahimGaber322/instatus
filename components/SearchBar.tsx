"use client";
import { useState } from "react";
import FilterIcon from "@/assets/icons/FilterIcon";
import ExportIcon from "@/assets/icons/ExportIcon";

const filterByItems = ["name", "actor ID", "target ID", "action ID"];
const SearchBar = ({
  search,
  setSearch,
  filterMenuItems,
  setFilterMenuItems,
  exportToCSV,
  filterBy,
  setFilterBy,
}: {
  search: string;
  setSearch: Function;
  filterMenuItems: { name: string; checked: boolean }[];
  setFilterMenuItems: Function;
  exportToCSV: Function;
  filterBy: string;
  setFilterBy: Function;
}) => {
  const [filterMenu, setFilterMenu] = useState<boolean>(false);
  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(search);
  };

  const handleCheckboxChange = (itemName: string) => {
    const updatedFilterMenuItems = filterMenuItems?.map((item) =>
      item?.name === itemName ? { ...item, checked: !item?.checked } : item
    );
    setFilterMenuItems(updatedFilterMenuItems);
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
            type="button"
            onClick={() => setFilterMenu(!filterMenu)}
            className="p-2.5 text-sm font-medium h-10 w-fit bg-white hover:bg-slate-200 flex justify-center items-center text-gray-400"
          >
            <FilterIcon />
            FILTER
          </button>
          <div
            className={`absolute bg-gray-200 w-[260px] flex ${
              filterMenu ? "block" : "hidden"
            } text-gray-700 pt-1  z-10 left-[-80px] rounded-xl shadow-lg`}
          >
            <ul>
              <li className="rounded-t py-2 px-4 block whitespace-no-wrap">
                Show:
              </li>
              {filterMenuItems.map((item, i) => (
                <li
                  key={i}
                  className="rounded-t py-2 px-4 block whitespace-no-wrap"
                >
                  <input
                    type="checkbox"
                    checked={item?.checked}
                    onChange={() => handleCheckboxChange(item?.name)}
                    className="cursor-pointer w-4 h-4 text-orange-600 ring-0 focus:ring-0 bg-gray-100 border-gray-300 rounded shadow-md shadow-orange-600 focus:shadow-orange-600 focus:shadow-md focus:border-0 focus:outline-none"
                  />{" "}
                  <label className="ml-2 text-sm font-medium text-gray-900 ">
                    {item?.name}
                  </label>
                </li>
              ))}
            </ul>
            <ul>
              <li className="rounded-t py-2 px-4 block whitespace-no-wrap">
                Filter By:
              </li>
              {filterByItems.map((item, i) => (
                <li
                  key={i}
                  className="rounded-t py-2 px-4 block whitespace-no-wrap"
                >
                  <input
                    type="checkbox"
                    checked={item === filterBy}
                    onChange={() => setFilterBy(item)}
                    className="cursor-pointer w-4 h-4 text-orange-600 ring-0 focus:ring-0 bg-gray-100 border-gray-300 rounded shadow-md shadow-orange-600 focus:shadow-orange-600 focus:shadow-md focus:border-0 focus:outline-none"
                  />{" "}
                  <label className="ml-2 text-sm font-medium text-gray-900 ">
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={() => exportToCSV()}
          type="button"
          className="p-2.5 text-sm font-medium h-10 w-fit bg-white hover:bg-slate-200  flex justify-center items-center text-gray-400 rounded-r-lg"
        >
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
