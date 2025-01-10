import { Metadata } from 'next';
import ProductsList from './products-list';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    categoryName: string | string[]
  }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

// Dynamic Metadata Generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryName = Array.isArray(resolvedParams.categoryName) 
    ? resolvedParams.categoryName[0] 
    : resolvedParams.categoryName;
    
  if (!categoryName) return notFound();
  
  return {
    title: `${categoryName} Products | Phoenix Packaging`,
    description: `Explore the best ${categoryName} products available in our store.`,
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const categoryName = Array.isArray(resolvedParams.categoryName) 
    ? resolvedParams.categoryName[0] 
    : resolvedParams.categoryName;

  return <ProductsList categoryName={categoryName} />;
}
