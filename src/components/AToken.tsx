import React from 'react'
import Image from 'next/image'

export const AToken = () => {
  return (
    <div className='h-screen px-[5rem] flex justify-center items-center '>
        <Image
            src="/a-token.svg"
            alt=''
            height={100}
            width={100}
            className='w-[34.25rem] h-[28.5rem] '
        />
        <div className='px-[6.375rem] w-1/2'>
            <h2 className='heading'>A-TOKEN</h2>
            <p className='text'>Aqua Protocol allows users to supply digital assets onto the platform to either swap, lend, mint, or borrow assets. When users supply a digitial asset to the platform, users will receive an A-Token, a representative token for users to redeem underlying collateral. </p>
        </div>
    </div>
  )
}
