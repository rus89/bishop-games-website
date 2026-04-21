// ABOUTME: Returns a [ref, hasEntered] pair that flips to true once the target
// ABOUTME: intersects the viewport. One-shot trigger via IntersectionObserver.
import { useEffect, useRef, useState } from 'react';

const useInViewport = () => {
  const ref = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasEntered) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setHasEntered(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasEntered]);

  return [ref, hasEntered];
};

export default useInViewport;
