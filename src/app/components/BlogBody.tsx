import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

export default function BlogBody() {
  return (
    <div className="md:px-[80px] py-[50px] flex flex-col items-center gap-6">
      <div className="flex gap-[20px] flex-col md:flex-row">
        <div className="flex flex-col gap-[60px] order-2 md:-order-none px-4 md:px-0">
          
          <div className="flex flex-col gap-[20px]">
            <Image
              src="/blog1.png"
              alt="Blog Post Image"
              width={1200}
              height={600}
              className="w-full object-cover"
            />
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[12px]">
                <ul className="text-[#A0A0A0] text-[14px] md:text-[18px] font-normal flex gap-[12px] md:gap-[40px]">
                  <li className="flex gap-2 items-center">
                    <Icon
                      icon="dashicons:admin-users"
                      width="18px"
                      height="18px"
                    />
                    <p>Admin</p>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Icon icon="uis:calender" width="18px" height="18px" />
                    <p>14 Oct 2022</p>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Icon icon="ci:tag" width="18px" height="18px" />
                    <p>Wood</p>
                  </li>
                </ul>
                <h3 className="text-[22px] md:text-[34px] font-semibold text-black">
                  Going all-in with millennial design
                </h3>
                <p className="text-[#A0A0A0] font-normal text-[14px] md:text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
              </div>
              <div className="pb-[12px] border-b border-b-black text-[18px] font-normal text-black w-fit">
                <Link href="#">Read more</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <Image
              src="/blog2.png"
              alt="Blog Post Image"
              width={1200}
              height={600}
              className="w-full object-cover"
            />
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[12px]">
                <ul className="text-[#A0A0A0] text-[14px] md:text-[18px] font-normal flex gap-[12px] md:gap-[40px]">
                  <li className="flex gap-2 items-center">
                    <Icon
                      icon="dashicons:admin-users"
                      width="18px"
                      height="18px"
                    />
                    <p>Admin</p>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Icon icon="uis:calender" width="18px" height="18px" />
                    <p>14 Oct 2022</p>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Icon icon="ci:tag" width="18px" height="18px" />
                    <p>Handmade</p>
                  </li>
                </ul>
                <h3 className="text-[22px] md:text-[34px] font-semibold text-black">
                  Exploring new ways of decorating
                </h3>
                <p className="text-[#A0A0A0] font-normal text-[14px] md:text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
              </div>
              <div className="pb-[12px] border-b border-b-black text-[18px] font-normal text-black w-fit">
                <Link href="#">Read more</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <Image
              src="/blog3.png"
              alt="Blog Post Image"
              width={1200}
              height={600}
              className="w-full object-cover"
            />
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[12px]">
                <ul className="text-[#A0A0A0] text-[14px] md:text-[18px] font-normal flex gap-[12px] md:gap-[40px]">
                  <li className="flex gap-2 items-center">
                    <Icon
                      icon="dashicons:admin-users"
                      width="18px"
                      height="18px"
                    />
                    <p>Admin</p>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Icon icon="uis:calender" width="18px" height="18px" />
                    <p>14 Oct 2022</p>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Icon icon="ci:tag" width="18px" height="18px" />
                    <p>Wood</p>
                  </li>
                </ul>
                <h3 className="text-[22px] md:text-[34px] font-semibold text-black">
                  Handmade pieces that took time to make
                </h3>
                <p className="text-[#A0A0A0] font-normal text-[14px] md:text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
              </div>
              <div className="pb-[12px] border-b border-b-black text-[18px] font-normal text-black w-fit">
                <Link href="#">Read more</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Sidebar */}
        <div>
          <div className="pt-[30px] px-[40px] pb-[60px] w-[400px] flex flex-col items-center gap-[50px]">
            <label className="h-[60px] w-full rounded-[12px] border border-[#D0D0D0] flex items-center">
              <input type="text" className="w-[90%] py-[12px]" placeholder="Search..." />
              <Icon icon="akar-icons:search" className="text-[24px]" />
            </label>

            <div className="w-[280px] flex flex-col gap-[30px]">
              <h3 className="text-[26px] text-black font-semibold">Categories</h3>
              <div className="text-[16px] text-[#A0A0A0] font-normal flex flex-col gap-[40px]">
                <div className="flex w-full justify-between">
                  <p>Crafts</p>
                  <p>2</p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Design</p>
                  <p>8</p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Handmade</p>
                  <p>7</p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Interior</p>
                  <p>1</p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Wood</p>
                  <p>6</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="w-[400px] px-[60px] py-[20px]">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-[26px] text-black font-semibold">Recent Posts</h3>
              <div className="flex flex-col gap-[40px]">
                <div className="flex gap-[15px] items-center">
                  <Image
                    src="/recentpost1.png"
                    alt="Recent Post"
                    height={130}
                    width={130}
                    className="rounded-[12px]"
                  />
                  <div>
                    <p className="text-[16px] text-black font-normal">
                      Going all-in with millennial design
                    </p>
                    <p className="text-[14px] text-[#A0A0A0] font-normal">
                      03 Aug 2022
                    </p>
                  </div>
                </div>

                <div className="flex gap-[15px] items-center">
                  <Image
                    src="/recentpost2.png"
                    alt="Recent Post"
                    height={130}
                    width={130}
                    className="rounded-[12px]"
                  />
                  <div>
                    <p className="text-[16px] text-black font-normal">
                      Exploring new ways of decorating
                    </p>
                    <p className="text-[14px] text-[#A0A0A0] font-normal">
                      03 Aug 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex md:gap-[40px] gap-[20px]">
        <button className="md:px-[26px] md:py-[16px] px-[22px] py-[12px] bg-[#FFD700] md:text-[22px] text-[16px] font-semibold rounded-[12px] text-white w-fit h-fit">
          1
        </button>
        <button className="md:px-[26px] md:py-[16px] px-[22px] py-[12px] bg-[#F2F2F2] md:text-[22px] text-[16px] font-normal rounded-[12px] text-black w-fit h-fit">
          2
        </button>
        <button className="md:px-[26px] md:py-[16px] px-[22px] py-[12px] bg-[#F2F2F2] md:text-[22px] text-[16px] font-normal rounded-[12px] text-black w-fit h-fit">
          3
        </button>
        <button className="md:px-[30px] md:py-[16px] px-[26px] py-[12px] bg-[#F2F2F2] md:text-[22px] text-[16px] font-normal rounded-[12px] text-black w-fit h-fit">
          Next
        </button>
      </div>
    </div>
  );
}
