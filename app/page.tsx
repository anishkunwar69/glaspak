import AboutUs2 from "@/components/sections/AboutUs2";
import ContactUs from "@/components/sections/ContactUs";
import Footer from "@/components/sections/Footer";
import Hero2 from "@/components/sections/Hero2";
import OurServices2 from "@/components/sections/OurServices2";
import OurStrengths from "@/components/sections/OurStrengths";
import OurSupport from "@/components/sections/OurSupport";
import ProcessFlow from "@/components/sections/ProcessFlow";
import ProductsCategory from "@/components/sections/ProductsCategory";
import Tests from "@/components/sections/Tests";
import WhyGlass from "@/components/sections/WhyGlass";

const Home = () => {
  return (
    <>
      <Hero2/>
      {/* <AboutUs2/> */}
      <WhyGlass/>
      <ProductsCategory/>
      <OurServices2/>
      {/* <OurStrengths/> */}
      <OurSupport/>
      {/* <Tests/> */}
      {/* <ProcessFlow/> */}
      {/* <ContactUs/> */}
      <Footer/>
    </>
  )
}
Home.displayName = 'Home';
export default Home;