import { useLanguage } from "./LanguageContext"


export default function Navbar() {
    const { language, setLanguage } = useLanguage()
    
    return (
        <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <button onClick={() => setLanguage("rus")}>Русский</button>
            <button onClick={() => setLanguage("ky")}>Кыргызча</button>
             <button onClick={()=>setLanguage("eng")}>English</button>
        </nav>
    )

}