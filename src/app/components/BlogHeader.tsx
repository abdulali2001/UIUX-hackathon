import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function BlogHeader() {
  return (
    <div
      className="bg-cover md:bg-contain bg-no-repeat flex justify-center items-center h-[316px]"
      style={{
        backgroundImage: `url("/ContactHeader-bg.png")`,
      }}
    >
      <div className="w-fit text-center">
        {/* Logo Section */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-[60px] h-[60px] flex items-center justify-center">
            <Image
              src="/Meubel House_Logos-05.png"
              alt="logo"
              width={60}
              height={60}
            />
          </div>
          <h2 className="font-medium text-[48px] text-black">Blog</h2>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-center gap-1">
          <Link href="/" className="font-semibold text-[16px] text-black">
            Home
          </Link>
          <Icon icon="material-symbols:keyboard-arrow-right" className="w-5 h-5 font-bold" />
          <p className="font-light text-[16px] text-black">Blog</p>
        </div>
      </div>
    </div>
  );
}








