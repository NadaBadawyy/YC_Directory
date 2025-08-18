import { signOut } from "@/auth"

export default function SignOutButton() {
  return (
    <>
       <form
      action={async () => {
        "use server"
        await signOut({redirectTo:'/'})
      }}
    >
      <button type="submit" className="text-primary font-bold cursor-pointer">Logout</button>
    </form>
    </>
  )
}
