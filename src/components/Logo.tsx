export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center ${className || ""}`}>
      <img
        src="/logo.png"
        alt="AtlazClean logo"
        className="h-16 w-auto"
      />
    </div>
  );
}
