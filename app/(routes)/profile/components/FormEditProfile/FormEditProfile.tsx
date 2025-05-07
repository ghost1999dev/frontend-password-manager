"use client"

import { FormEditProps } from "./FormEditProfile.types";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { formSchema } from "./FormEditProfile.form";
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
import Image from 'next/image';
import { useState } from "react";
import { UploadButton } from "@/lib/uploadthing";
import { Upload } from "lucide-react";

export function FormEditProfile(props:FormEditProps) {
  const [showUploadedImage, setUploadedImage] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      profile: "",
      email:"",
      name:"",
      username:""
    }
  })
  const onSubmit =async(values: z.infer<typeof formSchema>)=>{
    console.log(values);
  }
  const{user}= props
  return (
    <div className="max-w-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="profile"
            render={({field})=>(
              <FormItem>
                <FormLabel>Profile image</FormLabel>
                <FormControl>
                  <div className="flex gap-2 items-center">
                    <Image 
                      alt="Image profile"
                      src={user.profileImage ? user.profileImage: "/images/profile-user.jpg"}
                      width={60}
                      height={60}
                      className="rounded-all"
                    />
                    <div className="w-[200px]">
                    {showUploadedImage ? (
                      <UploadButton
                        endpoint="imageUploader"
                        className="rounded-md text-slate-500 bg-state-200 mt-5"
                        {...field}
                        onClientUploadComplete={(res)=>{
                          form.setValue("profile", res?.[0].url)
                          setUploadedImage(true)
                        }}
                        onUploadError={(error:Error)=>{
                          console.log(error);
                          
                        }}
                      />
                    )

                    :<Button
                      onClick={()=> setUploadedImage((prev)=> !prev)}
                    >
                      <Upload className="mr-2 w-4 h-4"/> Change photo
                     </Button>
                    }
                    </div>
                    
                  </div>
                </FormControl>
              </FormItem>
              
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({field})=>(
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="userexample@gmail.com" {...field}/>
                </FormControl>
              </FormItem>
              
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({field})=>(
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="examplename" {...field}/>
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
          
          <Button type="submit">Submit</Button>
        </form>

      </Form>
    </div>
  )
}
