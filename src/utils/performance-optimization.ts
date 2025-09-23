/**
 * Utilidades de optimización de rendimiento
 */

/**
 * Optimiza el caché de recursos
 */
export function optimizeCaching(): void {
  // Deshabilitamos el preload de CSS locales para evitar warnings
  // Los estilos se cargan automáticamente cuando se necesitan
  // const criticalResources = [
  //   '/src/styles/accessibility.css',
  //   '/src/styles/mobile-accessibility.css'
  // ];
  
  // criticalResources.forEach(resource => {
  //   const link = document.createElement('link');
  //   link.rel = 'preload';
  //   link.href = resource;
  //   link.as = 'style';
  //   document.head.appendChild(link);
  // });
  
  // Precargar fuentes críticas
  const criticalFonts = [
    'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&display=swap',
    'https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&display=swap'
  ];
  
  criticalFonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = font;
    link.as = 'style';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

/**
 * Optimiza la entrega de imágenes
 */
export function optimizeImageDelivery(): void {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    // Agregar lazy loading
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Agregar decoding async
    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }
    
    // Agregar fetchpriority
    if (!img.hasAttribute('fetchpriority')) {
      img.setAttribute('fetchpriority', 'auto');
    }
    
    // Optimizar para diferentes densidades (solo si las imágenes existen)
    // Por ahora, deshabilitamos el srcset automático para evitar errores 404
    // if (img.src && !img.srcset) {
    //   const baseSrc = img.src;
    //   const webpSrc = baseSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    //   
    //   // Solo agregar srcset si la imagen WebP existe
    //   if (webpSrc !== baseSrc) {
    //     img.setAttribute('srcset', `${webpSrc} 1x, ${baseSrc} 1x`);
    //   }
    // }
  });
}

/**
 * Optimiza las solicitudes que bloquean el renderizado
 */
export function optimizeRenderBlocking(): void {
  // Mover scripts no críticos al final
  const nonCriticalScripts = document.querySelectorAll('script[src*="accessibility"], script[src*="mobile"]');
  nonCriticalScripts.forEach(script => {
    script.async = true;
    script.defer = true;
  });
  
  // Optimizar carga de CSS
  const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
  stylesheets.forEach(link => {
    if (!link.hasAttribute('media')) {
      link.setAttribute('media', 'all');
    }
  });
  
  // Precargar recursos críticos
  const criticalImages = document.querySelectorAll('img[src*="IP.jpg"], img[src*="foto"]');
  criticalImages.forEach(img => {
    img.setAttribute('fetchpriority', 'high');
    img.setAttribute('loading', 'eager');
  });
  
  // Cargar CSS de accesibilidad de forma asíncrona
  const accessibilityCSS = document.createElement('link');
  accessibilityCSS.rel = 'stylesheet';
  accessibilityCSS.href = '/src/styles/accessibility.css';
  accessibilityCSS.media = 'all';
  document.head.appendChild(accessibilityCSS);
  
  const mobileCSS = document.createElement('link');
  mobileCSS.rel = 'stylesheet';
  mobileCSS.href = '/src/styles/mobile-accessibility.css';
  mobileCSS.media = 'all';
  document.head.appendChild(mobileCSS);
}

/**
 * Implementa Service Worker para caché offline
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
 * Optimiza el viewport y meta tags
 */
export function optimizeViewport(): void {
  // Optimizar viewport
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
  }
  
  // Agregar meta tags de rendimiento
  const performanceMeta = [
    { name: 'theme-color', content: '#ffffff' },
    { name: 'msapplication-TileColor', content: '#ffffff' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }
  ];
  
  performanceMeta.forEach(meta => {
    const metaTag = document.createElement('meta');
    metaTag.name = meta.name;
    metaTag.content = meta.content;
    document.head.appendChild(metaTag);
  });
}

/**
 * Optimiza la carga de recursos externos
 */
export function optimizeExternalResources(): void {
  // Cargar Google Fonts de forma asíncrona
  const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
  fontLinks.forEach(link => {
    link.rel = 'preload';
    link.as = 'style';
    link.onload = function() {
      this.rel = 'stylesheet';
    };
  });
  
  // Optimizar iconos
  const iconLinks = document.querySelectorAll('link[rel="icon"]');
  iconLinks.forEach(link => {
    link.rel = 'icon';
    link.type = 'image/svg+xml';
  });
}

/**
 * Implementa compresión de recursos
 */
export function implementResourceCompression(): void {
  // Comprimir imágenes automáticamente (solo si las imágenes existen)
  // Por ahora, deshabilitamos la compresión automática para evitar errores 404
  // const images = document.querySelectorAll('img');
  // images.forEach(img => {
  //   // Agregar formatos modernos
  //   if (img.src && !img.srcset) {
  //     const baseSrc = img.src;
  //     const webpSrc = baseSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  //     const avifSrc = baseSrc.replace(/\.(jpg|jpeg|png)$/i, '.avif');
  //     
  //     // Crear srcset con formatos modernos
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
  // Optimizar caché
  optimizeCaching();
  
  // Optimizar entrega de imágenes
  optimizeImageDelivery();
  
  // Optimizar renderizado
  optimizeRenderBlocking();
  
  // Implementar Service Worker
  implementServiceWorker();
  
  // Optimizar viewport
  optimizeViewport();
  
  // Optimizar recursos externos
  optimizeExternalResources();
  
  // Implementar compresión
  implementResourceCompression();
}

/**
 * Inicializa todas las optimizaciones de rendimiento
 */
export function initializePerformanceOptimization(): void {
  // Ejecutar optimizaciones inmediatamente
  optimizeOverallPerformance();
  
  // Re-aplicar optimizaciones cuando se carguen nuevos elementos
  const observer = new MutationObserver(() => {
    optimizeImageDelivery();
    optimizeExternalResources();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}
