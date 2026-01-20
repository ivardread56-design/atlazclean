export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center ${className || ""}`}>
      <img
        src="/4174F0FF-8316-4136-BEE8-D6AC01E34EA9.png"
        alt="AtlazClean logo"
        className="h-14 w-auto"
      />
    </div>
  );
}
