"use client";

import Image from "next/image";

export default function UnlockPublication() {
  return (
    <div className="flex  justify-center py-[50px] xl:py-[100px]  bg-[radial-gradient(201.96%_125.47%_at_2.12%_3.3%,#213790_0%,#19296A_100%)] relative">
      <div className="absolute top-0 right-0">
        <Image
          src={"/texture/mixing.png"}
          height={500}
          width={500}
          layout="responsive" // Enables responsive layout
          sizes="(max-width: 700px) 2000px, 4000px"
          alt="mixing"
        />
      </div>
      <div className="main-container w-[100%]">
        <div className="text-[40px] max-w-[300px] xl:text-[120px] text-white xl:max-w-[650px] xl:leading-[120px]">
          Unlock the Future of Learning with AI
        </div>
        <div className="flex gap-5 items-center mt-[30px]">
          <div>
            <div className="border-white h-[2px] bg-white w-[30px] xl:w-[65px]" />
          </div>
          <div className="text-white text-sm xl:text-[25px] leading-normal max-w-[650px]">
            Generative AI for Learning Innovation: A Practical Guide for
            Learning & Development Professionals
          </div>
        </div>
        <div className="text-white text-sm md:text-[20px] mt-[30px]">
          <div>By Zaid Hamzah & Jonathan Chew </div>
          <div>Copyright © 2024</div>
        </div>
      </div>
    </div>
  );
}
