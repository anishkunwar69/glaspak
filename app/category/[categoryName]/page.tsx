import { Metadata } from 'next';
import ProductsList from './products-list';

// Add proper type definition for the page props
type PageProps = {
  params: {
    categoryName: string;
  };
};

// Update your page component to use the correct type
export default function CategoryPage({ params }: PageProps) {
  const { categoryName } = params;
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F5F0EA] to-[#EDE5DB]">
      <ProductsList categoryName={categoryName} />
    </main>
  );
}

export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  return {
    title: `${props.params.categoryName} | GLASPAK SOLUTIONS SDN BHD`,
  };
}