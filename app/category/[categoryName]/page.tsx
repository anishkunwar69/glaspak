import React from 'react'
import ProductsList from './products-list'
import { Metadata } from 'next';

interface CategoryPageProps {
  params: {
    categoryName: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Optionally add metadata if needed
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  return {
    title: `${params.categoryName} | GVH Glass`,
  };
}

// Make sure ProductsList can handle server components
export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F5F0EA] to-[#EDE5DB]">
      <ProductsList categoryName={params.categoryName} />
    </main>
  )
}