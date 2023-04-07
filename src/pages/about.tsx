import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'
import LogoLayout from '@/components/layouts/LogoLayout'
import DarkLayout from '@/components/layouts/DarkLayout'
import Navbar from '@/components/Navbar'
import { ReactElement } from 'react'

export default function About() {
  return (
    <>
        <Navbar/>
        <LogoLayout />
        <div>
          <h1>***About page***</h1>
        </div>
        <div>
          <h1>  Ir a: <Link href='/'>Home</Link></h1>
        </div>
    </>
  )
}

About.getLayout = function getLayout( page:ReactElement ) {
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
