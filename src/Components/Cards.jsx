import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full'>
      <div className='max-w-screen-lg py-20 mx-auto flex gap-2'>
        <Card width={"basis-1/3"} button={false} para={true}/>
        <Card width={"basis-3/4"} button={true} para={false} hover="true" padding="true"/>
      </div>
    </div>
  )
}

export default Cards
