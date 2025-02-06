import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function ShoppingCart() {
  return (
    <div className="py-8 md:px-24 md:py-16">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Cart Items Section */}
        <div className="w-full md:w-2/3 space-y-6">
          <div className="hidden md:flex justify-between bg-[#F9F1E7] p-4 font-medium text-black">
            <span className="w-1/3">Product</span>
            <span className="w-1/4 text-center">Price</span>
            <span className="w-1/4 text-center">Quantity</span>
            <span className="w-1/4 text-right">Subtotal</span>
          </div>

          {/* Single Cart Item */}
          <div className="flex items-center gap-4 md:gap-6 p-4 border rounded-lg">
            <div className="bg-[#B88E2F]/30 p-2 rounded-lg">
              <Image src="/Asgaard-sofa.png" height={70} width={105} alt="Asgaard Sofa" />
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full items-center text-gray-600 text-sm md:text-base">
              <span className="w-1/3 text-black font-medium">Asgaard Sofa</span>
              <span className="w-1/4 text-center">Rs. 250,000.00</span>
              <div className="flex items-center gap-2 border px-3 py-1 rounded-lg">
                <span className="text-black">1</span>
              </div>
              <span className="w-1/4 text-right text-black">Rs. 250,000.00</span>
              <button>
                <Icon icon="ant-design:delete-filled" className="text-primary w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Cart Summary Section */}
        <div className="w-full md:w-1/3 bg-[#F9F1E7] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-black text-center">Cart Totals</h2>
          <div className="mt-6 space-y-4">
            <div className="flex justify-between text-black font-medium">
              <span>Subtotal</span>
              <span className="text-gray-600">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between text-black font-semibold text-lg">
              <span>Total</span>
              <span className="text-[#B88E2F]">Rs. 250,000.00</span>
            </div>
          </div>
          <Link
            href="/checkout"
            className="block text-center mt-6 text-black font-medium text-lg border border-black rounded-lg py-3 w-full"
          >
            Check Out
          </Link>
        </div>
      </div>
    </div>
  );
}
