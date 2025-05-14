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
    <div className="flex flex-col min-h-screen font-sans relative overflow-x-hidden">
      {/* Animated floating leaves background */}
      <div className="pointer-events-none fixed inset-0 z-0 animate-bg-leaves" style={{background: 'url(/leaves-bg.svg) repeat', opacity: 0.07}} />
      {/* Header with glassmorphism */}
      <header className="backdrop-blur-lg bg-white/30 border-b border-green-200 shadow-lg fixed w-full z-30 transition-all duration-500">
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <span className="inline-block animate-bounce-slow">
              <Leaf className="h-8 w-8 text-green-700 drop-shadow-lg" />
            </span>
            <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-green-700 via-green-500 to-lime-400 bg-clip-text text-transparent animate-gradient-x">EcoEthics</h1>
          </div>
          <nav>
            <ul className="flex gap-8 text-lg font-medium">
              {[
                { label: "Home", href: "#hero" },
                { label: "Features", href: "#features" },
                { label: "Blogs", href: "#blogs" },
                { label: "Community", href: "/community" },
              ].map((item, i) => (
                <li key={item.label} className="relative group">
                  <Link href={item.href} className="hover:text-green-700 transition-colors duration-200">
                    <span className="inline-block transition-transform group-hover:-translate-y-1 group-hover:scale-110">
                      {item.label}
                    </span>
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-green-400 to-green-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-1 pt-24">
        {/* Hero Section - split layout, animated text, parallax image */}
        <section id="hero" className=" bg-green-700 text-white py-24 overflow-hidden shadow-xl rounded-b-3xl">
          {/* Parallax SVG or Lottie background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute right-0 top-0 w-1/2 h-full animate-parallax-slow" style={{background: 'url(/parallax-eco.svg) right center / cover no-repeat', opacity: 0.18}} />
          </div>
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="flex-1 text-center md:text-left space-y-8">
              <h1 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tight animate-hero-title bg-gradient-to-r from-lime-200 via-white to-green-300 bg-clip-text text-transparent drop-shadow-xl">
                Environmental Ethics
              </h1>
              <p className="text-2xl max-w-2xl mx-auto md:mx-0 mb-6 text-white/90 animate-fade-in">
                Exploring the moral relationship between humans and the natural environment, focusing on consumerism and waste management.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Button asChild size="lg" className="bg-white/90 text-green-800 hover:bg-green-100 shadow-xl font-bold px-8 py-4 text-xl ">
                  <Link href="/tools">Explore Our Tools</Link>
                </Button>
                <Button asChild size="lg" className="border-white text-white hover:bg-green-800/80 shadow-lg font-bold px-8 py-4 text-xl ">
                  <Link href="/aboutus">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center relative">
              <div className="relative w-[400px] h-[400px] md:w-[480px] md:h-[480px] animate-float">
                <Image src={image} alt="EcoEthics" fill className="rounded-3xl shadow-2xl border-4 border-white/40 object-cover" />
                {/* Animated eco icons floating around the image */}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 animate-spin-slow">
                  <Leaf className="h-10 w-10 text-lime-300 drop-shadow-lg" />
                </span>
                <span className="absolute bottom-0 right-0 animate-bounce-x">
                  <Recycle className="h-8 w-8 text-green-200 drop-shadow" />
                </span>
                <span className="absolute top-1/3 -left-8 animate-bounce-y">
                  <BarChart3 className="h-8 w-8 text-green-400 drop-shadow" />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-200/30 rounded-full blur-3xl z-0 animate-float" />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-extrabold text-center mb-14 tracking-tight text-green-800 animate-hero-title">Interactive Features</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: <BarChart3 className="h-12 w-12 text-green-600 mb-2 animate-spin-slow" />,
                  title: "Carbon Footprint Calculator",
                  description: "Measure your environmental impact based on your lifestyle and consumption habits.",
                  link: "/tools/carbon-calculator",
                  buttonText: "Calculate Your Footprint",
                },
                {
                  icon: <Recycle className="h-12 w-12 text-green-600 mb-2 animate-bounce-x" />,
                  title: "Waste Reduction Tracker",
                  description: "Set goals and track your progress in reducing household waste.",
                  link: "/tools/waste-tracker",
                  buttonText: "Start Tracking",
                },
                {
                  icon: <MessageSquare className="h-12 w-12 text-green-600 mb-2 animate-bounce-y" />,
                  title: "Community Forum",
                  description: "Connect with like-minded individuals committed to sustainable living.",
                  link: "/community",
                  buttonText: "Join the Discussion",
                },
              ].map((feature, index) => (
                <Card key={index} className=" hover:shadow-2xl  bg-white/80 border-2 border-green-100 backdrop-blur-lg group relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-100/40 rounded-full blur-2xl z-0 group-hover:scale-125 transition-transform duration-500" />
                  <CardHeader className="relative z-10 flex flex-col items-center">
                    {feature.icon}
                    <CardTitle className="text-green-800 text-2xl font-bold mb-1 group-hover:text-green-600 transition-colors duration-200">{feature.title}</CardTitle>
                    <CardDescription className="text-green-700/80 text-center">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-center text-green-900/80">{feature.description}</p>
                  </CardContent>
                  <CardFooter className="relative z-10">
                    <Button asChild className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold shadow-md ">
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

        {/* Chatbot Icon and Popup */}
        <button
          onClick={toggleChat}
          className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-5 rounded-full shadow-2xl z-50 transition-transform transform hover:scale-110 animate-float-chat"
          aria-label="Toggle chat"
        >
          <MessageSquare className="h-7 w-7" />
        </button>
        {isChatOpen && (
          <div className="fixed bottom-24 right-8 w-80 h-[32rem] bg-white/95 rounded-2xl shadow-2xl z-50 flex flex-col transition-all animate-slide-in-chat border-2 border-green-200 backdrop-blur-lg">
            <div className="p-4 bg-gradient-to-r from-green-700 to-green-600 text-white rounded-t-2xl flex justify-between items-center shadow-md">
              <h3 className="font-semibold tracking-wide">AI Chat</h3>
              <button onClick={toggleChat} className="text-white hover:text-gray-200 text-2xl leading-none">&times;</button>
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
        body, html {
          font-family: 'Poppins', 'Inter', 'Segoe UI', Arial, sans-serif;
          
        }
        /* Glassmorphism header */
        header {
          box-shadow: 0 8px 32px 0 rgba(34, 197, 94, 0.12);
        }
        /* Animated gradient for logo */
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        /* Bouncing slow for logo */
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite alternate;
        }
        @keyframes bounce-slow {
          0% { transform: translateY(0); }
          100% { transform: translateY(-10px); }
        }
        /* Parallax slow for hero bg */
        .animate-parallax-slow {
          animation: parallax-slow 18s linear infinite alternate;
        }
        @keyframes parallax-slow {
          0% { background-position-y: 0; }
          100% { background-position-y: 60px; }
        }
        /* Hero title animation */
        .animate-hero-title {
          animation: fade-in-up 1.2s cubic-bezier(.39,.575,.565,1.000) both;
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        /* Fade in for hero subtitle */
        .animate-fade-in {
          animation: fade-in 1.8s cubic-bezier(.39,.575,.565,1.000) both;
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        /* CTA bounce */
        .animate-cta-bounce {
          animation: cta-bounce 2.2s infinite alternate;
        }
        .animate-cta-bounce2 {
          animation: cta-bounce2 2.2s 1.1s infinite alternate;
        }
        @keyframes cta-bounce {
          0% { transform: scale(1); }
          100% { transform: scale(1.07); }
        }
        @keyframes cta-bounce2 {
          0% { transform: scale(1); }
          100% { transform: scale(1.04) translateY(-4px); }
        }
        /* Floating image */
        .animate-float {
          animation: float 5s ease-in-out infinite alternate;
        }
        @keyframes float {
          0% { transform: translateY(0); }
          100% { transform: translateY(-18px); }
        }
        /* Floating leaves bg */
        .animate-bg-leaves {
          animation: bg-leaves-move 60s linear infinite;
        }
        @keyframes bg-leaves-move {
          0% { background-position: 0 0; }
          100% { background-position: 200px 200px; }
        }
        /* Icon animations */
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-bounce-x {
          animation: bounce-x 3.5s ease-in-out infinite alternate;
        }
        @keyframes bounce-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(18px); }
        }
        .animate-bounce-y {
          animation: bounce-y 2.8s ease-in-out infinite alternate;
        }
        @keyframes bounce-y {
          0% { transform: translateY(0); }
          100% { transform: translateY(-16px); }
        }
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
          background: #e0f2f1;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #a7f3d0 0%, #34d399 100%);
          border-radius: 8px;
        }
        .animate-float-chat {
          animation: float-chat 3.5s ease-in-out infinite alternate;
        }
        @keyframes float-chat {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-10px) scale(1.07); }
        }
        .animate-slide-in-chat {
          animation: slide-in-chat 0.5s cubic-bezier(.39,.575,.565,1.000) both;
        }
        @keyframes slide-in-chat {
          0% { opacity: 0; transform: translateY(60px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        /* Ripple effect for subscribe button */
        .ripple-effect::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0;
          height: 0;
          background: rgba(255,255,255,0.3);
          border-radius: 100%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: width 0.4s ease, height 0.4s ease, opacity 0.4s ease;
          pointer-events: none;
        }
        .ripple-effect:active::after {
          width: 200px;
          height: 200px;
          opacity: 1;
          transition: 0s;
        }
      `}</style>

      {/* Footer */}
      <footer className="bg-green-900 text-white pt-7 pb-12 relative overflow-hidden mt-16">
        
        <div className="container mx-auto px-4 relative z-20">
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
                <Button className="bg-green-700 hover:bg-green-600 relative overflow-hidden ripple-effect">Subscribe</Button>
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