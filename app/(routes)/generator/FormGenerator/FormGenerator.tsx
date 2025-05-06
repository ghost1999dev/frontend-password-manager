"use client";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";
import { Copy, Shuffle } from "lucide-react";
import { useState, useEffect } from "react";
import PasswordGenerator from "./PasswordGenerator/PasswordGenerator";
import { UserGenerator } from "./UserGenerator";
import { generateCustomPassword } from "@/lib/generateCustomPassword";
import { copyClipboard } from "@/lib/copyClipboard";
import { generateRandomUsername } from "@/lib/generateRandomUsername";
import { generatedCustomEmail } from '../../../../lib/generatedCustomEmail';
export default function FormGenerator() {
  const [itemValueInput, setItemValueInput] = useState("");
  const [selectedValue, setSelectedValue] = useState<
    "user" | "password" | string
  >("password");
  const [lenghtPassword, setLenghtPassword] = useState(11);
  const [isMayusSelected, setIsMayusSelected] = useState(true);
  const [isMinusSelected, setIsMinusSelected] = useState(true);
  const [isSpecialCharacter, setIsSpecialCharacter] = useState(true);
  const [isNumberSelected, setIsNumberSelected] = useState(true);
  const [userTypeSelector, setUserTypeSelector] = useState("username");
  //NUMERO DE GESTION2642116
  //1- Memoria de labores
  //2-Proyecto ambiental
  //3-Constancia de ejemplar
  //4- Reporte de horas
  useEffect(() => {
    if (selectedValue === "user") {
      const newUserGenerated = generateRandomUsername();
      setItemValueInput(newUserGenerated);
    }
    if(userTypeSelector === "email"){
      const email = generatedCustomEmail()
      setItemValueInput(email)
    }
  }, [selectedValue,userTypeSelector]);

  useEffect(() => {
    const newPassword = generateCustomPassword(
      lenghtPassword,
      isMayusSelected,
      isMinusSelected,
      isNumberSelected,
      isSpecialCharacter
    );
    setItemValueInput(newPassword);
  }, [
    lenghtPassword,
    isMayusSelected,
    isMinusSelected,
    isNumberSelected,
    isSpecialCharacter,
  ]);
  const handleShift = () => {
    if (selectedValue === "password") {
      const password = generateCustomPassword(
        lenghtPassword,
        isMayusSelected,
        isMinusSelected,
        isNumberSelected,
        isSpecialCharacter
      );
      setItemValueInput(password);
    } else if (selectedValue === "user") {
      console.log(userTypeSelector);
      
      if (userTypeSelector === "username") {
        const username = generateRandomUsername()
        setItemValueInput(username)
      }else{
        const email = generatedCustomEmail()
        setItemValueInput(email);
      }
    }
  };
  return (
    <div className="mt-5 max-w-2xl">
      <div className="relative w-full">
        <Input
          placeholder="input..."
          type="text"
          value={itemValueInput}
          onChange={() => {}}
        />
        <Copy
          className="absolute top-3 right-12 cursor-pointer h-5 w-5"
          onClick={() => copyClipboard(itemValueInput)}
        />
        <Shuffle
          className="absolute top-3 right-2 cursor-pointer h-5 w-5"
          onClick={() => {
            handleShift();
          }}
        />
      </div>
      <div className="bg-slate-100 rounded-md shadow-md my-4 p-4">
        <p className="mb-4 text-slate-500">¿Que quieres generar?</p>
        <RadioGroup
          defaultValue="password"
          onValueChange={(value) => {
            setSelectedValue(value);
          }}
        >
          <div className="flex item-center space-x-2">
            <RadioGroupItem value="password" id="r1" />
            <Label htmlFor="r1">Password</Label>
          </div>
          <div className="flex item-center space-x-2">
            <RadioGroupItem value="user" id="r2" />
            <Label htmlFor="r2">Usuario</Label>
          </div>
        </RadioGroup>
      </div>
      {selectedValue === "password" ? (
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
        />
      ) : (
        <UserGenerator setUserTypeSelector={setUserTypeSelector} />
      )}
    </div>
  );
}
