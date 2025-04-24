'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { FormEditElementProps } from './FormEditElement.types';
import { formSchema } from "./FormEditElement.form";
import axios from "axios";
import { toast } from "sonner";
import { generatedPassword } from "@/lib/generatedPassword";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SelectContent, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Copy, Earth, Eye, Shuffle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { copyClipboard } from "@/lib/copyClipboard";

export function FormEditElement(props:FormEditElementProps) { 
  const {session}=props 
  if(!session || !session.user?.email){
    return redirect("/")
  }
  const [showPassword, setShowPassword] = useState(false) 
  const {dataElement}=props
  const router = useRouter()
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        typeElement:dataElement.typeElement,
        isFavourite:dataElement.isFavourite ?? "",
        name:dataElement.name ?? "",
        directory:dataElement.directory ?? "",
        username:dataElement.username ?? "",
        password:dataElement.password ?? "",
        urlWebsite:dataElement.urlWebsite ?? "",
        notes:dataElement.notes ?? "",
        userId:dataElement.userId ?? ""
      },
    })
    const onSubmit= async(values: z.infer<typeof formSchema>)=>{
        try {
          await axios.patch(`/api/items/${dataElement.id}`,values)
          toast.success("Item edited")
          router.push("/")
        } catch (error) {
          toast.error("Something went wrong")
        }
    }
    const generatePassword=()=>{
        const password = generatedPassword()
        form.setValue("password", password)
    }
      
    const updateUrl=()=>{
      form.setValue("urlWebsite",window.location.href)
    }
  return (
    <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className="md:grid-cols-2 gap-y-2 gap-x-4 grid"
          >
            <FormField
              control={form.control}
              name="typeElement"
              render={({ field }) => (
                <FormItem >
                  <FormLabel>Que tipo de elementos necesitas</FormLabel>
                  <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  >
                  <FormControl>
                    <SelectTrigger className="w-[355-px]">
                      <SelectValue placeholder="Select a directory for your password"/>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="inicio de sesion">Inicio de sesion</SelectItem>
                    <SelectItem value="tarjeta">Tarjeta</SelectItem>
                    <SelectItem value="identidad">Identidad</SelectItem>
                  </SelectContent>
                  </Select>
                  
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isFavourite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quieres seleccionar la contraseña como favorita</FormLabel>
                  <div className="flex flex-row items-start space-x-3 space-y-0 p-4">
                  <FormControl>
                    <Checkbox
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Marcar como favorito</FormLabel>
                  </div>
                  </div>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input {...field}/>
    
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />   
            <FormField
              control={form.control}
              name="directory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Directory</FormLabel>
                  <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  >
                  <FormControl>
                    <SelectTrigger className="w-[355-px]">
                      <SelectValue placeholder="Choose the directory"/>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="inicio de sesion">Inicio de sesion</SelectItem>
                    <SelectItem value="tarjeta">Tarjeta</SelectItem>
                    <SelectItem value="identidad">Identidad</SelectItem>
                  </SelectContent>
                  </Select>
                  
                </FormItem>
              )}
            />   
             <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input {...field}/>
                      <Copy
                        className="absolute top-3 right-4 cursor-pointer"
                        size={18}
                        onClick={()=>{
                          copyClipboard(field.value)
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="urlWebsite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL Website</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input {...field}/>
                      <Earth
                        className="absolute top-3 right-2 cursor-pointer"
                        size={18}
                        onClick={updateUrl}
                      />
                    </div>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />  
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex justify-between">
                    Password
                    <Shuffle
                      onClick={generatePassword}
                      className="cursor-pointer"
                      size={15}
                    />
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                      type={showPassword ? "text":"password"}
                      {...field}/>
                      <Eye                       
                        className="absolute top-3 right-10"
                        size={15}
                        onClick={()=>{
                          setShowPassword(!showPassword)
                        }}
                      />
                      <Copy
                        className="absolute top-3 right-3 cursor-pointer"
                        size={15}
                        onClick={()=>{
                          copyClipboard(field.value)
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes</FormLabel>
                  <FormControl>
                    <Textarea {...field}/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>  
          </form>
        </Form>
  )
}
