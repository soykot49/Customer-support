import vector1 from '../assets/vector1.png';

const Banner = ({ inProgress, resolved }) => {
  return (
    <div className="flex gap-4 w-[90%] mx-auto my-10">

      {/* In-Progress Card */}
      <div className="relative w-[50%] h-40 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] overflow-hidden">

        {/* Left Image */}
        <div
          className="absolute left-0 top-0 h-full w-50 bg-left bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${vector1})` }}
        ></div>

        {/* Center Text */}
        <div className="text-white text-center z-10">
          <p className="text-lg">In-Progress</p>
          <h2 className="text-4xl font-bold">{inProgress}</h2>
        </div>

        {/* Right Image (Mirrored) */}
        <div
          className="absolute right-0 top-0 h-full w-50 bg-right bg-no-repeat bg-cover scale-x-[-1]"
          style={{ backgroundImage: `url(${vector1})` }}
        ></div>
      </div>

      {/* Resolved Card */}
      <div className="relative w-[50%] h-40 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#54CF68] to-[#00827A] overflow-hidden">

        {/* Left Image */}
        <div
          className="absolute left-0 top-0 h-full w-50 bg-left bg-no-repeat bg-cover "
          style={{ backgroundImage: `url(${vector1})` }}
        ></div>

        {/* Center Text */}
        <div className="text-white text-center z-10">
          <p className="text-lg">Resolved</p>
          <h2 className="text-4xl font-bold">{resolved}</h2>
        </div>

        {/* Right Image (Mirrored) */}
        <div
          className="absolute right-0 top-0 h-full w-50 bg-right bg-no-repeat bg-cover scale-x-[-1]"
          style={{ backgroundImage: `url(${vector1})` }}
        ></div>
      </div>

    </div>
  );
};

export default Banner;
