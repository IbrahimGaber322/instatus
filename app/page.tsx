import Image from 'next/image'
import SearchBar from '@/components/SearchBar';
import Table from '@/components/Table';

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-screen">
      <div className="w-full max-w-6xl h-5/6 rounded-xl overflow-hidden bg-gray-200">
      <SearchBar />
      </div>
      
    </main>
  )
}
