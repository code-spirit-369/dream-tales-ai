import Image from "next/image";
import Link from "next/link";

type Props = {
  story: StoryDoc;
};

export default function StoryCard({ story }: Props) {
  return (
    <Link
      href={`library/story/${story._id}`}
      className="bg-primary p-6 rounded-lg drop-shadow-md"
    >
      <h2 className="text-white text-2xl font-semibold mb-4">
        {story.story.story_title}
      </h2>

      <Image
        src={story.story.cover_img}
        alt={story.story.story_title}
        width={768}
        height={768}
        className="object-contain rounded-lg"
      />
    </Link>
  );
}
