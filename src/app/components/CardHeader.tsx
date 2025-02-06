import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function PageHeader() {
  return (
    <div
      className="bg-cover md:bg-contain bg-center bg-no-repeat flex justify-center items-center h-[316px]"
      style={{ backgroundImage: `url("/ContactHeader-bg.png")` }}
    >
      <div className="text-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/Meubel House_Logos-05.png"
            alt="Meubel House Logo"
            width={60}
            height={60}
          />
          <h2 className="text-[48px] font-medium text-black">Page Title</h2>
        </div>

        {/* Breadcrumb Section */}
        <nav className="flex items-center justify-center gap-1 mt-2">
          <Link href="/" className="text-[16px] font-semibold text-black">
            Home
          </Link>
          <Icon icon="material-symbols:chevron-right" className="w-5 h-5 text-black" />
          <span className="text-[16px] font-light text-black">Current Page</span>
        </nav>
      </div>
    </div>
  );
}
