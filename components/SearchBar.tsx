"use client";
import { useState } from "react";
import FilterIcon from "@/assets/icons/FilterIcon";
import ExportIcon from "@/assets/icons/ExportIcon";
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
         <FilterIcon />
          FILTER
        </button>
        <button className="p-2.5 text-sm font-medium h-10 w-fit bg-white hover:bg-slate-200 focus:bg-slate-300  flex justify-center items-center text-gray-500">
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
