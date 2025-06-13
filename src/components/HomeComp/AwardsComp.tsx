import Image from "next/image";

const AwardsComp = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {/* 1st award start here */}
        <div className="bg-[#FF5A29] flex flex-col gap-2 items-center justify-center p-6 sm:py-10 h-48 sm:h-60 lg:h-64">
          {/* headline start here */}
          <div className="">
            <Image src="/l1.png" width={160} height={70} alt="" />
          </div>
          {/* headline end here */}
          {/* description start here */}
          <div className="">
            <p className="text-black text-xl font-medium text-center leading-tight">
              Recognized for Workplace Excellence
            </p>
          </div>
          {/* description end here */}
        </div>
        {/* 1st award end here */}

        {/* 2nd award start here */}
        <div className="bg-[#E44A12] flex flex-col gap-2 items-center justify-center p-6 sm:py-10 h-48 sm:h-60 lg:h-64">
          {/* headline start here */}
          <div className="">
            <Image src="/pmw.png" width={160} height={70} alt="" />
          </div>
          {/* headline end here */}
          {/* description start here */}
          <div className="">
            <p className="text-black text-xl font-medium text-center leading-tight">
              Awarded as a Top Performing Agency
            </p>
          </div>
          {/* description end here */}
        </div>
        {/* 2nd award end here */}

        {/* 3rd award start here */}
        <div className="bg-[#D84710] flex flex-col gap-2 items-center justify-center p-6 sm:py-10 h-48 sm:h-60 lg:h-64">
          {/* headline start here */}
          <div className="">
            <Image src="/google.png" width={160} height={70} alt="" />
          </div>
          {/* headline end here */}
          {/* description start here */}
          <div className="">
            <p className="text-black text-xl font-medium text-center leading-tight">
              A Certified Google Premier Partner Agency
            </p>
          </div>
          {/* description end here */}
        </div>
        {/* 3rd award end here */}

        {/* 4th award start here */}
        <div
          className="bg-[#FF6A2B] flex flex-col gap-2 items-center justify-center p-6 sm:py-10 h-48 sm:h-60 lg:h-64
            "
        >
          {/* headline start here */}
          <div className="">
            <Image src="/campaign.png" width={160} height={70} alt="" />
          </div>
          {/* headline end here */}
          {/* description start here */}
          <div className="">
            <p className="text-black text-xl font-medium text-center leading-tight">
              Recognized as Global Industry Leader
            </p>
          </div>
          {/* description end here */}
        </div>
        {/* 4th award end here */}

        {/* 5th award start here */}
        <div className="bg-[#FF5A29] flex flex-col gap-2 items-center justify-center p-6 sm:py-10 h-48 sm:h-60 lg:h-64">
          {/* headline start here */}
          <div className="">
            <Image src="/inc.png" width={160} height={70} alt="" />
          </div>
          {/* headline end here */}
          {/* description start here */}
          <div className="">
            <p className="text-black text-xl font-medium text-center leading-tight">
              Celebrated for Exceptional Work Culture
            </p>
          </div>
          {/* description end here */}
        </div>
        {/* 5th award end here */}
      </div>
    </>
  );
};

export default AwardsComp;
