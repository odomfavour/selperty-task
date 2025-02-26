const ActionButtons = () => {
  return (
    <div className="space-y-2 border border-[#F0F0F0] rounded-2xl p-4">
      <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg text-base transition-all duration-300 transform hover:scale-105 hover:bg-green-700">
        Signup
      </button>
      <button className="w-full border border-gray-300 py-2 px-4 rounded-lg text-base hover:bg-gray-300 transition-all duration-300">
        Schedule Inspection
      </button>
      <button className="w-full border border-gray-300 py-2 px-4 rounded-lg text-base hover:bg-gray-300 transition-all duration-300">
        Request More Info
      </button>
    </div>
  );
};

export default ActionButtons;
