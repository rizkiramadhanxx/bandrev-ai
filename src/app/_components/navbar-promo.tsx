"use client";

import useWindow from "@/hooks/useWindow";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import { CgChevronDoubleDown, CgChevronDown } from "react-icons/cg";

const navigation = [
  {
    name: "Demand Generation",
    href: "/",
    pathname: "",
    children: [
      {
        name: "Home",
        href: "/",
        image: "/sample/redis.jpg",
        pathname: "",
      },
      {
        name: "Promo",
        href: "/promo",
        pathname: "promo",
        image: "/sample/redis.jpg",
      },
      {
        name: "Profil",
        href: "/profil",
        pathname: "profil",
        image: "/sample/redis.jpg",
      },
    ],
  },
  { name: "AI Solution", href: "/promo", pathname: "promo" },
  { name: "Capability Development", href: "/profil", pathname: "profil" },
  { name: "AI Resource", href: "/profil", pathname: "profil" },
  { name: "Our Project", href: "/profil", pathname: "profil" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const [activeNavbar, setActiveNavbar] = useState<null | number>(null);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      setActiveNavbar(null);

      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hilang saat scroll ke bawah
      } else {
        setIsVisible(true); // Muncul saat scroll ke atas
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { width } = useWindow();

  return (
    <div>
      <div
        className={`flex justify-center bg-[#3958e9] z-50 fixed top-0 w-full transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="main-container w-full items-center">
          <div className={cn("h-[60px] md:h-[80px]")}>
            <div className="text-white flex h-[80px]  items-center justify-between px-4">
              <div className="flex items-center gap-5">
                <div>
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] object-contain"
                  />
                </div>
                <div className="flex md:gap-2 items-center">
                  {width > 1200 &&
                    navigation.map((item, index) => (
                      <div key={item.name} className="flex items-center">
                        {item.children?.length ? (
                          <button
                            onClick={() => {
                              if (index === activeNavbar) {
                                setActiveNavbar(null);
                              } else {
                                setActiveNavbar(index);
                              }
                            }}
                            className={`${
                              item.pathname === pathname.split("/")[1]
                                ? " text-white underline font-bold underline-offset-4"
                                : "text-white hover:bg-[#1e4a32] hover:text-white"
                            } px-3 py-1 transition-all duration-200 rounded-md`}
                          >
                            {item.name}
                          </button>
                        ) : (
                          <a
                            href={item.href}
                            className={`${
                              item.pathname === pathname.split("/")[1]
                                ? " text-white underline font-bold underline-offset-4"
                                : "text-white hover:bg-[#1e4a32] hover:text-white"
                            } px-3 py-1 transition-all duration-200 rounded-md`}
                          >
                            {item.name}
                          </a>
                        )}
                        {item.children?.length && (
                          <CgChevronDown
                            onClick={() => {
                              if (index === activeNavbar) {
                                setActiveNavbar(null);
                              } else {
                                setActiveNavbar(index);
                              }
                            }}
                            size={20}
                          />
                        )}
                      </div>
                    ))}
                </div>
              </div>
              {width > 1200 ? (
                <div>
                  <button className="bg-white px-[20px] py-[10px] rounded-md text-black">
                    Contact Us
                  </button>
                </div>
              ) : (
                <BsList size={30} onClick={() => setToggle(true)} />
              )}
            </div>
          </div>
        </div>
      </div>
      {activeNavbar !== null && width > 1200 && (
        <div
          className={`flex justify-center bg-white z-[49px] fixed top-0 w-full transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="main-container w-full items-center">
            <div className={cn("h-[150px] md:h-[200px]")}>
              <div className="pt-[120px] flex pl-[150px] gap-[50px]">
                <Image src="/redis.svg" alt="sample" width={100} height={100} />
                <Image src="/redis.svg" alt="sample" width={100} height={100} />
                <Image src="/redis.svg" alt="sample" width={100} height={100} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay Menu Mobile */}
      {width < 1200 && (
        <div
          className={`fixed inset-0 h-screen bg-[#3958e9] text-white flex flex-col items-center justify-center z-50 transition-all duration-300 ${
            toggle ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          {/* Tombol Close */}
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setToggle(false)}
          >
            <BsX />
          </button>

          {/* Navigasi Mobile */}
          <ul className="text-2xl space-y-6">
            {navigation.map((item) => (
              <li key={item.name} onClick={() => setToggle(false)}>
                <a
                  href={item.href}
                  className="hover:text-gray-300 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
