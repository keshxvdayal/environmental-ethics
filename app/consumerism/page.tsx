import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import image from "../../public/image2.png"

export default function ConsumerismPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-800 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6" />
            <h1 className="text-xl font-bold">EcoEthics | Consumerism</h1>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/consumerism" className="hover:underline font-bold">
                  Consumerism
                </Link>
              </li>
              <li>
                <Link href="/waste" className="hover:underline">
                  Waste Management
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
        <section className="bg-gradient-to-b from-green-700 to-green-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-4">Consumerism & Environmental Impact</h1>
                <p className="text-lg mb-6">
                  Our modern consumption patterns have profound effects on the planet's ecosystems, resources, and
                  climate. Understanding these impacts is the first step toward making more sustainable choices.
                </p>
                <Button asChild size="lg" className="bg-white text-amber-800 hover:bg-gray-100">
                  <Link href="#sustainable-alternatives">Discover Sustainable Alternatives</Link>
                </Button>
              </div>
              <div className="flex justify-center">
                <Image
                  src={image}
                  alt="Shopping cart filled with products illustrating consumerism"
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
            <h2 className="text-3xl font-bold text-center mb-12">Key Issues in Consumerism</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Resource Depletion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our consumption habits are depleting natural resources at an alarming rate. From minerals to forests
                    to freshwater, many resources are being used faster than they can be replenished.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    The average American consumes as much resources as 35 people in India.
                  </p>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pollution & Emissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    The production, transportation, and disposal of consumer goods generate significant pollution and
                    greenhouse gas emissions, contributing to climate change and environmental degradation.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    The fashion industry alone is responsible for 10% of global carbon emissions.
                  </p>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Planned Obsolescence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Many products are designed to become outdated or non-functional after a certain period, encouraging
                    consumers to replace them frequently and generating more waste.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    The average smartphone is replaced every 2-3 years, despite having a potential lifespan of 4-7
                    years.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Sustainable Alternatives Section */}
        <section id="sustainable-alternatives" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Sustainable Alternatives</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">Conscious Consumption</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Buy less, choose well, make it last. Focus on quality over quantity.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Research brands' environmental policies and support those with sustainable practices.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Consider second-hand, repaired, or refurbished items before buying new.</span>
                  </li>
                </ul>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/tools/sustainable-brands">Explore Sustainable Brands</Link>
                </Button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">Circular Economy</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Support products designed for longevity, repairability, and recyclability.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Participate in sharing economies, rentals, and product-service systems.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Look for products made from recycled materials or renewable resources.</span>
                  </li>
                </ul>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/learn/circular-economy">Learn About Circular Economy</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Take the Sustainable Consumer Pledge</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Join thousands of others committed to reducing their environmental footprint through mindful consumption
              habits.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
              <Link href="/pledge">Take the Pledge</Link>
            </Button>
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
