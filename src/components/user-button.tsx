// i need a user button which have an image of user rounded and his name

import { FileDownIcon, MoveDownIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const UserButton = () => {
  return (
    <div className='flex justify-center items-center gap-2'>
        <Image 
            src={"/assets/images/profile/christy_resized.avif"}
            alt="user"
            width={24}
            height={24}
            className="rounded-full"
        />
        <span>Christy</span>
        {/* <MoveDownIcon size={20} /> */}
    </div>
  )
}
