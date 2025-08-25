import { signOut } from "@/auth"
import { LogOut } from "lucide-react"

export default function SignOutButton() {
  return (
    <>
       <form
      action={async () => {
        "use server"
        await signOut({redirectTo:'/'})
      }}
    >
      <button type="submit" className="text-primary font-bold cursor-pointer">
        
      <span className="max-sm:hidden">Logout</span>
     <LogOut className="size-6 sm:hidden"/> 
      
      </button>
    </form>
    </>
  )
}
