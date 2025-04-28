"use client"

import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";
import { Copy, Shuffle } from "lucide-react";
import { useState } from "react";
import PasswordGenerator from "./PasswordGenerator/PasswordGenerator";
import { UserGenerator } from "./UserGenerator";
export default function FormGenerator() {
  const [itemValueInput, setItemValueInput] = useState("")
  const [selectedValue, setSelectedValue] = useState<"user" | "password" | string>("password")
  const [lenghtPassword, setLenghtPassword] = useState(11)
  const [isMayusSelected, setIsMayusSelected] = useState(true)
  const [isMinusSelected, setIsMinusSelected] = useState(true)
  const [isSpecialCharacter, setIsSpecialCharacter] = useState(true)
  const [isNumberSelected, setIsNumberSelected] = useState(true)
  const [userTypeSelector, setUserTypeSelector] = useState("username")
  //NUMERO DE GESTION2642116
  return (
    <div className="mt-5 max-w-2xl">
        <div className="relative w-full">
            <Input 
              placeholder="input..." 
              type="text"
              onChange={()=>{}}

            />
            <Copy className="absolute top-3 right-12 cursor-pointer h-5 w-5"/>
            <Shuffle className="absolute top-3 right-2 cursor-pointer h-5 w-5"/>
        </div>
        <div className="bg-slate-100 rounded-md shadow-md my-4 p-4">
          <p className="mb-4 text-slate-500">¿Que quieres generar?</p>
          <RadioGroup
            defaultValue="password"
            onValueChange={(value)=>{setSelectedValue(value)}}
          >
            <div className="flex item-center space-x-2">
              <RadioGroupItem 
                value="password" 
                id="r1"
              />
              <Label htmlFor="r1">Password</Label>
            </div>
            <div className="flex item-center space-x-2">
              <RadioGroupItem value="user" id="r2"/>
              <Label htmlFor="r2">Usuario</Label>
            </div>

          </RadioGroup>
        </div>
        {selectedValue === "password" ?
         <PasswordGenerator
           lenghtPassword={lenghtPassword}
           isMayusSelected={isMayusSelected}
           isMinusSelected={isMinusSelected}
           isNumberSelected={isNumberSelected}
           isSpecialCharacters={isSpecialCharacter}
           setIsMayusSelected={setIsMayusSelected}
           setIsMinusSelected={setIsMinusSelected}
           setIsNumberSelected={setIsNumberSelected}
           setIsSpecialCharecters={setIsSpecialCharacter}
           setLengthPassword={setLenghtPassword}

         />:<UserGenerator setUserTypeSelector={setUserTypeSelector}/>}
    </div>
  )
}
