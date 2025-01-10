import { Metadata } from 'next';
import ProductsList from './products-list';

type PageProps = {
  params: {
    categoryName: string;
  };
};

// Dynamic Metadata Generation
export function generateMetadata({ params }: PageProps): Metadata {
  const { categoryName } = params;
  return {
    title: `${categoryName} Products | Phoenix Packaging`,
    description: `Explore the best ${categoryName} products available in our store.`,
  };
}

export default function Page({ params }: PageProps) {
  const { categoryName } = params;

  return <ProductsList categoryName={categoryName} />;
}
