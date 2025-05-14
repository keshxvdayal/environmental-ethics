"use client"
import Link from "next/link"
import { ArrowRight, BarChart3, Leaf, MessageSquare, Recycle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import image from "../public/image.png"
import { AIChat } from "@/components/AIChat"
import { useState } from "react"

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
     <header className="bg-green-800 text-white fixed w-full">
  <div className="container mx-auto px-4 py-6 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <Leaf className="h-6 w-6" />
      <h1 className="text-xl font-bold">EcoEthics</h1>
    </div>
    <nav>
      <ul className="flex gap-6">
        <li>
          <Link href="#hero" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="#features" className="hover:underline">
            Features
          </Link>
        </li>
        <li>
          <Link href="#blogs" className="hover:underline">
            Blogs
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

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="bg-gradient-to-b from-green-700 to-green-900 text-white py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-6 animate-fade-in">Environmental Ethics</h1>
              <p className="text-xl max-w-3xl mx-auto md:mx-0 mb-8">
                Exploring the moral relationship between humans and the natural environment, focusing on consumerism and waste management.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Button asChild size="lg" className="bg-white text-green-800 hover:bg-gray-100 shadow-lg">
                  <Link href="/tools">Explore Our Tools</Link>
                </Button>
                <Button asChild size="lg" className="border-white text-white hover:bg-green-800 shadow-lg">
                  <Link href="/aboutus">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image src={image} alt="EcoEthics" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Interactive Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BarChart3 className="h-10 w-10 text-green-600 mb-2" />,
                  title: "Carbon Footprint Calculator",
                  description: "Measure your environmental impact based on your lifestyle and consumption habits.",
                  link: "/tools/carbon-calculator",
                  buttonText: "Calculate Your Footprint",
                },
                {
                  icon: <Recycle className="h-10 w-10 text-green-600 mb-2" />,
                  title: "Waste Reduction Tracker",
                  description: "Set goals and track your progress in reducing household waste.",
                  link: "/tools/waste-tracker",
                  buttonText: "Start Tracking",
                },
                {
                  icon: <MessageSquare className="h-10 w-10 text-green-600 mb-2" />,
                  title: "Community Forum",
                  description: "Connect with like-minded individuals committed to sustainable living.",
                  link: "/community",
                  buttonText: "Join the Discussion",
                },
              ].map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    {feature.icon}
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                      <Link href={feature.link}>
                        {feature.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Blogs Section */}
        <section id="blogs" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">Our Blogs</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Blog 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <img
                  src="https://environment.co/wp-content/uploads/sites/4/2023/11/consumerism-and-the-environment-ENVR.jpg"
                  alt="Consumerism"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-4 text-green-700 text-center">
                  Consumerism & Environmental Impact
                </h3>
                <p className="mb-4 text-center">
                  Explore how modern consumption patterns affect our planet, from resource depletion to pollution.
                  Learn about the hidden environmental costs of everyday products and how to make more conscious
                  purchasing decisions.
                </p>
                <Button asChild variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                  <Link href="/consumerism">Learn More</Link>
                </Button>
              </div>
              {/* Blog 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <img
                  src="https://www.shaktiplasticinds.com/wp-content/uploads/2024/12/Untitled-design-7-e1735195102921.jpg"
                  alt="Waste Management"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-4 text-green-700 text-center">
                  Waste Management Solutions
                </h3>
                <p className="mb-4 text-center">
                  Discover effective approaches to waste reduction, recycling, and responsible disposal. Understand
                  the lifecycle of products and packaging, and how to minimize your contribution to landfills and
                  ocean pollution.
                </p>
                <Button asChild variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                  <Link href="/waste">Learn More</Link>
                </Button>
              </div>
              {/* Blog 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <img
                  src="https://innovationatwork.ieee.org/wp-content/uploads/2020/02/bigstock-Concept-Of-Renewable-Energy-So-339244726_1024X684.png"
                  alt="Renewable Energy"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-4 text-green-700 text-center">
                  Renewable Energy Innovations
                </h3>
                <p className="mb-4 text-center">
                  Dive into the latest advancements in renewable energy technologies, from solar and wind power to
                  innovative energy storage solutions. Learn how these innovations are shaping a sustainable future.
                </p>
                <Button asChild variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                  <Link href="/renewable-energy">Learn More</Link>
                </Button>
              </div>
              {/* Blog 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <img
                  src="https://static.wixstatic.com/media/cbc1ea_9d53078c927f43c4bae3d4184a190408~mv2.png/v1/fill/w_568,h_332,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cbc1ea_9d53078c927f43c4bae3d4184a190408~mv2.png"
                  alt="Sustainable Agriculture"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-4 text-green-700 text-center">
                  Sustainable Agriculture Practices
                </h3>
                <p className="mb-4 text-center">
                  Explore how sustainable farming methods can reduce environmental impact while ensuring food
                  security. Learn about organic farming, permaculture, and regenerative agriculture techniques.
                </p>
                <Button asChild variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                  <Link href="/sustainable-agriculture">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Chatbot Icon and Popup */}
        <button
          onClick={toggleChat}
          className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg z-50 transition-transform transform hover:scale-105"
          aria-label="Toggle chat"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
        {isChatOpen && (
          <div className="fixed bottom-24 right-8 w-80 h-[32rem] bg-white rounded-lg shadow-xl z-50 flex flex-col transition-opacity">
            <div className="p-4 bg-green-700 text-white rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">AI Chat</h3>
              <button onClick={toggleChat} className="text-white hover:text-gray-200">
                &times;
              </button>
            </div>
            <div className="p-4 flex-1 overflow-y-auto">
              <AIChat />
            </div>
          </div>
        )}
      </main>
      <style jsx global>{`
  html {
    scroll-behavior: smooth;
  }
`}</style>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">EcoEthics</h3>
              <p>Promoting environmental consciousness and sustainable living through education and practical tools.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["About Us", "Contact", "Resources", "Blog"].map((link, index) => (
                  <li key={index}>
                    <Link href={`/${link.toLowerCase().replace(" ", "")}`} className="hover:underline">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
              <p className="mb-4">Subscribe to our newsletter for the latest updates and tips.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 rounded text-black flex-1"
                  aria-label="Email for newsletter"
                />
                <Button className="bg-green-700 hover:bg-green-600">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} EcoEthics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}