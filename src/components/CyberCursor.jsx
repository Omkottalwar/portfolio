import React, { useEffect, useRef, useState } from 'react';

export default function CyberCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!cursor || !ring) return;

    // Track coordinates
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Fast readout update directly into DOM element
      if (label) {
        label.innerText = `SYS_LOC: [${mouseX.toString().padStart(4, '0')}, ${mouseY.toString().padStart(4, '0')}]`;
      }
    };

    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);

    // Track hover states for interactive tags
    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      // Determine if cursor is hovering over a button, link, tab, or clickable canvas element
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('clickable') ||
        target.getAttribute('role') === 'button';

      if (isClickable) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);

    // Smooth physics loop for the ring follower
    let animationFrameId;
    const updatePosition = () => {
      // Fluid dampening
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      ring.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      animationFrameId = requestAnimationFrame(updatePosition);
    };
    updatePosition();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: isHovered ? 'var(--violet)' : 'var(--cyan)',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate3d(-50%, -50%, 0)',
          transition: 'width 0.2s, height 0.2s, background-color 0.2s',
          boxShadow: isHovered ? '0 0 10px var(--violet)' : '0 0 10px var(--cyan)',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '48px' : '32px',
          height: isHovered ? '48px' : '32px',
          border: `1px solid ${isHovered ? 'var(--violet)' : 'var(--cyan)'}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          margin: isHovered ? '-24px 0 0 -24px' : '-16px 0 0 -16px',
          transform: 'translate3d(-50%, -50%, 0)',
          transition: 'width 0.2s, height 0.2s, border-color 0.2s, margin 0.2s, transform 0.05s',
          boxShadow: isHovered ? '0 0 15px rgba(163, 106, 117, 0.25)' : '0 0 10px rgba(92, 123, 143, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Futuristic reticle crosshairs */}
        <div style={{
          position: 'absolute',
          width: '2px',
          height: '6px',
          top: '-4px',
          backgroundColor: isHovered ? 'var(--violet)' : 'var(--cyan)',
        }} />
        <div style={{
          position: 'absolute',
          width: '2px',
          height: '6px',
          bottom: '-4px',
          backgroundColor: isHovered ? 'var(--violet)' : 'var(--cyan)',
        }} />
        <div style={{
          position: 'absolute',
          width: '6px',
          height: '2px',
          left: '-4px',
          backgroundColor: isHovered ? 'var(--violet)' : 'var(--cyan)',
        }} />
        <div style={{
          position: 'absolute',
          width: '6px',
          height: '2px',
          right: '-4px',
          backgroundColor: isHovered ? 'var(--violet)' : 'var(--cyan)',
        }} />
        
        {/* Dynamic Telemetry Coordinates Text */}
        <span
          ref={labelRef}
          style={{
            position: 'absolute',
            left: '32px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            color: isHovered ? 'var(--violet)' : 'var(--cyan)',
            whiteSpace: 'nowrap',
            letterSpacing: '1px',
            textShadow: '0 0 5px rgba(92, 123, 143, 0.55)',
            pointerEvents: 'none',
          }}
        >
          SYS_LOC: [0000, 0000]
        </span>
      </div>
    </>
  );
}
