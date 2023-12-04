import Image from "next/image";
import playerData from "./payerData.json";

type playerDataType = {
  id: number;
  avatar: string;
  userName: string;
  playerMetaData: {
    playerName: string;
    gamingPlatform: string;
    gameLevel: number;
    achievements: string[];
    totalScore: number;
    preferredGameMode: string;
    collectedItems: {
      weapon: string;
      armor: string;
      pet: string;
    };
  };
};

const Users = () => {
  return (
    <>
      <section className="pt-20 pb-[160px] relative z-[1]">
        <div className="container">
          <div className="flex">
            <div className="w-1/2">
              <div>
                <h2 className="text-light font-integralCf text-[40px] leading-[48px] mb-8 max-w-[374px]">
                  The New Gaming Web
                </h2>
                <p className="text-lightGray text-sm font-light leading-5 max-w-[387px]">
                  At the core of the XBorg Data Graph Protocol lies a dynamic
                  and interconnected network of gaming profiles. Each
                  player&#39;s profile is represented as a unique ERC-721 NFT,
                  complete with metadata unique to their gaming journey.
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="grid grid-cols-2 gap-6">
                {playerData.map((data: playerDataType) => {
                  return (
                    <>
                      <div
                        key={data.id}
                        className="bg-[#3434347a] hover:bg-transparent duration-300  rounded-[55px] relative group"
                      >
                        <div className=" border border-gradient-to-l from-[#868686] to-black/0 rounded-[55px] p-px z-20 duration-300 group-hover:relative group-hover:bg-primary/50">
                          <div className="rounded-[55px] p-1.5 flex items-center gap-x-3.5 duration-300 bg-black group-hover:bg-primary/10">
                            <Image
                              src={data.avatar}
                              alt={data.userName}
                              width={64}
                              height={64}
                            />
                            <h6 className="user-block-text">{data.userName}</h6>
                          </div>
                        </div>
                        {/* Hover Block */}
                        <div className="absolute -inset-4 -top-4 z-10">
                          <div className="relative inset-0 rounded-2xl p-4 pb-6">
                            <div className="border border-[#343434] rounded-2xl absolute"></div>
                            {/* User Name block */}
                            <div className=""></div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/users/bubble-image.png"
          alt="bubble-img"
          width={799}
          height={1058}
          className="w-auto h-auto absolute right-0 top-[-306px] z-[-1]"
        />
      </section>
    </>
  );
};

export default Users;
