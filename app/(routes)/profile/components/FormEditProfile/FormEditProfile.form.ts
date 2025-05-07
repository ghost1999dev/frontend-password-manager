
import {z  } from "zod";
export const formSchema = z.object({
    profile: z.string().min(2).max(50),
    email:z.string().min(2).max(50),
    name:z.string().min(2).max(50),
    username:z.string().min(2).max(50)
}) 