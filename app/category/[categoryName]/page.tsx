import { Metadata } from 'next';
import ProductsList from './products-list';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    categoryName: string
  }
}

// Dynamic Metadata Generation
export function generateMetadata({ params }: PageProps): Metadata {
  if (typeof params.categoryName !== "string") return notFound()
  const { categoryName } = params;
  return {
    title: `${categoryName} Products | Phoenix Packaging`,
    description: `Explore the best ${categoryName} products available in our store.`,
  };
}

export default async function Page({ params }: PageProps) {
  const { categoryName } = params;

  return <ProductsList categoryName={categoryName} />;
}
