import { Metadata } from 'next';
import ProductsList from './products-list';

// Add proper type definition for the page props
type PageProps = {
  params: {
    categoryName: string;
  };
};

export default function CategoryPage({ params }: PageProps) {
  return <ProductsList categoryName={params.categoryName} />;
}

export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  return {
    title: `${props.params.categoryName} | GLASPAK SOLUTIONS SDN BHD`,
  };
}