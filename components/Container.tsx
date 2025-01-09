import React from 'react'

function Container({children, className}:
  {
    children: React.ReactNode,
    className?: string
  }
) {
  return (
    <div className={`w-[92%] mx-auto
                    max-w-[1300px]
                    2xl:max-w-[1500px]
                    3xl:max-w-[1700px]
                    4xl:max-w-[1900px]
                    ${className || ''}`}>
      {children}
    </div>
  )
}

export default Container