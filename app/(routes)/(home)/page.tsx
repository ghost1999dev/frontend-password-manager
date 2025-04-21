
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import HeaderMain from './components/HeaderMain/HeaderMain';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { TableData } from "./components/TableData/TableData";

export default  async function Home() {
  const session = await getServerSession()
  console.log("Thi is information from session " + JSON.stringify(session?.user?.email));
  
  if(!session || !session.user?.email){
    return redirect("/")
  }
  const user = await db.user.findUnique({
    where:{
      email: session.user?.email
    },
    include:{
      elements:{
        orderBy:{
          createdAt:"desc"
        }
      }
    }
  })  
  console.log("This are elements from " + JSON.stringify(user));
  
  if(!user || !user.elements){
    return redirect("/")
  }
  return (
    <div>
      <HeaderMain userId={user?.id}/>
      <TableData elements={user.elements}/>
    </div>
  );
}
