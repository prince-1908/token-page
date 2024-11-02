import React from 'react'
import Image from 'next/image'

export const Main = () => {
    return (
        <div className='grow relative px-4'>
            <Image 
                src="/gradient-ball.svg"
                alt=''
                height={1000}
                width={1000}
                className='absolute top-1/2 left-1/2 translate-x-[-42%] translate-y-[-47%] z-[-5] w-[80vw] md:w-[500px] lg:w-[750px] xl:w-[1000px] h-auto'
            />

            <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-128%] flex justify-center items-center flex-col gap-8 w-full'>
                <h1 className='xl:text-[4.5rem] xl:tracking-[4rem] xl:ml-[2rem] font-archivo'>RADIANT NODE</h1>
            </div>
        </div>
    )
}