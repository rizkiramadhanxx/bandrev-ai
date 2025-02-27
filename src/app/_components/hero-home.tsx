"use client";

export default function HeroHome() {
  return (
    <div className="flex justify-center pt-[50px] md:pt-[60px] min-h-[100vh] bg-[#3958e9]">
      <div className="main-container w-[100%]">
        <div className="flex items-center h-[100%]">
          <div>
            <h1 className="text-xl lg:text-5xl  text-white font-bold">
              Discover what AI can do for you
            </h1>
            <div className="text-sm mt-[20px] text-white">
              We help organizations, educators, and consultants adopt AI, build
              revenue, and drive demand.
            </div>
            <button className="mt-[30px] rounded-md flex items-center text-black bg-white px-[30px] py-[10px]">
              Talk To Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
