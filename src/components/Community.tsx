import React from 'react'
import Image from 'next/image'

export const Community = () => {
    return (
        <div className='h-screen flex justify-between items-center px-[5rem]'>
            <div className='w-1/3 flex flex-col gap-8'>
                <h2 className='heading leading-none'>Community<br/> Benefits</h2>
                <p className='text'>
                    Holders of AQUA token and users of the Aqua Lend product will receive token benefits. Swap traders, LP providers, stable coin issuers, and stakers.
                </p>
            </div>
            <Image
                src="/community-benefits.svg"
                alt="Community Benefits"
                height={100}
                width={100}
                className='w-[20.125rem] h-[20.25rem] mr-[9rem]'
            />
        </div>
    )
}
