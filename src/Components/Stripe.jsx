import React from 'react'

const Stripe = ({text,number}) => {
  return (
    <div className='text-white w-[16.66%] px-6 py-3 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-700 flex justify-between items-center'>
        <span className='text-xs'>{text}</span>
        <span className='font-semibold'>{number}</span>
    </div>
  )
}

export default Stripe
