export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-white">

      <h1>AI interview start</h1>

      <div className="p-4">
        <input placeholder="Enter github url" className="rounded-lg px-2 py-1 p-6" /> <br />
      </div>

      <div className="p-4">
        <input placeholder="Enter linkedin url" className="rounded-lg px-2 py-1 p-6" /> <br />
      </div>

      <button className="px-3 py-2 bg-black">Start</button>

    </div>
  );
}
