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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"
import { toast } from "sonner"
const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50)
})

export const LoginForm = () => {
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          password: ""
        },
    })
    const onSubmit= async(values: z.infer<typeof formSchema>)=> {
        const response = await signIn(
            "credentials",{
              email: values.username,
              password: values.password,
              redirect:false
            }
        )

        if(response?.status === 200){
            toast.success('Login successfull')
            router.push("/")
        }else{
            toast.error("An unexpected error ocurred. Please try again")
        }
      }
    return (
        <Form {...form}>
            <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="w-full mt-5 space-y-3 text-black">
                <FormField
                    control={form.control}
                    name="username"
                    render={({field})=>(
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="email" {...field}/>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    
                    render={({field})=>(
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="password" type="password" {...field}/>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full">Submit</Button>
                
            </form>
        </Form>
    )
}
