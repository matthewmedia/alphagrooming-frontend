import { Card, CardContent, Button, Badge } from "@/ui";

import { Clock, ArrowRight } from "lucide-react";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  featured: boolean;
  image: string;
}

interface PostGridProps {
  posts: Post[];
}

const PostGrid = ({ posts }: PostGridProps) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Clock className="w-8 h-8 text-slate-400" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-2">
          No articles found
        </h3>
        <p className="text-slate-600">
          Try adjusting your search or filter criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Card
          key={post.id}
          className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden"
        >
          {/* Image Container */}
          <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

            {/* Category Badge */}
            <Badge className="absolute top-4 left-4 bg-white/90 text-slate-900 backdrop-blur-sm">
              {post.category}
            </Badge>

            {/* Featured Badge */}
            {post.featured && (
              <Badge className="absolute top-4 right-4 bg-amber-500 text-white">
                Featured
              </Badge>
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button
                variant="secondary"
                size="sm"
                className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
              >
                Read Article
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          <CardContent className="p-6">
            {/* Title */}
            <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors line-clamp-2">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center text-sm text-slate-500">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-slate-700 hover:text-slate-900 group-hover:translate-x-1 transition-all duration-200"
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PostGrid;
