'use client';

import { useCallback } from 'react';

type HapticFeedbackType = 'light' | 'medium' | 'heavy' | 'selection' | 'impact';

export const useHapticFeedback = () => {
  const triggerHaptic = useCallback((type: HapticFeedbackType = 'light') => {
    if (typeof navigator === 'undefined' || !('vibrate' in navigator)) return;

    try {
      let pattern: number | number[] = 20;

      switch (type) {
        case 'light':
          pattern = 20;
          break;
        case 'medium':
          pattern = 35;
          break;
        case 'heavy':
          pattern = 55;
          break;
        case 'selection':
          pattern = [15, 25, 15];
          break;
        case 'impact':
          pattern = [25, 30, 35];
          break;
      }

      navigator.vibrate(pattern);
    } catch (error) {
      console.debug('Haptic feedback not supported:', error);
    }
  }, []);

  return {
    triggerHaptic,
    isSupported: typeof navigator !== 'undefined' && 'vibrate' in navigator,
  };
};
