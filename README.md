# Landing Page - Fran Coach

MVP de landing page para servicio integral de asesoramiento físico, entrenamiento deportivo y cambio de hábitos.

## 📋 Características

### ✅ Secciones Implementadas

1. **Navbar Sticky** - Navegación fija con menú responsivo
2. **Hero Section** - Headline impactante con CTA principal
3. **Video Section** - Espacio para video explicativo (placeholder)
4. **Servicios** - 4 servicios principales en grid responsive
5. **Resultados** - Estadísticas y números impactantes
6. **Testimonios** - 3 testimonios de clientes reales
7. **Metodología** - 4 pasos del proceso de transformación
8. **CTA Section** - Call-to-action intermedio
9. **Formulario de Captación** - Con validación en tiempo real
10. **Footer** - Links y redes sociales

### 🎨 Diseño

**Paleta de Colores:**
- **Naranja Primario** (#FF6B35) - Energía, acción
- **Azul Secundario** (#0A2F51) - Confianza, solidez
- **Verde Accent** (#26D07C) - Crecimiento, vida
- **Gris Oscuro** (#1F1F1F) - Modernidad
- **Gris Claro** (#F5F5F5) - Espacios en blanco

**Elementos Visuales:**
- Gradientes modernos
- Sombras sutiles
- Rounded corners (12px border-radius)
- Animaciones suaves
- Hover effects en CTAs

### 📱 Responsivo

- Mobile-first design
- Breakpoints: 1200px, 768px, 480px
- Menú mobile funcional
- Grid adaptativo
- Typography escalable

## 🚀 Características Técnicas

### JavaScript Functionality

✅ **Mobile Menu Toggle** - Menú responsivo funcional
✅ **Form Validation** - Validación en tiempo real y al enviar
✅ **Notifications** - Sistema de notificaciones elegante
✅ **Smooth Scrolling** - Scroll suave a secciones
✅ **Intersection Observer** - Animaciones al entrar en vista
✅ **Stats Counter** - Contador animado para estadísticas
✅ **Scroll Effects** - Efectos en navbar al scroll
✅ **Scroll to Top** - Botón flotante para volver arriba

### SEO Ready

- Etiquetas semánticas HTML5
- Meta description
- Heading structure correcta
- Alt text en imágenes
- Schema markup listo

## 📝 Próximos Pasos

### 1. Agregar Contenido Real

- [ ] Foto/video del coach
- [ ] Video explicativo (YouTube/Vimeo)
- [ ] Testimonioss reales con fotos
- [ ] Descripción completa de servicios
- [ ] Links a redes sociales (Instagram, WhatsApp)

### 2. Configurar Backend

- [ ] Integrar API para envío de formularios
- [ ] Envío de emails de confirmación
- [ ] Integración con CRM
- [ ] Analytics (Google Analytics, Facebook Pixel)

### 3. Optimización para Meta Ads

- [ ] Google Tag Manager
- [ ] Facebook Pixel
- [ ] Tracking de conversiones
- [ ] A/B testing setup

### 4. Mejoras Futuras

- [ ] Blog/recursos
- [ ] Gallery de transformaciones
- [ ] Testimonios en video
- [ ] Chat de WhatsApp flotante
- [ ] Integración con calendly/calendarios
- [ ] Dark mode toggle

## 🔧 Guía de Edición

### Cambiar Colores

Edita las variables CSS en `styles.css` (líneas 1-9):

```css
--color-primary: #FF6B35;      /* Naranja - CTA botones */
--color-secondary: #0A2F51;    /* Azul - Fondos oscuros */
--color-accent: #26D07C;       /* Verde - Acentos */
--color-dark: #1F1F1F;         /* Gris oscuro - Textos principales */
```

### Cambiar Imágenes Placeholder

Busca URLs de placeholder en `index.html`:

```html
<!-- Hero image -->
<img src="https://via.placeholder.com/600x600/FF6B35/ffffff?text=Tu+Foto+Aqui" alt="Coach">

<!-- Video section -->
<img src="https://via.placeholder.com/1200x675/0A2F51/ffffff?text=Video+Explicativo" alt="Video">
```

Reemplaza con tus URLs reales.

### Modificar Servicios

En `index.html`, sección "services":

```html
<div class="service-card">
    <div class="service-card__icon"><!-- SVG --></div>
    <h3>Tu Servicio</h3>
    <p>Descripción del servicio</p>
</div>
```

### Agregar Testimonios

En `index.html`, sección "testimonios":

```html
<div class="testimonial-card">
    <div class="testimonial-card__stars">★★★★★</div>
    <p class="testimonial-card__text">"Tu testimonio aquí..."</p>
    <div class="testimonial-card__author">
        <div class="author-avatar">TU</div>
        <div>
            <p class="author-name">Nombre Cliente</p>
            <p class="author-role">Resultado/Objetivo</p>
        </div>
    </div>
</div>
```

### Conectar Formulario

En `script.js`, función `submitForm` (línea ~50):

```javascript
// Reemplazar simulación con fetch real:
fetch('/api/submit-form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
    showNotification('¡Gracias! Te contactaremos pronto', 'success');
    contactForm.reset();
})
```

## 📊 Analytics

La página está lista para integrar:

- **Google Analytics 4** - Tracking de eventos
- **Facebook Pixel** - Para retargeting en Meta Ads
- **Google Tag Manager** - Gestión centralizada de tags
- **Hotjar** - Heatmaps y recordings

## 🎯 Enfoque Conversión

✅ **Hero fuerte** - Propuesta de valor clara en above the fold
✅ **Video explicativo** - Genera confianza
✅ **Servicios claros** - Muestra el valor
✅ **Testimonios sociales** - Prueba social
✅ **CTAs múltiples** - Opciones de conversión
✅ **Formulario simple** - Bajo fricción
✅ **Beneficios del form** - Justifica llenar datos
✅ **Llamada de acción clara** - Consulta gratuita

## 📱 Testing Recomendado

- [ ] Chrome, Firefox, Safari, Edge
- [ ] iPhone 12, 13, 14+
- [ ] Android Samsung, Pixel
- [ ] Tablet iPad
- [ ] Velocidad de carga (Google PageSpeed)
- [ ] Accesibilidad (WCAG 2.1)

## 🔐 Seguridad

- Validación de inputs en cliente y servidor (implementar)
- Protección CSRF (implementar)
- Rate limiting en formularios (implementar)
- HTTPS recomendado
- reCAPTCHA en formulario (considerar)

## 📞 Configuración de Links

Actualiza estos links con la información real:

```html
<!-- Instagram -->
<a href="https://instagram.com/tu-usuario" class="social-link">📱 Instagram</a>

<!-- WhatsApp -->
<a href="https://wa.me/tunumero" class="social-link">💬 WhatsApp</a>

<!-- Email footer -->
<a href="mailto:tu-email@dominio.com">tu-email@dominio.com</a>
```

---

**Creado**: Abril 2024
**Última actualización**: MVP inicial completado
**Status**: Listo para agregar contenido real
