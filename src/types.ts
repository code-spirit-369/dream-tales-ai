interface StoryPage {
  page_number: number;
  page_content: string;
  page_image: string;
}

interface Story {
  story_title: string;
  number_of_pages: number;
  pages: StoryPage[];
  cover_img: string;
}

interface StoryDoc {
  _id: string;
  story: Story;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
