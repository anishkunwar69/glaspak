import Navbar from "@/components/Navbar"
import Footer from "@/components/sections/Footer"
import CategoryContent from "./category-content"
import EndContent from "@/components/EndContent"

export default function(){
    return(
        <>
        <Navbar/>
        <div className="pt-[87px]">
            <CategoryContent/>
        </div>
        <div className="pb-[65px] bg-[#EDE5DB]">
            <EndContent showSeparator={true}/>
        </div>
        <Footer/>
        </>
    )
}