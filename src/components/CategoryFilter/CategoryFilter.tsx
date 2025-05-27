import { Button, Badge } from "@/ui";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`transition-all duration-200 ${
            selectedCategory === category
              ? "bg-slate-900 text-white hover:bg-slate-800 shadow-lg"
              : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
          }`}
        >
          {category}
          {selectedCategory === category && (
            <Badge
              variant="secondary"
              className="ml-2 bg-white text-slate-900 text-xs"
            >
              Active
            </Badge>
          )}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
