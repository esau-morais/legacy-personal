export default function GradientBackground({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute top-[-60vw] left-0 right-0 bottom-[-6vw] z-[-1] bg-gradient-to-r from-blue-400/20 via-purple-600/20 to-indigo-500/20 blur-3xl filter sm:top-[-6vw] sm:right-[-7vw] sm:left-[-7vw]" />
      {children}
    </div>
  )
}
