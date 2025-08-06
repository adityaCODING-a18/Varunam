"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const FreeClasses = () => {
  const router = useRouter();
  router.push("https://www.youtube.com/@varunamforvictory");

  return (
    <div>
      it's free classes of Varunam
    </div>
  )
}

export default FreeClasses
