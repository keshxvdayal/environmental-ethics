import Link from "next/link";
import { ArrowRight, BarChart3, MessageSquare, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

function FeaturesPage() {
  return (
    <>
      {/* Navbar */}
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

      {/* Main Content */}
      <main className="flex-1">
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">Features</h1>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle>Carbon Footprint Calculator</CardTitle>
                  <CardDescription>
                    Measure your environmental impact based on your lifestyle and consumption habits.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Our calculator analyzes your transportation, diet, home energy use, and shopping habits to estimate
                    your carbon footprint and suggest personalized ways to reduce it.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href="/tools/carbon-calculator">
                      Calculate Your Footprint <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Recycle className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle>Waste Reduction Tracker</CardTitle>
                  <CardDescription>Set goals and track your progress in reducing household waste.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Log your daily waste production, get insights on your recycling habits, and receive tips to minimize
                    waste. Challenge yourself to reduce waste week by week.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href="/tools/waste-tracker">
                      Start Tracking <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <MessageSquare className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle>Community Forum</CardTitle>
                  <CardDescription>
                    Connect with like-minded individuals committed to sustainable living.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Share your experiences, ask questions, and learn from others in our community. Discover local
                    initiatives and find support for your sustainable lifestyle journey.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href="/community">
                      Join the Discussion <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
            <p className="text-center text-lg text-gray-700">
              We aim to empower individuals and communities to live sustainably by providing tools, resources, and a
              supportive community.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white shadow rounded">
                <p className="text-gray-700">
                  "This platform has completely transformed the way I think about sustainability. The tools are
                  incredibly helpful!"
                </p>
                <p className="mt-4 text-right text-green-600 font-bold">- Alex Johnson</p>
              </div>
              <div className="p-6 bg-white shadow rounded">
                <p className="text-gray-700">
                  "I love the community forum! It's amazing to connect with others who share the same passion for
                  sustainable living."
                </p>
                <p className="mt-4 text-right text-green-600 font-bold">- Maria Lopez</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Get Involved</h2>
            <p className="text-center text-lg text-gray-700 mb-8">
              Join us in making a difference. Whether it's through volunteering, sharing your story, or contributing to
              our initiatives, your involvement matters.
            </p>
            
          </div>
        </section>
      </main>
    </>
  );
}

export default FeaturesPage;