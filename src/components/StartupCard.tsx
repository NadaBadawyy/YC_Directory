import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { formatDate } from "@/lib/utils";
import { StartupCardType } from "@/lib/types";

export default function StartupCard({ post }: { post: StartupCardType }) {
  const {
    _id,
    _createdAt,
    views,
    author,
    image,
    title,
    description,
    category,
  } = post;
  return (
    <div className=" p-5 border-s-4 border-t-4 border-b-8 border-e-8 border-black rounded-4xl hover:border-primary hover:bg-primary-100">
      <div className="flex justify-between items-center">
        <p>{formatDate(_createdAt)}</p>
        <p className=" flex gap-2">
          <EyeIcon className="text-primary" /> {views}
        </p>
      </div>
      <div className="flex mt-5 justify-between items-center">
        <div className=" ">
          <Link href={`/user/${author?._id}`}>
            <p className="font-medium ">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <p className="font-semibold text-2xl my-1 line-clamp-1">{title}</p>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            src={`${author?.image}`}
            alt={`${author?.name}`}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <div className="my-2">
          <p className="line-clamp-2 break-all">{description}</p>
          <img
            src={`${image}`}
          
            alt="image"
            
            className="w-full h-[164px] rounded-[10px] object-cover my-2"
          />
        </div>
       
      </Link> 
      <div className="flex justify-between items-center mt-5">
          <Link href={`/?query=${category?.toLowerCase()}`}>
            <p className="font-medium">{category}</p>
          </Link>
          <Link href={`/user/${author?._id}`}>
          <Button className="rounded-3xl bg-black cursor-pointer text-white text-md px-5"> Details</Button>
          </Link>
        </div> 
    </div>
  );
}
