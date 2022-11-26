import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shopping List</title>
      </Head>

      <main className="my-28 mx-auto h-screen w-[80vw] rounded-lg bg-[#282c34] p-10">
        <div className="flex justify-between">
          <h1 className="text-4xl">My Shopping List</h1>
          <button className="flex items-center justify-center gap-1 rounded-md border border-transparent bg-[#Ef3054] px-2 py-2 text-base font-medium text-white shadow transition-all hover:scale-105 hover:brightness-105 active:scale-100 sm:px-10">
            Add shopping items
          </button>
        </div>
      </main>
    </>
  );
};
export default Home;
