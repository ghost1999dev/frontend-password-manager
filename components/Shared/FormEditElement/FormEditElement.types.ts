import { Element } from "@prisma/client"
import { Session } from "next-auth"

export type FormEditElementProps ={
    dataElement:Element,
    session: Session
}