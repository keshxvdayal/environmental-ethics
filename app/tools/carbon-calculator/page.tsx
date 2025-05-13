"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, BarChart3, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"

export default function CarbonCalculatorPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [results, setResults] = useState(null)
  const [formData, setFormData] = useState({
    transportation: {
      carType: "",
      milesDriven: 0,
      publicTransport: "",
      flights: "",
    },
    home: {
      energySource: "",
      homeSize: "",
      occupants: 1,
    },
    diet: {
      dietType: "",
      localFood: "",
      foodWaste: "",
    },
    consumption: {
      shoppingFrequency: "",
      recycling: "",
      newProducts: "",
    },
  })

  const handleInputChange = (category, field, value) => {
    setFormData({
      ...formData,
      [category]: {
        ...formData[category],
        [field]: value,
      },
    })
  }

  const calculateFootprint = () => {
    // This is a simplified calculation for demonstration purposes
    // In a real app, this would be much more detailed and accurate

    let transportationScore = 0
    if (formData.transportation.carType === "electric") transportationScore += 2
    else if (formData.transportation.carType === "hybrid") transportationScore += 4
    else transportationScore += 6

    transportationScore += formData.transportation.milesDriven / 20

    if (formData.transportation.publicTransport === "frequently") transportationScore -= 1
    if (formData.transportation.flights === "frequently") transportationScore += 3

    let homeScore = 0
    if (formData.home.energySource === "renewable") homeScore += 2
    else if (formData.home.energySource === "mixed") homeScore += 4
    else homeScore += 6

    if (formData.home.homeSize === "large") homeScore += 3
    else if (formData.home.homeSize === "medium") homeScore += 2
    else homeScore += 1

    homeScore = homeScore / formData.home.occupants

    let dietScore = 0
    if (formData.diet.dietType === "vegan") dietScore += 1
    else if (formData.diet.dietType === "vegetarian") dietScore += 2
    else if (formData.diet.dietType === "flexitarian") dietScore += 3
    else dietScore += 5

    if (formData.diet.localFood === "frequently") dietScore -= 0.5
    if (formData.diet.foodWaste === "high") dietScore += 1

    let consumptionScore = 0
    if (formData.consumption.shoppingFrequency === "minimal") consumptionScore += 1
    else if (formData.consumption.shoppingFrequency === "moderate") consumptionScore += 3
    else consumptionScore += 5

    if (formData.consumption.recycling === "all") consumptionScore -= 1
    if (formData.consumption.newProducts === "frequently") consumptionScore += 2

    const totalScore = transportationScore + homeScore + dietScore + consumptionScore

    // Convert score to tons of CO2 (simplified)
    const carbonFootprint = totalScore * 0.8

    // Calculate how this compares to averages
    const usAverage = 16
    const worldAverage = 4

    // Generate recommendations based on highest impact areas
    const recommendations = []

    if (transportationScore > 5) {
      recommendations.push(
        "Consider carpooling, using public transportation more frequently, or switching to an electric vehicle.",
      )
    }

    if (homeScore > 3) {
      recommendations.push(
        "Look into renewable energy options for your home and improve energy efficiency with better insulation or energy-efficient appliances.",
      )
    }

    if (dietScore > 3) {
      recommendations.push("Try incorporating more plant-based meals into your diet and reducing food waste.")
    }

    if (consumptionScore > 3) {
      recommendations.push(
        "Practice mindful consumption by buying less, choosing second-hand items, and recycling more consistently.",
      )
    }

    setResults({
      carbonFootprint: carbonFootprint.toFixed(1),
      comparedToUS: ((carbonFootprint / usAverage) * 100).toFixed(0),
      comparedToWorld: ((carbonFootprint / worldAverage) * 100).toFixed(0),
      recommendations,
      breakdown: {
        transportation: ((transportationScore / totalScore) * 100).toFixed(0),
        home: ((homeScore / totalScore) * 100).toFixed(0),
        diet: ((dietScore / totalScore) * 100).toFixed(0),
        consumption: ((consumptionScore / totalScore) * 100).toFixed(0),
      },
    })

    setCurrentStep(5)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-800 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6" />
            <h1 className="text-xl font-bold">EcoEthics | Carbon Calculator</h1>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:underline">
                  Tools
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Link href="/tools" className="flex items-center text-green-700 hover:text-green-800">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Tools
            </Link>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-green-600" />
                Carbon Footprint Calculator
              </CardTitle>
              <CardDescription>
                Estimate your carbon footprint based on your lifestyle and consumption habits
              </CardDescription>
            </CardHeader>
            <CardContent>
              {currentStep < 5 && (
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Step {currentStep} of 4</span>
                    <span className="text-sm">{currentStep * 25}% Complete</span>
                  </div>
                  <Progress value={currentStep * 25} className="h-2" />
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Transportation</h3>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="carType">What type of car do you primarily drive?</Label>
                      <RadioGroup
                        id="carType"
                        value={formData.transportation.carType}
                        onValueChange={(value) => handleInputChange("transportation", "carType", value)}
                        className="flex flex-col space-y-1 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="electric" id="electric" />
                          <Label htmlFor="electric">Electric Vehicle</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="hybrid" id="hybrid" />
                          <Label htmlFor="hybrid">Hybrid Vehicle</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="gasoline" id="gasoline" />
                          <Label htmlFor="gasoline">Gasoline/Diesel Vehicle</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="none" id="none" />
                          <Label htmlFor="none">I don't drive</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label>How many miles do you drive in a typical week?</Label>
                      <div className="flex items-center gap-4 mt-2">
                        <Slider
                          value={[formData.transportation.milesDriven]}
                          min={0}
                          max={500}
                          step={10}
                          onValueChange={(value) => handleInputChange("transportation", "milesDriven", value[0])}
                          className="flex-1"
                        />
                        <span className="w-12 text-right">{formData.transportation.milesDriven}</span>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="publicTransport">How often do you use public transportation?</Label>
                      <RadioGroup
                        id="publicTransport"
                        value={formData.transportation.publicTransport}
                        onValueChange={(value) => handleInputChange("transportation", "publicTransport", value)}
                        className="flex flex-col space-y-1 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="frequently" id="pt-frequently" />
                          <Label htmlFor="pt-frequently">Frequently (4+ days per week)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="sometimes" id="pt-sometimes" />
                          <Label htmlFor="pt-sometimes">Sometimes (1-3 days per week)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="rarely" id="pt-rarely" />
                          <Label htmlFor="pt-rarely">Rarely (a few times per month or less)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="never" id="pt-never" />
                          <Label htmlFor="pt-never">Never</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="flights">How often do you travel by airplane?</Label>
                      <RadioGroup
                        id="flights"
                        value={formData.transportation.flights}
                        onValueChange={(value) => handleInputChange("transportation", "flights", value)}
                        className="flex flex-col space-y-1 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="frequently" id="fl-frequently" />
                          <Label htmlFor="fl-frequently">Frequently (monthly or more)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="sometimes" id="fl-sometimes" />
                          <Label htmlFor="fl-sometimes">Sometimes (3-10 times per year)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="rarely" id="fl-rarely" />
                          <Label htmlFor="fl-rarely">Rarely (1-2 times per year)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="never" id="fl-never" />
                          <Label htmlFor="fl-never">Never</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Home Energy</h3>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="energySource">What is your primary home energy source?</Label>
                      <RadioGroup
                        id="energySource"
                        value={formData.home.energySource}
                        onValueChange={(value) => handleInputChange("home", "energySource", value)}
                        className="flex flex-col space-y-1 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="renewable" id="renewable" />
                          <Label htmlFor="renewable">Renewable Energy (Solar, Wind, etc.)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mixed" id="mixed" />
                          <Label htmlFor="mixed">Mixed Sources (Standard Utility)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="fossil" id="fossil" />
                          <Label htmlFor="fossil">Primarily Fossil Fuels</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="homeSize">What size is your home?</Label>
                      <RadioGroup
                        id="homeSize"
                        value={formData.home.homeSize}
                        onValueChange={(value) => handleInputChange("home", "homeSize", value)}
                        className="flex flex-col space-y-1 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="small" id="small" />
                          <Label htmlFor="small">Small (apartment or small house)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="medium" id="medium" />
                          <Label htmlFor="medium">Medium (average house)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="large" id="large" />
                          <Label htmlFor="large">Large (large house)</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="occupants">How many people live in your household?</Label>
                      <div className="flex items-center gap-4 mt-2">
                        <Input
                          id="occupants"
                          type="number"
                          min={1}
                          max={10}
                          value={formData.home.occupants}
                          onChange={(e) => handleInputChange("home", "occupants", Number.parseInt(e.target.value) || 1)}
                          className="w-20"
                        />
                        <span>people</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Diet & Food</h3>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="dietType">Which best describes your diet?</Label>
                      <RadioGroup
                        id="dietType"
                        value={formData.diet.dietType}
                        onValueChange={(value) => handleInputChange("diet", "dietType", value)}
                        className="flex flex-col space-y-1 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="vegan" id="vegan" />
                          <Label htmlFor="vegan">Vegan (no animal products)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="vegetarian" id="vegetarian" />
                          <Label htmlFor="vegetarian">Vegetarian (no meat)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="flexitarian" id="flexitarian" />
                          <Label htmlFor="flexitarian">Flexitarian (mostly plant-based with occasional meat)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="omnivore" id="omnivore" />
                          <Label htmlFor="omnivore">Omnivore (regular meat consumption)</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="localFood">How often do you eat locally produced food?</Label>
                      <RadioGroup
                        id="localFood"
                        value={formData.diet.localFood}
                        onValueChange={(value) => handleInputChange("diet", "localFood", value)}
                        className="flex flex-col space-y-1 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="frequently" id="lf-frequently" />
                          <Label htmlFor="lf-frequently">Frequently (most meals)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="sometimes" id="lf-sometimes" />
                          <Label htmlFor="lf-sometimes">Sometimes (weekly)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="rarely" id="lf-rarely" />
                          <Label htmlFor="lf-rarely">Rarely or never</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="foodWaste">How much food do you typically waste?</Label>
                      <RadioGroup
                        id="foodWaste"
                        value={formData.diet.foodWaste}
                        onValueChange={(value) => handleInputChange("diet", "foodWaste", value)}
                        className="flex flex-col space-y-1 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="low" id="fw-low" />
                          <Label htmlFor="fw-low">Low (very little waste)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="medium" id="fw-medium" />
                          <Label htmlFor="fw-medium">Medium (some waste)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="high" id="fw-high" />
                          <Label htmlFor="fw-high">High (significant waste)</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Consumption & Lifestyle</h3>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="shoppingFrequency">
                        How would you describe your shopping habits for non-food items?
                      </Label>
                      <RadioGroup
                        id="shoppingFrequency"
                        value={formData.consumption.shoppingFrequency}
                        onValueChange={(value) => handleInputChange("consumption", "shoppingFrequency", value)}
                        className="flex flex-col space-y-1 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="minimal" id="sf-minimal" />
                          <Label htmlFor="sf-minimal">Minimal (only buy what I need)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="moderate" id="sf-moderate" />
                          <Label htmlFor="sf-moderate">Moderate (occasional non-essential purchases)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="frequent" id="sf-frequent" />
                          <Label htmlFor="sf-frequent">Frequent (regular shopping for new items)</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="recycling">How much of your waste do you recycle?</Label>
                      <RadioGroup
                        id="recycling"
                        value={formData.consumption.recycling}
                        onValueChange={(value) => handleInputChange("consumption", "recycling", value)}
                        className="flex flex-col space-y-1 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="all" id="rc-all" />
                          <Label htmlFor="rc-all">All recyclable materials</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="most" id="rc-most" />
                          <Label htmlFor="rc-most">Most recyclable materials</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="some" id="rc-some" />
                          <Label htmlFor="rc-some">Some recyclable materials</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="none" id="rc-none" />
                          <Label htmlFor="rc-none">Little to none</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="newProducts">
                        How often do you buy new products rather than used/refurbished?
                      </Label>
                      <RadioGroup
                        id="newProducts"
                        value={formData.consumption.newProducts}
                        onValueChange={(value) => handleInputChange("consumption", "newProducts", value)}
                        className="flex flex-col space-y-1 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="rarely" id="np-rarely" />
                          <Label htmlFor="np-rarely">Rarely (prefer second-hand)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="sometimes" id="np-sometimes" />
                          <Label htmlFor="np-sometimes">Sometimes (mix of new and used)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="frequently" id="np-frequently" />
                          <Label htmlFor="np-frequently">Frequently (mostly new products)</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 5 && results && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Your Carbon Footprint</h3>
                    <p className="text-4xl font-bold text-green-700 mb-2">{results.carbonFootprint} tons CO₂e/year</p>
                    <div className="flex justify-center gap-8 mt-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Compared to US Average</p>
                        <p className="font-semibold">{results.comparedToUS}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Compared to World Average</p>
                        <p className="font-semibold">{results.comparedToWorld}%</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Breakdown by Category</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Transportation</span>
                          <span>{results.breakdown.transportation}%</span>
                        </div>
                        <Progress value={Number.parseInt(results.breakdown.transportation)} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Home Energy</span>
                          <span>{results.breakdown.home}%</span>
                        </div>
                        <Progress value={Number.parseInt(results.breakdown.home)} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Diet & Food</span>
                          <span>{results.breakdown.diet}%</span>
                        </div>
                        <Progress value={Number.parseInt(results.breakdown.diet)} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Consumption</span>
                          <span>{results.breakdown.consumption}%</span>
                        </div>
                        <Progress value={Number.parseInt(results.breakdown.consumption)} className="h-2" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Recommendations to Reduce Your Footprint</h4>
                    <ul className="space-y-2">
                      {results.recommendations.map((recommendation, index) => (
                        <li key={index} className="flex items-start">
                          <Leaf className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{recommendation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">What's Next?</h4>
                    <p className="mb-4">
                      Track your progress over time by retaking this assessment periodically. Explore our other tools to
                      help you reduce your environmental impact. Explore our other tools to help you reduce your
                      environmental impact.
                    </p>
                    <div className="flex gap-4">
                      <Button asChild className="bg-green-600 hover:bg-green-700">
                        <Link href="/tools/waste-tracker">Try Our Waste Tracker</Link>
                      </Button>
                      <Button asChild variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                        <Link href="/community">Join Our Community</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              {currentStep > 1 && currentStep < 5 && (
                <Button variant="outline" onClick={() => setCurrentStep(currentStep - 1)}>
                  Previous
                </Button>
              )}
              {currentStep === 1 && (
                <Button variant="outline" asChild>
                  <Link href="/tools">Cancel</Link>
                </Button>
              )}

              {currentStep < 4 && (
                <Button onClick={() => setCurrentStep(currentStep + 1)} className="ml-auto">
                  Next
                </Button>
              )}
              {currentStep === 4 && (
                <Button onClick={calculateFootprint} className="ml-auto bg-green-600 hover:bg-green-700">
                  Calculate Footprint
                </Button>
              )}
              {currentStep === 5 && (
                <Button onClick={() => setCurrentStep(1)} variant="outline">
                  Start Over
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </main>

      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} EcoEthics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
