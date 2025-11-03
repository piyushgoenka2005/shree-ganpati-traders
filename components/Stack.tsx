'use client'
import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import Image from 'next/image';

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: never, info: { offset: { x: number; y: number } }) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  function handleDragStart() {
    // Update last interaction time when user starts dragging
    if (typeof window !== 'undefined') {
      const event = new CustomEvent('cardInteraction');
      window.dispatchEvent(event);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab active:cursor-grabbing"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing', scale: 0.98 }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?: { width: number; height: number };
  sendToBackOnClick?: boolean;
  cardsData?: { id: number; img: string }[];
  animationConfig?: { stiffness: number; damping: number };
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false
}: StackProps) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
          {
            id: 1,
            img: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format'
          },
          {
            id: 2,
            img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format'
          },
          {
            id: 3,
            img: 'https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format'
          },
          {
            id: 4,
            img: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format'
          }
        ]
  );

  // Generate random rotations only on client-side to prevent hydration mismatch
  const [randomRotations, setRandomRotations] = useState<number[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  
  // Auto-rotate functionality
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPausedRef = useRef(false);
  const lastInteractionRef = useRef(Date.now());
  const cardsRef = useRef(cards);
  
  // Keep cardsRef in sync with cards state
  useEffect(() => {
    cardsRef.current = cards;
  }, [cards]);

  useEffect(() => {
    setIsMounted(true);
    if (randomRotation && cards.length > 0 && randomRotations.length === 0) {
      // Generate fixed random values that will be consistent after initial render
      const rotations = cards.map(() => Math.random() * 10 - 5);
      setRandomRotations(rotations);
    }
  }, [randomRotation, cards.length, randomRotations.length]);

  const sendToBack = useCallback((id: number) => {
    setCards(prev => {
      const newCards = [...prev];
      const index = newCards.findIndex(card => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
    // Update last interaction time
    lastInteractionRef.current = Date.now();
  }, []);

  // Auto-rotate: Send top card to back every 3 seconds if section is visible and not interacted with
  useEffect(() => {
    if (!isMounted || cards.length === 0) return;

    const startAutoRotate = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        // Skip if paused or interacted within last 2 seconds
        if (isPausedRef.current || Date.now() - lastInteractionRef.current < 2000) {
          return;
        }

        // Send the top card (last in array) to the back - use ref to get latest state
        const currentCards = cardsRef.current;
        if (currentCards.length > 0) {
          const topCardId = currentCards[currentCards.length - 1].id;
          sendToBack(topCardId);
        }
      }, 3000);
    };

    // Intersection Observer to detect when section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            // Section is visible, start auto-rotate
            isPausedRef.current = false;
            startAutoRotate();
          } else {
            // Section is not visible, pause auto-rotate
            isPausedRef.current = true;
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
          }
        });
      },
      {
        threshold: [0.3, 0.7],
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
      startAutoRotate();
    }

    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      observer.disconnect();
    };
  }, [isMounted, sendToBack]);

  // Handle user interactions (pause auto-rotate)
  const handleInteraction = useCallback(() => {
    lastInteractionRef.current = Date.now();
    isPausedRef.current = true;
    
    // Resume auto-rotate after 4 seconds of no interaction
    setTimeout(() => {
      if (Date.now() - lastInteractionRef.current >= 4000) {
        isPausedRef.current = false;
      }
    }, 4000);
  }, []);

  // Listen for card interactions (dragging)
  useEffect(() => {
    if (!isMounted) return;

    const handleCardInteraction = () => {
      handleInteraction();
    };

    window.addEventListener('cardInteraction', handleCardInteraction);
    return () => {
      window.removeEventListener('cardInteraction', handleCardInteraction);
    };
  }, [isMounted, handleInteraction]);

  // Use deterministic base rotations that are consistent between server and client
  // Random rotations will be applied only after mount to avoid hydration mismatch
  const cardRotations = useMemo(() => {
    if (!randomRotation) {
      return cards.map(() => 0);
    }
    // Return zeros initially, random values will be set after mount via useEffect
    if (!isMounted || randomRotations.length === 0) {
      return cards.map(() => 0);
    }
    return randomRotations;
  }, [randomRotation, isMounted, randomRotations, cards.length]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 1000
      }}
      onMouseEnter={handleInteraction}
    >
      {cards.map((card, index) => {
        const baseRotation = (cards.length - index - 1) * 3.5;
        const randomRotate = cardRotations[index] || 0;
        // Keep all cards the same size (scale = 1.0 for all)
        const scale = 1.0;

        return (
          <CardRotate key={card.id} onSendToBack={() => sendToBack(card.id)} sensitivity={sensitivity}>
            <motion.div
              className="rounded-2xl overflow-hidden border-4 border-white shadow-2xl transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              onClick={() => {
                if (sendToBackOnClick) {
                  sendToBack(card.id);
                }
                handleInteraction();
              }}
              animate={{
                rotateZ: baseRotation + randomRotate,
                scale: scale,
              }}
              initial={false}
              transition={{
                rotateZ: {
                  type: 'spring',
                  stiffness: animationConfig.stiffness * 0.3, // Much slower spring
                  damping: animationConfig.damping * 1.8, // More damping for smoother, visible motion
                  mass: 1.5 // Heavier feel
                },
                scale: {
                  type: 'tween',
                  duration: 0.8,
                  ease: 'easeInOut'
                },
                default: {
                  duration: 1.0,
                  ease: 'easeInOut'
                }
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
                transformOrigin: '90% 90%',
                boxShadow: `0 ${10 + index * 5}px ${20 + index * 5}px rgba(0, 0, 0, ${0.3 + index * 0.1})`,
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={card.img}
                  alt={`card-${card.id}`}
                  fill
                  className="object-cover pointer-events-none"
                  sizes="(max-width: 768px) 200px, 200px"
                  priority={index === cards.length - 1}
                />
              </div>
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
