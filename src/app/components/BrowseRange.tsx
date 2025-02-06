import Image from "next/image";

export default function BrowseRange() {
  return (
    <div className="flex flex-col gap-[30px] md:gap-[60px] pt-[30px] md:pt-0 items-center bg-[#F4F5F7] px-4">
      <div className="w-fit text-center">
        <h2 className="text-Font font-bold text-[32px]">Browse The Range</h2>
        <p className="text-Font1 font-normal text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-[20px]">
        {/* Dining Section */}
        <div className="w-[100%] sm:w-[381px] flex flex-col gap-[30px]">
          <div className="relative w-full h-[100px]">
            <Image
              src="/image 100.png"
              alt="Dining Room Furniture"
              className="rounded-[4px] object-cover w-full h-full"
              width={900}
              height={100}
            />
          </div>
          <div className="w-full text-center">
            <p className="font-semibold text-[24px] text-Font">Dining</p>
          </div>
        </div>

        {/* Living Section */}
        <div className="w-[100%] sm:w-[381px] flex flex-col gap-[30px]">
          <div className="relative w-full h-[100px]">
            <Image
              src="/image 106.png"
              alt="Living Room Furniture"
              className="rounded-[4px] object-cover w-full h-full"
              width={900}
              height={100}
            />
          </div>
          <div className="w-full text-center">
            <p className="font-semibold text-[24px] text-Font">Living</p>
          </div>
        </div>

        {/* Bedroom Section */}
        <div className="w-[100%] sm:w-[381px] flex flex-col gap-[30px]">
          <div className="relative w-full h-[100px]">
            <Image
              src="/image 101.png"
              alt="Bedroom Furniture"
              className="rounded-[4px] object-cover w-full h-full"
              width={900}
              height={100}
            />
          </div>
          <div className="w-full text-center">
            <p className="font-semibold text-[24px] text-Font">Bedroom</p>
          </div>
        </div>
      </div>
    </div>
  );
}
