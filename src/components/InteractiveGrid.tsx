'use client'

import { useEffect, useRef } from 'react'

interface InteractiveGridProps {
  color?: string
  opacity?: number
  nodeCount?: number
  className?: string
}

export default function InteractiveGrid({ 
  color = '#3b82f6', 
  opacity = 0.6, 
  nodeCount = 50,
  className = ''
}: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const nodes = useRef<Array<{ x: number, y: number, vx: number, vy: number }>>([])
  const animationFrame = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Initialize nodes
    const initNodes = () => {
      nodes.current = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      }))
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw nodes
      nodes.current.forEach((node, i) => {
        // Mouse attraction
        const dx = mousePos.current.x - node.x
        const dy = mousePos.current.y - node.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 150) {
          const force = (150 - distance) / 150
          node.vx += (dx / distance) * force * 0.02
          node.vy += (dy / distance) * force * 0.02
        }

        // Update position
        node.x += node.vx
        node.y += node.vy

        // Friction
        node.vx *= 0.98
        node.vy *= 0.98

        // Boundary bounce
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1
        
        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))

        // Draw node
        ctx.fillStyle = color + Math.floor(opacity * 255).toString(16).padStart(2, '0')
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections
        nodes.current.forEach((otherNode, j) => {
          if (i >= j) return
          
          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            const alpha = (100 - distance) / 100 * opacity
            ctx.strokeStyle = color + Math.floor(alpha * 255).toString(16).padStart(2, '0')
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.stroke()
          }
        })
      })

      animationFrame.current = requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()
    initNodes()
    
    // Event listeners
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    
    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [color, opacity, nodeCount])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ background: 'transparent' }}
    />
  )
}