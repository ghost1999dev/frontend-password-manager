import { getServerSession } from 'next-auth'
import React from 'react'
import Email from 'next-auth/providers/email';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { FormEditElement } from '@/components/Shared/FormEditElement';
type Props={
  params:{
    elementId:string
  }
}
export default async function Page({params}:Props) {
  const element = await db.element.findUnique({
    where:{
      id:params.elementId
    }
  })
  if (!element) {
    return redirect("/")
  }
  return (
    <div>
      <FormEditElement dataElement={element}/>
    </div>
  )
}
