
import './App.css'
import Header from './header/header'
import Blogs from './blogComponants/Blogs'
import Bookmarks from './blogComponants/bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setTime] = useState(0)

  const handleAddToBookMark = blog =>{
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark)
  }

  const handleReadingTime =(id, time)=>{
    const newRemainingTime = readingTime + time;
    setTime(newRemainingTime)

    // const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    // setBookmarks(remainingBookmarks);

  }


  return (
    <>

      <Header></Header>

      <div className='lg:flex w-[80%] m-auto'>

        <Blogs handleAddToBookMark={handleAddToBookMark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
