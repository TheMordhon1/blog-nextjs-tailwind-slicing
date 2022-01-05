import Head from "next/head";
import Navbar from "@components/Navbar";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
      <Navbar />
    </div>
  );
}
