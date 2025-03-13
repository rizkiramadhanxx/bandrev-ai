"use client";

import Image from "next/image";

export default function BookPublication() {
  return (
    <div className="flex  justify-center py-[50px] xl:py-[100px] bg-[radial-gradient(201.96%_125.47%_at_2.12%_3.3%,_#213790_0%,_#19296A_100%)] relative">
      <div className="main-container w-[100%]">
        <div className="grid xl:grid-cols-2 gap-10">
          <div>
            <Image
              src={"/section/book.png"}
              height={500}
              width={500}
              layout="responsive" // Enables responsive layout
              sizes="(max-width: 700px) 2000px, 4000px"
              alt="book"
            />
          </div>
          <div className="text-white text-[18px] md:text-[25px] flex flex-col justify-center">
            <div className="font-bold">
              Enhance Learning & Development with Generative AI
            </div>
            <div className="mt-[40px]">
              In today’s rapidly changing world, staying ahead in Learning &
              Development (L&D) is essential for professionals aiming to create
              and deliver engaging, impactful learning experiences. Generative
              AI for Learning Innovation equips L&D professionals with the tools
              they need to leverage AI and revolutionize education and training
              programs.
            </div>
          </div>
        </div>
        <div className="mt-[200px] text-white">
          <div className="text-[20px] md:text-[30px] font-bold">
            Register for Early Access
          </div>
          <div className="mt-[20px] flex flex-col gap-[20px]">
            <div className="flex flex-col">
              <label htmlFor="fullname" className="relative">
                Name
                <span className="absolute  top-0 ml-1 text-xs">*</span>
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  className="py-[10px] w-full bg-transparent text-white border-b border-white focus:outline-none focus:ring-0 focus:border-white active:outline-none active:ring-0 active:border-white"
                />
                <svg
                  width="16"
                  className="absolute top-[10px] right-0"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.93166 1.09937C3.78988 1.09937 0.425781 4.46343 0.425781 8.60518C0.425781 12.747 3.78984 16.1101 7.93166 16.1101C12.0734 16.1101 15.4375 12.7469 15.4375 8.60518C15.4375 4.46343 12.0734 1.09937 7.93162 1.09937H7.93166ZM7.93166 1.6833C11.7578 1.6833 14.8535 4.77905 14.8535 8.60518C14.8535 9.16643 14.7869 9.7118 14.6611 10.2341L13.2578 9.96265L12.6163 7.72533L12.5732 7.57396L12.4219 7.52708L10.6074 6.96655L8.51659 2.94699L8.36816 2.66087L8.09769 2.83662L5.251 4.68818L5.15925 4.74777L5.12894 4.85321L3.63094 10.0837L1.43656 11.0036C1.16094 10.2564 1.00981 9.44883 1.00981 8.60518C1.00981 4.77905 4.10553 1.6833 7.93166 1.6833ZM7.95703 3.62471L6.31547 6.8933L6.82228 11.0945L9.63869 9.15893V11.1267L8.90234 11.3221L9.55375 15.3356C9.03356 15.4602 8.49031 15.5261 7.93162 15.5261C5.15622 15.5261 2.76506 13.8974 1.66112 11.5426L3.98631 10.5671L4.11525 10.5134L4.15431 10.3786L5.66016 5.11987L7.95703 3.62471Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="fullname" className="relative">
                Email
                <span className="absolute  top-0 ml-1 text-xs">*</span>
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  className="py-[10px] w-full bg-transparent text-white border-b border-white focus:outline-none focus:ring-0 focus:border-white active:outline-none active:ring-0 active:border-white"
                />
                <svg
                  width="16"
                  className="absolute top-[10px] right-0"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.93166 1.09937C3.78988 1.09937 0.425781 4.46343 0.425781 8.60518C0.425781 12.747 3.78984 16.1101 7.93166 16.1101C12.0734 16.1101 15.4375 12.7469 15.4375 8.60518C15.4375 4.46343 12.0734 1.09937 7.93162 1.09937H7.93166ZM7.93166 1.6833C11.7578 1.6833 14.8535 4.77905 14.8535 8.60518C14.8535 9.16643 14.7869 9.7118 14.6611 10.2341L13.2578 9.96265L12.6163 7.72533L12.5732 7.57396L12.4219 7.52708L10.6074 6.96655L8.51659 2.94699L8.36816 2.66087L8.09769 2.83662L5.251 4.68818L5.15925 4.74777L5.12894 4.85321L3.63094 10.0837L1.43656 11.0036C1.16094 10.2564 1.00981 9.44883 1.00981 8.60518C1.00981 4.77905 4.10553 1.6833 7.93166 1.6833ZM7.95703 3.62471L6.31547 6.8933L6.82228 11.0945L9.63869 9.15893V11.1267L8.90234 11.3221L9.55375 15.3356C9.03356 15.4602 8.49031 15.5261 7.93162 15.5261C5.15622 15.5261 2.76506 13.8974 1.66112 11.5426L3.98631 10.5671L4.11525 10.5134L4.15431 10.3786L5.66016 5.11987L7.95703 3.62471Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="fullname" className="relative">
                Company Name
                <span className="absolute  top-0 ml-1 text-xs">*</span>
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  className="py-[10px] w-full bg-transparent text-white border-b border-white focus:outline-none focus:ring-0 focus:border-white active:outline-none active:ring-0 active:border-white"
                />
                <svg
                  width="16"
                  className="absolute top-[10px] right-0"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.93166 1.09937C3.78988 1.09937 0.425781 4.46343 0.425781 8.60518C0.425781 12.747 3.78984 16.1101 7.93166 16.1101C12.0734 16.1101 15.4375 12.7469 15.4375 8.60518C15.4375 4.46343 12.0734 1.09937 7.93162 1.09937H7.93166ZM7.93166 1.6833C11.7578 1.6833 14.8535 4.77905 14.8535 8.60518C14.8535 9.16643 14.7869 9.7118 14.6611 10.2341L13.2578 9.96265L12.6163 7.72533L12.5732 7.57396L12.4219 7.52708L10.6074 6.96655L8.51659 2.94699L8.36816 2.66087L8.09769 2.83662L5.251 4.68818L5.15925 4.74777L5.12894 4.85321L3.63094 10.0837L1.43656 11.0036C1.16094 10.2564 1.00981 9.44883 1.00981 8.60518C1.00981 4.77905 4.10553 1.6833 7.93166 1.6833ZM7.95703 3.62471L6.31547 6.8933L6.82228 11.0945L9.63869 9.15893V11.1267L8.90234 11.3221L9.55375 15.3356C9.03356 15.4602 8.49031 15.5261 7.93162 15.5261C5.15622 15.5261 2.76506 13.8974 1.66112 11.5426L3.98631 10.5671L4.11525 10.5134L4.15431 10.3786L5.66016 5.11987L7.95703 3.62471Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col mt-[20px] gap-x-3 xl:items-center gap-y-5 xl:flex-row justify-between">
              <div className="flex gap-2 items-center">
                <input type="checkbox" />
                <div className="text-xs xl:text-sm">
                  Yes, I would like to receive a copy of the book. *
                </div>
              </div>
              <button className="bg-[#7B91F1] text-black rounded-md xl:rounded-3xl text-center py-[2px] w-full xl:w-[300px]">
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
