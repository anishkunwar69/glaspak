import { Metadata } from 'next';
import ProductsList from './products-list';

// Remove the incorrect PageProps import and just use the type directly
type Props = {
  params: { categoryName: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(
  props: Props
): Promise<Metadata> {
  return {
    title: `${props.params.categoryName} | GLASPAK SOLUTIONS SDN BHD`,
  };
}

export default async function CategoryPage(
  props: Props
): Promise<JSX.Element> {
  const { categoryName } = props.params;
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F5F0EA] to-[#EDE5DB]">
      <ProductsList categoryName={categoryName} />
    </main>
  );
}