/**
 * Utilidades de accesibilidad específicas para dispositivos móviles
 */

/**
 * Detecta si el dispositivo es móvil
 */
export function isMobileDevice(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         window.innerWidth <= 768 ||
         ('ontouchstart' in window);
}

/**
 * Detecta si el dispositivo tiene pantalla táctil
 */
export function isTouchDevice(): boolean {
  return 'ontouchstart' in window || 
         navigator.maxTouchPoints > 0 ||
         (navigator as any).msMaxTouchPoints > 0;
}

/**
 * Mejora la navegación táctil en móviles
 */
export function enhanceTouchNavigation(): void {
  if (!isMobileDevice()) return;

  // Mejorar navegación por gestos en sliders
  const sliders = document.querySelectorAll('.slider-container');
  sliders.forEach(slider => {
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    slider.addEventListener('touchstart', (e) => {
      const touchEvent = e as TouchEvent;
      startX = touchEvent.touches[0].clientX;
      isDragging = true;
      const sliderElement = slider as HTMLElement;
      sliderElement.style.transition = 'none';
    });

    slider.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      
      const touchEvent = e as TouchEvent;
      currentX = touchEvent.touches[0].clientX;
      const deltaX = currentX - startX;
      
      const sliderElement = slider.querySelector('.slider') as HTMLElement;
      if (sliderElement) {
        const currentTransform = sliderElement.style.transform;
        const currentTranslate = currentTransform.includes('translateX') 
          ? parseFloat(currentTransform.match(/-?\d+/)?.[0] || '0') 
          : 0;
        
        sliderElement.style.transform = `translateX(${currentTranslate + deltaX}px)`;
      }
    });

    slider.addEventListener('touchend', (_e) => {
      if (!isDragging) return;
      
      isDragging = false;
      const sliderElement = slider as HTMLElement;
      sliderElement.style.transition = 'transform 0.3s ease';
      
      const deltaX = currentX - startX;
      const threshold = 50;
      
      if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
          // Swipe right - previous
          const prevButton = slider.querySelector('.prev') as HTMLButtonElement;
          if (prevButton) prevButton.click();
        } else {
          // Swipe left - next
          const nextButton = slider.querySelector('.next') as HTMLButtonElement;
          if (nextButton) nextButton.click();
        }
      } else {
        // Reset position
        const sliderElement = slider.querySelector('.slider') as HTMLElement;
        if (sliderElement) {
          sliderElement.style.transform = '';
        }
      }
    });
  });
}

/**
 * Mejora la accesibilidad de formularios en móviles
 */
export function enhanceMobileForms(): void {
  if (!isMobileDevice()) return;

  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
      // Prevenir zoom automático en iOS
      if (input instanceof HTMLInputElement) {
        input.style.fontSize = '16px';
      }
      
      // Mejorar navegación entre campos
      input.addEventListener('keydown', (e) => {
        const keyboardEvent = e as KeyboardEvent;
        if (keyboardEvent.key === 'Enter' && input.tagName !== 'TEXTAREA') {
          keyboardEvent.preventDefault();
          const nextInput = getNextInput(input);
          if (nextInput) {
            nextInput.focus();
          } else {
            const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
            if (submitButton) submitButton.focus();
          }
        }
      });
    });
  });
}

/**
 * Obtiene el siguiente campo de entrada
 */
function getNextInput(currentInput: Element): HTMLElement | null {
  const inputs = Array.from(document.querySelectorAll('input, textarea, select'));
  const currentIndex = inputs.indexOf(currentInput);
  return inputs[currentIndex + 1] as HTMLElement || null;
}

/**
 * Mejora la navegación del header en móviles
 */
export function enhanceMobileHeader(): void {
  if (!isMobileDevice()) return;

  const header = document.querySelector('header');
  if (!header) return;

  // Crear menú móvil si no existe
  const existingMobileNav = header.querySelector('.mobile-nav');
  if (!existingMobileNav) {
    const nav = header.querySelector('nav');
    if (nav) {
      nav.classList.add('mobile-nav');
      
      // Mejorar enlaces de navegación
      const links = nav.querySelectorAll('a');
      links.forEach(link => {
        link.style.minHeight = '44px';
        link.style.display = 'flex';
        link.style.alignItems = 'center';
        link.style.justifyContent = 'center';
        link.style.padding = '12px 16px';
        link.style.borderRadius = '8px';
        link.style.marginBottom = '8px';
        link.style.textDecoration = 'none';
        link.style.fontWeight = '500';
      });
    }
  }
}

