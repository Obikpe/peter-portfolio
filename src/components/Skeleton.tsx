export default function Skeleton({ className }: { className?: string }) {
  return (
    <div 
      className={`animate-pulse bg-gray-800/50 rounded-xl ${className}`}
      style={{
        animationDuration: '1.5s'
      }}
    />
  )
}