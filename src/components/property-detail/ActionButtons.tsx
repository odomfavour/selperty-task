const ActionButtons = () => {
  return (
    <div className="space-y-2 border border-[#F0F0F0] rounded-2xl p-4">
      <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg text-base">
        Signup
      </button>
      <button className="w-full border border-gray-300 py-2 px-4 rounded-lg text-base">
        Schedule Inspection
      </button>
      <button className="w-full border border-gray-300 py-2 px-4 rounded-lg text-base">
        Request More Info
      </button>
    </div>
  );
};

export default ActionButtons;
