"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, BarChart2, Calendar, ChevronLeft, ChevronRight, Plus, Recycle, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

export default function WasteTrackerPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [wasteEntries, setWasteEntries] = useState([
    { id: 1, date: "2024-04-20", category: "plastic", amount: 0.5, recycled: true },
    { id: 2, date: "2024-04-20", category: "paper", amount: 1.2, recycled: true },
    { id: 3, date: "2024-04-21", category: "food", amount: 0.8, recycled: false },
    { id: 4, date: "2024-04-22", category: "glass", amount: 0.3, recycled: true },
    { id: 5, date: "2024-04-23", category: "plastic", amount: 0.7, recycled: false },
  ])

  const [newEntry, setNewEntry] = useState({
    category: "plastic",
    amount: 0.5,
    recycled: false,
  })

  const [dialogOpen, setDialogOpen] = useState(false)

  const handleAddEntry = () => {
    const today = new Date().toISOString().split("T")[0]
    setWasteEntries([
      ...wasteEntries,
      {
        id: wasteEntries.length + 1,
        date: today,
        category: newEntry.category,
        amount: Number.parseFloat(newEntry.amount),
        recycled: newEntry.recycled,
      },
    ])
    setDialogOpen(false)
    setNewEntry({
      category: "plastic",
      amount: 0.5,
      recycled: false,
    })
  }

  // Calculate statistics
  const totalWaste = wasteEntries.reduce((sum, entry) => sum + entry.amount, 0)
  const recycledWaste = wasteEntries.filter((entry) => entry.recycled).reduce((sum, entry) => sum + entry.amount, 0)
  const recyclingRate = totalWaste > 0 ? (recycledWaste / totalWaste) * 100 : 0

  const wasteByCategory = wasteEntries.reduce((acc, entry) => {
    acc[entry.category] = (acc[entry.category] || 0) + entry.amount
    return acc
  }, {})

  const formatMonth = (date) => {
    return date.toLocaleString("default", { month: "long", year: "numeric" })
  }

  const previousMonth = () => {
    const newDate = new Date(currentDate)
    newDate.setMonth(newDate.getMonth() - 1)
    setCurrentDate(newDate)
  }

  const nextMonth = () => {
    const newDate = new Date(currentDate)
    newDate.setMonth(newDate.getMonth() + 1)
    setCurrentDate(newDate)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-800 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Recycle className="h-6 w-6" />
            <h1 className="text-xl font-bold">EcoEthics | Waste Tracker</h1>
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
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <Link href="/tools" className="flex items-center text-green-700 hover:text-green-800">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Tools
            </Link>
          </div>

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Waste Tracker</h2>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Waste Entry
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Waste Entry</DialogTitle>
                  <DialogDescription>
                    Record the waste you've produced today to track your progress over time.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="category">Waste Category</Label>
                    <Select
                      value={newEntry.category}
                      onValueChange={(value) => setNewEntry({ ...newEntry, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plastic">Plastic</SelectItem>
                        <SelectItem value="paper">Paper & Cardboard</SelectItem>
                        <SelectItem value="glass">Glass</SelectItem>
                        <SelectItem value="metal">Metal</SelectItem>
                        <SelectItem value="food">Food Waste</SelectItem>
                        <SelectItem value="electronic">Electronic Waste</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="amount">Amount (kg)</Label>
                    <Input
                      id="amount"
                      type="number"
                      step="0.1"
                      min="0.1"
                      value={newEntry.amount}
                      onChange={(e) => setNewEntry({ ...newEntry, amount: e.target.value })}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="recycled"
                      checked={newEntry.recycled}
                      onChange={(e) => setNewEntry({ ...newEntry, recycled: e.target.checked })}
                      className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <Label htmlFor="recycled">This waste was recycled or composted</Label>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleAddEntry} className="bg-green-600 hover:bg-green-700">
                    Add Entry
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Waste</CardTitle>
                <CardDescription>This month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{totalWaste.toFixed(1)} kg</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Recycled Waste</CardTitle>
                <CardDescription>This month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{recycledWaste.toFixed(1)} kg</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Recycling Rate</CardTitle>
                <CardDescription>This month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{recyclingRate.toFixed(0)}%</div>
                <Progress value={recyclingRate} className="h-2 mt-2" />
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart2 className="h-5 w-5 mr-2 text-green-600" />
                  Waste by Category
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(wasteByCategory).map(([category, amount]) => (
                    <div key={category}>
                      <div className="flex justify-between mb-1">
                        <span className="capitalize">{category}</span>
                        <span>{amount.toFixed(1)} kg</span>
                      </div>
                      <Progress value={(amount / totalWaste) * 100} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-green-600" />
                    Monthly Overview
                  </CardTitle>
                  <div className="flex items-center">
                    <Button variant="ghost" size="icon" onClick={previousMonth}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="mx-2">{formatMonth(currentDate)}</span>
                    <Button variant="ghost" size="icon" onClick={nextMonth}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">Your waste reduction over time</p>
                  <div className="h-40 flex items-end justify-around">
                    {/* This would be a chart in a real application */}
                    <div className="w-8 bg-green-200 rounded-t" style={{ height: "30%" }}></div>
                    <div className="w-8 bg-green-300 rounded-t" style={{ height: "50%" }}></div>
                    <div className="w-8 bg-green-400 rounded-t" style={{ height: "70%" }}></div>
                    <div className="w-8 bg-green-500 rounded-t" style={{ height: "60%" }}></div>
                    <div className="w-8 bg-green-600 rounded-t" style={{ height: "40%" }}></div>
                  </div>
                  <div className="flex justify-around mt-2 text-xs text-muted-foreground">
                    <span>Week 1</span>
                    <span>Week 2</span>
                    <span>Week 3</span>
                    <span>Week 4</span>
                    <span>Week 5</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trash2 className="h-5 w-5 mr-2 text-green-600" />
                Recent Waste Entries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Category</th>
                      <th className="text-left py-3 px-4">Amount (kg)</th>
                      <th className="text-left py-3 px-4">Recycled</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wasteEntries
                      .sort((a, b) => new Date(b.date) - new Date(a.date))
                      .map((entry) => (
                        <tr key={entry.id} className="border-b">
                          <td className="py-3 px-4">{entry.date}</td>
                          <td className="py-3 px-4 capitalize">{entry.category}</td>
                          <td className="py-3 px-4">{entry.amount.toFixed(1)}</td>
                          <td className="py-3 px-4">
                            {entry.recycled ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Recycled
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                Not Recycled
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Entries
              </Button>
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
