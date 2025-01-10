import { Metadata } from 'next';
// Update the import to use the local products-list file
import ProductsList from './products-list';

export async function generateMetadata({
  params,
}: {
  params: { categoryName: string };
}): Promise<Metadata> {
  return {
    title: `${params.categoryName} | GLASPAK SOLUTIONS SDN BHD`,
  };
}

export default function Page({
  params,
}: {
  params: { categoryName: string };
}) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F5F0EA] to-[#EDE5DB]">
      <ProductsList categoryName={params.categoryName} />
    </main>
  );
}