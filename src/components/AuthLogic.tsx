"use server";
import { auth } from "@/auth";
import SignOutButton from "./SignOutButton";
import SignInButton from "./SignInButton";
import Link from "next/link";
import Image from "next/image";
import { BadgePlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default async function AuthLogic() {
  const session = await auth();

  if (!session) {
    return (
      <>
        <SignInButton />
      </>
    );
  }
  return (
    <>
      <div className="flex justify-center gap-7 text-lg">
        <Link href={"/startup/create"}>
          <span className="font-bold max-sm:hidden ">Create</span>
          <BadgePlus className="size-6 sm:hidden font-bold"/>

        </Link>
        <SignOutButton />
        <Link href={`/user/${session.id}`}>
        <Avatar className="size-10  ">
          <AvatarImage src={`${session.user?.image}`} alt={`${session.user?.name}`}/>
          <AvatarFallback>AV</AvatarFallback>
        </Avatar>
        </Link>
      </div>

      {/* <Image src={session.user?.image} alt="profile" width={36} height={36}/> */}
    </>
  );
}
