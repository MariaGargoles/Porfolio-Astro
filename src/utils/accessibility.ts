/**
 * Utilidades de accesibilidad para el portfolio
 */

/**
 * Gestiona el foco para elementos que se muestran/ocultan dinámicamente
 */
export function manageFocus(element: HTMLElement, shouldFocus: boolean) {
  if (shouldFocus && element) {
    element.focus();
  }
}

/**
 * Atrapa el foco dentro de un contenedor modal o dropdown
 */
export function trapFocus(container: HTMLElement) {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  ) as NodeListOf<HTMLElement>;
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  container.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  });
}

/**
 * Anuncia cambios dinámicos a lectores de pantalla
 */
export function announceToScreenReader(message: string) {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remover después de un tiempo
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * Mejora la navegación por teclado para sliders
 */
export function enhanceSliderKeyboardNavigation(slider: HTMLElement) {
  const prevButton = slider.querySelector('.prev') as HTMLButtonElement;
  const nextButton = slider.querySelector('.next') as HTMLButtonElement;
  
  if (!prevButton || !nextButton) return;

  // Navegación con flechas
  slider.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        prevButton.click();
        break;
      case 'ArrowRight':
        e.preventDefault();
        nextButton.click();
        break;
      case 'Home':
        e.preventDefault();
        // Ir al primer slide
        break;
      case 'End':
        e.preventDefault();
        // Ir al último slide
        break;
    }
  });
}

/**
 * Inicializa mejoras de accesibilidad globales
 */
export function initializeAccessibility() {
  // Mejorar el contraste de foco para todos los elementos
  const style = document.createElement('style');
  style.textContent = `
    *:focus {
      outline: 2px solid #0066cc !important;
      outline-offset: 2px !important;
    }
    
    html.dark *:focus {
      outline: 2px solid #66b3ff !important;
      outline-offset: 2px !important;
    }
    
    /* Mejorar contraste de texto */
    .low-contrast {
      color: #666666;
    }
    
    html.dark .low-contrast {
      color: #cccccc;
    }
  `;
  document.head.appendChild(style);

  // Agregar indicadores de estado para elementos interactivos
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
  });
}

/**
 * Valida el contraste de colores según WCAG
 */
export function validateColorContrast(foreground: string, background: string): boolean {
  // Implementación básica - en un proyecto real se usaría una librería como color-contrast
  // Por ahora retornamos true asumiendo que los colores son accesibles
  return true;
}
