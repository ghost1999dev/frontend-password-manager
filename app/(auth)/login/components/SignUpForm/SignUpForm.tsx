"use client"
 
import { z } from "zod"
  
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import Email from "next-auth/providers/email"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
const formSchema = z.object({
  email: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50)
})
export const SignUpForm = () => {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email:"",
      username: "",
      password:""
    },
  })
 
  // 2. Define a submit handler.
  const onSubmit = async(values: z.infer<typeof formSchema>) =>{
    const response = await fetch("/api/auth/register",{
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        password: values.password,
        username: values.username
      })
    })

    if(response.status === 200){
      toast.success('Registered succesfully')
      router.push("/")
      
    }else{
      toast.error("An unexpected error ocurred. Please try again")
    }
  }
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
           <FormField 
             control={form.control}
             name="email"
             render={({field})=>(
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="email@email.com" {...field}/>
                    </FormControl>
                </FormItem>
             )}
           />
           <FormField 
             control={form.control}
             name="username"
             render={({field})=>(
                <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <Input placeholder="username" {...field}/>
                    </FormControl>
                </FormItem>
             )}
           />
           <FormField 
             control={form.control}
             name="password"
             render={({field})=>(
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="**********" type="password" {...field}/>
                    </FormControl>
                </FormItem>
             )}
           />
           <Button type="submit" className="w-full">Register</Button>
        </form>
    </Form>
  )
}
