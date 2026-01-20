
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto flex flex-col items-center text-center">
          <Logo className="w-16 h-16 mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Cleaning <span className="text-accent">Powered by AI</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Experience the future of home cleaning with our verified professionals and AI-powered quality control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/customers" 
              className="bg-accent hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Book a Cleaning
            </Link>
            <Link 
              to="/cleaners" 
              className="bg-transparent hover:bg-secondary text-white font-bold py-3 px-6 border border-accent rounded-lg transition"
            >
              Become a Cleaner
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-6 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
            <div className="w-full h-96 bg-gray-800 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
  