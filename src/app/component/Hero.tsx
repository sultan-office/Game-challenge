"use client";

import Image from "next/image";
import Link from "next/link";
import TitleAnimation from "./TitleAnimation";

const Hero = () => {


  return (
    <>
      <section
        className="lg:bg-heroBg bg-no-repeat overflow-x-hidden"
        id="hero"
      >
        <div className="container">
          <div className="xl:flex">
            <div className="lg:w-9/12 xl:w-7/12">
              <div className="pt-14 lg:pt-[203px] relative z-10">
                <h3 className="leading-auto text-primary text-xs uppercase font-medium animate-up delay-100">
                  <TitleAnimation title="Lorem ipsum dolor" />
                </h3>
                <h1 className="text-light font-integralCf lg:text-[64px] text-5xl leading-none uppercase mb-6 mt-6 lg:mt-[12px]">
                  <TitleAnimation title="Game-changing infrastructure" />
                </h1>
                <p className="text-sm text-lightGray font-light leading-5 max-w-[496px] animate-up delay-200">
                  A decentralised, non-custodial social graph, empowering
                  players to take full ownership of their gaming identities and
                  enabling developers to build next-gen applications.
                </p>
                <div className="mt-14 lg:mt-16 animate-up delay-300">
                  <Link
                    href="/"
                    className="bg-primary rounded-lg text-base leading-6 py-4 px-[35px] inline-block text-light hover:-translate-y-1 duration-300"
                  >
                    Join Discord
                  </Link>
                </div>
              </div>
            </div>
            <div className="xl:w-5/12">
              <div className="relative pt-12 md:pt-[118px] z-[1]">
                <Image
                  src="/images/hero/x-shape.svg"
                  alt="shape-image"
                  width={477}
                  height={507}
                  className="max-w-full xl:w-auto mx-auto xl:left-[54px]"
                />
                <Image
                  src="/images/hero/hero-image.png"
                  width={870}
                  height={489}
                  alt="hero-image"
                  className={`w-[700px] md:w-auto max-w-[unset] absolute -top-4 md:top-[33px] right-1/2 translate-x-1/2 xl:translate-x-0 xl:right-[-160px] -z-[1] duration-700`}
                />

                {/* User Info */}
                <div className="user-info absolute top-[140px] sm:top-[200px] md:top-[291px] left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-[192px] z-10">
                  <Image
                    src="/images/hero/avatar.png"
                    alt="User-id: XBorg001"
                    width={104}
                    height={104}
                    className="mx-auto mb-"
                  />
                  <h6 className="text-center text-[10px] leading-4 text-white ">
                    User id:
                  </h6>
                  <div className="text-center text-white text-xls leading-4">
                    XBorg001
                  </div>
                </div>
                {/* Pill Section */}
                <div className="pill-section absolute left-1/2 -translate-x-1/2 bottom-0">
                  <div className="relative mb-[15px]">
                    <Image
                      src="/images/hero/lock.svg"
                      alt="lock"
                      loading="lazy"
                      width={60}
                      height={48}
                      className="mx-auto"
                    />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 mx-auto">
                      <Image
                        src="/images/hero/lock-ring.svg"
                        alt="Lock Ring"
                        loading="lazy"
                        width={48}
                        height={48}
                        className="animate-round"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 justify-center gap-2 w-[402px]  bottom-0 right-[102px] mx-auto">
                    {/* #868686, #00000000 */}
                    {[
                      "Soulbound Launchpad",
                      "Soulbound Launchpad",
                      "Soulbound Launchpad",
                    ].map((title: string, index: number) => {
                      return (
                        <div key={index} className="first:col-span-2">
                          <div
                            className="border p-px border-[#343434] rounded-[360px] w-fit mx-auto overflow-hidden relative z-[1] animate-up"
                            style={{ animationDelay: `${(index + 1) * 200}ms` }}
                          >
                            <span className="h-0.5 block w-10 bg-gradient-to-r from-black/0 via-[#b9b9b9]  to-black/0 absolute -top-px left-1/2 opacity-0 animate-herPill delay-[2000ms]"></span>
                            <div className="rounded-[360px] absolute -inset-px z-[-1] bg-gradient-to-r from-[#868686] to-black/0"></div>
                            <div className="px-5 py-[15px] bg-black rounded-[360px]">
                              <span className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-[#ABABAB] to-[#2D2D2D]">
                                {title}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-[78px]">
            <button>
              <span className="block pb-[3px] font-integralCf bg-clip-text text-transparent bg-gradient-to-r from-[#2B2B2B] via-primary to-[#2B2B2B]">
                Scroll down
              </span>
              <span className="inline-block mx-auto animate-bounce">
                <svg
                  width="23"
                  height="12"
                  viewBox="0 0 23 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_0_191)">
                    <path
                      d="M19 4V8.52366L14.7584 11.7152H8.2416L4 8.52366V4L11.5 9.57838L19 4Z"
                      fill="#EB3A4A"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_0_191"
                      x="0.896552"
                      y="0.896552"
                      width="21.2069"
                      height="13.9222"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="1.55172" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 0.458333 0 0 0 0 0.507297 0 0 0 0.3 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_0_191"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_0_191"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
