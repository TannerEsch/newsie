import React, {useContext, useEffect} from 'react'
import { DataContext } from '../App'
import NewsCard from '../components/NewsCard'
import fox from '../assets/fox.png'


const Fox = () => {
  const {data, setData} = useContext(DataContext)
  useEffect(() => {
    console.log('this is the context', data)
  }, [data])
  


  return (
    <div className='bg-dimWhite'>
      <div className=' flex text-center justify-center h-[25vh] w-full bg-secondary text-[5rem]'> 
       <img src={fox} className='h-[45vh] mt-[-2rem] w-[40rem] '></img>
      
      </div>
      <div className='flex gap-8 flex-wrap ml-2 mt-2'>
     {data?.map((d) => <NewsCard article={d.article} createdby={d.createdBy} eyebrow={d.eyebrow} image={d.image} timePosted={d.timePosted} title={d.title} url={d.url}/>)}
      </div>
  
  
  
  </div>
  )
}

export default Fox