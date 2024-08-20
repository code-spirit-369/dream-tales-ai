import { model, models, Schema } from "mongoose";

interface IStory {
  story: Story;
}

const StorySchema = new Schema<IStory>(
  {
    story: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

export const StoryModel = models.Story || model<IStory>("Story", StorySchema);
