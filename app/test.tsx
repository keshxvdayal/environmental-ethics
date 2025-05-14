"use client"
import Link from "next/link"
import { ArrowRight, BarChart3, Leaf, MessageSquare, Recycle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import image from "../public/image.png"
import { AIChat } from "@/components/AIChat"
import { useState } from 'react';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-800 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6" />
            <h1 className="text-xl font-bold">EcoEthics</h1>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="hover:underline">
                  About Us
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
        {/* Hero Section */}
        <section className="bg-gradient-to-b px-8 flex justify-between bg-white text-black py-20">
          <div className="flex flex-col justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Environmental Ethics</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Exploring the moral relationship between humans and the natural environment, focusing on consumerism and
              waste management.
            </p>
          
          </div>
          </div>
          <div>
            <Image src={image} alt="EcoEthics" className="rounded-lg" />
          </div>
        </section>

        {/* Features Section - REMOVED AND MOVED TO /features */}
        {/*
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Interactive Features</h2>
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
        */}

        {/* Topics Overview - REMOVED AND MOVED TO /blogs */}
        {/*
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Topics</h2>
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
        */}

        {/* AI Assistant Section */}
        {/* 
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Ask Our AI Assistant</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Have questions about environmental ethics, sustainability, or eco-friendly practices? 
              Our AI assistant is here to help you learn and make informed decisions.
            </p>
            <AIChat />
          </div>
        </section>
        */}
      </main>

     
      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">EcoEthics</h3>
              <p>Promoting environmental consciousness and sustainable living through education and practical tools.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:underline">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
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
