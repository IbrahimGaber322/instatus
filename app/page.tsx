import Image from 'next/image'
import SearchBar from '@/components/SearchBar';
import Table from '@/components/Table';

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-screen">
      <div className="w-full max-w-6xl h-5/6 rounded-xl overflow-hidden bg-gray-200 mx-4 p-1 flex flex-col justify-between">
      <SearchBar />
       <Table />
       <button className="rounded-b-lg w-full mt-auto font-medium text-gray-600 uppercase text-xl py-4">LOAD MORE</button>
      </div>
    </main>
  )
}
