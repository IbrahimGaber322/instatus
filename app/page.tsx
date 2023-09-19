"use client";

import SearchBar from "@/components/SearchBar";
import Table from "@/components/table/Table";
import Pagination from "@/components/Pagination";
import Loading from "@/components/Loading";
import useSWR from "swr";
import Papa from "papaparse";
import { FetchedEventType , EventType } from "@/constants/types";
import { useEffect, useState } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [filterMenuItems, setFilterMenuItems] = useState<
    { name: string; checked: boolean }[]
  >([
    { name: "ACTOR", checked: true },
    { name: "ACTION", checked: true },
    { name: "DATE", checked: true },
    { name: "METADATA", checked: true },
    { name: "TARGET", checked: true },
  ]);

  const { data, error, isLoading } = useSWR<string>(
    `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/events`,
    fetcher
  );

  useEffect(() => {
    if (data && pages && page > pages) {
      setPage(1);
    }
  }, [loadMore]);
  if (error)
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <h1 className="text-xl font-bold text-orange-500">Failed to load</h1>
      </div>
    );
  if (isLoading) return <Loading />;
  if (!data) return null;
  const eventsPerPage: number = loadMore ? 8 : 5;
  const fetchedEvents: FetchedEventType[] = JSON.parse(data);
  const searchedEvents: FetchedEventType[] = fetchedEvents?.filter((event) =>
    event?.target_name?.includes(search)
  );
  const eventsNumber: number = searchedEvents?.length;

  const events = searchedEvents?.slice(
    (page - 1) * eventsPerPage,
    page * eventsPerPage
  );
  const pages = Math.ceil(searchedEvents?.length / eventsPerPage);
  const exportToCSV = () => {
    const csvData = searchedEvents.map((item) => ({
      id: item.id,
      object: item.object,
      actor_id: item.actor_id,
      actor_name: item.actor_name,
      group: item.group,
      target_id: item.target_id,
      target_name: item.target_name,
      location: item.location,
      occurred_at: item.occurred_at,
      "action.id": item.action[0].id,
      "action.name": item.action[0].name,
      "action.object": item.action[0].object,
      "metadata.redirect": item.metadata[0].redirect,
      "metadata.description": item.metadata[0].description,
      "metadata.x_request_id": item.metadata[0].x_request_id,
    }));

    const csv = Papa.unparse(csvData);

    const blob = new Blob([csv], { type: "text/csv" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "exported_data.csv";
    a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <main className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full lg:w-full md:w-5/6 max-w-6xl min-h-[500px] rounded-xl bg-gray-200  p-1 flex flex-col ">
        <SearchBar
          filterMenuItems={filterMenuItems}
          setFilterMenuItems={setFilterMenuItems}
          search={search}
          setSearch={setSearch}
          exportToCSV={exportToCSV}
        />
        <Table filterMenuItems={filterMenuItems} events={events} />
        {pages > 1 && (
          <Pagination
            eventsNumber={eventsNumber}
            page={page}
            setPage={setPage}
            pages={pages}
            eventsPerPage={eventsPerPage}
          />
        )}
        {searchedEvents?.length > 5 && (
          <button
            onClick={() => setLoadMore(!loadMore)}
            className="rounded-b-lg w-full mt-auto font-medium text-gray-600 text-xl py-4 hover:bg-gray-300"
          >
            {loadMore ? "LOAD LESS" : "LOAD MORE"}
          </button>
        )}
      </div>
    </main>
  );
}
