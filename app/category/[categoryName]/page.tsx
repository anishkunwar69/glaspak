import { Metadata } from 'next';
import ProductsList from './products-list';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    categoryName: string | string[]
  }
  searchParams?: { [key: string]: string | string[] | undefined }
}

// Dynamic Metadata Generation
export function generateMetadata({ params }: PageProps): Metadata {
  const categoryName = Array.isArray(params.categoryName) 
    ? params.categoryName[0] 
    : params.categoryName;
    
  if (!categoryName) return notFound();
  
  return {
    title: `${categoryName} Products | Phoenix Packaging`,
    description: `Explore the best ${categoryName} products available in our store.`,
  };
}

export default async function Page({ params }: PageProps) {
  const categoryName = Array.isArray(params.categoryName) 
    ? params.categoryName[0] 
    : params.categoryName;

  return <ProductsList categoryName={categoryName} />;
}
