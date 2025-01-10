import { Suspense } from 'react';
import ProductsList from './products-list';

interface PageProps {
  params: {
    categoryName: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsList categoryName={params.categoryName} />
    </Suspense>
  );
}

// Optionally, add generateMetadata if needed
export async function generateMetadata({ params }: PageProps) {
  return {
    title: `${params.categoryName.charAt(0).toUpperCase() + params.categoryName.slice(1)} - Phoenix Packaging`,
  };
}