import Link from "next/link";

import { Button } from "@/components/ui/button";
import StoryGenerator from "@/components/story-generator";

export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto p-8 md:p-24">
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Create <span className="text-primary">Worlds,</span> Write{" "}
        <span className="text-primary">Dreams.</span>
      </h1>

      <p className="mt-2 md:mt-4 text-base md:text-xl text-center text-gray-500 max-w-4xl">
        Story Teller AI is a platform that helps you create worlds, write
        dreams, and tell stories.
      </p>

      <div className="flex gap-8 mt-8">
        <Button className="md:px-8 md:py-6 md:text-lg font-medium">
          Get Started
        </Button>

        <Button
          className="md:px-8 md:py-6 md:text-lg font-medium"
          variant="outline"
          asChild
        >
          <Link href="/library">Library</Link>
        </Button>
      </div>

      <StoryGenerator />
    </div>
  );
}
