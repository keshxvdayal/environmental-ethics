import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import image from "../../public/image3.png"

export default function WastePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-800 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Trash2 className="h-6 w-6" />
            <h1 className="text-xl font-bold">EcoEthics | Waste Management</h1>
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
                <Link href="/waste" className="hover:underline font-bold">
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
        <section className="bg-gradient-to-b from-teal-700 to-teal-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-4">Waste Management Solutions</h1>
                <p className="text-lg mb-6">
                  The global waste crisis requires innovative solutions and individual action. Learn about effective
                  approaches to reduce, reuse, recycle, and responsibly dispose of waste products.
                </p>
                <Button asChild size="lg" className="bg-white text-teal-800 hover:bg-gray-100">
                  <Link href="/tools/waste-tracker">Start Tracking Your Waste</Link>
                </Button>
              </div>
              <div className="flex justify-center">
                <Image
                  src={image}
                  alt="Waste management and recycling illustration"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Waste Crisis Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">The Global Waste Crisis</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-teal-700">By the Numbers</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-4xl font-bold text-teal-600 mr-4">2B</span>
                    <span>Tons of municipal solid waste generated globally each year</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-4xl font-bold text-teal-600 mr-4">8M</span>
                    <span>Tons of plastic waste entering our oceans annually</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-4xl font-bold text-teal-600 mr-4">33%</span>
                    <span>Of all food produced globally is wasted</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-4xl font-bold text-teal-600 mr-4">5%</span>
                    <span>Of global greenhouse gas emissions come from waste</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-teal-700">Environmental Impact</h3>
                <p className="mb-4">
                  Waste that isn't properly managed contaminates soil and water, releases greenhouse gases as it
                  decomposes, and threatens wildlife and ecosystems. Plastic waste is particularly problematic, as it
                  can take hundreds of years to break down.
                </p>
                <p>
                  The production of goods that quickly become waste also depletes natural resources and contributes to
                  pollution. By addressing waste at both the production and consumption stages, we can significantly
                  reduce these environmental impacts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Waste Management Approaches */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Waste Management Approaches</h2>
            <Tabs defaultValue="reduce" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="reduce">Reduce</TabsTrigger>
                <TabsTrigger value="reuse">Reuse</TabsTrigger>
                <TabsTrigger value="recycle">Recycle</TabsTrigger>
                <TabsTrigger value="dispose">Dispose</TabsTrigger>
              </TabsList>
              <TabsContent value="reduce" className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-teal-700">Reduce</h3>
                <p className="mb-4">
                  The most effective way to manage waste is to not create it in the first place. Reducing consumption
                  and choosing products with minimal packaging can significantly decrease your waste footprint.
                </p>
                <h4 className="text-xl font-semibold mb-2">Practical Tips:</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Buy in bulk to reduce packaging waste</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Choose products with minimal or recyclable packaging</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Plan meals to reduce food waste</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Opt for digital alternatives to paper products</span>
                  </li>
                </ul>
               
              </TabsContent>
              <TabsContent value="reuse" className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-teal-700">Reuse</h3>
                <p className="mb-4">
                  Extending the life of products through reuse prevents them from entering the waste stream and reduces
                  the need for new resources to create replacements.
                </p>
                <h4 className="text-xl font-semibold mb-2">Practical Tips:</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Use reusable shopping bags, water bottles, and coffee cups</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Repurpose glass jars and containers for storage</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Repair items instead of replacing them</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Donate or sell items you no longer need</span>
                  </li>
                </ul>
             
              </TabsContent>
              <TabsContent value="recycle" className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-teal-700">Recycle</h3>
                <p className="mb-4">
                  Recycling converts waste materials into new products, conserving resources and reducing landfill use.
                  However, it's important to recycle correctly to avoid contamination that can render entire batches
                  unrecyclable.
                </p>
                <h4 className="text-xl font-semibold mb-2">Practical Tips:</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Learn your local recycling guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Clean containers before recycling them</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Separate different types of recyclable materials</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Look for recycling symbols on products</span>
                  </li>
                </ul>
                
              </TabsContent>
              <TabsContent value="dispose" className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-teal-700">Responsible Disposal</h3>
                <p className="mb-4">
                  When waste cannot be reduced, reused, or recycled, it's important to dispose of it responsibly to
                  minimize environmental harm. Different types of waste require different disposal methods.
                </p>
                <h4 className="text-xl font-semibold mb-2">Practical Tips:</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Dispose of hazardous waste at designated facilities</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Compost organic waste when possible</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Use e-waste recycling programs for electronics</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Research proper disposal methods for unusual items</span>
                  </li>
                </ul>
               
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-teal-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Start Your Waste Reduction Journey Today</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Track your waste production, set reduction goals, and see your progress over time with our interactive
              waste tracker tool.
            </p>
            <Button asChild size="lg" className="bg-white text-teal-800 hover:bg-gray-100">
              <Link href="/tools/waste-tracker">Start Tracking Now</Link>
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
