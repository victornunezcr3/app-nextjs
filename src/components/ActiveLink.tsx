import React, { FC } from 'react'
import Link from 'next/link'

interface props {
  text: string,
  href:string
}

const ActiveLink:FC<props> = ({text, href}) => {
  //console.log({text},{href});
  return (
    <Link href={href}>{text}</Link>
            
  )
}

export default ActiveLink
