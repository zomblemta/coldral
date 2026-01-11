/**
 * Enhanced Quick Buy Modal Animations
 * Provides smooth enter/leave animations for the quick-buy modal
 */

import { timeline } from 'vendor';

// Wait for custom elements to be defined
customElements.whenDefined('quick-buy-modal').then(() => {
  const QuickBuyModal = customElements.get('quick-buy-modal');
  
  // Override enter animation
  QuickBuyModal.prototype.createEnterAnimationControls = function() {
    const overlay = this.getShadowPartByName('overlay');
    const content = this.getShadowPartByName('content');
    const isMobile = window.innerWidth < 700;
    
    if (isMobile) {
      // Mobile: slide up from bottom with spring-like easing
      return timeline([
        [overlay, { opacity: [0, 1] }, { duration: 0.3, easing: [0.32, 0.72, 0, 1] }],
        [content, { 
          transform: ['translateY(100%)', 'translateY(0)'],
          opacity: [0.5, 1]
        }, { duration: 0.4, at: '<', easing: [0.32, 0.72, 0, 1] }]
      ]);
    } else {
      // Desktop: scale and fade with subtle bounce
      return timeline([
        [overlay, { opacity: [0, 1] }, { duration: 0.25, easing: [0.32, 0.72, 0, 1] }],
        [content, { 
          transform: ['scale(0.92) translateY(16px)', 'scale(1) translateY(0)'],
          opacity: [0, 1]
        }, { duration: 0.35, at: '<', easing: [0.34, 1.56, 0.64, 1] }]
      ]);
    }
  };
  
  // Override leave animation
  QuickBuyModal.prototype.createLeaveAnimationControls = function() {
    const overlay = this.getShadowPartByName('overlay');
    const content = this.getShadowPartByName('content');
    const isMobile = window.innerWidth < 700;
    
    if (isMobile) {
      // Mobile: slide down
      return timeline([
        [content, { 
          transform: ['translateY(0)', 'translateY(100%)'],
          opacity: [1, 0.5]
        }, { duration: 0.25, easing: [0.32, 0, 0.67, 0] }],
        [overlay, { opacity: [1, 0] }, { duration: 0.2, at: '<', easing: 'ease-out' }]
      ]);
    } else {
      // Desktop: scale down and fade
      return timeline([
        [content, { 
          transform: ['scale(1) translateY(0)', 'scale(0.95) translateY(8px)'],
          opacity: [1, 0]
        }, { duration: 0.2, easing: [0.32, 0, 0.67, 0] }],
        [overlay, { opacity: [1, 0] }, { duration: 0.18, at: '<', easing: 'ease-out' }]
      ]);
    }
  };
});

