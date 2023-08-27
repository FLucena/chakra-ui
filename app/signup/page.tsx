'use client'

import dynamic from 'next/dynamic'
 
const NoSSR = dynamic(() => import('../components/SignUp'), { ssr: false })

export default function Page() {
  return (
    <div>
      <NoSSR />
    </div>
  )
}