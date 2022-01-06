import React from "react";
import Head from "next/head";
import FeaturedPost from "@components/FeaturedPost";
import CardPost from "@components/CardPost";
import Layout from "@components/Layout";

export default class test extends React.Component {
  static async getInitialProps() {
    const getUserData = await fetch(
      "https://blog-nextjs-tailwind-slicing.vercel.app/api/data"
    );
    const dataUser = await getUserData.json();
    return { users: dataUser };
  }
  render() {
    const { users } = this.props;
    return (
      <>
        <Head>
          <title>Librarus</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Layout>
          <FeaturedPost />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-2 flex-wrap -mx-4">
            {users.map((post) => (
              <div className="px-4 py-6">
                <CardPost key={post.id} {...post} />
              </div>
            ))}
          </div>
        </Layout>
      </>
    );
  }
}
