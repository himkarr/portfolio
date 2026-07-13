'use client';

import { useClickSound } from '@/hooks/use-click-sound';
import { useHapticFeedback } from '@/hooks/use-haptic-feedback';
import { useUmami } from '@/hooks/use-umami';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

const SHOW_AFTER_PX = 400;

export default function BackToTop() {
  const { triggerHaptic, isMobile } = useHapticFeedback();
  const { trackEvent } = useUmami();
  const playClick = useClickSound();

  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest >= SHOW_AFTER_PX);
  });

  const handleClick = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Hide immediately on click rather than waiting for the scroll listener
    // to catch up with the smooth-scroll animation.
    setVisible(false);

    trackEvent({
      name: 'button_click',
      data: { buttonId: 'back_to_top', section: 'global' },
    });

    if (isMobile()) {
      triggerHaptic('light');
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        'fixed right-6 bottom-6 z-50 bg-background transition-all duration-300 md:right-10',
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-2 opacity-0',
      )}
      onClick={handleClick}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="size-4" />
    </Button>
  );
}