const page = () => {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="font-bold ">This Is The place to Stream</h1>

      <div className="bg-blue-700 w-full h-screen flex flex-col items-center">
        <div className="h-[80%] w-full bg-black">Screen</div>

        <section className="gap-4">
          <button className="h-12 m-4 bg-white mx-auto text-black px-8 rounded-xl cursor-pointer">
            Stream
          </button>

          <button className="h-12 m-4 bg-white mx-auto text-black px-8 rounded-xl cursor-pointer">
            End Stream
          </button>
        </section>
      </div>
    </div>
  );
};

export default page;
