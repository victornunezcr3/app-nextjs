import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'
import LogoLayout from '@/components/layouts/LogoLayout'

export default function Home() {
  return (
    <MainLayout>
      <LogoLayout />
      <div>
        <h1>***Home page***</h1>
      </div>
      <div>
        <h1>  Ir a: <Link href='/about'>About</Link></h1>
      </div>
    </MainLayout>
  )
}
