"use client";
import { useState } from "react";
import { Button, Badge, Card, CardContent, Separator } from "@/ui";
import { Search, Star, TrendingUp, Users, Award, Scissors } from "lucide-react";
import Footer from "@/components//Footer/Footer";
import PostGrid from "@/components/PostGrid/PostGrid";
import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";
import Header from "@/components/Header/Header";

// Mock data for the posts - replace with your actual Sanity data
const mockPosts = [
  {
    id: 1,
    title: "The Best Colognes for Modern Gentlemen",
    excerpt:
      "Discover the top fragrances that define sophistication and style in 2024.",
    category: "Fragrances",
    readTime: "5 min read",
    featured: true,
    image: "/lovable-uploads/9d715c16-72b2-4618-89d0-5248953a2a49.png",
  },
  {
    id: 2,
    title: "Essential Grooming Tools Every Man Needs",
    excerpt:
      "From razors to beard trimmers, build your ultimate grooming arsenal.",
    category: "Tools",
    readTime: "8 min read",
    featured: false,
    image: "/lovable-uploads/9d715c16-72b2-4618-89d0-5248953a2a49.png",
  },
  {
    id: 3,
    title: "Beard Care Fundamentals",
    excerpt:
      "Master the art of beard maintenance with professional techniques.",
    category: "Beard Care",
    readTime: "6 min read",
    featured: true,
    image: "/lovable-uploads/9d715c16-72b2-4618-89d0-5248953a2a49.png",
  },
  {
    id: 4,
    title: "Skincare Routine for Men",
    excerpt: "Build a simple yet effective skincare regimen for healthy skin.",
    category: "Skincare",
    readTime: "7 min read",
    featured: false,
    image: "/lovable-uploads/9d715c16-72b2-4618-89d0-5248953a2a49.png",
  },
  {
    id: 5,
    title: "Hair Styling Products Guide",
    excerpt: "Choose the right products for your hair type and desired style.",
    category: "Hair Care",
    readTime: "4 min read",
    featured: false,
    image: "/lovable-uploads/9d715c16-72b2-4618-89d0-5248953a2a49.png",
  },
  {
    id: 6,
    title: "Luxury Shaving Experience",
    excerpt: "Transform your daily shave into a luxurious self-care ritual.",
    category: "Shaving",
    readTime: "9 min read",
    featured: true,
    image: "/lovable-uploads/9d715c16-72b2-4618-89d0-5248953a2a49.png",
  },
];

const categories = [
  "All",
  "Fragrances",
  "Tools",
  "Beard Care",
  "Skincare",
  "Hair Care",
  "Shaving",
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = mockPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = mockPosts.filter((post) => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-6 text-slate-900 bg-white/90 hover:bg-white"
            >
              <Award className="w-4 h-4 mr-2" />
              Premium Grooming Hub
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              AlphaGrooming
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Your ultimate destination for modern men&apos;s grooming. Discover
              premium products, expert advice, and timeless style.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8"
              >
                Explore Products
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-slate-900 hover:bg-white hover:text-slate-900 px-8"
              >
                Browse Articles
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 opacity-10">
          <Scissors className="w-32 h-32 text-white" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10">
          <Scissors className="w-24 h-24 text-white rotate-45" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">50K+</h3>
              <p className="text-slate-600">Satisfied Customers</p>
            </div>

            <div className="text-center">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">4.9</h3>
              <p className="text-slate-600">Average Rating</p>
            </div>

            <div className="text-center">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">200+</h3>
              <p className="text-slate-600">Expert Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Handpicked content from our grooming experts to elevate your style
              game.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white"
              >
                <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-white text-slate-900">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>{post.readTime}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-slate-700 hover:text-slate-900"
                    >
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              All Articles
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Explore our comprehensive library of grooming guides and product
              reviews.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <Separator className="my-8" />

          {/* Posts Grid */}
          <PostGrid posts={filteredPosts} />
        </div>
      </section>
    </div>
  );
};

export default Index;
