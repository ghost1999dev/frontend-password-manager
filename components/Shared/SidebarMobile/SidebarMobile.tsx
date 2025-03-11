'use client'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { SidebarRoutes } from "../SidebarRoutes"
export  function SidebarMobile() {
  return (
    <Sheet>
  <SheetTrigger asChild>

    <Button>
        <Menu/>
    </Button>
  </SheetTrigger>
  <SheetContent side="left" className="bg-blue-800 text-white">
    <SheetHeader className="text-left">
      <SheetTitle className="text-white">Office Services</SheetTitle>
      <SheetDescription className="text-slate-100">
        Create the 
      </SheetDescription>
    </SheetHeader>
    <SidebarRoutes/>
  </SheetContent>
</Sheet>
  )
}
