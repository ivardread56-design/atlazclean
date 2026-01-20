
export default function FeatureCard({ 
  title, 
  description,
  icon
}: {
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <div className="bg-secondary p-6 rounded-lg shadow-lg">
      <div className="text-accent mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}
  