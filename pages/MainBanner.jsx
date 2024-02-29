import Image from "next/image";
import BannerImg from "@/public/images/offerBanner.avif";
import BannerImg2 from "@/public/images/banner2.avif";
import Bannertwo from "@/components/headers/Bannertwo";
const MainBanner = () => {
  return (
    <>
      <div className="mx-20">
        <div className=" my-14">
          <Image
            src={BannerImg}
            alt="logo"
            width={1000}
            height={200}
            className="w-full h-80"
          />
        </div>

        <div className=" mb-14">
          <Image
            src={BannerImg2}
            alt="logo"
            width={1000}
            height={200}
            className="w-full h-28"
          />
        </div>
        <Bannertwo/>
      </div>
    </>
  );
};

export default MainBanner;
