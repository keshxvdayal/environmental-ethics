import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

function SustainableAgriculturePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-800 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6" />
            <h1 className="text-xl font-bold">EcoEthics | Sustainable Agriculture</h1>
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
                <Link href="/renewable-energy" className="hover:underline">
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
                <h1 className="text-4xl font-bold mb-4">Sustainable Agriculture Practices</h1>
                <p className="text-lg mb-6">
                  Sustainable agriculture is essential for ensuring food security while preserving the environment. Learn
                  how innovative farming techniques are shaping a healthier planet.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://static.wixstatic.com/media/cbc1ea_9d53078c927f43c4bae3d4184a190408~mv2.png/v1/fill/w_568,h_332,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cbc1ea_9d53078c927f43c4bae3d4184a190408~mv2.png"
                  alt="Sustainable farming practices"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Key Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Benefits of Sustainable Agriculture</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Soil Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Practices like crop rotation and organic farming improve soil fertility and reduce erosion, ensuring
                    long-term productivity.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    Healthy soil supports biodiversity and reduces the need for chemical fertilizers.
                  </p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Water Conservation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Techniques such as drip irrigation and rainwater harvesting optimize water use and reduce waste.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    Agriculture accounts for 70% of global freshwater use.
                  </p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Reduced Emissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Sustainable farming minimizes greenhouse gas emissions by reducing reliance on synthetic inputs and
                    promoting carbon sequestration.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    Regenerative agriculture can capture up to 1 ton of CO2 per acre annually.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        {/* Sustainable Practices Section */}
        <section id="sustainable-practices" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Sustainable Farming Techniques</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-green-700">Crop Diversification</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-700 mr-2 mt-1 flex-shrink-0" />
                    <span>Plant a variety of crops to improve soil health and reduce pest outbreaks.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-700 mr-2 mt-1 flex-shrink-0" />
                    <span>Support biodiversity by integrating agroforestry practices.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-700 mr-2 mt-1 flex-shrink-0" />
                    <span>Adopt intercropping to maximize land use efficiency.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-green-700">Organic Farming</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-700 mr-2 mt-1 flex-shrink-0" />
                    <span>Eliminate synthetic pesticides and fertilizers to protect ecosystems.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-700 mr-2 mt-1 flex-shrink-0" />
                    <span>Use composting to recycle organic waste and enrich soil.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-700 mr-2 mt-1 flex-shrink-0" />
                    <span>Promote natural pest control methods like companion planting.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Call to Action */}
        <section className="py-16 bg-green-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join the Sustainable Agriculture Movement</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Commit to sustainable farming practices and support initiatives that promote food security and environmental
              health.
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

export default SustainableAgriculturePage