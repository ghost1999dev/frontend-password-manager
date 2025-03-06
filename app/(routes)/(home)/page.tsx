'use client'
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
  const showMessage =()=>{
    toast.success("Operacion exitosa")
  }
  return (
    <div>
      <Button onClick={showMessage }>Show message</Button>
    </div>
  );
}
