"use client";

export default function BuildWith() {
  return (
    <div className="flex justify-center py-[50px] bg-white">
      <div className="xl:px-[100px] main-container w-[100%]">
        <div>
          <div className="text-[30px]">Why Build Your Own AI</div>
          <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-[50px]">
            <div className="bg-[#F6F6F6] bg-[url('/texture/left-portal.png')] bg-right-top bg-no-repeat px-[30px] pb-[35px] pt-[108px] rounded-lg xl:rounded-[46px]">
              <div className="text-[20px] font-medium">
                Enhance Productivity
              </div>
              <div className="text-[15px] mt-2">
                Streamline operations, and maximize team productivity, allowing
                more focus on strategic growth.
              </div>
            </div>
            <div className="bg-[#F6F6F6] px-[30px] pb-[35px] pt-[108px] rounded-lg xl:rounded-[46px] bg-[url('/texture/right-portal.png')] bg-no-repeat">
              <div className="text-[20px] font-medium">Competitive Edge</div>
              <div className="text-[15px] mt-2">
                Stand out with unique AI tools that offer a distinct advantage
                in your market.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
