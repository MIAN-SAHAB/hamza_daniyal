export default function Footer() {
  return (
    <>
      <footer className="relative w-full overflow-hidden">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="relative z-10 max-w-full w-full mx-auto px-52.5 pt-18.25 flex flex-col justify-between min-h-175"
            style={{
              backgroundImage: "url('/images/footer-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <div className="absolute inset-0 bg-black/73 w-full h-full" />
            <div className="flex justify-between relative z-10">
              <div className="flex flex-col gap-2">
                <p className="font-bellota-text text-[18px] leading-[1.4] text-offwhite">
                  Call Us Now →
                </p>
                <p className="font-bellota-text text-[18px] leading-[1.4] text-offwhite">
                  <a href="tel:+923332303315" className="hover:text-cream transition-colors"> +92 (333) 230-3315 </a>
                </p>
                <p className="font-bellota-text text-[18px] leading-[1.4] text-offwhite mt-14">
                  Send Email →{" "}
                </p>
                <p className="font-bellota-text text-[18px] leading-[1.4] text-offwhite">
                  <a
                    href="mailto:contact@hamzadaniyal.com"
                    className="hover:text-cream transition-colors"
                  >
                    contact@hamzadaniyal.com
                  </a>
                </p>
                
              </div>

              <div className="flex gap-24">
                <nav className="flex flex-col gap-1">
                  {[ {
                      title: "Home",
                      url: "/"
                    }, {
                      title: "About",
                      url: "/about"
                    }, 
                    {
                      title: "Reviews",
                      url: "/reviews"
                    }, 
                    {
                      title: "Residential",
                      url: "/residential"
                    }, 
                    {
                      title: "Commercial",
                      url: "/commercial"
                    }, 
                    {
                      title: "Projects",
                      url: "/projects"
                    }, 
                    {
                      title: "Contact",
                      url: "/contact"
                    }
                  ].map((item) => (
                    <a
                      key={item.title}
                      href={item.url}
                      className="font-bellota-text text-[18px] leading-[1.4] text-offwhite hover:text-cream transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>

                <nav className="flex flex-col gap-1 mt-2.75">
                  {[
                    {
                      title: "Facebook",
                      url: 'https://www.facebook.com/hamza.daniyal.455'
                    }, 
                    {
                      title: "Instagram",
                      url: "https://www.instagram.com/mian__sahab/"
                    }, 
                    {
                      title: "LinkedIn",
                      url: "https://www.linkedin.com/in/hamza-daniyal/"
                    }
                    
                  ].map((item) => (
                    <a
                      key={item.title}
                      href={item.url}
                      className="font-bellota-text text-[18px] leading-[1.4] text-offwhite hover:text-cream transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            <div className="relative z-10">
              <h2 className="font-valturin text-[258px] leading-34 tracking-[-0.02em] uppercase text-cream text-center">
                Hamza
              </h2>
            </div>
          </div>
          <div className="relative z-10 max-w-full w-full mx-auto px-52.5 pt-3 flex flex-col min-h-23.75 gap-2">
            <div className="text-center">
              <h2 className="font-valturin text-[clamp(80px,9.4vw,62px)] leading-[1.1] tracking-[-0.02em] uppercase text-cream text-center">
                Daniyal
              </h2>
            </div>
            <div className="text-center border-t border-gray-600 p-3">
              <p className="font-bellota-text text-[18px] leading-[1.4] text-gray text-center">
                © Hamza Daniyal — All Rights Reserved
              </p>
            </div>
          </div>
        </div>
        
      </footer>
    </>
  );
}
