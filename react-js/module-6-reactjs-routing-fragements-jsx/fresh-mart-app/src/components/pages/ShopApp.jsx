import React from 'react'
import HeaderApp from '../HeaderApp'
import NavbarApp from '../NavbarApp'
import FooterApp from '../FooterApp'
import LoginApp from './LoginApp'
export default function ShopApp() {
  return (
    <>
          <HeaderApp />
            <NavbarApp />
   
    <section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4">
    {/* Section Header */}
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Shop by Category</h2>
      <p className="mt-2 text-gray-500">
        Fresh fruits, vegetables &amp; daily essentials
      </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Categories */}
      <aside className="lg:col-span-1 space-y-10">
        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Categories
          </h3>
          {/* Mobile Scroll / Desktop Stack */}
          <div className="flex lg:block gap-3 overflow-x-auto lg:overflow-visible pb-2">
            <button className="bg-green-600 text-white px-4 py-2 rounded-full whitespace-nowrap mt-2">
              All
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded-full whitespace-nowrap hover:bg-green-100 mt-2">
              Fruits
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded-full whitespace-nowrap hover:bg-green-100 mt-2">
              Vegetables
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded-full whitespace-nowrap hover:bg-green-100 mt-2">
              Dairy
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded-full whitespace-nowrap hover:bg-green-100 mt-2">
              Bakery
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded-full whitespace-nowrap hover:bg-green-100 mt-2">
              Dry Fruits
            </button>
          </div>
        </div>
        {/* Latest News Marquee */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Latest News
          </h3>
          <div className="overflow-hidden relative h-50">
            <div className="absolute animate-pulse whitespace-nowrap text-sm text-green-700">
              <marquee direction="up" className="h-50">
                <p>🥬 Fresh vegetables arrived today! &nbsp;&nbsp; </p>
                <p> 🚚 Free delivery on orders above $25 &nbsp;&nbsp;</p>
                <p> 🍎 Get organic apples at 20% off!</p>
              </marquee>
            </div>
          </div>
        </div>
        {/* Offer Zone */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Offer Zone
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="border rounded-xl p-3 hover:shadow-md transition">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8IiDaVUIGKGuO9_zq1E_60unPFpnDV_OCQ&s"
                className="h-20 w-full object-cover rounded-lg"
                alt="Apple"
              />
              <h4 className="text-sm font-semibold mt-2">Fresh Apples</h4>
              <p className="text-green-600 font-bold text-sm">$2.99</p>
            </div>
            <div className="border rounded-xl p-3 hover:shadow-md transition">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8IiDaVUIGKGuO9_zq1E_60unPFpnDV_OCQ&s"
                className="h-20 w-full object-cover rounded-lg"
                alt="Banana"
              />
              <h4 className="text-sm font-semibold mt-2">Bananas</h4>
              <p className="text-green-600 font-bold text-sm">$1.99</p>
            </div>
          </div>
        </div>
        {/* 50% OFF Section */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-red-600 mb-4">
            🔥 50% OFF
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border rounded-xl p-3 text-center hover:shadow-md transition">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8IiDaVUIGKGuO9_zq1E_60unPFpnDV_OCQ&s"
                className="h-20 w-full object-cover rounded-lg"
                alt="Bread"
              />
              <h4 className="text-sm font-semibold mt-2">Fresh Bread</h4>
              <p className="text-xs text-gray-500 line-through">$2.50</p>
              <p className="text-red-600 font-bold">$1.25</p>
            </div>
            <div className="bg-white border rounded-xl p-3 text-center hover:shadow-md transition">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8IiDaVUIGKGuO9_zq1E_60unPFpnDV_OCQ&s"
                className="h-20 w-full object-cover rounded-lg"
                alt="Milk"
              />
              <h4 className="text-sm font-semibold mt-2">Organic Milk</h4>
              <p className="text-xs text-gray-500 line-through">$2.00</p>
              <p className="text-red-600 font-bold">$1.00</p>
            </div>
          </div>
        </div>
        {/* 70% OFF Section */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-red-600 mb-4">
            🔥 70% OFF
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border rounded-xl p-3 text-center hover:shadow-md transition">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8IiDaVUIGKGuO9_zq1E_60unPFpnDV_OCQ&s"
                className="h-20 w-full object-cover rounded-lg"
                alt="Bread"
              />
              <h4 className="text-sm font-semibold mt-2">Fresh Bread</h4>
              <p className="text-xs text-gray-500 line-through">$2.50</p>
              <p className="text-red-600 font-bold">$1.25</p>
            </div>
            <div className="bg-white border rounded-xl p-3 text-center hover:shadow-md transition">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8IiDaVUIGKGuO9_zq1E_60unPFpnDV_OCQ&s"
                className="h-20 w-full object-cover rounded-lg"
                alt="Milk"
              />
              <h4 className="text-sm font-semibold mt-2">Organic Milk</h4>
              <p className="text-xs text-gray-500 line-through">$2.00</p>
              <p className="text-red-600 font-bold">$1.00</p>
            </div>
          </div>
        </div>
      </aside>
      {/* Products Grid */}
      <div className="lg:col-span-3">
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Product Card */}
          <div className="border rounded-2xl p-4 hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
              alt="Apple"
              className="h-32 w-full object-cover rounded-xl"
            />
            <h4 className="mt-3 font-semibold text-gray-800">Fresh Apples</h4>
            <p className="text-sm text-gray-500">1kg</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-green-600 font-bold">$3.99</span>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
          {/* Product Card */}
          <div className="border rounded-2xl p-4 hover:shadow-lg transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8nkHIJ_Afl3NucWPcGnnqP4XG5FCsc3mZg&s"
              alt="Banana"
              className="h-32 w-full object-cover rounded-xl"
            />
            <h4 className="mt-3 font-semibold text-gray-800">Bananas</h4>
            <p className="text-sm text-gray-500">1 dozen</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-green-600 font-bold">$2.49</span>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
          {/* Product Card */}
          <div className="border rounded-2xl p-4 hover:shadow-lg transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-1dAsJetHBeTxEyri6OsE7AEQrUfDcHnvXg&s"
              alt="Milk"
              className="h-32 w-full object-cover rounded-xl"
            />
            <h4 className="mt-3 font-semibold text-gray-800">Organic Milk</h4>
            <p className="text-sm text-gray-500">1 liter</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-green-600 font-bold">$1.99</span>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
          {/* Product Card */}
          <div className="border rounded-2xl p-4 hover:shadow-lg transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNy-6y9Z8Wh22cpBCWPbWVWKRC0QLuWE3ufg&s"
              alt="Bread"
              className="h-32 w-full object-cover rounded-xl"
            />
            <h4 className="mt-3 font-semibold text-gray-800">Fresh Bread</h4>
            <p className="text-sm text-gray-500">500g</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-green-600 font-bold">$2.29</span>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
          <div className="border rounded-2xl p-4 hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
              alt="Apple"
              className="h-32 w-full object-cover rounded-xl"
            />
            <h4 className="mt-3 font-semibold text-gray-800">Fresh Apples</h4>
            <p className="text-sm text-gray-500">1kg</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-green-600 font-bold">$3.99</span>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
          {/* Product Card */}
          <div className="border rounded-2xl p-4 hover:shadow-lg transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8nkHIJ_Afl3NucWPcGnnqP4XG5FCsc3mZg&s"
              alt="Banana"
              className="h-32 w-full object-cover rounded-xl"
            />
            <h4 className="mt-3 font-semibold text-gray-800">Bananas</h4>
            <p className="text-sm text-gray-500">1 dozen</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-green-600 font-bold">$2.49</span>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
          {/* Product Card */}
          <div className="border rounded-2xl p-4 hover:shadow-lg transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-1dAsJetHBeTxEyri6OsE7AEQrUfDcHnvXg&s"
              alt="Milk"
              className="h-32 w-full object-cover rounded-xl"
            />
            <h4 className="mt-3 font-semibold text-gray-800">Organic Milk</h4>
            <p className="text-sm text-gray-500">1 liter</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-green-600 font-bold">$1.99</span>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
          {/* Product Card */}
          <div className="border rounded-2xl p-4 hover:shadow-lg transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNy-6y9Z8Wh22cpBCWPbWVWKRC0QLuWE3ufg&s"
              alt="Bread"
              className="h-32 w-full object-cover rounded-xl"
            />
            <h4 className="mt-3 font-semibold text-gray-800">Fresh Bread</h4>
            <p className="text-sm text-gray-500">500g</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-green-600 font-bold">$2.29</span>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
          <div className="border rounded-2xl p-4 hover:shadow-lg transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNy-6y9Z8Wh22cpBCWPbWVWKRC0QLuWE3ufg&s"
              alt="Bread"
              className="h-32 w-full object-cover rounded-xl"
            />
            <h4 className="mt-3 font-semibold text-gray-800">Fresh Bread</h4>
            <p className="text-sm text-gray-500">500g</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-green-600 font-bold">$2.29</span>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
          <div className="border rounded-2xl p-4 hover:shadow-lg transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNy-6y9Z8Wh22cpBCWPbWVWKRC0QLuWE3ufg&s"
              alt="Bread"
              className="h-32 w-full object-cover rounded-xl"
            />
            <h4 className="mt-3 font-semibold text-gray-800">Fresh Bread</h4>
            <p className="text-sm text-gray-500">500g</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-green-600 font-bold">$2.29</span>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
          <div className="border rounded-2xl p-4 hover:shadow-lg transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNy-6y9Z8Wh22cpBCWPbWVWKRC0QLuWE3ufg&s"
              alt="Bread"
              className="h-32 w-full object-cover rounded-xl"
            />
            <h4 className="mt-3 font-semibold text-gray-800">Fresh Bread</h4>
            <p className="text-sm text-gray-500">500g</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-green-600 font-bold">$2.29</span>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
          <div className="border rounded-2xl p-4 hover:shadow-lg transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNy-6y9Z8Wh22cpBCWPbWVWKRC0QLuWE3ufg&s"
              alt="Bread"
              className="h-32 w-full object-cover rounded-xl"
            />
            <h4 className="mt-3 font-semibold text-gray-800">Fresh Bread</h4>
            <p className="text-sm text-gray-500">500g</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-green-600 font-bold">$2.29</span>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
          <div className="border rounded-2xl p-4 hover:shadow-lg transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNy-6y9Z8Wh22cpBCWPbWVWKRC0QLuWE3ufg&s"
              alt="Bread"
              className="h-32 w-full object-cover rounded-xl"
            />
            <h4 className="mt-3 font-semibold text-gray-800">Fresh Bread</h4>
            <p className="text-sm text-gray-500">500g</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-green-600 font-bold">$2.29</span>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
          <div className="border rounded-2xl p-4 hover:shadow-lg transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNy-6y9Z8Wh22cpBCWPbWVWKRC0QLuWE3ufg&s"
              alt="Bread"
              className="h-32 w-full object-cover rounded-xl"
            />
            <h4 className="mt-3 font-semibold text-gray-800">Fresh Bread</h4>
            <p className="text-sm text-gray-500">500g</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-green-600 font-bold">$2.29</span>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
          <div className="border rounded-2xl p-4 hover:shadow-lg transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNy-6y9Z8Wh22cpBCWPbWVWKRC0QLuWE3ufg&s"
              alt="Bread"
              className="h-32 w-full object-cover rounded-xl"
            />
            <h4 className="mt-3 font-semibold text-gray-800">Fresh Bread</h4>
            <p className="text-sm text-gray-500">500g</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-green-600 font-bold">$2.29</span>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
          <div className="border rounded-2xl p-4 hover:shadow-lg transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNy-6y9Z8Wh22cpBCWPbWVWKRC0QLuWE3ufg&s"
              alt="Bread"
              className="h-32 w-full object-cover rounded-xl"
            />
            <h4 className="mt-3 font-semibold text-gray-800">Fresh Bread</h4>
            <p className="text-sm text-gray-500">500g</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-green-600 font-bold">$2.29</span>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
          <div className="border rounded-2xl p-4 hover:shadow-lg transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNy-6y9Z8Wh22cpBCWPbWVWKRC0QLuWE3ufg&s"
              alt="Bread"
              className="h-32 w-full object-cover rounded-xl"
            />
            <h4 className="mt-3 font-semibold text-gray-800">Fresh Bread</h4>
            <p className="text-sm text-gray-500">500g</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-green-600 font-bold">$2.29</span>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
          <div className="border rounded-2xl p-4 hover:shadow-lg transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNy-6y9Z8Wh22cpBCWPbWVWKRC0QLuWE3ufg&s"
              alt="Bread"
              className="h-32 w-full object-cover rounded-xl"
            />
            <h4 className="mt-3 font-semibold text-gray-800">Fresh Bread</h4>
            <p className="text-sm text-gray-500">500g</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-green-600 font-bold">$2.29</span>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
          <div className="border rounded-2xl p-4 hover:shadow-lg transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNy-6y9Z8Wh22cpBCWPbWVWKRC0QLuWE3ufg&s"
              alt="Bread"
              className="h-32 w-full object-cover rounded-xl"
            />
            <h4 className="mt-3 font-semibold text-gray-800">Fresh Bread</h4>
            <p className="text-sm text-gray-500">500g</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-green-600 font-bold">$2.29</span>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
          <div className="border rounded-2xl p-4 hover:shadow-lg transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNy-6y9Z8Wh22cpBCWPbWVWKRC0QLuWE3ufg&s"
              alt="Bread"
              className="h-32 w-full object-cover rounded-xl"
            />
            <h4 className="mt-3 font-semibold text-gray-800">Fresh Bread</h4>
            <p className="text-sm text-gray-500">500g</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-green-600 font-bold">$2.29</span>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<FooterApp />
</>

  )
}
