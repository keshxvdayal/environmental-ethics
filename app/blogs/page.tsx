import Link from "next/link";
import { Button } from "@/components/ui/button";

function BlogsPage() {
  return (
    <>
      {/* Navbar */}
      <header className="bg-green-800 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">Our Blogs</h1>
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

      {/* Main Content */}
      <main className="flex-1">
        {/* Blogs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">Our Blogs</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-green-700">Consumerism & Environmental Impact</h3>
                <p className="mb-4">
                  Explore how modern consumption patterns affect our planet, from resource depletion to pollution. Learn
                  about the hidden environmental costs of everyday products and how to make more conscious purchasing
                  decisions.
                </p>
                <Button asChild variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                  <Link href="/consumerism">Learn More</Link>
                </Button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-green-700">Waste Management Solutions</h3>
                <p className="mb-4">
                  Discover effective approaches to waste reduction, recycling, and responsible disposal. Understand the
                  lifecycle of products and packaging, and how to minimize your contribution to landfills and ocean
                  pollution.
                </p>
                <Button asChild variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                  <Link href="/waste">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Why Read Our Blogs?</h2>
            <p className="text-center text-lg text-gray-700">
              Our blogs are designed to educate, inspire, and empower you to make informed decisions for a sustainable
              future. Stay updated with the latest trends, tips, and insights on environmental conservation and
              sustainable living.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Popular Topics</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-4 text-green-700">Sustainable Living</h4>
                <p>
                  Learn how to adopt a sustainable lifestyle with practical tips and strategies for reducing your
                  environmental footprint.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-4 text-green-700">Renewable Energy</h4>
                <p>
                  Explore the benefits of renewable energy sources and how they can help combat climate change and
                  reduce reliance on fossil fuels.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-4 text-green-700">Eco-Friendly Products</h4>
                <p>
                  Discover eco-friendly alternatives to everyday products and how they contribute to a healthier planet.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Get Involved</h2>
            <p className="text-center text-lg text-gray-700 mb-8">
              Join us in spreading awareness and making a difference. Share your stories, contribute to our blogs, or
              participate in our initiatives to inspire others.
            </p>
            
          </div>
        </section>
      </main>
    </>
  );
}

export default BlogsPage;