export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans bg-white text-black">
      
      <h1 className="text-3xl mb-2 font-bold">AI Interview</h1>

      <div className="rounded-md px-2 py-1 border m-2">
        <input placeholder="Enter github url..." />
      </div>

      <div className="rounded-md px-2 py-1 border m-2 ">
        <input placeholder="Enter LinkedIn url..." />
      </div>

      <button className="bg-black px-8 py-2 text-white rounded-md mt-2 cursor-pointer ">
        Submit
      </button>

    </div>
  );
}
