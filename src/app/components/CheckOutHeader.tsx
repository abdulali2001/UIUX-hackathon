import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

export default function CheckOutHeader() {
  return (
    <div
      className="flex justify-center items-center bg-cover bg-no-repeat h-[316px] md:bg-contain"
      style={{
        backgroundImage: `url("/ContactHeader-bg.png")`,
      }}
    >
      <div className="text-center">
        {/* Logo Section */}
        <div className="flex justify-center items-center mb-4">
          <Image
            src="/Meubel House_Logos-05.png"
            alt="logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Heading Section */}
        <h2 className="font-medium text-[48px] text-black mb-2">Checkout</h2>

        {/* Breadcrumb Section */}
        <div className="flex justify-center items-center gap-2">
          <Link href="/" className="font-semibold text-[16px] text-black">Home</Link>
          <Icon icon="material-symbols:keyboard-arrow-right" className="w-5 h-5 text-black" />
          <p className="font-light text-[16px] text-black">Checkout</p>
        </div>
      </div>
    </div>
  );
}
