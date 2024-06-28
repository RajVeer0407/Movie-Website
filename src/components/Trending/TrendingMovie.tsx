import useTrendingList from '@/hooks/useTrendingList'
import React from 'react'
import { MdOutlineExpandMore } from 'react-icons/md';

const TrendingMovie = () => {
    const {trendingData} = useTrendingList("movie");
    console.log(trendingData)
  return (
    <div className='p-3 mb-4'>
        <div className='flex items-center cursor-pointer'>
            <h1 className='text-4xl font-semibold p-5 py-8'>Trending Movie</h1>
            <span className='text-4xl text-gray-500'>
                <MdOutlineExpandMore/>
            </span>
        </div>
    </div>
  )
}

export default TrendingMovie