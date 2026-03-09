import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      // If Element is in view, we want to animate it in and optionally keep it visible
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.triggerOnce !== false) {
          observer.unobserve(element);
        }
      } else if (options.triggerOnce === false) {
        setIsVisible(false); // Only if we want to reverse animation
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      ...options
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.threshold, options.root, options.rootMargin, options.triggerOnce]);

  return [elementRef, isVisible];
}