/**
 * Mejora la accesibilidad de imágenes en móviles
 */
export function enhanceMobileImages(): void {
  if (!isMobileDevice()) return;

  const images = document.querySelectorAll('img');
  images.forEach(img => {
    // Asegurar que las imágenes sean responsivas
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
    
    // Mejorar contraste en pantallas pequeñas
    img.style.borderRadius = '8px';
    
    // Agregar indicador de carga
    if (!img.complete) {
      img.style.opacity = '0.7';
      img.addEventListener('load', () => {
        img.style.opacity = '1';
      });
    }
  });
}

/**
 * Mejora la accesibilidad de videos en móviles
 */
export function enhanceMobileVideos(): void {
  if (!isMobileDevice()) return;

  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    // Asegurar que los videos sean responsivos
    video.style.width = '100%';
    video.style.height = 'auto';
    video.style.borderRadius = '8px';
    
    // Mejorar controles táctiles
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');
  });
}

/**
 * Mejora la navegación por teclado en móviles
 */
export function enhanceMobileKeyboardNavigation(): void {
  if (!isMobileDevice()) return;

  // Mejorar navegación con teclado virtual
  document.addEventListener('keydown', (e) => {
    // Mejorar navegación con flechas
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<HTMLElement>;
      
      const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as HTMLElement);
      let nextIndex = currentIndex;
      
      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          nextIndex = (currentIndex + 1) % focusableElements.length;
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          nextIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
          break;
      }
      
      if (nextIndex !== currentIndex) {
        e.preventDefault();
        focusableElements[nextIndex].focus();
      }
    }
  });
}

/**
 * Mejora el rendimiento en móviles
 */
export function optimizeMobilePerformance(): void {
  if (!isMobileDevice()) return;

  // Lazy loading para imágenes
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));

  // Optimizar animaciones para dispositivos de bajo rendimiento
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.body.classList.add('reduced-motion');
  }

  // Optimizar scroll
  let ticking = false;
  function updateScroll() {
    // Aquí se pueden agregar optimizaciones de scroll
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateScroll);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
}

/**
 * Mejora la accesibilidad de botones en móviles
 */
export function enhanceMobileButtons(): void {
  if (!isMobileDevice()) return;

  const buttons = document.querySelectorAll('button, [role="button"]');
  buttons.forEach(button => {
    const element = button as HTMLElement;
    
    // Asegurar tamaño mínimo táctil
    element.style.minHeight = '44px';
    element.style.minWidth = '44px';
    element.style.padding = '12px 16px';
    
    // Mejorar feedback táctil
    element.addEventListener('touchstart', () => {
      element.style.transform = 'scale(0.98)';
    });
    
    element.addEventListener('touchend', () => {
      element.style.transform = 'scale(1)';
    });
  });
}

/**
 * Inicializa todas las mejoras de accesibilidad móvil
 */
export function initializeMobileAccessibility(): void {
  if (!isMobileDevice()) return;

  // Cargar estilos de accesibilidad móvil
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/src/styles/mobile-accessibility.css';
  document.head.appendChild(link);

  // Cargar optimizaciones de rendimiento
  import('./mobile-performance').then(module => {
    module.initializeMobilePerformance();
  });

  // Cargar correcciones de imágenes móviles
  import('./mobile-image-fix').then(module => {
    module.initializeMobileImageFixes();
  });

  // Aplicar mejoras
  enhanceTouchNavigation();
  enhanceMobileForms();
  enhanceMobileHeader();
  enhanceMobileImages();
  enhanceMobileVideos();
  enhanceMobileKeyboardNavigation();
  optimizeMobilePerformance();
  enhanceMobileButtons();

  // Agregar clase móvil al body
  document.body.classList.add('mobile-device');
  
  // Mejorar viewport para móviles
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
  }
}
