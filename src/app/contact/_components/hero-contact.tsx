import { FaChevronCircleRight } from "react-icons/fa";

export default function HeroContact() {
  return (
    <div className="flex justify-center bg-[linear-gradient(180deg,#000D39_0%,#0122A9_100%)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pt-[50px]  md:pt-[80px]  xl:min-h-[150vh] ">
      <div className="border-y-[1px] border-white  w-[100%]  bg-transparent">
        <div className="grid h-[100%] grid-cols-1 xl:grid-cols-[3fr_4fr]">
          <div className="xl:border-r-[1px] border-white grid grid-rows-[1fr_2fr_1fr]">
            <div className="text-white flex justify-center flex-col border-b-[1px] border-white items-center">
              <div className="p-4">
                <div className="text-left text-[36px]">Get in Touch</div>
                <div className="text-[15px]">
                  Have any questions? Let’s start to talk!
                </div>
              </div>
            </div>
            <div className="border-b-[1px] border-white"></div>
            <div className="text-white flex justify-center flex-col border-b-[1px] border-white items-center ">
              <div className="text-[15px] max-w-[320px] p-4">
                Have a project idea or looking to collaborate? Let’s connect!
                Whether you’re exploring partnership opportunities or just
                seeking advice, we’d love to hear from you. Reach out and let’s
                start the conversation!
              </div>
            </div>
          </div>
          <div className="p-[20px] xl:p-[60px] text-white">
            <div className="text-[30px] md:text-[40px] xl:text-[60px]">
              Contact Us
            </div>
            <div className="grid mt-[40px] xl:mt-[65px] grid-cols-1 xl:grid-cols-[1fr_4fr] gap-y-2 md:gap-y-5">
              <div className="flex items-center mt-2 xl:mt-0">
                <div className="text-[15px]">Fullname</div>
              </div>
              <input
                placeholder="Fullname"
                className="bg-white py-[10px] px-[17px] text-gray-700 rounded-md active:outline-none focus:outline-none"
                type="text"
              />
              <div className="flex items-center mt-2 xl:mt-0">
                <div className="text-[15px]">Company Name</div>
              </div>
              <input
                placeholder="Company Name"
                className="bg-white py-[10px] px-[17px] text-gray-700 rounded-md active:outline-none focus:outline-none"
                type="text"
              />
              <div className="flex items-center mt-2 xl:mt-0">
                <div className="text-[15px]">Job Title</div>
              </div>
              <input
                placeholder="Job Title"
                className="bg-white py-[10px] px-[17px] text-gray-700 rounded-md active:outline-none focus:outline-none"
                type="text"
              />
              <div className="flex items-center mt-2 xl:mt-0">
                <div className="text-[15px]">Email Address</div>
              </div>
              <input
                placeholder="Email Address"
                className="bg-white py-[10px] px-[17px] text-gray-700 rounded-md active:outline-none focus:outline-none"
                type="text"
              />
              <div className="flex items-center mt-2 xl:mt-0">
                <div className="text-[15px]">Phone Number</div>
              </div>
              <input
                placeholder="Phone Number"
                className="bg-white py-[10px] px-[17px] text-gray-700 rounded-md active:outline-none focus:outline-none"
                type="text"
              />
            </div>
            <div className="mt-5">
              <div className="text-[15px]">Additional Comments</div>
              <textarea
                placeholder="your project details"
                className="mt-3 w-[100%] bg-white h-[120px] py-[10px] px-[17px] text-gray-700 rounded-md active:outline-none focus:outline-none  "
              />
            </div>
            <div className="mt-5 flex justify-end">
              <button className="rounded-md flex gap-6  items-center text-black bg-white px-[30px] py-[10px]">
                <div>Submit</div>
                <FaChevronCircleRight color="#18368F" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
