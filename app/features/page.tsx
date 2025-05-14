import Link from "next/link";
import { ArrowRight, BarChart3, MessageSquare, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";

function FeaturesPage() {
  return (
    <>
      {/* Navbar */}
      <header className="bg-green-800 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">Features</h1>
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
            <h1 className="text-4xl font-bold text-center mb-10 text-green-800">Features</h1>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-xl border border-green-100 flex flex-col items-center">
                <BarChart3 className="h-10 w-10 text-green-600 mb-2" />
                <h3 className="text-xl font-bold mb-2 text-green-700 text-center">Carbon Footprint Calculator</h3>
                <p className="mb-4 text-center text-gray-700">
                  Measure your environmental impact based on your lifestyle and consumption habits.
                </p>
                <Button asChild className="w-full text-green-700 border-green-700 hover:bg-green-50" variant="outline">
                  <Link href="/tools/carbon-calculator">
                    Calculate Your Footprint <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-xl border border-green-100 flex flex-col items-center">
                <Recycle className="h-10 w-10 text-green-600 mb-2" />
                <h3 className="text-xl font-bold mb-2 text-green-700 text-center">Waste Reduction Tracker</h3>
                <p className="mb-4 text-center text-gray-700">
                  Set goals and track your progress in reducing household waste.
                </p>
                <Button asChild className="w-full text-green-700 border-green-700 hover:bg-green-50" variant="outline">
                  <Link href="/tools/waste-tracker">
                    Start Tracking <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-xl border border-green-100 flex flex-col items-center">
                <MessageSquare className="h-10 w-10 text-green-600 mb-2" />
                <h3 className="text-xl font-bold mb-2 text-green-700 text-center">Community Forum</h3>
                <p className="mb-4 text-center text-gray-700">
                  Connect with like-minded individuals committed to sustainable living.
                </p>
                <Button asChild className="w-full text-green-700 border-green-700 hover:bg-green-50" variant="outline">
                  <Link href="/community">
                    Join the Discussion <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default FeaturesPage;