
import { Metadata } from 'next';
import ProductsList from './products-list';

type Props = {
  params: { categoryName: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.categoryName} | GVH Glass`,
  };
}

// Remove async and use proper Next.js page typing
export default function Page({ params, searchParams }: Props) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F5F0EA] to-[#EDE5DB]">
      <ProductsList categoryName={params.categoryName} />
    </main>
  );
}