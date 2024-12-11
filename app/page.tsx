import Hero from "@/components/sections/Hero";
import OurServices from "@/components/sections/OurServices";
import OurProducts from "@/components/sections/OurProducts";
import Footer from "@/components/sections/Footer";
import ContactUs from "@/components/sections/ContactUs";
import OurSupport from "@/components/sections/OurSupport";
import AboutUs2 from "@/components/sections/AboutUs2";
import OurStrengths from "@/components/sections/OurStrengths";
import ProcessFlow from "@/components/sections/ProcessFlow";
import Tests from "@/components/sections/Tests";
import ManufacturingProcess from "@/components/sections/ManufacturingProcess";

const Home = () => {
  return (
    <>
      {/* 1. Attention Grabber */}
      <Hero/>
      <AboutUs2/>
      <OurServices/>
      <OurStrengths/>

      {/* 2. Quick Value Proposition */}
      <OurSupport/>

      {/* 3. Build Trust & Credibility */}
    

      {/* 4. Demonstrate Expertise */}
      <Tests/>
      <ProcessFlow/>
      <ManufacturingProcess/>
      {/* 5. Show Solutions */}
      
      <OurProducts/>

      {/* 6. Visual Proof */}
      {/* <ImageGallery/> */}

      {/* 7. Call to Action */}
      <ContactUs/>

      {/* 8. Footer */}
      <Footer/>
    </>
  )
}
Home.displayName = 'Home';
export default Home;