import Image from "next/image";
import Link from "next/link";
import AuthLogic from "./AuthLogic";

export default async function Navbar() {
    
  return (
    <header className="py-4 dark:bg-black bg-white px-3 md:px-10 shadow-sm fixed top-0 left-0 right-0 z-10">
      <nav className="flex justify-between items-center xs:text-lg ">
        <Link href={"/"}>
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>
        <AuthLogic/>
      </nav>
    </header>
  );
}
