import { Checkbox } from "@/components/ui/checkbox";
import { PasswordGeneratorProps } from "./PasswordGenerator.types";

export default function PasswordGenerator(props:PasswordGeneratorProps) {
  const{
    isMayusSelected,
    isMinusSelected,
    isNumberSelected,
    isSpecialCharacters,
    lenghtPassword,
    setIsMayusSelected,
    setIsMinusSelected,
    setIsNumberSelected,
    setIsSpecialCharecters,
    setLengthPassword
  }=props
  const handleRangeEvent=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setLengthPassword(Number(event.target.value))
  }
  return (
    <div>
      <>
        <div className="w-full p-4 bg-slate-100 rounded-md shadow-md flex gap-2 items-center">
          <label className="block text-sm font-medium text-gray-700 min-w-32">
            Longitud: {lenghtPassword}
          </label>
          <input 
            type="range" 
            id="range" 
            min="8" 
            max="50" 
            className="w-full bg-gray-200 rounded-md appearence-none cursor-pointer"
            value={lenghtPassword}
            onChange={handleRangeEvent}
           />

        </div>
        <div>
          <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
            <Checkbox
              id="mayus"
              checked={isMayusSelected}
              onCheckedChange={()=>setIsMayusSelected((prev)=>!prev)}
            />
            <label 
              htmlFor="mayus"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed perr-disabled:opacity-70"
            >Mayus A-Z</label>
          </div>
          <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
            <Checkbox
              id="minus"
              checked={isMinusSelected}
              onCheckedChange={()=>{setIsMinusSelected((prev)=> !prev)}}
            />
            <label 
              htmlFor="minus"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed perr-disabled:opacity-70"
            >Minusculas A-Z</label>
          </div>
          <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
            <Checkbox
              id="numbers"
              checked={isNumberSelected}
              onCheckedChange={()=>{setIsNumberSelected((prev)=> !prev)}}
            />
            <label 
              htmlFor="numbers"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed perr-disabled:opacity-70"
            >Numeros 1-9</label>
          </div>
          <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
            <Checkbox
              id="charact"
              checked={isSpecialCharacters}
              onCheckedChange={()=>{setIsSpecialCharecters((prev)=> !prev)}}
            />
            <label 
              htmlFor="charact"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed perr-disabled:opacity-70"
            >Caracteres "#$%"#$</label>
          </div>
        </div>
      </>
      
    </div>
  )
}
