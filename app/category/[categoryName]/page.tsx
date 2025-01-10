import { Metadata } from 'next';
import ProductsList from './products-list';

type Props = {
  params: {
    categoryName: string;
  };
};

// Remove async since we're not doing any async operations in the component itself
export default function Page({ params }: Props) {
  return <ProductsList categoryName={params.categoryName} />;
}

// Metadata generation
export const metadata: Metadata = {
  title: 'Products | Phoenix Packaging',
  description: 'Browse our product categories',
};