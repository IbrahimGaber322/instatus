"use client";
import { useState } from "react";

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
    <form onSubmit={handleSubmit} className="m-5 relative">
      <input
        type="search"
        value={search}
        onChange={handleChange}
        className="w-full rounded-lg overflow-hidden !border-gray-300 !focus:border-none !focus:shadow-none !ring-transparent"
        id="search"
        placeholder="Search name, email or action..."
        required
      />

      <button className="hidden" type="submit" id="button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
