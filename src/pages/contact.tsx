import MainLayout from '@/components/layouts/MainLayout'
import Link from 'next/link'
import LogoLayout from '@/components/layouts/LogoLayout'

export default function Contact() {
  return (
    <MainLayout>
      <LogoLayout />
      <div>
        <h1>***Contact page***</h1>
      </div>
      <div>
        <h1>  Ir a: <Link href='/'>Home</Link></h1>
      </div>
    </MainLayout>
  )
}
