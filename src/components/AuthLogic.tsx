"use server";
import { auth } from "@/auth";
import SignOutButton from "./SignOutButton";
import SignInButton from "./SignInButton";
import Link from "next/link";
import Image from "next/image";

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
          <span className="font-bold">Create</span>
        </Link>
        <SignOutButton />
        <Link href={`/user/${session.user?.id}`}><span>{session.user?.name}</span></Link>
      </div>

      {/* <Image src={session.user?.image} alt="profile" width={36} height={36}/> */}
    </>
  );
}
