import { useEffect, useState, useRef } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetterLoader from "./components/Loader";

gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function Home() {
    const [data, setData] = useState(null);
    const Heading1Ref = useRef(null);
    const Heading2Ref = useRef(null);

    useEffect(() => {
        fetch("https://api.hamzadaniyal.com/wp-json/wp/v2/pages/6?acf_format=standard")
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setData(res);
            })
            .catch(err => console.error(err));
    }, []);

    useGSAP(() => {
        if(!data) return; 

        const tl = gsap.timeline();
        tl.fromTo(Heading1Ref.current, 
            { clipPath: "inset(0% 100% 0% 0%)" }, // Added % to all 0s
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "power2.out" }
        )
        .fromTo(Heading2Ref.current, 
            { clipPath: "inset(0% 100% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "power2.out" }, 
            "<"
        );
    }, [data]);
  return (
    <div className="min-h-screen">
    {!data ? (
      <div className="h-screen flex items-center justify-center">
        <LetterLoader />
      </div>
    ) : (
        <div className="relative w-full h-screen bg-hero bg-cover bg-center bg-[#EDE5D3] flex flex-col items-center justify-end">
            <div className="w-full h-full flex flex-row px-13.5 gap-10">
                <div className="flex flex-col justify-center gap-4 w-1/3">
                    <p className="font-bellota-text text-[24px] leading-[1.4] text-black">
                        {data.acf.banner_heading_prefix}
                    </p>
                    <h1 ref={Heading1Ref} className="font-valturin font-bold text-[80px] leading-[1.1] text-black w-fit transition-clip duration-1000 ease-out">
                        {data.acf.banner_heading}
                    </h1>
                    <h2 ref={Heading2Ref} className="font-valturin font-bold text-[80px] lg:w-[800px] leading-[1.1] text-green">
                        {data.acf.banner_heading_suffix}
                    </h2>
                    <div className="flex flex-col justify-center items-start gap-5">
                        <div>
                            <p className="font-bellota-text text-[24px] leading-[1.4] text-black">
                                {data.acf.banner_text_left_1}
                            </p>
                        </div>
                        <div className="w-full flex flex-row justify-start gap-6">
                            <a href={data.acf.facebook_link} target="_blank" rel="noopener noreferrer">
                                <FaFacebookF size={30} color="#5271FF" className="transition-transform duration-200 hover:scale-125" />
                            </a>
                            <a href={data.acf.linkedin_link} target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn size={30} color="#0073B2" className="transition-transform duration-200 hover:scale-125" />
                            </a>
                            <a href={data.acf.instagram_link} target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} color="#C13584" className="transition-transform duration-200 hover:scale-125" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-end gap-4 w-1/3">
                    <img src={data.acf.banner_image.url} alt={data.acf.banner_image.alt} className="w-[550px] h-[690px] transition-transform duration-200 hover:scale-110" />
                </div>
                <div className="flex flex-col justify-center gap-4 w-1/3">
                    <p className="font-bellota font-bold text-[30px] leading-[1.4] text-black">
                        {data.acf.banner_text_right_1}
                    </p>
                    <p className="font-bellota-text text-[24px] leading-[1.4] text-black">
                        {data.acf.banner_text_right_2}
                    </p>
                </div>
            </div>
        </div>
    )}
    </div>
  );
}