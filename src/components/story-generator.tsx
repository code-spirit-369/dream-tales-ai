"use client";

import { z } from "zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRightIcon, Loader2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

const formSchema = z.object({
  prompt: z.string().min(2),
});

export default function StoryGenerator() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    try {
      const res = await axios.post("/api/generate", {
        prompt: values.prompt,
      });

      if (res.status === 200) {
        const storyId = res.data.storyId;
        router.push(`library/story/${storyId}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      form.reset();
      setLoading(false);
    }

    console.log(values);
  }

  return (
    <div className="mt-20 w-full bg-primary rounded-2xl p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    autoFocus
                    {...field}
                    className="bg-transparent border-none text-white text-lg placeholder:text-gray-200 resize-none"
                    placeholder="Write a prompt to generate a story..."
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="mt-2 flex justify-end">
            <Button
              disabled={!form.formState.isValid}
              type="submit"
              size="icon"
            >
              {loading ? (
                <Loader2Icon className="size-8 text-gray-200 animate-spin" />
              ) : (
                <ArrowRightIcon className="size-8 text-gray-200" />
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
