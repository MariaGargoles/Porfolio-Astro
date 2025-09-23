# Mejoras de Accesibilidad Implementadas

Este documento describe las mejoras de accesibilidad implementadas en el portfolio de María Gargoles para cumplir con las pautas WCAG 2.1 AA.

## 🎯 Objetivos Cumplidos

### 1. HTML Semántico

- ✅ Uso de elementos semánticos apropiados (`<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`)
- ✅ Estructura de encabezados jerárquica (h1, h2, h3)
- ✅ Enlaces de salto al contenido principal
- ✅ Roles ARIA apropiados

### 2. Navegación por Teclado

- ✅ Todos los elementos interactivos son accesibles por teclado
- ✅ Navegación con Tab, Enter, Espacio y flechas direccionales
- ✅ Indicadores de foco visibles y consistentes
- ✅ Atrapado de foco en elementos modales

### 3. Etiquetas ARIA

- ✅ `aria-label` para elementos sin texto visible
- ✅ `aria-current` para indicar página activa
- ✅ `aria-live` para anuncios dinámicos
- ✅ `role` apropiados para elementos personalizados

### 4. Contraste de Colores

- ✅ Contraste mínimo de 4.5:1 para texto normal
- ✅ Contraste mínimo de 3:1 para texto grande
- ✅ Indicadores de foco con alto contraste
- ✅ Soporte para modo oscuro accesible

### 5. Textos Alternativos

- ✅ Todas las imágenes tienen `alt` descriptivos
- ✅ Atributos `width` y `height` para evitar layout shift
- ✅ Textos alternativos contextuales y descriptivos

### 6. Gestión de Foco

- ✅ Indicadores de foco consistentes
- ✅ Navegación secuencial lógica
- ✅ Gestión de foco en elementos dinámicos
- ✅ Utilidades de accesibilidad reutilizables

## 🛠️ Implementaciones Técnicas

### Enlaces de Salto

```html
<a href="#main-content" class="skip-link">Saltar al contenido principal</a>
```

### Estructura Semántica

```html
<main id="main-content" role="main">
  <section aria-labelledby="projects-heading">
    <h2 id="projects-heading">Últimos Trabajos</h2>
  </section>
</main>
```

### Navegación Accesible

```html
<nav role="navigation" aria-label="Navegación principal">
  <a href="/about" aria-current="page">About</a>
</nav>
```

### Botones Accesibles

```html
<button
  aria-label="Alternar entre modo claro y oscuro"
  type="button"
  class="focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <FaRegMoon aria-hidden="true" />
</button>
```

### Imágenes Accesibles

```html
<img
  src="foto.jpg"
  alt="Fotografía profesional de María Gargoles Lajarin, desarrolladora Full Stack"
  width="192"
  height="192"
/>
```

## 🎨 Mejoras de Estilo

### Indicadores de Foco

```css
*:focus {
  outline: 2px solid #0066cc !important;
  outline-offset: 2px !important;
}

html.dark *:focus {
  outline: 2px solid #66b3ff !important;
  outline-offset: 2px !important;
}
```

### Clase para Lectores de Pantalla

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## 🚀 Utilidades de Accesibilidad

Se ha creado un archivo de utilidades (`src/utils/accessibility.ts`) que incluye:

- **Gestión de foco**: Para elementos dinámicos
- **Atrapado de foco**: Para modales y dropdowns
- **Anuncios a lectores de pantalla**: Para cambios dinámicos
- **Navegación por teclado mejorada**: Para sliders y galerías
- **Validación de contraste**: Para verificar accesibilidad

## 📋 Checklist de Verificación

### Navegación

- [x] Todos los enlaces tienen texto descriptivo
- [x] La navegación es accesible por teclado
- [x] Los indicadores de foco son visibles
- [x] Existe un enlace de salto al contenido principal

### Contenido

- [x] Estructura de encabezados jerárquica
- [x] Todas las imágenes tienen texto alternativo
- [x] El contenido es comprensible sin CSS
- [x] Los formularios tienen etiquetas apropiadas

### Interactividad

- [x] Todos los botones son accesibles por teclado
- [x] Los elementos interactivos tienen roles ARIA
- [x] Los cambios de estado se anuncian a lectores de pantalla
- [x] La navegación por teclado es intuitiva

### Contraste y Colores

- [x] Contraste mínimo de 4.5:1 para texto
- [x] Los colores no son la única forma de transmitir información
- [x] Indicadores de foco con alto contraste
- [x] Soporte para modo oscuro accesible

## 🔧 Herramientas de Desarrollo

Para verificar la accesibilidad, se recomienda usar:

1. **Lighthouse** - Auditoría de accesibilidad integrada
2. **axe-core** - Herramienta de testing automatizado
3. **WAVE** - Evaluador web de accesibilidad
4. **NVDA/JAWS** - Lectores de pantalla para testing manual

## 📚 Recursos Adicionales

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM](https://webaim.org/) - Recursos de accesibilidad web
- [A11y Project](https://www.a11yproject.com/) - Guías prácticas de accesibilidad

## 🎯 Próximos Pasos

Para mantener y mejorar la accesibilidad:

1. **Testing regular** con herramientas automatizadas
2. **Testing manual** con lectores de pantalla
3. **Feedback de usuarios** con discapacidades
4. **Actualizaciones** según nuevas pautas WCAG
5. **Formación del equipo** en mejores prácticas de accesibilidad

---

_Este documento se actualiza regularmente para reflejar las mejoras implementadas en el portfolio._
