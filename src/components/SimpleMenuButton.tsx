'use client'

interface SimpleMenuButtonProps {
  onClick: () => void
}

export default function SimpleMenuButton({ onClick }: SimpleMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed top-4 left-4 z-50 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-colors duration-200"
      aria-label="Switch design"
    >
      <div className="flex flex-col space-y-1">
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </div>
    </button>
  )
}