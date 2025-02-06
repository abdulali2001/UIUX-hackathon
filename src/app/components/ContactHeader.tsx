import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

export default function ContactHeader() {
  return (
    <div
      className="flex justify-center items-center bg-cover bg-no-repeat h-[316px] md:bg-contain"
      style={{
        backgroundImage: `url("/ContactHeader-bg.png")`,
      }}
    >
      <div className="text-center space-y-4">
        <div className="mx-auto w-[60px] h-[60px] flex justify-center items-center">
          <Image
            src="/Meubel House_Logos-05.png"
            alt="logo"
            width={50}
            height={100}
          />
        </div>
        <h2 className="font-medium text-[48px] text-black">Contact</h2>
        <div className="flex justify-center items-center gap-1">
          <Link href="/" className="font-semibold text-[16px] text-black">
            Home
          </Link>
          <Icon
            icon="material-symbols:keyboard-arrow-right"
            className="w-5 h-5 font-bold"
          />
          <p className="font-light text-[16px] text-black">Contact</p>
        </div>
      </div>
    </div>
  );
}
