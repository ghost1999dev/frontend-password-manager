import DataTableItems from "@/components/Shared/DataTableItems/DataTableItems"
import { db } from "@/lib/db"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function CreditPage() {
    const session = await getServerSession()
    if (!session || !session.user?.email) {
        return redirect("/")
        
    }
    const user = await db.user.findUnique({
        where:{
            email: session.user.email
        },
        include:{
            elements:{
                where:{
                    typeElement:'tarjeta'
                }
            }
        }
    })

    if (!user || !user.elements) {
        return redirect("/")
    }
    
  return (
    <div>
        <h1>List of credit cards</h1>
        <DataTableItems elements={user.elements}/>
      
    </div>
  )
}
