import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

type ShoppingCartProps = {
  closeCart: () => void;
};

export default function ShoppingCart({ closeCart }: ShoppingCartProps) {
  return (
    <div className="pt-[28px] absolute bg-white top-16 md:top-0 right-0 w-fit shadow-lg rounded-lg">
      <div className="flex justify-between items-center px-6 py-4 border-b border-[#D9D9D9]">
        <h2 className="text-[24px] font-semibold">Shopping Cart</h2>
        <button onClick={closeCart} className="text-[#9F9F9F] text-[20px]">
          <Icon icon="bi:bag-x" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col gap-6 px-6 py-6">
        {[1, 2].map((_, index) => (
          <div key={index} className="flex justify-between items-center border-b border-[#D9D9D9] pb-4">
            <div className="flex gap-6 items-center">
              <div className="w-[105px] h-[105px] bg-[#B88E2F] bg-opacity-25 rounded-lg flex items-center justify-center">
                <Image
                  src="/Asgaard-sofa.png"
                  alt="Asgaard Sofa"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h3 className="text-[16px] font-normal">Asgaard sofa</h3>
                <div className="flex gap-[15px] items-center">
                  <p className="text-[16px] font-light">1</p>
                  <p className="text-[12px] font-light">x</p>
                  <p className="text-[12px] font-medium text-[#B88E2F]">Rs. 250,000.00</p>
                </div>
              </div>
            </div>
            <Icon icon="flowbite:close-circle-solid" className="text-[#9F9F9F] text-[20px]" />
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="px-6 py-4">
        <div className="flex justify-between mb-4">
          <p className="text-[16px] font-normal">Subtotal</p>
          <p className="text-[16px] font-semibold text-[#B88E2F]">Rs. 520,000.00</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Link href="/Cart" onClick={closeCart} className="py-2 px-6 text-[12px] font-normal border border-black rounded-full">
            Cart
          </Link>
          <Link href="/CheckOut" onClick={closeCart} className="py-2 px-6 text-[12px] font-normal border border-black rounded-full">
            Checkout
          </Link>
          <Link href="/Comparison" onClick={closeCart} className="py-2 px-6 text-[12px] font-normal border border-black rounded-full">
            Comparison
          </Link>
        </div>
      </div>
    </div>
  );
}
