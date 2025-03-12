"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "Strategy",
    description: "Building a clear business roadmap.",
    color: "bg-blue-500",
  },
  {
    title: "Design",
    description: "Creating user-friendly UI/UX.",
    color: "bg-green-500",
  },
  {
    title: "Development",
    description: "Building high-quality code.",
    color: "bg-purple-500",
  },
  {
    title: "Launch",
    description: "Deploying and optimizing performance.",
    color: "bg-red-500",
  },
];

export default function ScrollAnimation() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, scale: 0.8, y: 100 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top top", // Mulai animasi saat elemen menyentuh bagian atas viewport
            end: "+=100%", // Elemen tetap di viewport hingga scroll 100% tinggi viewport
            toggleActions: "play none none none",
            pin: true, // Menjaga elemen tetap di viewport sampai selesai
            anticipatePin: 1, // Mencegah glitch saat scroll
          },
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      {items.map((item, index) => (
        <div
          key={index}
          ref={(el) => (itemsRef.current[index] = el)}
          className={`h-screen flex items-center justify-center opacity-0 ${item.color}`}
        >
          <div className="text-center text-white max-w-md">
            <h2 className="text-5xl font-bold">{item.title}</h2>
            <p className="mt-4 text-lg">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
