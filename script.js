// ===========================
// MOBILE MENU TOGGLE
// ===========================

const navbarToggle = document.querySelector('.navbar__toggle');
const navbarMenu = document.querySelector('.navbar__menu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Cerrar menu al hacer click en un link
document.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });
});

// ===========================
// FORM HANDLING
// ===========================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener datos del formulario
    const formData = new FormData(contactForm);
    const data = {
        nombre: contactForm.querySelector('input[type="text"]').value,
        email: contactForm.querySelector('input[type="email"]').value,
        telefono: contactForm.querySelector('input[type="tel"]').value,
        objetivo: contactForm.querySelector('select').value,
        mensaje: contactForm.querySelector('textarea').value,
    };

    // Validar datos
    if (!data.nombre || !data.email || !data.telefono || !data.objetivo) {
        showNotification('Por favor completa todos los campos', 'error');
        return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Por favor ingresa un email válido', 'error');
        return;
    }

    // Simular envío (en el futuro se conectará a un backend)
    console.log('Datos del formulario:', data);

    // Mostrar mensaje de éxito
    showNotification('¡Gracias! Te contactaremos en menos de 24h', 'success');

    // Limpiar formulario
    contactForm.reset();

    // En el futuro aquí iría:
    // fetch('/api/submit-form', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    // })
});

// ===========================
// NOTIFICATION SYSTEM
// ===========================

function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;

    // Estilos en línea
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#26D07C' : type === 'error' ? '#FF6B35' : '#0A2F51'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        font-weight: 600;
        max-width: 400px;
    `;

    // Agregar animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Remover después de 5 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ===========================
// SMOOTH SCROLLING ENHANCEMENT
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===========================
// INTERSECTION OBSERVER PARA ANIMACIONES
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos con clase de animación
document.querySelectorAll('.service-card, .testimonial-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================

let scrollPosition = 0;

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// ===========================
// STATS COUNTER ANIMATION
// ===========================

function animateNumbers() {
    const stats = document.querySelectorAll('.stat__number');

    stats.forEach(stat => {
        const target = parseInt(stat.textContent);

        // Si contiene símbolo como ★, no animar
        if (isNaN(target)) return;

        let current = 0;
        const increment = target / 50;

        const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = stat.dataset.target || stat.textContent;
                clearInterval(counter);
            } else {
                stat.textContent = Math.floor(current) + '+';
            }
        }, 30);
    });
}

// Animar números cuando se hacen visibles
const statsSection = document.querySelector('.results__stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateNumbers();
            statsObserver.unobserve(statsSection);
        }
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
}

// ===========================
// VIDEO PLAY (placeholder)
// ===========================

const videoPlaceholder = document.querySelector('.video-placeholder');
if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', () => {
        showNotification('Video: Tu video explicativo irá aquí. Configura la URL cuando tengas el video listo.', 'info');
        // En el futuro: abrir modal con video embebido
    });
}

// ===========================
// FORM FIELD VALIDATION IN REAL-TIME
// ===========================

const formInputs = document.querySelectorAll('.form-input');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (input.value && !emailRegex.test(input.value)) {
                input.style.borderColor = '#FF6B35';
            } else {
                input.style.borderColor = '#E0E0E0';
            }
        } else if (input.value) {
            input.style.borderColor = '#26D07C';
        }
    });

    input.addEventListener('focus', () => {
        input.style.borderColor = '#FF6B35';
    });
});

// ===========================
// SCROLL TO TOP BUTTON
// ===========================

function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #FF6B35, #26D07C);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 999;
        box-shadow: 0 5px 20px rgba(255, 107, 53, 0.3);
        transition: all 0.3s ease;
    `;

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.display = 'flex';
        } else {
            button.style.display = 'none';
        }
    });

    document.body.appendChild(button);
}

createScrollToTopButton();

// ===========================
// MOBILE MENU STYLES
// ===========================

const mobileMenuStyle = document.createElement('style');
mobileMenuStyle.textContent = `
    @media (max-width: 768px) {
        .navbar__menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            display: none;
        }

        .navbar__menu.active {
            display: flex;
        }

        .navbar__menu li {
            padding: 10px 0;
            border-bottom: 1px solid #E0E0E0;
        }

        .navbar__menu li:last-child {
            border-bottom: none;
        }
    }
`;
document.head.appendChild(mobileMenuStyle);

// ===========================
// INITIALIZE
// ===========================

console.log('Landing page initialized successfully');
