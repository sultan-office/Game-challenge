import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="lg:hidden py-2">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <Image
                src="/images/header/logo.svg"
                width={56}
                height={56}
                alt="logo"
              />
            </div>
            <div>
              <button className="relative">
                <svg
                  width="134"
                  height="40"
                  viewBox="0 0 134 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="133"
                    height="39"
                    rx="7.5"
                    fill="white"
                    fill-opacity="0.05"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="133"
                    height="39"
                    rx="7.5"
                    stroke="url(#paint0_radial_0_125)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_0_125"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(80 20) rotate(39.8056) scale(53.37 146.549)"
                    >
                      <stop stop-color="#EB3A4A" />
                      <stop offset="1" stop-color="#EB3A4A" stop-opacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
                <span className="leading-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-full">
                  Explore Apps
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
