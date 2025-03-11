'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from "./FormAddElement.form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
export function FormAddElement() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      typeElement:"",
      isFavourite:false,
      name:"",
      directory:"",
      username:"",
      password:"",
      urlWebsite:"",
      notes:"",
      userId:"Prueba"
      
    },
  })
  const onSubmit= (values: z.infer<typeof formSchema>)=>{
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
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
                <SelectTrigger>
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
          name="typeElement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What type do you want ?</FormLabel>
              <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              >
              <FormControl>
                <SelectTrigger>
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
      </form>
    </Form>
  )
}
