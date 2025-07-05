import './App.css'
import { LanguageProvider } from './LanguageContext'
import Navbar from './Navbar'
import { NewsList } from './NewsList'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { NewsDetail } from './NewsDetail'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<NewsList />} />
         <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
        </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
