export default function ServicesMarquee({ services }) {
  return (
      !services ? (
          <></>
        ) : (
          <div className="w-full bg-green py-4 overflow-hidden">
            
            <div className="marquee flex gap-10">
              
              {[...services, ...services].map((service, index) => {
                const image =
                  service._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 whitespace-nowrap"
                  >
                    <img
                      src={image}
                      alt={service.title.rendered}
                      className="w-20 h-20 object-contain"
                    />

                    <h2
                      className="text-white font-semibold text-lg font-bellota text-[25px]"
                      dangerouslySetInnerHTML={{
                        __html: service.title.rendered,
                      }}
                    />
                  </div>
                );
              })}

            </div>
          </div>
        )
  );
}