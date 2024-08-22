
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {


  return (
    <div>
      <Header />
      <div className='md:flex mt-5'>
        <Blogs />

        <Bookmarks />
      </div>
    </div>
  )
}

export default App
