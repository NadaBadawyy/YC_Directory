import { signIn } from "@/auth"

export default function SignInButton() {
  return (
    <>
       <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button type="submit" className="text-primary font-bold cursor-pointer ">Signin</button>
    </form>
    </>
  )
}
