"use server";

import { replicate } from "@/lib/replicate";

export async function generateImage(prompt: string) {
  const output = (await replicate.run(
    "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
    {
      input: {
        width: 768,
        height: 768,
        prompt: prompt,
        scheduler: "K_EULER",
        num_outputs: 1,
        guidance_scale: 7.5,
        num_inference_steps: 50,
      },
    }
  )) as any;

  const imageUrl = output[0];
  return imageUrl;
}
