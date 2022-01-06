import React, { useState } from "react";
import Layout from "@components/Layout";
import mockpost from "../utils/mockpost.json";
import CardPost from "@components/CardPost";
import Head from "next/head";
import SectionHeader from "@components/SectionHeader";

const posts = () => {
  const [posts, setPosts] = useState(mockpost);
  return (
    <>
      <Head>
        <title>Librarus | Posts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <SectionHeader>UI Design</SectionHeader>
        {posts.length < 1 ? (
          <div className="py-20">
            <h1 className="text-6xl text-center">No result 😥</h1>
            <p className="text-white/40 text-xl text-center md:w-6/12 mx-auto mt-5">
              We couldn’t find any posts with the keyword `yahahahayuk`. Please
              try another keyword.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-2 flex-wrap -mx-4">
            {posts.map((post) => (
              <div className="px-4 py-6">
                <CardPost key={post.id} {...post} />
              </div>
            ))}
          </div>
        )}
      </Layout>
    </>
  );
};

export default posts;
