import React from 'react'
import ProductsList from './products-list'

interface CategoryPageProps {
  params: {
    categoryName: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F5F0EA] to-[#EDE5DB]">
      <ProductsList categoryName={params.categoryName} />
    </main>
  )
}