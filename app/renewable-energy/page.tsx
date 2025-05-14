import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
  
  export default RenewableEnergyPage
function RenewableEnergyPage() {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="bg-green-800 text-white">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-6 w-6" />
              <h1 className="text-xl font-bold">EcoEthics | Renewable Energy</h1>
            </div>
            <nav>
              <ul className="flex gap-6">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/consumerism" className="hover:underline">
                    Consumerism
                  </Link>
                </li>
                <li>
                  <Link href="/renewable-energy" className="hover:underline font-bold">
                    Renewable Energy
                  </Link>
                </li>
                <li>
                  <Link href="/waste" className="hover:underline">
                    Waste Management
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
          <section className="bg-gradient-to-b from-green-700 to-green-900 text-white py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="text-4xl font-bold mb-4">Renewable Energy & Sustainability</h1>
                  <p className="text-lg mb-6">
                    Renewable energy is key to combating climate change and reducing our dependence on fossil fuels. Learn
                    how solar, wind, and other clean energy sources are shaping a sustainable future.
                  </p>
                
                </div>
                <div className="flex justify-center">
                  <Image
                    src="https://innovationatwork.ieee.org/wp-content/uploads/2020/02/bigstock-Concept-Of-Renewable-Energy-So-339244726_1024X684.png"
                    alt="Solar panels and wind turbines illustrating renewable energy"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Key Issues Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Key Benefits of Renewable Energy</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Clean Energy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Renewable energy sources like solar and wind produce electricity without emitting greenhouse gases,
                      helping to combat climate change.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground">
                      Solar energy alone could meet global electricity demand 100 times over.
                    </p>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Energy Independence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      By investing in renewable energy, countries can reduce their reliance on imported fossil fuels and
                      enhance energy security.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground">
                      Wind energy is now one of the fastest-growing energy sources worldwide.
                    </p>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Economic Growth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      The renewable energy sector creates millions of jobs globally, from manufacturing to installation
                      and maintenance.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground">
                      The solar industry employs over 4 million people worldwide.
                    </p>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
          {/* Renewable Alternatives Section */}
          <section id="renewable-benefits" className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Renewable Energy Innovations</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-green-700">Solar Power</h3>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-700 mr-2 mt-1 flex-shrink-0" />
                      <span>Install rooftop solar panels to generate clean energy for your home.</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-700 mr-2 mt-1 flex-shrink-0" />
                      <span>Support community solar projects to share renewable energy benefits.</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-700 mr-2 mt-1 flex-shrink-0" />
                      <span>Explore solar-powered gadgets and appliances for everyday use.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-green-700">Wind Energy</h3>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-700 mr-2 mt-1 flex-shrink-0" />
                      <span>Advocate for wind farms in your region to harness clean energy.</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-700 mr-2 mt-1 flex-shrink-0" />
                      <span>Learn about offshore wind projects and their potential.</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-700 mr-2 mt-1 flex-shrink-0" />
                      <span>Support policies that promote wind energy development.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* Call to Action */}
          <section className="py-16 bg-green-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Join the Renewable Energy Movement</h2>
              <p className="text-xl max-w-3xl mx-auto mb-8">
                Commit to a cleaner, greener future by supporting renewable energy initiatives and adopting sustainable
                energy practices.
              </p>
            </div>
          </section>
        </main>
        <footer className="bg-green-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} EcoEthics. All rights reserved.</p>
          </div>
        </footer>
      </div>
    )
  }
  
  