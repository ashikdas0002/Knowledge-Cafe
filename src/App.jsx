import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [read, setRead] = useState(0);
  const handleMarkAsRead = (id, time) => {
    setRead(read + time);
    // remove form bookmarks 
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks);


  }
  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);


  }

  return (
    <div>
      <Header />
      <div className='md:flex justify-between mt-5'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} />

        <Bookmarks bookmarks={bookmarks} read={read} />
      </div>
    </div>
  )
}

export default App
