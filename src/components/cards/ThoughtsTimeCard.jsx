import { LightBulbIcon } from "@heroicons/react/solid";
import bggradient from '../../assets/backgroundbuld.svg';
import bulbgradient from '../../assets/lamp-on.svg';

const ThoughtsTimeCard = () => {
  return (
    <div className="bg-[#F5F5F5] p-6 rounded-lg flex flex-col items-center text-center relative mt-12">
      {/* Half Circle with Glow Effect */}
      <div className="absolute flex items-center justify-center mb-6 top-[-40px] bg-[#F5F5F5] rounded-full">
        {/* Lightbulb Icon with glow effect */}
        <div 
        style={{
          backgroundImage: `url(${bggradient})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`w-20 h-20 rounded-full flex items-center justify-center p-4`}>
          {/* <LightBulbIcon className="w-8 h-8 text-yellow-500" /> */}
          <img src={bulbgradient} alt="bulbgradient"  className="h-[24px] w-[24px]"/>
        </div>
      </div>

      {/* Title */}
      <h5 className="text-gray-700 font-semibold z-50">Thoughts Time</h5>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-2">
        We don’t have any notice for you, till then you can share your thoughts with your peers.
      </p>

      {/* Button */}
      <button className="mt-6 bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700">
        Write a message
      </button>
    </div>
  );
};

export default ThoughtsTimeCard;
