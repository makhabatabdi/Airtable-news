import axios from "axios"

const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const TABLE_NAME = "Table 1";


const api = axios.create({
    baseURL: `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`, 
    headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`
    }
});


export const fetchNews = async () => {
    try {
        const response = await api.get()
        return response.data.records;
    } catch (error) {
        console.log("this is error:", error )
        return []
    }
}

export const fetchNewsById = async (id) => {
    try {
        const response = await api.get(`/${id}`)
        return response.data
    } catch (error) {
        console.log("this is error:", error )
        return null
    }
}