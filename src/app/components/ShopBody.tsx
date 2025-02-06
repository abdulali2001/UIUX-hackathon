import { Icon } from "@iconify/react/dist/iconify.js";

const products = [
  { id: 1, name: "Syltherine", fullname: "Stylish cafe chair", discount: "-30%", price: "Rp 2.500.000", originalPrice: "Rp 3.500.000", image: "/image-1.png" },
  { id: 2, name: "Leviosa", fullname: "Stylish cafe chair", price: "Rp 2.500.000", image: "/image-2.png" },
  { id: 3, name: "Lolito", fullname: "Luxury big sofa", discount: "-50%", price: "Rp 7.000.000", originalPrice: "Rp 14.000.000", image: "/image-3.png" },
  { id: 4, name: "Respira", fullname: "Outdoor bar table and stool", price: "Rp 500.000", image: "/image-4.png" },
];

export default function ShopBody() {
  return (
    <div>
      {/* Filter and Sorting Section */}
      <div className="py-5 px-6 md:py-6 md:px-24 bg-[#F9F1E7] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex items-center text-black text-lg gap-3">
            <Icon icon="system-uicons:filtering" className="text-xl" />
            <p>Filter</p>
          </div>
          <Icon icon="ci:grid-big-round" className="text-2xl" />
          <Icon icon="bi:view-list" className="text-2xl" />
        </div>
        <p className="text-lg">Showing 1–4 of 4 results</p>
      </div>

      {/* Product Cards Section */}
      <div className="py-16 px-12 flex flex-wrap gap-10 justify-center">
        {products.map((product) => (
          <div className="bg-white group w-72 relative overflow-hidden" key={product.id}>
            <div className="w-full h-72 bg-center bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-300" style={{ backgroundImage: `url(${product.image})` }}>
              {product.discount && (
                <div className="absolute top-4 right-4 h-12 w-12 bg-red-500 text-white flex items-center justify-center rounded-full text-lg font-medium">
                  {product.discount}
                </div>
              )}
            </div>
            <div className="p-4 bg-gray-100">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.fullname}</p>
              <div className="flex items-center gap-4">
                <p className="text-lg font-bold">{product.price}</p>
                {product.originalPrice && <p className="text-gray-400 line-through">{product.originalPrice}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
