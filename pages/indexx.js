import Head from "next/head";
import { useState } from "react";
import FeaturedPost from "@components/FeaturedPost";
import CardPost from "@components/CardPost";
import Layout from "@components/Layout";
/* Data Static */
import mockpost from "../utils/mockpost.json";

export default function Home() {
  const [posts, setPosts] = useState(mockpost);
  return (
    <>
      <Head>
        <title>Librarus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <FeaturedPost />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-2 flex-wrap -mx-4">
          {posts.map((post) => (
            <div className="px-4 py-6">
              <CardPost key={post.id} {...post} />
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}
