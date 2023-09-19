"use client";

import SearchBar from "@/components/SearchBar";
import Table from "@/components/table/Table";
import Pagination from "@/components/Pagination";
import useSWR from "swr";
import { FetchedEventType } from "@/constants/mockdata";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Home() {
  const { data, error, isLoading } = useSWR<string>(
    "http://localhost:3000/api/events",
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;
  const events: FetchedEventType[] = JSON.parse(data);

  return (
    <main className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full lg:w-full md:w-5/6 max-w-6xl max-h-5/6 rounded-xl bg-gray-200  p-1 flex flex-col justify-between">
        <SearchBar />
        <Table events={events} />
        <Pagination />
        <button className="rounded-b-lg w-full mt-auto font-medium text-gray-600 text-xl py-4">
          LOAD MORE
        </button>
      </div>
    </main>
  );
}
