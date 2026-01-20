
import FeatureCard from '../components/FeatureCard'

export default function Cleaners() {
  return (
    <div className="py-16 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">For Cleaners</h1>
        
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg mb-6">
            Become part of our premium cleaning platform and enjoy fair pay, protection, and consistent work.
          </p>
          <div className="bg-secondary p-6 rounded-lg text-left">
            <h3 className="text-xl font-bold mb-4">Requirements:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Professional cleaning experience</li>
              <li>Pass background check</li>
              <li>Complete our training program</li>
              <li>Agree to our code of conduct</li>
              <li>No off-platform bookings allowed</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Protection"
            description="We handle customer payments and disputes so you can focus on cleaning."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
          />
          <FeatureCard
            title="Fair Jobs"
            description="Earn competitive rates with transparent pricing and no hidden fees."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <FeatureCard
            title="Transparent Rules"
            description="Clear guidelines and expectations for both cleaners and customers."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  )
}
  