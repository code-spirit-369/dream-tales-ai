import { fetchStories } from "@/actions/fetchStoriesAction";
import StoryCard from "@/components/story-card";

export default async function Library() {
  const stories = await fetchStories();

  if (!stories) {
    return <div>No stories found</div>;
  }

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((story: StoryDoc) => (
          <StoryCard key={story._id} story={story} />
        ))}
      </div>
    </div>
  );
}
