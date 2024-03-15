import Image from "next/image";
import Input from "@/components/Input";
import DivMain from "@/components/DivMain";
function page() {
  return (
    <div className="bg-light-blue app h-screen pt-[64px]">
      <div className="container">
        <div className="flex items-center justify-between mb-[36px]">
          <Image
            src={"/devfinder.svg"}
            alt="cite-logo-svg"
            width={128}
            height={39}
            style={{
              width: "auto",
            }}
          />
          <Image
            src={"/dark.svg"}
            alt="cite-dark-logo"
            width={78}
            height={20}
          />
        </div>
        <Input />
        <DivMain />
      </div>
    </div>
  );
}

export default page;
