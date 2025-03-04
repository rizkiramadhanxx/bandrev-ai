"use client";

import useWindow from "@/hooks/useWindow";
import { cn } from "@/utils/cn";
import gsap from "gsap";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import { CgChevronDoubleDown, CgChevronDown } from "react-icons/cg";

const navigation = [
  {
    name: "Demand Generation",
    href: "/",
    pathname: "",
  },
  {
    name: "AI Solution",
    href: "/promo",
    pathname: "promo",
    children: [
      {
        name: "AI Development",
        href: "/ai-development",
        image: "/navbar/ai-development.png",
        pathname: "",
      },
      {
        name: "GenAI Assets",
        href: "/gen-ai-assets",
        pathname: "promo",
        image: "/sample/gen-ai.png",
      },
      {
        name: "Platform",
        href: "/platform",
        pathname: "profil",
        image: "/sample/tune-ai.jpg",
      },
    ],
  },
  { name: "Capability Development", href: "/profil", pathname: "profil" },
  { name: "AI Resource", href: "/profil", pathname: "profil" },
  { name: "Our Project", href: "/profil", pathname: "profil" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const submenuRef = useRef(null);
  const navbarRef = useRef(null);
  let lastScrollY = 0;

  const [activeNavbar, setActiveNavbar] = useState<null | number>(null);

  useEffect(() => {
    const handleScroll = () => {
      setActiveNavbar(null);

      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hilang saat scroll ke bawah
      } else {
        setIsVisible(true); // Muncul saat scroll ke atas
      }
      lastScrollY = window.scrollY;

      if (navbarRef.current) {
        if (window.scrollY < 50) {
          gsap.to(navbarRef.current, {
            backgroundColor: "transparent",
            duration: 0.3,
          });
        } else {
          gsap.to(navbarRef.current, {
            backgroundColor: "#3958e9",
            duration: 0.3,
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (submenuRef.current) {
      if (activeNavbar !== null) {
        gsap.fromTo(
          submenuRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );
        gsap.to(navbarRef.current, {
          backgroundColor: "#3958e9",
          duration: 0.3,
        });
      } else {
        gsap.to(submenuRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [activeNavbar]);

  const { width } = useWindow();

  return (
    <div>
      <div
        ref={navbarRef}
        className={`flex justify-center z-50 fixed top-0 w-full transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="main-container w-full items-center">
          <div className={cn("h-[60px] md:h-[80px]")}>
            <div className="text-white flex md:h-[80px] h-[60px] items-center justify-between px-4">
              <div className="flex items-center gap-5">
                <div>
                  <Image
                    src="/logo/brandev.png"
                    alt="logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-contain"
                  />
                </div>
                <div className="flex md:gap-2 items-center pl-[30px] border-l-2 border-white">
                  {width > 1200 &&
                    navigation.map((item, index) => (
                      <div
                        key={item.name}
                        className="flex hover:font-bold items-center"
                      >
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
                                ? " text-white  font-bold "
                                : "text-white hover:text-white"
                            } px-3 py-1 transition-all duration-200 rounded-md`}
                          >
                            {item.name}
                          </button>
                        ) : (
                          <a
                            href={item.href}
                            className={`${
                              item.pathname === pathname.split("/")[1]
                                ? " text-white font-bold"
                                : "text-white hover:text-white"
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
          ref={submenuRef}
          className={`flex justify-center bg-white z-[49px] fixed top-0 w-full transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="main-container w-full items-center">
            <div className={cn("h-[150px] md:h-[250px]")}>
              <div className="pt-[100px] flex pl-[200px] gap-[50px]">
                {navigation[activeNavbar].children?.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className=" hover:text-[#3958e9] flex flex-col justify-center items-center px-3 py-1 transition-all duration-200 rounded-md"
                    >
                      <Image
                        src="/navbar/ai-deveploment.png"
                        alt="icon"
                        width={80}
                        height={80}
                      />
                      <div className="text-center mt-5">{item.name}</div>
                    </a>
                  </div>
                ))}
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
