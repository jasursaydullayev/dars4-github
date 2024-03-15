import Image from "next/image";

function Input() {
  return (
    <div>
      <form className="mb-[24px] small:mb-[16px] relative">
        <Image
          className="absolute top-[23px] small:left-[16px] left-[32px]"
          src={"/loop.svg"}
          alt="loop-img"
          width={24.06}
          height={24}
        />
        <input
          className="w-full py-[22px] small:pl-[49px] small:text-[13px] pl-[80px] pr-[130px] shadow-xl rounded-2xl text-[18px] leading-[25px] text-[#4B6A9B]"
          type="text"
          placeholder="Search GitHub username…"
        />
        <button className="absolute small:w-[84px] small:text-[14px] right-0 top-0 mt-[9.5px] mr-[9.5px] w-full max-w-[106px] rounded-xl bg-both-blue text-white font-bold text-[16px] py-[12.5px] flex justify-center items-center">
          Search
        </button>
      </form>
    </div>
  );
}

export default Input;
