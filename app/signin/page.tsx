'use client'

import dynamic from 'next/dynamic'
 
const NoSSR = dynamic(() => import('../components/SignIn'), { ssr: false })

export default function Page() {
  return (
    <div>
      <NoSSR />
    </div>
  )
}