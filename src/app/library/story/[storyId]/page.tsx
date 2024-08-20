import { fetchStoryById } from "@/actions/fetchStoryByIdAction";
import StoryBook from "@/components/story-book";

type Props = {
  params: {
    storyId: string;
  };
};

export default async function Story({ params }: Props) {
  const storyId = params.storyId;

  const story: StoryDoc = await fetchStoryById(storyId);
  return (
    <div className="my-24 max-w-7xl mx-auto bg-white rounded-2xl drop-shadow-md">
      <StoryBook story={story} />
    </div>
  );
}
