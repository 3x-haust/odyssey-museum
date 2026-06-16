import Lenis from 'lenis';
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';

const LenisContext = createContext<Lenis | null>(null);

export const useLenis = (): Lenis | null => useContext(LenisContext);

let activeScrollLocks = 0;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const clampLockCount = (count: number) => Math.max(0, count);

const applyScrollLockState = (lenis: Lenis | null) => {
  if (activeScrollLocks > 0) {
    lenis?.stop();
    document.documentElement.style.overflow = 'hidden';
    return;
  }

  lenis?.start();
  document.documentElement.style.overflow = '';
};

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const instance = new Lenis({
      duration: 1.15,
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });
    setLenis(instance);

    const loop = (time: number) => {
      instance.raf(time);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

/**
 * Lock / unlock page scrolling. Works whether or not Lenis is active
 * (reduced-motion users fall back to body overflow).
 */
export function useScrollLock(locked: boolean) {
  const lenis = useLenis();
  const lockActiveRef = useRef(false);

  useEffect(() => {
    if (locked && !lockActiveRef.current) {
      activeScrollLocks += 1;
      lockActiveRef.current = true;
    }

    if (!locked && lockActiveRef.current) {
      activeScrollLocks = clampLockCount(activeScrollLocks - 1);
      lockActiveRef.current = false;
    }

    applyScrollLockState(lenis);

    return () => {
      if (!lockActiveRef.current) return;

      activeScrollLocks = clampLockCount(activeScrollLocks - 1);
      lockActiveRef.current = false;
      applyScrollLockState(lenis);
    };
  }, [locked, lenis]);
}
