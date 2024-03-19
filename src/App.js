import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateBlog from './CreateBlog'
function App() {
  const title = 'Welcome to the New Blog'
  const likes = 50
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/createBlog" Component={CreateBlog} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
