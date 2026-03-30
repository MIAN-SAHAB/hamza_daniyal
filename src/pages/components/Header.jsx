import { useEffect, useRef } from "react";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-10 flex items-center justify-between px-13.5 py-2">
        <div className="flex items-center justify-start gap-10">
            <a href="/studio" className="font-archivo text-[18px] text-green font-light leading-[1.09] hover:text-green-light transition-colors">
                Studio
            </a>
            <a href="/projects" className="font-archivo text-[18px] text-green font-light leading-[1.09] hover:text-green-light transition-colors">
                Projects
            </a>
        </div>
        <div>
            <a href="/" className="">
                <img src="/images/hamza-logo-new.png" className="w-[100px] h-[100px]" alt="Hamza Daniyal" />
            </a>
        </div>
        <div className="flex items-center justify-start gap-10">
            <a href="/services" className="font-archivo text-[18px] text-green font-light leading-[1.09] hover:text-green-light transition-colors">
                Services
            </a>
            <a href="/contact" className="font-archivo text-[18px] text-green font-light leading-[1.09] hover:text-green-light transition-colors">
                Contact
            </a>
        </div>
    </header>
  );
}