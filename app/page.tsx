import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import Table from "@/components/table/Table";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen p-4">
      <div className="lg:w-full md:w-5/6 max-w-6xl h-5/6 rounded-xl  bg-gray-200  p-1 flex flex-col justify-between">
        <SearchBar />
        <Table />
        <button className="rounded-b-lg w-full mt-auto font-medium text-gray-600 text-xl py-4">
          LOAD MORE
        </button>
      </div>
    </main>
  );
}
