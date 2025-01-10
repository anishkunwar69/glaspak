import { Metadata } from 'next';
import ProductsList from './products-list';

export interface PageProps {
  params: {
    categoryName: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  return {
    title: `${params.categoryName} | GLASPAK SOLUTIONS SDN BHD`,
  };
}

export default async function Page(props: PageProps): Promise<JSX.Element> {
  const { categoryName } = props.params;
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F5F0EA] to-[#EDE5DB]">
      <ProductsList categoryName={categoryName} />
    </main>
  );
}