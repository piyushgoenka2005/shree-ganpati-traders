'use client'
import { useEffect } from 'react'
import DotGrid from './DotGrid'

export default function DotGridBackground() {
  useEffect(() => {
    // Force a repaint to ensure dimensions are calculated
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .dot-grid-bg-wrapper section {
            padding: 0 !important;
            display: block !important;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            min-width: 100vw !important;
            min-height: 100vh !important;
            margin: 0 !important;
          }
          .dot-grid-bg-wrapper section > div {
            width: 100vw !important;
            height: 100vh !important;
            min-width: 100vw !important;
            min-height: 100vh !important;
          }
          .dot-grid-bg-wrapper canvas {
            width: 100vw !important;
            height: 100vh !important;
          }
        `
      }} />
      <div 
        className="fixed inset-0 -z-10 pointer-events-none dot-grid-bg-wrapper"
        style={{ 
          width: '100vw', 
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        <DotGrid 
          dotSize={6}
          gap={40}
          baseColor="#999999"
          activeColor="#cccccc"
          proximity={120}
          className=""
        />
      </div>
    </>
  )
}

