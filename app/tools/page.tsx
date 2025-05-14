import Link from "next/link";
import { Button } from "@/components/ui/button";

function ToolsPage() {
  return (
    <>
      {/* Navbar */}
      <header className="bg-green-800 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">Sustainability Tools</h1>
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
                <Link href="/tools" className="hover:underline">
                  Tools
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
      <main className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Our Tools</h1>

          {/* Tools Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Carbon Footprint Calculator */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-start">
              <h3 className="text-2xl font-bold mb-4 text-green-700">Carbon Footprint Calculator</h3>
              <p className="mb-4">
                Measure your environmental impact based on your lifestyle and consumption habits. Our calculator
                analyzes your transportation, diet, home energy use, and shopping habits to estimate your carbon
                footprint and suggest personalized ways to reduce it.
              </p>
              <Button asChild variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                <Link href="/tools/carbon-footprint">Try Now</Link>
              </Button>
            </div>

            {/* Waste Reduction Tracker */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-start">
              <h3 className="text-2xl font-bold mb-4 text-green-700">Waste Reduction Tracker</h3>
              <p className="mb-4">
                Set goals and track your progress in reducing household waste. Log your daily waste production, get
                insights on your recycling habits, and receive tips to minimize waste. Challenge yourself to reduce
                waste week by week.
              </p>
              <Button asChild variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                <Link href="/tools/waste-tracker">Track Now</Link>
              </Button>
            </div>

            {/* Community Forum */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-start">
              <h3 className="text-2xl font-bold mb-4 text-green-700">Community Forum</h3>
              <p className="mb-4">
                Connect with like-minded individuals committed to sustainable living. Share your experiences, ask
                questions, and learn from others in our community. Discover local initiatives and find support for your
                sustainable lifestyle journey.
              </p>
              <Button asChild variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                <Link href="/tools/community-forum">Join Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ToolsPage;