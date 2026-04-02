import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Header() {
    const HeaderRef = useRef(null);
    useGSAP(
        () => {
            gsap.fromTo(HeaderRef.current,{
                y: "-100%"
            },{
                y: "0%"
            })
        },[])
  return (
    <header ref={HeaderRef} className="absolute top-0 left-0 w-full z-10 flex items-center justify-between px-13.5 py-2">
        <div className="flex items-center justify-start gap-10">
            <a href="/projects" className="font-bellota text-[20px] text-green font-medium leading-[1.09] hover:text-green-light transition-colors">
                Projects
            </a>
            <a href="/services" className="font-bellota text-[20px] text-green font-medium leading-[1.09] hover:text-green-light transition-colors">
                Services
            </a>
        </div>
        <div>
            <a href="/" className="">
                <img src="/images/hamza-logo-new.png" className="w-[70px] h-[70px]" alt="Hamza Daniyal" />
            </a>
        </div>
        <div className="flex items-center justify-start gap-10">
            <a href="/about" className="font-bellota text-[20px] text-green font-medium leading-[1.09] hover:text-green-light transition-colors">
                About
            </a>
            <a href="/contact" className="font-bellota text-[20px] text-green font-medium leading-[1.09] hover:text-green-light transition-colors">
                Contact
            </a>
            <button className="px-4 py-2 text-[20px] font-normal font-bellota bg-green text-cream rounded-full border border-green cursor-pointer hover:bg-[#EDE5D3] hover:text-green transition-colors">
                Get In Touch
            </button>
        </div>
    </header>
  );
}