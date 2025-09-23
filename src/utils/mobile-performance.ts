/**
 * Utilidades de optimización de rendimiento para dispositivos móviles
 */

/**
 * Optimiza las imágenes para dispositivos móviles
 */
export function optimizeMobileImages(): void {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    // Agregar lazy loading nativo
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Optimizar para diferentes densidades de pantalla (solo si existen las imágenes @2x)
    if (img.src && !img.srcset) {
      // Solo agregar srcset si las imágenes @2x existen realmente
      // Por ahora, deshabilitamos el srcset automático para evitar errores 404
      // const baseSrc = img.src;
      // img.setAttribute('srcset', srcset);
    }
    
    // Agregar atributos de rendimiento
    img.setAttribute('decoding', 'async');
    img.setAttribute('fetchpriority', 'auto');
  });
}

/**
 * Optimiza los videos para dispositivos móviles
 */
export function optimizeMobileVideos(): void {
  const videos = document.querySelectorAll('video');
  
  videos.forEach(video => {
    // Configurar para reproducción en línea en iOS
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');
    
    // Optimizar preload
    video.setAttribute('preload', 'metadata');
    
    // Agregar controles táctiles mejorados
    video.setAttribute('controls', 'true');
    
    // Optimizar para diferentes tamaños de pantalla
    video.style.maxWidth = '100%';
    video.style.height = 'auto';
  });
}

/**
 * Implementa lazy loading para contenido pesado
 */
export function implementLazyLoading(): void {
  const lazyElements = document.querySelectorAll('[data-lazy]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        const lazyType = element.dataset.lazy;
        
        switch (lazyType) {
          case 'image':
            const img = element as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            break;
            
          case 'video':
            const video = element as HTMLVideoElement;
            if (video.dataset.src) {
              video.src = video.dataset.src;
              video.removeAttribute('data-src');
            }
            break;
            
          case 'content':
            const content = element.dataset.content;
            if (content) {
              element.innerHTML = content;
              element.removeAttribute('data-content');
            }
            break;
        }
        
        observer.unobserve(element);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.1
  });
  
  lazyElements.forEach(element => observer.observe(element));
}

/**
 * Optimiza las animaciones para dispositivos de bajo rendimiento
 */
export function optimizeAnimations(): void {
  // Detectar preferencias del usuario
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
  
  if (prefersReducedMotion || isLowEndDevice) {
    // Reducir animaciones
    document.body.classList.add('reduced-motion');
    
    // Deshabilitar animaciones CSS
    const style = document.createElement('style');
    style.textContent = `
      .reduced-motion *,
      .reduced-motion *::before,
      .reduced-motion *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    `;
    document.head.appendChild(style);
  }
}

/**
 * Optimiza el scroll para mejor rendimiento
 */
export function optimizeScroll(): void {
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
  
  // Usar passive listeners para mejor rendimiento
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('touchmove', requestTick, { passive: true });
}

/**
 * Optimiza la carga de recursos críticos
 */
export function optimizeCriticalResources(): void {
  // Precargar recursos críticos
  const criticalResources = [
    '/src/styles/accessibility.css',
    '/src/styles/mobile-accessibility.css'
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = 'style';
    document.head.appendChild(link);
  });
  
  // Precargar fuentes críticas (solo si no están ya cargadas)
  const existingFontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
  if (existingFontLinks.length === 0) {
    const criticalFonts = [
      'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&display=swap'
    ];
    
    criticalFonts.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = font;
      document.head.appendChild(link);
    });
  }
}

/**
 * Implementa service worker para caché offline
 */
export function implementServiceWorker(): void {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registrado: ', registration);
        })
        .catch(registrationError => {
          console.log('Error en SW: ', registrationError);
        });
    });
  }
}

/**
 * Optimiza el viewport para móviles
 */
export function optimizeViewport(): void {
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    viewport.setAttribute('content', 
      'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes'
    );
  } else {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
    document.head.appendChild(meta);
  }
}

/**
 * Optimiza la carga de scripts
 */
export function optimizeScriptLoading(): void {
  // Deshabilitamos la carga automática de scripts para evitar errores
  // Los scripts se cargan a través de los imports en los componentes Astro
  // const nonCriticalScripts = [
  //   '/src/utils/accessibility.js',
  //   '/src/utils/mobile-accessibility.js'
  // ];
  
  // nonCriticalScripts.forEach(scriptSrc => {
  //   const script = document.createElement('script');
  //   script.src = scriptSrc;
  //   script.async = true;
  //   script.defer = true;
  //   document.head.appendChild(script);
  // });
}

/**
 * Implementa compresión de imágenes
 */
export function implementImageCompression(): void {
  // Solo agregar formatos modernos si existen realmente
  // Por ahora, deshabilitamos la compresión automática para evitar errores 404
  // const images = document.querySelectorAll('img');
  // images.forEach(img => {
  //   if (img.src && !img.srcset) {
  //     const baseSrc = img.src;
  //     const webpSrc = baseSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  //     const avifSrc = baseSrc.replace(/\.(jpg|jpeg|png)$/i, '.avif');
  //     
  //     const srcset = `
  //       ${avifSrc} 1x,
  //       ${webpSrc} 1x,
  //       ${baseSrc} 1x
  //     `;
  //     
  //     img.setAttribute('srcset', srcset);
  //   }
  // });
}

/**
 * Optimiza el rendimiento general
 */
export function optimizeOverallPerformance(): void {
  // Optimizar imágenes
  optimizeMobileImages();
  
  // Optimizar videos
  optimizeMobileVideos();
  
  // Implementar lazy loading
  implementLazyLoading();
  
  // Optimizar animaciones
  optimizeAnimations();
  
  // Optimizar scroll
  optimizeScroll();
  
  // Optimizar recursos críticos
  optimizeCriticalResources();
  
  // Implementar service worker
  implementServiceWorker();
  
  // Optimizar viewport
  optimizeViewport();
  
  // Optimizar carga de scripts
  optimizeScriptLoading();
  
  // Implementar compresión de imágenes
  implementImageCompression();
}

/**
 * Inicializa todas las optimizaciones de rendimiento móvil
 */
export function initializeMobilePerformance(): void {
  // Verificar si es dispositivo móvil
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                   window.innerWidth <= 768;
  
  if (isMobile) {
    optimizeOverallPerformance();
    
    // Agregar clase móvil al body
    document.body.classList.add('mobile-optimized');
  }
}
