import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchNewsById } from './api/fetchNews'
import { useLanguage } from './LanguageContext'

export const NewsDetail = () => {
    const { id } = useParams()
    const { language } = useLanguage()
    const [newsItem, setNewsItem] = useState(null)

    useEffect(() => {
        fetchNewsById(id).then(setNewsItem)
    }, [id])

    if (!newsItem) return <p>Loading...</p>
    const { fields } = newsItem;
  return (
      <div>
          <h2>{fields[`title_${language}`]}</h2>
          <p>{fields[`desc_${language}`]}</p>
    </div>
  )
}
