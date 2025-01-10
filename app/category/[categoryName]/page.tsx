import { Metadata } from 'next';
import ProductsList from './products-list';

type PageProps = {
  params: {
    categoryName: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `${params.categoryName} | GLASPAK SOLUTIONS SDN BHD`,
  };
}

export default function Page({ params }: PageProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F5F0EA] to-[#EDE5DB]">
      <ProductsList categoryName={params.categoryName} />
    </main>
  );
}