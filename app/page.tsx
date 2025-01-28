import Footer from "@/components/sections/Footer";
import Hero2 from "@/components/sections/Hero2";
import OurServices2 from "@/components/sections/OurServices2";
import OurSupport from "@/components/sections/OurSupport";
import ProductsCategory from "@/components/sections/ProductsCategory";
import WhyGlass from "@/components/sections/WhyGlass";

const Home = () => {
  return (
    <>
      <Hero2 />
      {/* <AboutUs2/> */}
      <WhyGlass />
      <ProductsCategory />
      <OurServices2 />
      {/* <OurStrengths/> */}
      <OurSupport />
      {/* <Tests/> */}
      {/* <ProcessFlow/> */}
      {/* <ContactUs/> */}
      <Footer />
    </>
  );
};
Home.displayName = "Home";
export default Home;
