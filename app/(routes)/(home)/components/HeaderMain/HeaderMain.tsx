'use client'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { dataHeaderMain } from './HeaderMain.data'
import { FormAddElement } from '../FormAddElement'

export default function HeaderMain() {
    const [typeElement, setTypeElement] = useState<"password" | "folder" | "">()
    const [openDialog, setopenDialog] = useState(false)
    const [openDropDown, setopenDropDown] = useState(false)    
  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-xl md:text-3xl font-semibold'>Dashboard Generator</h1>
      <Dialog>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>
                    Nueva <ChevronDown/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    <DialogTrigger asChild>
                        <div className='flex flex-col'>
                            {dataHeaderMain.map(({icon:Icon, typeElement, text})=>(
                                <Button
                                    key={typeElement}
                                    className='jsutify-start'
                                    variant="ghost"
                                    onClick={()=>{
                                        setTypeElement(typeElement)
                                        
                                    }}
                                >
                                    <Icon className='w-4 h-4 mr-2'/>
                                    {text}

                                </Button>
                            ))}
                        </div>
                    </DialogTrigger>
                </DropdownMenuLabel>
            </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent className='sm:max-w-[825px]'>
            <DialogHeader>
                <DialogTitle>Nuevo elemento</DialogTitle>
            </DialogHeader>
            {typeElement === "password" && <FormAddElement/>}
        </DialogContent>
      </Dialog>
    </div>
  )
}
