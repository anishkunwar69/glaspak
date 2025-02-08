import Navbar from "@/components/Navbar"
import Footer from "@/components/sections/Footer"
import CategoryContent from "./category-content"

export default function(){
    return(
        <>
        <Navbar/>
        <div className="pt-[87px]">
            <CategoryContent/>
        </div>
        
        <Footer/>
        </>
    )
}