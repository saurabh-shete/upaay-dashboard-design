
import { LightBulbIcon } from "@heroicons/react/solid";

const ThoughtsTimeCard = () => {
  return (
    <div className="bg-[#F5F5F5] p-6 rounded-lg flex flex-col items-center text-center relative">
      {/* Half Circle with Glow Effect */}
      <div className="relative flex items-center justify-center mb-6">
        {/* Half Circle */}
        <div
          className="absolute top-0 w-20 h-10  bg-gradient-to-t bg-gradient-radial from-[#FBCB18] from-2% rounded-t-full"

        ></div>
        {/* Lightbulb Icon */}
        <div className="relative z-10 p-2 rounded-full">
          <LightBulbIcon className="w-6 h-6 text-[#FBCB18]" />
        </div>
      </div>

      <h5 className="text-gray-700 font-semibold">Thoughts Time</h5>
      <p className="text-gray-500 text-sm mt-2">
        We don’t have any notice for you, till then you can share your thoughts with your peers.
      </p>
      <button className="mt-6 bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700">
        Write a message
      </button>
    </div>
  );
};

export default ThoughtsTimeCard;
