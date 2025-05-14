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
      <main className="flex-1 bg-gray-50 min-h-screen py-12">
        <section>
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-10 text-green-800">Our Blogs</h1>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Blog 1 */}
              <div className="bg-white p-6 rounded-xl border border-green-100 flex flex-col items-center">
                <img
                  src="https://environment.co/wp-content/uploads/sites/4/2023/11/consumerism-and-the-environment-ENVR.jpg"
                  alt="Consumerism"
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-green-700 text-center">
                  Consumerism & Environmental Impact
                </h3>
                <p className="mb-4 text-center text-gray-700">
                  Explore how modern consumption patterns affect our planet, from resource depletion to pollution. Learn about the hidden environmental costs of everyday products and how to make more conscious purchasing decisions.
                </p>
                <Button asChild variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                  <Link href="/consumerism">Learn More</Link>
                </Button>
              </div>
              {/* Blog 2 */}
              <div className="bg-white p-6 rounded-xl border border-green-100 flex flex-col items-center">
                <img
                  src="https://www.shaktiplasticinds.com/wp-content/uploads/2024/12/Untitled-design-7-e1735195102921.jpg"
                  alt="Waste Management"
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-green-700 text-center">
                  Waste Management Solutions
                </h3>
                <p className="mb-4 text-center text-gray-700">
                  Discover effective approaches to waste reduction, recycling, and responsible disposal. Understand the lifecycle of products and packaging, and how to minimize your contribution to landfills and ocean pollution.
                </p>
                <Button asChild variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                  <Link href="/waste">Learn More</Link>
                </Button>
              </div>
              {/* Blog 3 */}
              <div className="bg-white p-6 rounded-xl border border-green-100 flex flex-col items-center">
                <img
                  src="https://innovationatwork.ieee.org/wp-content/uploads/2020/02/bigstock-Concept-Of-Renewable-Energy-So-339244726_1024X684.png"
                  alt="Renewable Energy"
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-green-700 text-center">
                  Renewable Energy Innovations
                </h3>
                <p className="mb-4 text-center text-gray-700">
                  Dive into the latest advancements in renewable energy technologies, from solar and wind power to innovative energy storage solutions. Learn how these innovations are shaping a sustainable future.
                </p>
                <Button asChild variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                  <Link href="/renewable-energy">Learn More</Link>
                </Button>
              </div>
              {/* Blog 4 */}
              <div className="bg-white p-6 rounded-xl border border-green-100 flex flex-col items-center">
                <img
                  src="https://static.wixstatic.com/media/cbc1ea_9d53078c927f43c4bae3d4184a190408~mv2.png/v1/fill/w_568,h_332,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cbc1ea_9d53078c927f43c4bae3d4184a190408~mv2.png"
                  alt="Sustainable Agriculture"
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-green-700 text-center">
                  Sustainable Agriculture Practices
                </h3>
                <p className="mb-4 text-center text-gray-700">
                  Explore how sustainable farming methods can reduce environmental impact while ensuring food security. Learn about organic farming, permaculture, and regenerative agriculture techniques.
                </p>
                <Button asChild variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                  <Link href="/sustainable-agriculture">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default BlogsPage;