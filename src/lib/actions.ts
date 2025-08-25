"use server";

import { z } from "zod";
import { schema } from "@/lib/FormValidation";
import { auth } from "@/auth";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";

export async function createStartupAction(formData: z.infer<typeof schema>) {
  try {
    // ✅ check authentication
    const session = await auth();
    if (!session) { console.log(session);
      return { success: false, error: "Not signed in" };
     
    }
console.log(session.id);
console.log("session: ",session);

    // ✅ validate incoming form
    const validated = await schema.parseAsync(formData);

    // ✅ generate slug
    const slug = slugify(validated.title, { lower: true, strict: true });

    // ✅ build startup document
    const startup = {
      _type: "startup",
      title: validated.title,
      description: validated.description,
      category: validated.category,
      image: validated.link, // use "image" instead of "link"
      pitch: validated.pitch,
      slug: {
        _type: "slug",
        current: slug,
      },
      author: {
        _type: "reference",
        _ref: session?.id as string, 
      },
      
    };

    // ✅ create in Sanity
    const result = await writeClient.create(startup);

    return { success: true, id: result._id };
  } catch (error: any) {
    console.error("Sanity create error:", error);
    return { success: false, error: error.message };
  }
}
