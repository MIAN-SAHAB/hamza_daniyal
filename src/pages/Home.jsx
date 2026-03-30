import { useEffect, useState, useRef } from "react";

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://api.hamzadaniyal.com/wp-json/wp/v2/pages/6?acf_format=standard")
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setData(res);
            })
            .catch(err => console.error(err));
    }, []);

  if (!data) 
    return <div>Error...</div>;
  return (
    <>
        <div className="relative w-full h-screen bg-hero bg-cover bg-center bg-[#EDE5D3] flex flex-col items-center justify-end">
            <div className="w-full h-full flex flex-row px-13.5 gap-10">
                <div className="flex flex-col justify-center gap-4 w-1/3">
                    <p className="font-bellota-text text-[24px] leading-[1.4] text-black">
                        {data.acf.banner_heading_prefix}
                    </p>
                    <h1 className="font-valturin font-bold text-[80px] leading-[1.1] text-black">
                        {data.acf.banner_heading}
                    </h1>
                    <h2 className="font-valturin font-bold text-[80px] lg:w-[800px] leading-[1.1] text-green">
                        {data.acf.banner_heading_suffix}
                    </h2>
                    <div className="flex flex-col justify-center items-start gap-5">
                        <div>
                            <p className="font-bellota-text text-[24px] leading-[1.4] text-black">
                                {data.acf.banner_text_left_1}
                            </p>
                        </div>
                        <div>
                            <span className={`dashicons ${data.acf.banner_social_icon_1.value}`} style={{ fontSize: "24px" }}></span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-end gap-4 w-1/3">
                    <img src={data.acf.banner_image.url} alt={data.acf.banner_image.alt} />
                </div>
                <div className="flex flex-col justify-center gap-4 w-1/3">
                    <p className="font-bellota-text text-[24px] leading-[1.4] text-black">
                        {data.acf.banner_text_right_1}
                    </p>
                </div>
            </div>
        </div>
    </>
  );
}