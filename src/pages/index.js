import Head from 'next/head';

function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-orange-400 min-h-screen flex justify-center items-center">
        <div className="bg-white w-10/12">
          <h1 className="text-3xl text-center font-bold mb-8 text-captain-500 mt-4">
            Tailwind with Ankeet
          </h1>
          <div className="grid grid-rows-1 grid-flow-col gap-4 px-8 overflow-x-scroll pb-8">
            {Array(14)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="w-16 h-16 md:w-32 md:h-32 rounded-full bg-gray-400"></div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
