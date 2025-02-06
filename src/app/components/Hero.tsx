export default function Hero() {
    return (
        <div
            className="flex justify-center items-center md:h-[716px] h-[400px] bg-no-repeat bg-center bg-contain bg-[#efefefe6]" 
            style={{
                backgroundImage: `url("/hero-bg.png")`,
            }}
        >
            <div className="bg-[#FFF3E3] flex flex-col justify-between gap-[46px] h-full md:h-fit w-fit md:mr-[58px] rounded-[10px] pl-[39px] pr-[43px] pt-[62px] pb-[37px]">
                <div>
                    <h3 className="text-[#333333]text-[16px] font-semibold">New Arrival</h3>
                    <h2 className="bg-primary text-[41px] md:text-[52px] font-bold leading-[50px] md:leading-[65px] mb-[17px]">
                        Discover Our <br />New Collection
                    </h2>
                    <p className="font-medium md:text-[18px] text-[11px] text-[#333333] leading-[16px] md:leading-[24px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.
                    </p>
                </div>
                <div className="bg-primary px-[72px] py-[25px] w-fit self-center">
                    <p className="bg-[#B88E2F] font-bold text-[16px]">BUY NOW</p>
                </div>
            </div>
        </div>
    );
}
