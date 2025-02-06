import Image from "next/image"

export default function Feature() {
  return (
    <div className="bg-[#FAF3EA] py-[35px] px-[23px] md:px-[53px] md:py-[100px]">
      <div className="flex flex-col lg:flex-row justify-around gap-4">
        <div className="flex items-center gap-2 justify-center lg:justify-start flex-col lg:flex-row">
          <div className="w-[50px] h-[60px] flex items-center">
            <Image src="/trophy 1.png" width={100} height={100} alt="trophy" />
          </div>
          <div className="text-center lg:text-left text-Gray3">
            <p className="font-semibold text-[25px] text-[#242424]">High Quality</p>
            <p className="font-medium text-[20px]">crafted from top materials</p>
          </div>
        </div>

        <div className="flex items-center gap-2 justify-center lg:justify-start flex-col lg:flex-row">
          <div className="w-[50px] h-[60px] flex items-center">
            <Image src="/guarantee.png" width={100} height={100} alt="guarantee" />
          </div>
          <div className="text-center lg:text-left text-Gray3">
            <p className="font-semibold text-[25px] text-[#242424]">Warranty Protection</p>
            <p className="font-medium text-[20px]">Over 2 years</p>
          </div>
        </div>

        <div className="flex items-center gap-2 justify-center lg:justify-start flex-col lg:flex-row">
          <div className="w-[50px] h-[60px] flex items-center">
            <Image src="/shipping.png" width={100} height={100} alt="shipping" />
          </div>
          <div className="text-center lg:text-left text-Gray3">
            <p className="font-semibold text-[25px] text-[#242424]">Free Shipping</p>
            <p className="font-medium text-[20px]">Order over 150 $</p>
          </div>
        </div>

        <div className="flex items-center gap-2 justify-center lg:justify-start flex-col lg:flex-row">
          <div className="w-[50px] h-[60px] flex items-center">
            <Image src="/customer-support.png" width={100} height={100} alt="customer support" />
          </div>
          <div className="text-center lg:text-left text-Gray3">
            <p className="font-semibold text-[25px] text-[#242424]">24 / 7 Support</p>
            <p className="font-medium text-[20px]">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  )
}
