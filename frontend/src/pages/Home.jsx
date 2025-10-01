import React from "react";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    title: "American Diamond Bridal Set",
    category: "Complete Sets",
    price: "Rs 1,350",
    img: "https://lh3.googleusercontent.com/p/AF1QipMCneHnSzJRQkUL9OhS_wd59DXXHpo-fE0ua9sC=s1360-w1360-h1020-rw",
    caption: "Sparkle with timeless elegance",
  },
  {
    id: 2,
    title: "Naurattan Bangles Pair",
    category: "Bangles",
    price: "Rs 2,000",
    img: "https://lh3.googleusercontent.com/p/AF1QipPXfO9GVApg-Aszg8gaPVyNbfTL_AmIKgxGq5xU=s1360-w1360-h1020-rw",
    caption: "Colors of tradition",
  },
  {
    id: 3,
    title: "Xuping Classic Earrings",
    category: "Earrings",
    price: "Rs 600",
    img: "https://lh3.googleusercontent.com/p/AF1QipNfOYOiTHt3GAzUCSUWV-d5kFmJluFjukaYyFb2=s1360-w1360-h1020-rw",
    caption: "Everyday classy studs",
  },
  {
    id: 4,
    title: "Egyptian Statement Necklace",
    category: "Signature Pieces",
    price: "Rs 3000",
    img: "https://lh3.googleusercontent.com/p/AF1QipPIZC9WRJ-UBKbMuSDBf3L4BZEb7XxeymAelPBn=s1360-w1360-h1020-rw",
    caption: "Bold & stylish statement",
  },
];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* NAV */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 to-pink-300 flex items-center justify-center font-bold text-white">
              IJ
            </div>
            <div>
              <h1 className="text-lg font-semibold">
                Pearion Jewelry Wholesaler
              </h1>
              <p className="text-sm text-gray-500">
                Since 1980 · Bolton Market, Karachi
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center">
            <a href="#collections" className="text-sm hover:underline">
              Collections
            </a>
            <a href="#gallery" className="text-sm hover:underline">
              Gallery
            </a>
            <a href="#about" className="text-sm hover:underline">
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium bg-amber-500 text-white px-4 py-2 rounded-lg shadow"
            >
              Contact
            </a>
          </nav>

          <div className="md:hidden">
            <button className="px-3 py-2 border rounded">Menu</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Where Elegance Meets Tradition
            </h2>
            <p className="mt-4 text-gray-700 max-w-xl">
              Discover 10,000+ designs in imitation, American Diamond, Kundan,
              Xuping & more — crafted for every occasion. Wholesale collections
              · Importer · Manufacturer.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#collections"
                className="inline-block bg-amber-500 text-white px-5 py-3 rounded-lg shadow font-medium"
              >
                Explore Collection
              </a>
              <a
                href="https://wa.me/923218382527"
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-gray-300 px-5 py-3 rounded-lg"
              >
                Message on WhatsApp
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-2 text-sm text-gray-600">
              <div>📦 10,000+ Products In Stock</div>
              <div>🚚 Worldwide Shipping & Bulk Deals</div>
              <div>🏷️ Direct Importer & Manufacturer</div>
              <div>📱 TikTok · Facebook · YouTube</div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={products[0].img}
                alt="Hero 1"
                className="rounded-xl shadow-lg"
              />
              <img
                src={products[1].img}
                alt="Hero 2"
                className="rounded-xl shadow-lg"
              />
              <img
                src={products[2].img}
                alt="Hero 3"
                className="rounded-xl shadow-lg"
              />
              <img
                src={products[3].img}
                alt="Hero 4"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Explore Our Collections</h3>
        <p className="text-gray-600 mt-2">
          Handpicked categories to make buying and browsing a breeze.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard
            title="Locket Sets"
            subtitle="Everyday & Bridal"
            img="https://images.unsplash.com/photo-1520975916000-6911213a9a22?w=900&q=80"
          />
          <CategoryCard
            title="Earrings & Studs"
            subtitle="Furshi · AD · Jaipuri"
            img="https://images.unsplash.com/photo-1520975916000-6911213a9a22?w=900&q=80"
          />
          <CategoryCard
            title="Bangles & Bracelets"
            subtitle="Naurattan & Rajwari"
            img="https://images.unsplash.com/photo-1549921296-3c6b6f6b3b0b?w=900&q=80"
          />
          <CategoryCard
            title="Signature Pieces"
            subtitle="Polky · Egyptian"
            img="https://images.unsplash.com/photo-1518544880936-33f2a3f3b4c2?w=900&q=80"
          />
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12 bg-white">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Featured Products</h3>
          <a href="#gallery" className="text-sm text-amber-600 hover:underline">
            View full gallery
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Gallery</h3>
        <p className="text-gray-600 mt-2">
          A small glimpse of our 100+ product photos.
        </p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.concat(products).map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden shadow-sm bg-white"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <div className="text-sm font-medium">{item.title}</div>
                <div className="text-xs text-gray-500">{item.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About & Why Choose Us */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-12 bg-gradient-to-r from-gray-50 to-white"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">About Pearion Jewelry</h3>
            <p className="mt-4 text-gray-700">
              Since 1980, Pearion Jewelry Wholesaler has been Karachi’s trusted
              name in artificial jewelry. From timeless Indian craftsmanship to
              elegant imported designs, we bring jewelry that reflects grace,
              culture, and modern trends.
            </p>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• 40+ years of trust in the jewelry business</li>
              <li>• 10,000+ products with color variations</li>
              <li>• Wholesale pricing for retailers & resellers</li>
              <li>• Direct import & manufacturing</li>
            </ul>

            <div className="mt-6">
              <a
                href="https://wa.me/923218382527"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-amber-500 text-white px-5 py-3 rounded-lg"
              >
                Talk to Sales
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Why Choose Us</h4>
            <div className="mt-4 grid grid-cols-1 gap-4">
              <StatCard title="Trusted Since" value="1980" />
              <StatCard title="Products" value="10,000+" />
              <StatCard title="Bulk Deals" value="Available" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Get In Touch</h3>
        <p className="text-gray-600 mt-2">
          Ready to stock your shop or need custom orders? We’re a message away.
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow">
            <h4 className="font-semibold">Visit Us</h4>
            <p className="text-gray-600 mt-2">
              Room#21, 1st Floor, Lakshmi Building (1920), Main Muhammad Ali
              Jinnah Rd, Bolton Market, Karachi, 75600
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <div>
                📞{" "}
                <a href="tel:+923218382527" className="text-amber-600">
                  0321-8382527
                </a>
              </div>
              <div>
                🔗{" "}
                <a
                  href="https://www.facebook.com/Pearionjewelrykarachi"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-600"
                >
                  Facebook
                </a>{" "}
                ·{" "}
                <a
                  href="https://www.tiktok.com/@Pearion.jewelry.karachi"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-600"
                >
                  TikTok
                </a>
              </div>
              <div>
                📱 WhatsApp:{" "}
                <a
                  href="https://wa.me/923218382527"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-600"
                >
                  Message
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <h4 className="font-semibold">Send Inquiry</h4>
            <form
              className="mt-4 space-y-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Your Name"
              />
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Your Email or Phone"
              />
              <textarea
                className="w-full border rounded px-3 py-2"
                placeholder="Message (products/quantities)"
                rows={4}
              />
              <div className="flex gap-3">
                <button className="bg-amber-500 text-white px-4 py-2 rounded">
                  Send
                </button>
                <a
                  href="https://wa.me/923218382527"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border px-4 py-2 rounded"
                >
                  Message on WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-semibold">Pearion Jewelry Wholesaler</h5>
            <p className="text-sm text-gray-400 mt-2">
              Manufacturer · Importer · Wholesaler since 1980. Bolton Market,
              Karachi.
            </p>
          </div>
          <div>
            <h6 className="font-semibold">Quick Links</h6>
            <ul className="mt-2 text-sm text-gray-400 space-y-1">
              <li>Collections</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold">Contact</h6>
            <p className="text-sm text-gray-400 mt-2">
              0321-8382527 · Room#21, Lakshmi Building
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Pearion Jewelry Wholesaler. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}

/* Reusable small components below */

function CategoryCard({ title, subtitle, img }) {
  return (
    <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <img src={img} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 bg-white">
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-500">{subtitle}</div>
      </div>
    </div>
  );
}

function ProductCard({ product, addToCart }) {
  return (
    <div className="rounded-lg overflow-hidden border bg-white">
      <img
        src={product.img}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="font-medium">{product.title}</div>
        <div className="text-sm text-gray-500 mt-1">{product.caption}</div>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-amber-600 font-semibold">{product.price}</div>
          <button
            onClick={() => addToCart(product)}
            className="bg-amber-500 text-white px-3 py-1 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="p-4 rounded-lg border bg-white">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}
