"use client"
import Link from "next/link"
import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-800 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">About Us</h1>
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:underline">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:underline">
                  Community
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-green-700 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              At <span className="font-bold text-green-700">EcoEthics</span>, we are passionate about fostering a deeper connection between humanity and the environment. 
              Our mission is to educate, inspire, and empower individuals to make sustainable choices that benefit both people and the planet.
            </p>
            {/* <Image src={teamImage} alt="Our Team" className="rounded-lg mx-auto mb-8" /> */}
            <h3 className="text-2xl font-bold text-green-700 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              We believe that small, conscious actions can lead to big changes. By providing tools, resources, and a supportive community, 
              we aim to help individuals reduce their environmental impact and live more sustainably.
            </p>
            <h3 className="text-2xl font-bold text-green-700 mb-4">What We Do</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              From interactive tools like our Carbon Footprint Calculator to educational blogs and a vibrant community forum, 
              we strive to make sustainability accessible and actionable for everyone.
            </p>
            <h3 className="text-2xl font-bold text-green-700 mb-4">Join Us</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're just starting your sustainability journey or you're a seasoned eco-warrior, 
              EcoEthics is here to support you every step of the way. Together, we can create a greener, more ethical future.
            </p>
          </div>
        </section>
      </main>
      <footer className="bg-green-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} EcoEthics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}