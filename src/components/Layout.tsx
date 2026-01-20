
import { Outlet, Link } from 'react-router-dom'
import Logo from './Logo'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-secondary py-4 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="w-10 h-10" />
            <span className="text-xl font-bold">AtlazClean</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="hover:text-accent transition">Home</Link>
            <Link to="/customers" className="hover:text-accent transition">For Customers</Link>
            <Link to="/cleaners" className="hover:text-accent transition">For Cleaners</Link>
          </nav>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-secondary py-8 px-6">
        <div className="container mx-auto text-center">
          <p>© 2023 AtlazClean. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
  