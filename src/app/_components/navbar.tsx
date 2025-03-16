"use client";

import useWindow from "@/hooks/useWindow";
import { cn } from "@/utils/cn";
import gsap from "gsap";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import { CgChevronDoubleDown, CgChevronDown } from "react-icons/cg";
import { navigation } from "../constant";

export default function Navbar() {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const submenuRef = useRef(null);
  const navbarRef = useRef(null);
  const boxRef = useRef(null);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    gsap.from(boxRef.current, {
      duration: 1.5,
      opacity: 0,
      y: 50,
      ease: "power2.out",
    });
  }, []);
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
          setIsTop(true);
        } else {
          gsap.to(navbarRef.current, {
            backgroundColor: "#E9E9E9",
            duration: 0.3,
          });
          setIsTop(false);
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
          backgroundColor: "#E9E9E9",
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
            <div
              className={cn(
                " flex md:h-[80px] h-[60px] items-center justify-between px-4",
                !isTop || activeNavbar !== null || !isVisible
                  ? "text-[#18368F]"
                  : "text-white"
              )}
            >
              <div className="flex items-center gap-5" ref={boxRef}>
                <div>
                  <Image
                    src={
                      isTop && !activeNavbar
                        ? "/logo/brandev.png"
                        : "/logo/brandev-blue.png"
                    }
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
                        onMouseEnter={() => {
                          if (!item.children?.length) return;
                          setActiveNavbar(index);
                        }}
                        key={item.name}
                        className="flex hover:font-medium text-[12px] lg:text-[14px] items-center"
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
                                ? "font-medium "
                                : "hover:font-medium"
                            } px-3 py-1 transition-all duration-200 rounded-md`}
                          >
                            {item.name}
                          </button>
                        ) : (
                          <a
                            href={item.href}
                            className={`${
                              item.pathname === pathname.split("/")[1]
                                ? "font-bold"
                                : " hover:font-medium"
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
                  <button className="bg-white px-[20px] py-[10px] rounded-md text-[#18368F]">
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
          className={`flex justify-center shadow-md bg-white z-[49] fixed top-0 w-full transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="main-container w-full items-center">
            <div className={cn("h-[150px] md:h-[250px]")}>
              <div className="pt-[100px] flex pl-[200px] gap-[50px]">
                {navigation[activeNavbar].children?.map((item) => (
                  <div key={item.name} className="max-w-[80%]">
                    <a
                      href={item.href}
                      className=" hover:font-medium h-full justify-between flex flex-col items-center px-3 py-1 transition-all duration-200 rounded-md"
                    >
                      <Image
                        src={item.image}
                        alt="icon"
                        loading="eager"
                        className="max-h-[80px] max-w-[80px]"
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
          className={`fixed inset-0 h-screen bg-[#E9E9E9] text-white flex flex-col items-center justify-center z-50 transition-all duration-300 ${
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
