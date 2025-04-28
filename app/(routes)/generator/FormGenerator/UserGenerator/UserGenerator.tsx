import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { UserGeneratorProps } from "./UserGenerator.types"

import { Label } from "@/components/ui/label"

export const UserGenerator = (props:UserGeneratorProps) => {
    const {setUserTypeSelector}= props
  return (
    <div className="p-4 bg-slate-100 rounded-md shadow-md">
        <p className="mb-4 text-slate-500">¿ Que quieres generar ?</p>
        <RadioGroup
            defaultValue="username"
            onValueChange={(value) =>setUserTypeSelector(value)}

        >
            <div className="flex items-center space-x-2">
                <RadioGroupItem
                    value="username" 
                    id="r2"
                />
                <Label htmlFor="r2">Username</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem
                    value="email"
                    id="r1"
                />
                <Label htmlFor="r1">Email</Label>
            </div>
        </RadioGroup>    
    </div>
  )
}
