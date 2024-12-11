import { memo } from "react";
import Container from "./Container";
import HeroImageContent from "./HeroImageContent";
import HeroTextContent from "./HeroTextContent";

const HeroContent = memo(() => {
  return (
    <div className="relative min-h-[calc(100vh-100px)] flex items-center">
      <Container>
        <div className="relative flex flex-col md:flex-row justify-center items-center">
          <div className="w-full grid grid-cols-12 gap-4 md:gap-8 lg:gap-12 items-center relative z-10">
            <HeroImageContent/>
            <HeroTextContent/>
          </div>
        </div>
      </Container>
    </div>
  );
});

HeroContent.displayName = 'HeroContent';
export default HeroContent;
