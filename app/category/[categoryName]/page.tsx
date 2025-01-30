import Navbar from "@/components/Navbar"
import Footer from "@/components/sections/Footer"
import ProductsList from './products-list'
import { Metadata } from 'next'

// Replace the interface with the correct type
type Props = {
  params: {
    categoryName: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

// Update the type here
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.categoryName} Products | Phoenix Packaging`,
    description: `Explore the best ${params.categoryName} products available in our store.`,
  };
}

// Update the type here
export default function Page({ params }: Props) {
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
