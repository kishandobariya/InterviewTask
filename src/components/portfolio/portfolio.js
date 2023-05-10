import React from 'react'

const Portfolio = ({data}) => {
  return (
    <div className='bg-white px-3 py-4 border rounded-lg flex flex-col border-custom-gray'>
        <img className='w-10 h-10' src={data.icon}/>
        <div className='flex mt-5 gap-3 flex-col'>
            <span>{data.title}</span>
            <span className='text-gray-400 text-sm'>{data.value}</span>
        </div>
    </div>
  )
}

export default Portfolio
