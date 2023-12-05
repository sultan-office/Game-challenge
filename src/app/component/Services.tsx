import React from "react";
import Image from "next/image";

type cardDataType = {
  id: number | string;
  title: string;
  text: string;
  icon: string;
};

const cardData: cardDataType[] = [
  {
    id: 0,
    title: "Gaming social layer",
    text: "Gamers take control of their data.",
    icon: "/images/services/icon-01.png",
  },
  {
    id: 1,
    title: "Gaming social layer",
    text: "Gamers take control of their data.",
    icon: "/images/services/icon-02.png",
  },
];

const Services = () => {
  return (
    <>
      <section className="pt-[120px] pb-20 relative">
        <div className="container">
          <div>
            <h2 className="text-[64px] leading-[64px] font-integralCf text-lightGray max-w-[770px] text-center mx-auto">
              The value network of gaming
            </h2>
            <p className="text-sm leading-5 text-lightGray text-center max-w-[520px] mx-auto mt-6">
              The fundamental protocol that allows anyone to create gaming
              applications built on top of player identities.
            </p>
          </div>
          <div className="mt-14">
            <div className="w-8/12 mx-auto">
              <div className="grid grid-cols-2 gap-x-6">
                {[...cardData].map((data: cardDataType) => {
                  return (
                    <div
                      key={data.id}
                      className="border border-[#343434] rounded-2xl p-6"
                    >
                      <div>
                        <h3 className="text-2xl leading-8 text-light mb-4">
                          {data.title}
                        </h3>
                        <p className="text-lightGray text text-sm leading-5 ">
                          {data.text}
                        </p>
                      </div>
                      <div className="mt-10">
                        <Image
                          src={data.icon}
                          alt={data.title}
                          width={88}
                          height={88}
                          className="w-auto"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/services/services-shape-img.png"
          alt="bubble-shape"
          width={151}
          height={245}
          className="w-auto h-auto left-0 top-[120px] absolute"
        />
      </section>
    </>
  );
};

export default Services;
