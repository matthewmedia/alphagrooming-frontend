import { LuNewspaper } from "react-icons/lu";
import { IconicTitle } from "@/components/IconicTitle/IconicTitle";
export const Slogan = () => (
  <div className="font-bold text-black text-4xl sm:text-4xl md:text-4xl lg:text-8xl lg:mt-[170px] mt-[170px]">
      <IconicTitle icon={<LuNewspaper className="text-green-500 w-8 h-8"/>}>
        <p className="mt-12 text-black sm:text-sm lg:text-4xl">Original Articles</p>
      </IconicTitle>
      <span className="block my-2 sm:my-3 md:my-4 lg:my-5">Your Guide</span>
      <span className="inline-block mx-2 sm:mx-3 md:mx-2 lg:mx-2">To</span>
      <span className="slogan inline-block text-green-500 text-4xl sm:text-4xl md:text-4xl lg:text-8xl">Grooming</span>
      <span className="slogan block text-green-500 text-4xl sm:text-4xl md:text-4xl lg:text-8xl my-2 sm:my-3 md:my-4 lg:my-5">Greatness</span>
  </div>
);