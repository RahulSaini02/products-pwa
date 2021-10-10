function _offline() {
  return (
    <div className="h-full bg-white flex items-center justify-center">
      <img
        className="h-72 w-72 opacity-40"
        src="/assets/images/08.png"
        alt="offline"
      />
      <h1 className="text-black text-4xl">You are currently Offline.</h1>
      <p className="text-gray-400 text-2xl">
        To view content connect to your internet Connection
      </p>
    </div>
  );
}

export default _offline;
