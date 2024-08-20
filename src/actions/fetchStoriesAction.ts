"use server";

import { StoryModel } from "@/models";
import { connectToDB } from "@/lib/mongodb";

export async function fetchStories() {
  await connectToDB();

  const stories = await StoryModel.find().sort({ createdAt: -1 });

  if (!stories) {
    return [];
  }

  return stories;
}
