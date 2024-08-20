import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type Props = {
  story: StoryDoc;
};

export default function StoryBook({ story }: Props) {
  return (
    <Carousel className="w-full max-w-xs md:max-w-5xl lg:max-w-7xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden border-2 border-gray-200">
      <CarouselContent className="cursor-pointer">
        <CarouselItem>
          <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-yellow-100 via-white to-yellow-100 p-8 gap-x-4">
            <h2 className="flex-1 text-center text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-0 select-none">
              {story.story.story_title}
            </h2>

            <Image
              src={story.story.cover_img}
              alt={story.story.story_title}
              width={512}
              height={512}
              className="object-contain w-64 md:w-80 lg:w-96 rounded-lg"
            />
          </div>
        </CarouselItem>

        {Object.keys(story.story.pages).map((index) => (
          <CarouselItem key={index}>
            <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-yellow-100 via-white to-yellow-100 p-8 gap-x-4">
              <p className="flex-1 text-lg md:text-2xl text-gray-700 leading-relaxed max-w-lg select-none">
                {story.story.pages[parseInt(index)].page_content}
              </p>

              <Image
                src={story.story.pages[parseInt(index)].page_image}
                alt={index}
                width={512}
                height={512}
                className="object-contain w-64 md:w-80 lg:w-96 rounded-lg mt-8 md:mt-0"
              />
            </div>
          </CarouselItem>
        ))}

        <CarouselItem>
          <h2 className="flex items-center justify-center w-full h-full text-4xl md:text-6xl font-bold text-gray-800 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 p-8 select-none">
            The End
          </h2>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
