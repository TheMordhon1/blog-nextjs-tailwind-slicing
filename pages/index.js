import Head from "next/head";
import Navbar from "@components/Navbar";
import FeaturedPost from "@components/FeaturedPost";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
      <div className="container mx-auto">
        <Navbar />
        <FeaturedPost />
      </div>
    </div>
  );
}
