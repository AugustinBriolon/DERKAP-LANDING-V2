import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const cursor = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useGSAP(
    () => {
      const updateCursor = () => {
        const distX = mouse.current.x - cursor.current.x;
        const distY = mouse.current.y - cursor.current.y;
        const distance = Math.sqrt(distX * distX + distY * distY);

        if (distance < 0.1) {
          cursor.current = { ...mouse.current };
          animationRef.current = null;
          return;
        }

        const ease = Math.max(0.05, Math.min(0.25, 12 / distance));

        cursor.current = {
          x: cursor.current.x + distX * ease,
          y: cursor.current.y + distY * ease,
        };

        gsap.set(cursorRef.current, {
          x: cursor.current.x,
          y: cursor.current.y,
          force3D: true,
        });

        animationRef.current = requestAnimationFrame(updateCursor);
      };

      const handleMouse = (e: MouseEvent) => {
        mouse.current = { x: e.clientX, y: e.clientY };
        if (!animationRef.current) animationRef.current = requestAnimationFrame(updateCursor);
      };

      const handleVisibility = (visible: boolean) => {
        gsap.to(cursorRef.current, {
          opacity: visible ? 0.5 : 0,
          scale: visible ? 1 : 0.5,
          duration: 0.2,
          ease: `power2.${visible ? 'out' : 'in'}`,
        });
      };

      mouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      cursor.current = { ...mouse.current };
      gsap.set(cursorRef.current, { x: cursor.current.x, y: cursor.current.y });

      window.addEventListener('mousemove', handleMouse);
      document.addEventListener('mouseenter', () => handleVisibility(true));
      document.addEventListener('mouseleave', () => handleVisibility(false));
      animationRef.current = requestAnimationFrame(updateCursor);

      return () => {
        window.removeEventListener('mousemove', handleMouse);
        document.removeEventListener('mouseenter', () => handleVisibility(true));
        document.removeEventListener('mouseleave', () => handleVisibility(false));
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
      };
    },
    { scope: cursorRef },
  );

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed -z-10 hidden h-80 w-80 rounded-full opacity-0 blur-xl md:block"
      style={{
        background:
          'radial-gradient(circle at center, rgba(151, 71, 255, 0.4) 0%, transparent 60%)',
        transform: 'translate(-50%, -50%)',
        left: 0,
        top: 0,
        mixBlendMode: 'screen',
      }}
    />
  );
}
