import React from 'react'
import ProductsList from './products-list'

function Page({ params }: { params: { categoryName: string } }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F5F0EA] to-[#EDE5DB]">
      <ProductsList categoryName={params.categoryName} />
    </main>
  )
}

export default Page