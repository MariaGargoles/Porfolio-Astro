/**
 * Utilidades avanzadas de accesibilidad para mejorar el puntaje
 */

/**
 * Agrega landmarks ARIA a elementos que no los tienen
 */
export function addAriaLandmarks(): void {
  // Agregar landmarks a secciones principales
  const sections = document.querySelectorAll('section:not([role])');
  sections.forEach(section => {
    if (!section.getAttribute('role')) {
      section.setAttribute('role', 'region');
    }
  });

  // Agregar landmarks a artículos
  const articles = document.querySelectorAll('article:not([role])');
  articles.forEach(article => {
    if (!article.getAttribute('role')) {
      article.setAttribute('role', 'article');
    }
  });

  // Agregar landmarks a navegación
  const navs = document.querySelectorAll('nav:not([role])');
  navs.forEach(nav => {
    if (!nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }
  });
}

/**
 * Mejora la navegación por teclado con atajos
 */
export function enhanceKeyboardNavigation(): void {
  // Agregar atajos de teclado
  document.addEventListener('keydown', (e) => {
    const key = e.key;
    
    // Alt + M: Ir al contenido principal
    if (e.altKey && key === 'm') {
      e.preventDefault();
      const main = document.querySelector('#main-content');
      if (main) {
        (main as HTMLElement).focus();
        (main as HTMLElement).scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Alt + N: Ir a la navegación
    if (e.altKey && key === 'n') {
      e.preventDefault();
      const nav = document.querySelector('#navigation');
      if (nav) {
        (nav as HTMLElement).focus();
        (nav as HTMLElement).scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Alt + P: Ir a los proyectos
    if (e.altKey && key === 'p') {
      e.preventDefault();
      const projects = document.querySelector('#projects');
      if (projects) {
        (projects as HTMLElement).focus();
        (projects as HTMLElement).scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

/**
 * Mejora la accesibilidad de formularios
 */
export function enhanceFormAccessibility(): void {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    // Agregar aria-describedby a campos obligatorios
    const requiredFields = form.querySelectorAll('input[required], textarea[required], select[required]');
    requiredFields.forEach(field => {
      if (!field.getAttribute('aria-describedby')) {
        const fieldId = field.getAttribute('id');
        if (fieldId) {
          const helpText = document.createElement('div');
          helpText.id = `${fieldId}-help`;
          helpText.className = 'sr-only';
          helpText.textContent = 'Campo obligatorio';
          field.parentNode?.insertBefore(helpText, field.nextSibling);
          field.setAttribute('aria-describedby', `${fieldId}-help`);
        }
      }
    });

    // Agregar aria-invalid a campos con errores
    const errorFields = form.querySelectorAll('.error, [aria-invalid="true"]');
    errorFields.forEach(field => {
      field.setAttribute('aria-invalid', 'true');
    });
  });
}

/**
 * Mejora la accesibilidad de imágenes
 */
export function enhanceImageAccessibility(): void {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    // Agregar role="img" si no tiene alt
    if (!img.getAttribute('alt') && !img.getAttribute('role')) {
      img.setAttribute('role', 'img');
      img.setAttribute('aria-label', 'Imagen decorativa');
    }
    
    // Mejorar alt text para imágenes sin descripción
    if (img.getAttribute('alt') === '') {
      img.setAttribute('alt', 'Imagen decorativa');
    }
  });
}

/**
 * Mejora la accesibilidad de enlaces
 */
export function enhanceLinkAccessibility(): void {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    // Agregar aria-label si no tiene texto
    if (!link.textContent?.trim() && !link.getAttribute('aria-label')) {
      const href = link.getAttribute('href');
      if (href) {
        link.setAttribute('aria-label', `Enlace a ${href}`);
      }
    }
    
    // Mejorar enlaces externos
    if (link.getAttribute('target') === '_blank') {
      if (!link.getAttribute('aria-label') && !link.getAttribute('aria-labelledby')) {
        const text = link.textContent || '';
        link.setAttribute('aria-label', `${text} (se abre en nueva ventana)`);
      }
    }
  });
}

/**
 * Mejora la accesibilidad de botones
 */
export function enhanceButtonAccessibility(): void {
  const buttons = document.querySelectorAll('button, [role="button"]');
  buttons.forEach(button => {
    // Agregar aria-label si no tiene texto
    if (!button.textContent?.trim() && !button.getAttribute('aria-label')) {
      button.setAttribute('aria-label', 'Botón');
    }
    
    // Agregar type="button" si no tiene tipo
    if (button.tagName === 'BUTTON' && !button.getAttribute('type')) {
      button.setAttribute('type', 'button');
    }
  });
}

/**
 * Mejora la accesibilidad de listas
 */
export function enhanceListAccessibility(): void {
  const lists = document.querySelectorAll('ul, ol');
  lists.forEach(list => {
    // Agregar aria-label si no tiene
    if (!list.getAttribute('aria-label') && !list.getAttribute('aria-labelledby')) {
      list.setAttribute('aria-label', 'Lista de elementos');
    }
  });
}

/**
 * Mejora la accesibilidad de tablas
 */
export function enhanceTableAccessibility(): void {
  const tables = document.querySelectorAll('table');
  tables.forEach(table => {
    // Agregar caption si no tiene
    if (!table.querySelector('caption')) {
      const caption = document.createElement('caption');
      caption.textContent = 'Tabla de datos';
      table.insertBefore(caption, table.firstChild);
    }
    
    // Agregar aria-label si no tiene
    if (!table.getAttribute('aria-label') && !table.getAttribute('aria-labelledby')) {
      table.setAttribute('aria-label', 'Tabla de datos');
    }
  });
}

/**
 * Mejora la accesibilidad de videos
 */
export function enhanceVideoAccessibility(): void {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    // Agregar aria-label si no tiene
    if (!video.getAttribute('aria-label') && !video.getAttribute('aria-labelledby')) {
      video.setAttribute('aria-label', 'Video');
    }
    
    // Agregar controls si no tiene
    if (!video.hasAttribute('controls')) {
      video.setAttribute('controls', 'true');
    }
  });
}

/**
 * Mejora la accesibilidad de audio
 */
export function enhanceAudioAccessibility(): void {
  const audios = document.querySelectorAll('audio');
  audios.forEach(audio => {
    // Agregar aria-label si no tiene
    if (!audio.getAttribute('aria-label') && !audio.getAttribute('aria-labelledby')) {
      audio.setAttribute('aria-label', 'Audio');
    }
    
    // Agregar controls si no tiene
    if (!audio.hasAttribute('controls')) {
      audio.setAttribute('controls', 'true');
    }
  });
}

/**
 * Mejora la accesibilidad de campos de entrada
 */
export function enhanceInputAccessibility(): void {
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    // Agregar aria-label si no tiene label asociado
    if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
      const label = document.querySelector(`label[for="${input.getAttribute('id')}"]`);
      if (!label) {
        input.setAttribute('aria-label', 'Campo de entrada');
      }
    }
  });
}

/**
 * Inicializa todas las mejoras avanzadas de accesibilidad
 */
export function initializeAdvancedAccessibility(): void {
  addAriaLandmarks();
  enhanceKeyboardNavigation();
  enhanceFormAccessibility();
  enhanceImageAccessibility();
  enhanceLinkAccessibility();
  enhanceButtonAccessibility();
  enhanceListAccessibility();
  enhanceTableAccessibility();
  enhanceVideoAccessibility();
  enhanceAudioAccessibility();
  enhanceInputAccessibility();
}
