'use client'
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import HeaderMain from './components/HeaderMain/HeaderMain';

export default function Home() {
  const showMessage =()=>{
    toast.success("Operacion exitosa")
  }
  return (
    <div>
      <HeaderMain/>
    </div>
  );
}
