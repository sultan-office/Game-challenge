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
                <h2 className="text-light font-integralCf text-[40px] leading-[48px] mb-8 max-w-[370px]">
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
                        className="bg-transparent relative group z-0 hover:z-10"
                      >
                        <div className="rounded-[55px] group-hover:z-20 relative duration-300 border border-[#343434] group-hover:border-primary/50 group-hover:after:opacity-0 after:duration-300 after:block after:absolute after:-inset-px after:rounded-[55px] after:z-[-1] after:bg-gradient-to-l after:from-[#868686] after:to-black/0">
                          <div className="rounded-[55px] p-2 flex items-center duration-300 gap-x-3.5 bg-black group-hover:bg-primary/10">
                            <Image
                              src={data.avatar}
                              alt={data.userName}
                              width={64}
                              height={64}
                            />
                            <h6 className="bg-clip-text text-transparent bg-gradient-to-r duration-300 from-[#2D2D2D] to-[#ABABAB] group-hover:from-primary group-hover:to-primary">
                              {data.userName}
                            </h6>
                          </div>
                        </div>
                        {/* Hover Block */}

                        <div className="opacity-0 duration-300 invisible group-hover:opacity-100  group-hover:visible absolute group-odd:-left-4 group-even:-right-4 -inset-y-4 w-[624px] z-10">
                          <div className="relative inset-0 rounded-2xl">
                            <div className="border border-[#343434] rounded-2xl absolute inset-0 backdrop-blur-[10px] bg-black/80 z-[-1]"></div>
                            {/* User Name block */}
                            <div className="pt-[120px] p-6">
                              <code className="text-white text-sm font-medium font-robotoMono leading-5">
                                <p className="text-[#F0F0F0]">
                                  player_metadata = &#123;
                                </p>
                                <div className="pl-9 text-[#95959D]">
                                  <p>
                                    &quot;player_name&quot;: &quot;
                                    {data.playerMetaData.playerName}&quot;,
                                  </p>

                                  <p>
                                    &quot;gaming_platform&quot;: &quot;
                                    {data.playerMetaData.gamingPlatform}
                                    &quot;,
                                  </p>

                                  <p>
                                    &quot;gaming_platform&quot;: &quot;
                                    {data.playerMetaData.gamingPlatform}
                                    &quot;,
                                  </p>

                                  <p>
                                    &quot;game_level&quot;:&nbsp;
                                    <span className="text-primary">
                                      {data.playerMetaData.gameLevel}
                                    </span>
                                  </p>

                                  <p>
                                    &quot;achievements&quot;:&#91;
                                    {data.playerMetaData.achievements.map(
                                      (text, index) => {
                                        if (
                                          data.playerMetaData.achievements
                                            .length ===
                                          index + 1
                                        ) {
                                          return (
                                            <span key={index}>{text}</span>
                                          );
                                        }
                                        {
                                          return (
                                            <span key={index}>
                                              &quot;{text}&quot;,&nbsp;
                                            </span>
                                          );
                                        }
                                      }
                                    )}
                                    &#93;
                                  </p>

                                  <p>
                                    &quot;total_score&quot;:&nbsp;
                                    <span className="text-primary">
                                      {data.playerMetaData.totalScore}
                                    </span>
                                  </p>

                                  <p>
                                    &quot;preferred_game_mode&quot;: &quot;
                                    {data.playerMetaData.preferredGameMode}
                                    &quot;,
                                  </p>

                                  <div>
                                    <p>&quot;collected_items&quot;: &#123;</p>
                                    {/* collected items */}
                                    <div className="pl-[33px]">
                                      <p>
                                        &quot;weapon&quot;: &quot;
                                        {
                                          data.playerMetaData.collectedItems
                                            .weapon
                                        }
                                        &quot;,
                                      </p>

                                      <p>
                                        &quot;armor&quot;: &quot;
                                        {
                                          data.playerMetaData.collectedItems
                                            .armor
                                        }
                                        &quot;,
                                      </p>

                                      <p>
                                        &quot;pet&quot;: &quot;
                                        {data.playerMetaData.collectedItems.pet}
                                        &quot;,
                                      </p>
                                    </div>
                                    <p>&#125;</p>
                                  </div>
                                </div>
                                <p className="text-[#F0f0f0]">&#125;</p>
                              </code>
                            </div>
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
