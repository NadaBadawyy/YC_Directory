'use client'
import {z} from "zod";
import { Controller, useForm } from 'react-hook-form';
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import MDEditor from '@uiw/react-md-editor';
import React from "react";
import {  Send } from "lucide-react";
import { Spinner } from "./ui/shadcn-io/spinner";
import { toast } from "sonner";
import { schema } from "@/lib/FormValidation";
import { useRouter } from "next/navigation";
import { FormType } from "@/lib/types";
import { createStartupAction } from "@/lib/actions";


function FormStartup() {
   
    const router=useRouter();
    const {register,handleSubmit,formState:{errors,isSubmitting},control}=useForm<FormType>({
        resolver:zodResolver(schema)
    })
    const submitData= async (data:FormType)=>{
       try {
    const res = await createStartupAction(data);

    if (res.success) {
      toast.success("Startup has been created successfully!");
      router.push(`/startup/${res?.id}`);
    } else {
      toast.error(`Failed: ${res.error}`);
    }
  } catch (error) {
    toast.error(`Unexpected error: ${error}`);
  }
        
        
    }

  return (
    <>
    <form className="max-w-2xl px-5 md:px-0 m-auto my-10" onSubmit={handleSubmit(submitData)}>
       <div className="mb-4">
         <label htmlFor="title" className=" uppercase text-xl font-bold mb-3 block" >Title</label>
        <Input type="text" id='title' {...register('title')} placeholder="Startup Title" className=""/> 
        {errors.title&&<p className="text-red-500 mx-3 ">{errors.title.message}</p>}  
       </div>
       <div className="mb-4">
         <label htmlFor="description" className=" uppercase text-xl font-bold mb-3 block" >description</label>
        <Textarea  id='description' {...register('description')} placeholder="Startup Description" className="input-textarea"/> 
        {errors.description&&<p className="text-red-500 mx-3">{errors.description.message}</p>}  
       </div>
       <div className="mb-4">
         <label htmlFor="category" className=" uppercase text-xl font-bold mb-3 block" >Category</label>
        <Input type="text" id='category' {...register('category')} placeholder="Startup Category (Tech, Health, Education ..)" className=""/> 
        {errors.category&&<p className="text-red-500 mx-3">{errors.category.message}</p>} 
       </div>
        <div className="mb-4">
               <label htmlFor="link" className=" uppercase text-xl font-bold mb-3 block" >Image URL</label>
        <Input type="text" id='link' {...register('link')} placeholder="Startup Image URL" className=""/> 
        {errors.link&&<p className="text-red-500 mx-3">{errors.link.message}</p>} 

        </div>
     
        <div className="" data-color-mode='light'>
        <label htmlFor="link" className=" uppercase text-xl font-bold mb-3 block" >Pitch</label>

<Controller
  name="pitch"
  control={control}
  render={({ field }) => (
    <MDEditor
      value={field.value}
      onChange={field.onChange}
      id="pitch"
      preview="edit"
      height={300}
      style={{ borderRadius: 20, overflow: "hidden", marginBottom: "4px" }}
      textareaProps={{
        placeholder:
          "Briefly describe your idea and what problem it solves",
      }}
      previewOptions={{
        disallowedElements: ["style"],
      }}
    />
  )}
/>
{errors.pitch && (
  <p className="text-red-500 mx-3">{errors.pitch.message}</p>
)}


        </div> 
        
         


        <Button type="submit" disabled={isSubmitting} className="p-7 rounded-full my-5 border-4 border-black text-white w-full text-xl cursor-pointer">
            {!isSubmitting?<>
            
            Create Startup 
        
        <Send className="ml-2 size-6"/>
            </>:<>
            Creating...
           <Spinner className="size-6 ml-2"/> 
            </>}
            
            
        
        </Button>
    </form>
      
    </>
  )
}

export default FormStartup
