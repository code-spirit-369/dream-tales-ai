"use server";

import { StoryModel } from "@/models";
import { connectToDB } from "@/lib/mongodb";

export async function fetchStoryById(id: string) {
  await connectToDB();

  const story = await StoryModel.findById(id);

  if (!story) {
    return null;
  }

  return story;
}
