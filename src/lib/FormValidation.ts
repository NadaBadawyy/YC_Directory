import {z} from "zod";

export const schema =z.object({
        title:z.string('Title is required').min(3, 'Title must contain at least 3 characters').max(100,'Title must contain at most 20 characters'),
        description:z.string('Description is required').min(10,'Description must contain at least 10 characters'),
        category:z.string('Category is required').min(3,'Category must contain at least 3 characters').max(20,'Category must contain at most 20 characters'),
        link:z.string('Image Link is required').url('Invalid Image URL').refine(async (url)=>{
            try{
                const res = await fetch(url,{method:'HEAD'});
                const ContentType=res.headers.get('content-type')
                return ContentType?.startsWith('image/');
            }
            catch{
                return false
            }
        }),
pitch: z.string('Pitch is required').min(10, "Pitch must contain at least 10 characters")
    })