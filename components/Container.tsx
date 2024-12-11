import React from 'react'

function Container({children}:{children:React.ReactNode}) {
  return (
    <div className='max-w-[1200px] w-[90%] mx-auto'>
        {children}
    </div>
  )
}

export default Container