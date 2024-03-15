import Image from "next/image";

function DivMain() {
  return (
    <div className="bg-white shadow-xl w-full pt-[44px] small:pb-[0px] pb-[48px] small:px- px-[48px] small:px-[24px] small:pt-[32px] rounded-xl">
      <div className="flex small:gap-[19px] gap-[37px]">
        <Image
          className="w-[117px] small:w-[70px] small:h-[70px] h-[117px]"
          src={"/cat-git.png"}
          alt="cat-img"
          width={117}
          height={117}
        />
        <div className="grow">
          <div className="join-direction flex grow justify-between mb-[20px]">
            <div>
              <h1 className="font-bold text-[26px] leading-[38.51px] text-light-dark mb-[2px]">
                The Octocat
              </h1>
              <p className="text-both-blue text-[16px]">@octocat</p>
            </div>
            <p className="text-[15px] text-ligth-grey mt-[8px]">
              Joined 25 Jan 2011
            </p>
          </div>
        </div>
      </div>
      <p className="ml-[150px] leading-[25px] w-full max-w-[520px] mt-[-25px] no-bio text-[15px] text-opacity-blue mb-[32px]">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
      <div className="w-full">
        <div className="bg-light-blue py-[15px] small:ml-[-5px]  ml-[150px] rounded-xl pl-[32px] pr-[83px] mb-[37px]">
          <div className="flex justify-between gap-[15px]">
            <p className="text-[13px] text-opacity-blue mb-[1px]">Repos</p>
            <p className="text-[13px] text-opacity-blue mb-[1px]">Followers</p>
            <p className="text-[13px] text-opacity-blue mb-[1px]">Following</p>
          </div>
          <div className="flex small:gap-[45px] gap-[137px]">
            <h3 className="font-bold text-[22px] text-light-dark small:pl-[10px]">8</h3>
            <h3 className="font-bold text-[22px] text-light-dark">3938</h3>
            <h3 className="font-bold text-[22px] text-light-dark ml-[-5px]">
              9
            </h3>
          </div>
        </div>
        <div className="ml-[150px] doc flex flex-wrap gap-x-[62px] gap-y-[19px] text-opacity-blue">
          <div className="flex gap-[19px] items-center">
            <Image
            className="w-[13px]"
              src={"/location.svg"}
              alt="location-img"
              width={13}
              height={20}
            />
            <p className="text-[15px] leading-[22.22px]">San Francisco</p>
          </div>
          <div className="flex gap-[16.01px] items-center">
            <Image
              src={"/t.svg"}
              alt="location-img"
              width={19.99}
              height={19.94}
            />
            <p className="text-[15px] leading-[22.22px]">Not Available</p>
          </div>
          <div className="flex gap-[16.01px] items-center">
            <Image
              src={"/link.svg"}
              alt="location-img"
              width={19.99}
              height={19.94}
            />
            <p className="text-[15px] leading-[22.22px]">https://github.blog</p>
          </div>
          <div className="flex gap-[16.01px] items-center">
            <Image
              src={"/agithub.svg"}
              alt="location-img"
              width={19.99}
              height={19.94}
            />
            <p className="text-[15px] leading-[22.22px]">@github</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DivMain;
