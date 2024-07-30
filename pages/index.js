export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <header className="w-full flex justify-between items-center p-4 bg-black">
        <h1 className="text-2xl font-bold">OmniSwap</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Connect Wallet</button>
      </header>
      <main className="flex flex-col items-center mt-8">
        <div className="border border-gray-700 rounded-lg p-4 w-80 bg-gray-800">
          <div className="flex justify-between mb-4">
            <span>Swap</span>
            <span>Limit</span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between bg-gray-700 p-2 rounded">
              <input type="text" className="bg-transparent w-full" placeholder="0" />
              <span>USDC</span>
            </div>
            <div className="flex justify-between bg-gray-700 p-2 rounded">
              <input type="text" className="bg-transparent w-full" placeholder="0" />
              <span>OMNIS</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Swap</button>
          </div>
        </div>
      </main>
    </div>
  );
}

