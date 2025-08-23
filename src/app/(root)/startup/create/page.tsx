import { auth } from "@/auth"
import FormStartup from "@/components/FormStartup"
import { redirect } from "next/navigation"

async function  page() {
    const session=await auth()
    if(!session) redirect('/');
  return (
    <section>
     <div className="pattern py-10 xl:py-12 pink-container">
        <div className="header mt-20  ">
          <p>
           Submit Your Startup
          </p>
        </div>
        
        </div> 
    <FormStartup/>
    </section>
  )
}

export default page
