'use client'
import { deleteSubAccount, getSubaccountDetails, saveActivityLogsNotification } from '@/lib/queries'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    subaccountId: string
}

const DeleteButton = ({subaccountId}: Props) => {
    const router = useRouter()
  return (
   <div 
    onClick={async () => {
        const response = await getSubaccountDetails(subaccountId)
        await saveActivityLogsNotification({agencyId:undefined, description:`Deleted a subaccount | ${response?.name}`,
        subaccountId,})
        await deleteSubAccount(subaccountId)
        router.refresh()
    }}
    ></div>
  )
}

export default DeleteButton