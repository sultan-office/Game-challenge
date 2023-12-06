"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TitleAnimation from "./TitleAnimation";

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
      <section className="md:pt-[120px] pb-12 md:pb-20 relative z-10">
        <div className="container">
          <div>
            <h2 className="text-5xl lg:text-[64px] leading-none font-integralCf text-lightGray max-w-[770px] text-center mx-auto">
              <TitleAnimation title="The value network of gaming" />
            </h2>
            <p className="text-sm leading-5 text-lightGray text-center max-w-[520px] mx-auto mt-6">
              The fundamental protocol that allows anyone to create gaming
              applications built on top of player identities.
            </p>
          </div>
          <div className="mt-14">
            <div className="lg:w-8/12 mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[...cardData].map((data: cardDataType) => {
                  return (
                    <div
                      key={data.id}
                      className="border border-[#343434] rounded-2xl p-6 hover:-translate-y-5 duration-300"
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
        <motion.div
          initial={{ top: "400px" }}
          whileInView={{ top: "120px" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="left-0 top-[120px] absolute z-[-1]"
        >
          <Image
            src="/images/services/services-shape-img.png"
            alt="bubble-shape"
            width={151}
            height={245}
            className="w-auto h-auto"
          />
        </motion.div>
      </section>
    </>
  );
};

export default Services;
