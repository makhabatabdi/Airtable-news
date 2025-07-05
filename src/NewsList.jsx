import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchNews } from './api/fetchNews'
import { useLanguage } from './LanguageContext'

export const NewsList = () => {
    const { language } = useLanguage()
    const [news, setNews] = useState([])
    const navigate = useNavigate()

    const getTitle = (item) => item.fields[`title_${language}`] || "-----"

    useEffect(() => {
        fetchNews().then((records) =>setNews(records))
    }, [])

    return (
      <div>
      <h1>News</h1>
      {news.map((item) => (
            <div onClick={()=>navigate(`/news/${item.id}`)} key={item.id} style={{ marginBottom: "15px", cursor:"pointer" }}>
              <h2>{getTitle(item)}</h2>
          </div>
      ))}
     </div>
  )
}
