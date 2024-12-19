import AboutUs2 from "@/components/sections/AboutUs2";
import ContactUs from "@/components/sections/ContactUs";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Hero2 from "@/components/sections/Hero2";
import OurServices from "@/components/sections/OurServices";
import OurStrengths from "@/components/sections/OurStrengths";
import OurSupport from "@/components/sections/OurSupport";
import ProcessFlow from "@/components/sections/ProcessFlow";
import Tests from "@/components/sections/Tests";

const Home = () => {
  return (
    <>
      {/* 1. Attention Grabber */}
      {/* <Hero/> */}
      <Hero2/>
      <AboutUs2/>
      <OurServices/>
      <OurStrengths/>

      {/* 2. Quick Value Proposition */}
      <OurSupport/>

      {/* 3. Build Trust & Credibility */}
    

      {/* 4. Demonstrate Expertise */}
      <Tests/>
      <ProcessFlow/>
      {/* <ManufacturingProcess/> */}
      {/* 5. Show Solutions */}
      
      {/* <OurProducts/> */}

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