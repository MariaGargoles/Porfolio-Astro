/**
 * Utilidades para corregir problemas de imágenes en dispositivos móviles
 */

/**
 * Corrige problemas de visualización de imágenes en móviles
 */
export function fixMobileImageDisplay(): void {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                   window.innerWidth <= 768;
  
  if (!isMobile) return;

  // Corregir todas las imágenes
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    // Asegurar que las imágenes tengan las clases correctas
    if (!img.classList.contains('max-w-full')) {
      img.classList.add('max-w-full', 'h-auto');
    }
    
    // Asegurar que las imágenes tengan object-fit apropiado
    if (!img.style.objectFit) {
      img.style.objectFit = 'contain';
    }
    
    // Asegurar que las imágenes se muestren
    img.style.display = 'block';
    img.style.margin = '0 auto';
    
    // Agregar fallback para imágenes que no cargan
    img.addEventListener('error', () => {
      console.warn('Imagen no pudo cargar:', img.src);
      
      // Solo crear placeholder si no existe ya uno
      if (!img.parentNode?.querySelector('.image-placeholder')) {
        img.style.display = 'none';
        
        // Crear placeholder
        const placeholder = document.createElement('div');
        placeholder.className = 'image-placeholder';
        placeholder.style.cssText = `
          width: 100%;
          height: 200px;
          background: #f3f4f6;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          font-size: 14px;
          border-radius: 8px;
          margin: 0 auto;
        `;
        placeholder.textContent = 'Imagen no disponible';
        
        img.parentNode?.insertBefore(placeholder, img);
      }
    });
  });

  // Corregir sliders específicamente
  const sliders = document.querySelectorAll('.slider');
  sliders.forEach(slider => {
    const sliderDivs = slider.querySelectorAll('div');
    sliderDivs.forEach(div => {
      // Asegurar que los divs del slider tengan altura mínima
      if (!div.style.minHeight) {
        div.style.minHeight = '200px';
      }
      
      // Asegurar que los divs del slider centren el contenido
      div.style.display = 'flex';
      div.style.alignItems = 'center';
      div.style.justifyContent = 'center';
      div.style.overflow = 'hidden';
    });
  });

  // Corregir contenedores de proyectos
  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach(item => {
    const sliderContainer = item.querySelector('.slider-container');
    if (sliderContainer) {
      // Asegurar altura mínima
      if (!sliderContainer.style.minHeight) {
        sliderContainer.style.minHeight = '200px';
      }
    }
  });
}

/**
 * Optimiza la carga de imágenes en móviles
 */
export function optimizeMobileImageLoading(): void {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                   window.innerWidth <= 768;
  
  if (!isMobile) return;

  // Implementar lazy loading mejorado
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        
        // Cargar imagen con prioridad
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        
        // Agregar clase de carga
        img.classList.add('loaded');
        
        imageObserver.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.1
  });

  // Observar todas las imágenes
  const images = document.querySelectorAll('img[data-src], img:not([data-src])');
  images.forEach(img => imageObserver.observe(img));
}

/**
 * Corrige problemas de altura en sliders móviles
 */
export function fixMobileSliderHeight(): void {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                   window.innerWidth <= 768;
  
  if (!isMobile) return;

  const sliders = document.querySelectorAll('.slider-container');
  sliders.forEach(slider => {
    // Asegurar altura mínima
    slider.style.minHeight = '200px';
    
    const sliderElement = slider.querySelector('.slider');
    if (sliderElement) {
      sliderElement.style.minHeight = '200px';
      
      // Corregir divs internos
      const sliderDivs = sliderElement.querySelectorAll('div');
      sliderDivs.forEach(div => {
        div.style.minHeight = '200px';
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'center';
        div.style.overflow = 'hidden';
      });
    }
  });
}

/**
 * Agrega estilos CSS dinámicos para corregir imágenes
 */
export function addMobileImageStyles(): void {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                   window.innerWidth <= 768;
  
  if (!isMobile) return;

  const style = document.createElement('style');
  style.textContent = `
    /* Estilos específicos para imágenes en móviles */
    @media (max-width: 768px) {
      .slider-container {
        min-height: 200px !important;
        overflow: hidden;
      }
      
      .slider {
        min-height: 200px !important;
      }
      
      .slider > div {
        min-height: 200px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        overflow: hidden !important;
      }
      
      .slider img {
        max-width: 100% !important;
        max-height: 100% !important;
        width: auto !important;
        height: auto !important;
        object-fit: contain !important;
        display: block !important;
        margin: 0 auto !important;
      }
      
      .project-item {
        min-height: 300px;
      }
      
      .project-item .slider-container {
        min-height: 200px !important;
      }
    }
    
    /* Estilos para imágenes que no cargan */
    .image-placeholder {
      width: 100%;
      height: 200px;
      background: #f3f4f6;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #6b7280;
      font-size: 14px;
      border-radius: 8px;
      margin: 0 auto;
    }
    
    /* Animación de carga para imágenes */
    img:not(.loaded) {
      opacity: 0.7;
      transition: opacity 0.3s ease;
    }
    
    img.loaded {
      opacity: 1;
    }
  `;
  
  document.head.appendChild(style);
}

/**
 * Inicializa todas las correcciones de imágenes móviles
 */
export function initializeMobileImageFixes(): void {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                   window.innerWidth <= 768;
  
  if (!isMobile) return;

  // Aplicar correcciones inmediatamente
  fixMobileImageDisplay();
  fixMobileSliderHeight();
  addMobileImageStyles();
  
  // Optimizar carga
  optimizeMobileImageLoading();
  
  // Re-aplicar correcciones cuando cambie el tamaño de ventana
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
      fixMobileImageDisplay();
      fixMobileSliderHeight();
    }
  });
  
  // Re-aplicar correcciones cuando se carguen nuevas imágenes
  const observer = new MutationObserver(() => {
    fixMobileImageDisplay();
    fixMobileSliderHeight();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}
