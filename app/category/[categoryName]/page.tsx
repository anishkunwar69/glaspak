import Navbar from "@/components/Navbar"
import Footer from "@/components/sections/Footer"
import ProductsList from './products-list'
import { Metadata } from 'next'

interface PageProps {
  params: {
    categoryName: string
  }
}

// Dynamic Metadata Generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `${params.categoryName} Products | Phoenix Packaging`,
    description: `Explore the best ${params.categoryName} products available in our store.`,
  };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <Navbar />
      <div className="pt-[87px]">
        <ProductsList categoryName={params.categoryName} />
      </div>
      <Footer />
    </>
  );
}
