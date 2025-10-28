import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/landing/Footer'

export default function Layout() {
  return (
    <div className="dark">
      <main className="flex flex-col min-h-screen bg-background">
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  )
}
