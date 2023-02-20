import React, {useState, useContext, useEffect} from 'react'
import { DataContext } from '../App'
import NewsCard from '../components/NewsCard'
import tg from '../assets/tg.png'
import tgblk from '../assets/tgblkbg.png'



const Tg = () => {
  const {tgData, setTgData} = useContext(DataContext)
  const [postsPerPage, setPostsPerPage] = useState(50)
  const [currentRender, setCurrentRender] = useState([])
  
  useEffect(() => {
    setCurrentRender(tgData.slice(0, postsPerPage))

    window.addEventListener('scroll', (e) =>{
      const yAxis = e.target.documentElement.scrollTop
      const docHeight = e.target.documentElement.scrollHeight
      if (yAxis > docHeight - 2000) {
        setPostsPerPage(postsPerPage + 50)
      } else {
        console.log("not there yet")
      }
  
    })
  
  }, [tgData, postsPerPage])
  


  return (
    <div>
      <div id="foxheader" className='flex text-center justify-center h-[25vh] w-full bg-dimWhite text-[5rem]'> 
       <img src={tg} className='h-[45vh] mt-[-4rem] w-[40rem] '></img>
      </div>
      <div className='flex gap-[5rem] ml-[4rem] flex-wrap mt-4'>
     {currentRender?.map((d) => <NewsCard article={d.article} dateNow={d.dateNow} date={d.date} createdby={d.createdby} eyebrow={d.eyebrow} image={tgblk} timePosted={d.timePosted} title={d.title} url={d.url}/>)}
      </div>
  
  
  
  </div>
  )
}

export default Tg