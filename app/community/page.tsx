"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MessageSquare, Search, ThumbsUp, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function CommunityPage() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "EcoWarrior",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2 hours ago",
      title: "Zero-waste grocery shopping tips",
      content:
        "I've been trying to reduce my waste when grocery shopping. Here are some tips that have worked for me: 1) Bring your own cloth bags for produce, 2) Shop at bulk stores with your own containers, 3) Choose products with minimal or recyclable packaging...",
      likes: 24,
      comments: 7,
      tags: ["zero-waste", "shopping", "tips"],
    },
    {
      id: 2,
      author: "GreenThumb",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "Yesterday",
      title: "Started composting - need advice!",
      content:
        "I just started composting in my backyard and I'm not sure if I'm doing it right. My compost pile seems too wet and has a strong odor. Should I add more dry materials? What's the right balance of green and brown materials?",
      likes: 15,
      comments: 12,
      tags: ["composting", "gardening", "help"],
    },
    {
      id: 3,
      author: "SustainableLiving",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "3 days ago",
      title: "Plastic-free bathroom alternatives",
      content:
        "After calculating my carbon footprint, I realized how much plastic waste comes from my bathroom products. I've switched to bamboo toothbrushes, shampoo bars, and safety razors. Has anyone tried menstrual cups or other plastic-free period products?",
      likes: 42,
      comments: 18,
      tags: ["plastic-free", "bathroom", "alternatives"],
    },
  ])

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
  })

  const handlePostSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!newPost.title || !newPost.content) return

    setPosts([
      {
        id: posts.length + 1,
        author: "You",
        avatar: "/placeholder.svg?height=40&width=40",
        date: "Just now",
        title: newPost.title,
        content: newPost.content,
        likes: 0,
        comments: 0,
        tags: [],
      },
      ...posts,
    ])

    setNewPost({
      title: "",
      content: "",
    })
  }

  const handleLike = (postId: number) => {
    setPosts(posts.map((post) => (post.id === postId ? { ...post, likes: post.likes + 1 } : post)))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-800 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6" />
            <h1 className="text-xl font-bold">EcoEthics | Community</h1>
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
                <Link href="/community" className="hover:underline font-bold">
                  Community
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-[1fr_300px] gap-8">
            <div>
              <div className="bg-white p-6 rounded-xl border border-green-100 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-green-800">Community Forum</h2>
                <p className="mb-6 text-gray-700">
                  Connect with like-minded individuals committed to sustainable living. Share your experiences, ask
                  questions, and learn from others in our community.
                </p>
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input placeholder="Search discussions..." className="pl-10" />
                </div>

                <Tabs defaultValue="discussions">
                  <TabsList className="mb-6">
                    <TabsTrigger value="discussions">Discussions</TabsTrigger>
                    <TabsTrigger value="questions">Questions</TabsTrigger>
                    <TabsTrigger value="events">Local Events</TabsTrigger>
                  </TabsList>

                  <TabsContent value="discussions" className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-green-100 mb-4">
                      <h3 className="text-lg font-bold mb-2 text-green-700">Start a Discussion</h3>
                      <p className="mb-4 text-gray-700 text-sm">Share your thoughts, experiences, or questions with the community</p>
                      <form onSubmit={handlePostSubmit} className="space-y-4">
                        <Input
                          placeholder="Title"
                          value={newPost.title}
                          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                        />
                        <Textarea
                          placeholder="What's on your mind?"
                          className="min-h-[100px]"
                          value={newPost.content}
                          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                        />
                        <Button
                          type="submit"
                          disabled={!newPost.title || !newPost.content}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          Post
                        </Button>
                      </form>
                    </div>

                    {posts.map((post) => (
                      <div key={post.id} className="bg-white p-6 rounded-xl border border-green-100 mb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <Image
                            src={post.avatar || "/placeholder.svg"}
                            alt={post.author}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <div>
                            <div className="font-semibold">{post.author}</div>
                            <div className="text-sm text-gray-500">{post.date}</div>
                          </div>
                        </div>
                        <h4 className="text-lg font-bold mb-1 text-green-700">{post.title}</h4>
                        <p className="mb-4 text-gray-700">{post.content}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {post.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center gap-6">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="flex items-center gap-1"
                              onClick={() => handleLike(post.id)}
                            >
                              <ThumbsUp className="h-4 w-4" />
                              <span>{post.likes}</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" />
                              <span>{post.comments}</span>
                            </Button>
                          </div>
                          <Button variant="outline" size="sm">
                            View Discussion
                          </Button>
                        </div>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="questions">
                    <div className="bg-white p-6 rounded-xl border border-green-100 text-center">
                      <h3 className="text-lg font-medium mb-2 text-green-700">Questions & Answers</h3>
                      <p className="text-gray-500 mb-4">
                        This section is coming soon! Ask and answer questions about sustainable living.
                      </p>
                      <Button variant="outline">Be notified when launched</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="events">
                    <div className="bg-white p-6 rounded-xl border border-green-100 text-center">
                      <h3 className="text-lg font-medium mb-2 text-green-700">Local Events</h3>
                      <p className="text-gray-500 mb-4">
                        Find and share sustainability events in your area. Coming soon!
                      </p>
                      <Button variant="outline">Be notified when launched</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-green-100">
                <h3 className="text-lg font-bold mb-4 text-green-700">Community Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Members</span>
                    <span className="font-medium">2,547</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Discussions</span>
                    <span className="font-medium">342</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Comments</span>
                    <span className="font-medium">1,203</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Online Now</span>
                    <span className="font-medium">42</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-green-100">
                <h3 className="text-lg font-bold mb-4 text-green-700">Top Contributors</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="User"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium">EcoWarrior</div>
                      <div className="text-sm text-gray-500">124 contributions</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="User"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium">GreenThumb</div>
                      <div className="text-sm text-gray-500">98 contributions</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="User"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium">SustainableLiving</div>
                      <div className="text-sm text-gray-500">87 contributions</div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Contributors
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl border border-green-100">
                <h3 className="text-lg font-bold mb-4 text-green-700">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">#zero-waste</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">#recycling</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">#sustainable-living</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">#plastic-free</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">#composting</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">#eco-friendly</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">#minimalism</span>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Browse All Tags
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl border border-green-100">
                <h3 className="text-lg font-bold mb-4 text-green-700">Join Our Community</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Create an account to participate in discussions, track your environmental impact, and connect with
                  like-minded individuals.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <User className="h-4 w-4 mr-2" />
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
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
