import style from './App.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Nav } from './components/Nav/Nav';

import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage/Homepage';
import { ArticlePage } from './pages/ArticlePage/ArticlePage';

function App() {


  return (
    <>
      <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          {/* :category det er en måde at få fat i det på, ved brug af useParams senere */}
          <Route path='/kategorier/:category' element={<HomePage/>}></Route>
          <Route path='/nyheder/:articleId' element={<ArticlePage/>}></Route>
        </Routes>
         <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
