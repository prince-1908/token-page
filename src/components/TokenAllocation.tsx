import Image from "next/image"

export const TokenAllocation = () => {
  return (
    <div className='px-[6.25rem] h-screen flex justify-center items-center'>
        <Image
            src="/token-allocation.svg"
            alt="token"
            height={100}
            width={100}
            className="h-[41.75rem] w-[73.75rem]"
        />
    </div>
  )
}
