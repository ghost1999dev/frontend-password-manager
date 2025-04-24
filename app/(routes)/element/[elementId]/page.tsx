import { getServerSession } from 'next-auth'
import React from 'react'
import Email from 'next-auth/providers/email';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { FormEditElement } from '@/components/Shared/FormEditElement';
export default async function ElementPage({params}:{params:{elementId:string}}) {
  const {elementId}= await Promise.resolve(params)
  const session = await getServerSession()
  if(!session || !session.user?.email){
    return redirect("/")
  }
  const element = await db.element.findUnique({
    where:{
      id:elementId
    }
  })
  if (!element) {
    return redirect("/")
  }
  return (
    <div>
      <FormEditElement dataElement={element} session={session}/>
    </div>
  )
}
