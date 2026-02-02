import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Merch() {
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  const addToCart = (item) => {
  setCart((prev) => {
    const existingItem = prev.find((i) => i.name === item.name);

    if (existingItem) {
      return prev.map((i) =>
        i.name === item.name
          ? { ...i, qty: i.qty + 1 }
          : i
      );
    }

    return [...prev, { ...item, qty: 1 }];
  });
};


  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };
 

  const subtotal = cart.reduce(
  (sum, item) =>
    sum + Number(item.price.replace(/[₦,]/g, "")) * item.qty,
  0
);


  return (
    <main className="bg-[#f8f7f5] min-h-screen">

      {/* Shared Navbar (with bag icon) */}
      <Navbar hideFAQ />

      {/* Merch Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Dojo <span className="text-red-600">Merch</span>
        </h1>

        <p className="mt-2 text-sm text-gray-500 text-center">
          Wear your craft. Premium apparel and accessories for modern builders.
        </p>

        <div className="flex justify-end mb-6">
  <button
  onClick={() => setOpenCart(true)}
  className="flex items-center gap-3 border border-red-200 px-4 py-2 rounded-lg text-sm font-medium"
>
  {/* Items count */}
  <span>
    {cart.length} {cart.length === 1 ? "Item" : "Items"}
  </span>

  {/* Cart icon AFTER count */}
  <ShoppingBag className="w-4 h-4 text-red-600" />

  <span className="text-gray-400">|</span>

  {/* Total */}
  <span className="font-semibold">
    ₦{subtotal.toLocaleString()}
  </span>

  {/* Dropdown arrow */}
  <span className="text-red-600">▾</span>
</button>

</div>


        {/* Products grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Designdojoo Premium T-Shirt", category:"APPAREL", price: "₦5,500", img: "/merch/tshirt-red.png" },
            { name: "Designdojoo Premium T-Shirt (Black)", category: "APPAREL", price: "₦5,500", img: "/merch/tshirt-black.png" },
             { name: "Designdojoo Premium T-Shirt (White)", category: "APPAREL", price: "₦5,500", img: "/merch/tshirt-white.png" },
            { name: "Key Chain", category: "ACCESSORIES", price: "₦1,650", img: "/merch/keychain.jpg" },
            { name: "Lanyard", category:"ACCESSORIES", price: "₦1,850", img: "/merch/lanyard.png" },
            { name: "Tote Bag", category:"ACCESSORIES", price: "₦4,550", img: "/merch/tote-white.png" },
            { name: "PM Cap", categort:"APPAREL", price: "₦4,200", img: "/merch/cap.png" },
            { name: "Tote Bag", category:"ACCESSORIES", price: "₦4,550", img: "/merch/tote-black.png" },
          ].map((item, i) => (
            <div
  key={i}
  className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden relative"
>

              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover"
              />

              <span className="absolute top-3 right-3 text-sm font-semibold text-gray-900 bg-white px-2 py-1 rounded-md shadow">
  {item.price}
</span>


              <div className="p-4">

                <p className="text-xs font-semibold text-red-600 uppercase">
      {item.category}
    </p>
                <h3 className="text-sm font-semibold text-gray-900">
                  {item.name}
                </h3>

  

                <button 
                onClick={() => addToCart(item)}
                className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg bg-red-600 py-2 text-sm font-semibold text-white hover:bg-red-700 transition">
  <ShoppingCart className="w-4 h-4" />
  Add to cart
</button>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shared Footer */}
      <Footer />

      {openCart && (
  <div className="fixed inset-0 bg-black/40 flex justify-end z-50">
    <div className="bg-white w-full max-w-md h-full p-6 overflow-y-auto fixed right-0 top-0">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button onClick={() => setOpenCart(false)}>✕</button>
      </div>

      {/* Cart items */}
      <div className="space-y-4">
       {cart.map((item, i) => (
  <div
    key={i}
    className="flex gap-4 items-start border-b pb-4 relative"
  >
    {/* Product image */}
    <img
      src={item.img}
      alt={item.name}
      className="w-16 h-16 rounded-md object-cover"
    />

    {/* Product info */}
    <div className="flex-1 relative">
      <p className="text-sm font-medium text-gray-900">
        {item.name}
      </p>

      <p className="text-sm text-gray-500">{item.price}
       <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-gray-100 rounded">
        Qty: {item.qty}
       </span>
      </p>


      {/* Remove — pinned bottom right */}
      <button
        onClick={() => removeFromCart(item.name)}
        className="absolute bottom-0 right-0 text-xs text-red-500 hover:underline"
      >
        Remove
      </button>
    </div>
  </div>
))}

      </div>

      {/* Summary */}
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>₦{subtotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between font-semibold mt-2">
          <span>Total</span>
          <span className="text-red-600">
            ₦{subtotal.toLocaleString()}
          </span>
        </div>
      </div>

      {/* WhatsApp */}
      <div className="mt-6 bg-green-50 p-4 rounded-lg text-sm">
        <p className="font-medium text-green-700">
          Order via WhatsApp
        </p>
        <p className="text-green-600 text-xs mt-1">
          Click below to send your order details via WhatsApp. We"ll confirm your order and share payment information.
        </p>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-3">
  <button
    onClick={() => setOpenCart(false)}
    className="flex-1 rounded-lg bg-black py-3 text-sm font-semibold text-white hover:bg-gray-900 transition"
  >
    Continue Shopping
  </button>

  <a
    href="https://wa.me/2349162682043"
    target="_blank"
    className="flex-1 rounded-lg bg-red-600 py-3 text-sm font-semibold text-white text-center hover:bg-red-700 transition"
  >
    Order on WhatsApp
  </a>
</div>

    </div>
  </div>
)}

    </main>
  );
}

export default Merch;
