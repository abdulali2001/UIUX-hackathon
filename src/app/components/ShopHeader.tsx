import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

export default function ShopHeader() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat flex justify-center items-center h-[250px] md:h-[316px] px-4"
      style={{ backgroundImage: `url("/ContactHeader-bg.png")` }}
    >
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <Image
            src="/Meubel House_Logos-05.png"
            alt="logo"
            width={60}
            height={60}
            className="drop-shadow-md"
          />
          <h2 className="font-semibold text-[36px] md:text-[48px] text-black mt-2">
            Shop
          </h2>
        </div>

        {/* Breadcrumb Section */}
        <div className="flex items-center justify-center gap-2 mt-3">
          <Link
            href="/"
            className="font-semibold text-[16px] text-black hover:text-gray-600 transition"
          >
            Home
          </Link>
          <Icon icon="material-symbols:keyboard-arrow-right" className="text-xl text-gray-700" />
          <p className="font-light text-[16px] text-black">Shop</p>
        </div>
      </div>
    </div>
  );
}
