import { formateDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function StartupCard({ post }: { post: any }) {
  const {
    _id,
    _createdAt,
    views,
    author: { _id: authorId, name },
    image,
    title,
    description,
    category,
  } = post;
  return (
    <div className=" p-5 border-s-4 border-t-4 border-b-8 border-e-8 border-black rounded-4xl hover:border-primary hover:bg-primary-100">
      <div className="flex justify-between items-center">
        <p>{formateDate(_createdAt)}</p>
        <p className=" flex gap-2">
          <EyeIcon className="text-primary" /> {views}
        </p>
      </div>
      <div className="flex mt-5 justify-between items-center">
        <div className=" ">
          <Link href={`/user/${authorId}`}>
            <p className="font-medium ">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <p className="font-semibold text-2xl my-1">{title}</p>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="placehgolder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <div className="my-2">
          <p>{description}</p>
          <Image
            src={image}
            width={400}
            alt="image"
            height={400}
            className="rounded-2xl mt-2"
          />
        </div>
       
      </Link> 
      <div className="flex justify-between items-center mt-5">
          <Link href={`/?query=${category.toLowerCase()}`}>
            <p className="font-medium">{category}</p>
          </Link>
          <Link href={`/user/${authorId}`}>
          <Button className="rounded-3xl bg-black cursor-pointer text-white text-md px-5"> Details</Button>
          </Link>
        </div> 
    </div>
  );
}
