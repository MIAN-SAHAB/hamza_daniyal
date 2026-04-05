import { useEffect, useState, useRef } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetterLoader from "./components/Loader";
import ServicesMarquee from "./components/ServicesMarquee";

gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function Home() {
    const API = import.meta.env.VITE_API_URL;
    const [data, setData] = useState(null);
    const Heading1Ref = useRef(null);
    const Heading2Ref = useRef(null);
    const [services, setServices] = useState(null);

    useEffect(() => {
        if(!data){
            fetch(`${API}wp/v2/pages/6?acf_format=standard`)
            .then(res => res.json())
            .then(res => {
                setData(res);
            })
            .catch(err => console.error(err));
        }
        
        if(!services){
            fetch(`${API}wp/v2/service?_embed&acf_format=standard`)
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    setServices(res);
                })
                .catch(err => console.error(err));
        }
    }, []);

    useGSAP(() => {
        if(!data) return; 

        const tl = gsap.timeline();
        tl.fromTo(Heading1Ref.current, 
            { clipPath: "inset(0% 100% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "power2.out" }
        )
        .fromTo(Heading2Ref.current, 
            { clipPath: "inset(0% 100% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "power2.out" }, 
            ">"
        );
    }, [data]);
  return (
    <div className="min-h-screen">
    {!data ? (
      <div className="h-screen flex items-center justify-center">
        <LetterLoader />
      </div>
    ) : (
        <>
            <div className="relative w-full min-h-screen lg:h-screen bg-hero bg-cover bg-center bg-[#EDE5D3] flex flex-col items-center justify-end overflow-hidden">
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
                        <div className="w-full flex flex-row gap-10 justify-start items-center">
                            <button className="px-4 py-2 text-[20px] font-normal font-bellota bg-green text-cream rounded-full border border-green cursor-pointer hover:bg-[#EDE5D3] hover:text-green transition-colors">
                                Hire Me Now
                            </button>
                            <button className="px-4 py-2 text-[20px] font-normal font-bellota bg-green text-cream rounded-full border border-green cursor-pointer hover:bg-[#EDE5D3] hover:text-green transition-colors">
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ServicesMarquee services={services} />
            <div className="relative w-full bg-hero bg-cover bg-center bg-[#EDE5D3] flex flex-col items-center justify-center gap-5 py-25">
                <div className="w-full flex flex-col gap-10">
                    <h2 className="font-valturin font-bold text-center text-[80px] leading-[1.1] text-black transition-clip duration-1000 ease-out">
                        {data.acf.services_heading}
                    </h2>
                    <h3 className="font-bellota font-bold text-center text-[50px] leading-[1.1] text-green transition-clip duration-1000 ease-out">
                        {data.acf.services_sub_heading}
                    </h3>
                </div>
                <div className="w-full flex flex-row justify-center items-center px-13.5 gap-10">
                    {services?.map(service => {
                        const image = service._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                        return (
                            <div
                                key={service.id}
                                className="group flex flex-row gap-5 bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02]"
                            >
                            
                                {/* Image */}
                                <div className="overflow-hidden w-1/2">
                                    <img
                                        src={service.acf.additional_image.url}
                                        alt={service.title.rendered}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col gap-4 w-1/2">
                                    <h2
                                    className="text-2xl font-bold text-gray-800 font-valturin"
                                    dangerouslySetInnerHTML={{
                                        __html: service.title.rendered,
                                    }}
                                    />

                                    <h3 className="text-xl font-bold font-bellota">
                                        {service.acf.sub_title}
                                    </h3>

                                    <span
                                    className="text-gray-600 text-md font-light leading-relaxed font-bellota-text"
                                    dangerouslySetInnerHTML={{
                                        __html: service.excerpt.rendered,
                                    }}
                                    />

                                    {/* Button */}
                                    <a
                                    href={service.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bellota-text mt-2 inline-block text-blue-500 font-semibold transition-all duration-300 group-hover:translate-x-2"
                                    >
                                        Learn More →
                                    </a>
                                </div>
                            </div>
                        );
                        })}
                </div>
            </div>
        </>
    )}
    </div>
  );
}