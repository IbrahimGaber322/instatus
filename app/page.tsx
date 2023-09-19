"use client";

import SearchBar from "@/components/SearchBar";
import Table from "@/components/table/Table";
import Pagination from "@/components/Pagination";
import useSWR from "swr";
import { FetchedEventType } from "@/constants/mockdata";
import { useEffect, useState } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const { data, error, isLoading } = useSWR<string>(
    "http://localhost:3000/api/events",
    fetcher
  );
  useEffect(() => {
    if (data && pages && page > pages) {
      setPage(1);
    }
  }, [loadMore]);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;
  const eventsPerPage: number = loadMore ? 8 : 5;
  const fetchedEvents: FetchedEventType[] = JSON.parse(data);
  const searchedEvents: FetchedEventType[] = fetchedEvents.filter((event) =>
    event.target_name.includes(search)
  );
  const eventsNumber: number = searchedEvents.length;

  const events = searchedEvents.slice(
    (page - 1) * eventsPerPage,
    page * eventsPerPage
  );
  const pages = Math.ceil(searchedEvents.length / eventsPerPage);

  return (
    <main className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full lg:w-full md:w-5/6 max-w-6xl max-h-5/6 rounded-xl bg-gray-200  p-1 flex flex-col justify-between">
        <SearchBar search={search} setSearch={setSearch} />
        <Table events={events} />
        {pages > 1 && (
          <Pagination
            eventsNumber={eventsNumber}
            page={page}
            setPage={setPage}
            pages={pages}
            eventsPerPage={eventsPerPage}
          />
        )}
        {fetchedEvents.length > 5 && (
          <button
            onClick={() => setLoadMore(!loadMore)}
            className="rounded-b-lg w-full mt-auto font-medium text-gray-600 text-xl py-4 hover:bg-gray-300"
          >
            LOAD MORE
          </button>
        )}
      </div>
    </main>
  );
}
