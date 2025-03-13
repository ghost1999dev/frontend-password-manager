import { toast } from "sonner"

export const copyClipboard=(value:string)=>{
    navigator.clipboard.writeText(value)
    toast.success("Copied to clipboard ")
}