import React from 'react'
import { FormEditProfile } from './components/FormEditProfile'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'
export default async function ProfilePage() {
  const session = await getServerSession()
  if(!session || !session.user?.email){
    return redirect("/")
  }
  const user = await db.user.findUnique({
    where:{
      email:session.user.email
    }
  })
  if(!user){
    return redirect("/")
  }
  /**
   * profile image
   * email
   * name
   * username
   */
  return (
    <div>
      <h1 className='text-xl'>Account Details</h1>
      <FormEditProfile user={user}/>
    </div>
  )
  

}
