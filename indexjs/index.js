console.clear();
// Configuración inicial
const colors = [
  "#0d171a",
  "#0d171a",
  "#663300",
  "#006600",
  "#cc5200",
  "#6b00b3"
];
const slider = gsap.utils.toArray(".slider");
const deslizador = document.querySelector('.slider');
const items = document.querySelector(".slider");
const slidesArray = slider.map((slider) => 
  gsap.utils.toArray(".slide", slider)
);
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const bullets = document.querySelectorAll(".bullets .progres_bar");
let currentIndex = 0;
let isTweening = false;

// Variables para el sistema de arrastre
const itemWidth = items.offsetWidth;
let isDragging = false;
let startX = 0;
let currentX = 0;
const threshold = itemWidth * 0.25; // Umbral aumentado al 25%

// Inicialización de slides
slidesArray.forEach((slides) => {
  slides.forEach((slide, i) => {
    gsap.set(slide, {
      backgroundColor: colors[i],
      xPercent: i > 0 ? 100 : 0,
      opacity: i > 0 ? 0 : 1
    });
    if (i === 0) {
      slide.classList.add("active");
      bullets[i].classList.add("active");
    }
  });
});

// Función para navegar entre slides (circular)
const gotoSlide = (direction) => {
  if (isTweening) return;
  isTweening = true;

  const first = slidesArray[0];
  const currentSlides = [];
  const nextSlides = [];

  // Quitar clases activas
  slidesArray.forEach((slides) => {
    const currentSlide = slides[currentIndex];
    currentSlides.push(currentSlide);
    currentSlide.classList.remove("active");
  });
  bullets[currentIndex].classList.remove("active");

  // Calcular nuevo índice (comportamiento circular)
  let newIndex = currentIndex + direction;
  if (newIndex < 0) newIndex = first.length - 1;
  if (newIndex >= first.length) newIndex = 0;
  currentIndex = newIndex;

  // Añadir clases activas
  slidesArray.forEach((slides) => {
    const nextSlide = slides[currentIndex];
    nextSlides.push(nextSlide);
    nextSlide.classList.add("active");
  });
  bullets[currentIndex].classList.add("active");

  // Configurar animaciones según dirección
  if (direction > 0) {
    // Movimiento hacia la derecha
    gsap.set(nextSlides, { xPercent: 100, opacity: 1 });
    gsap.to(currentSlides, {
      xPercent: -100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => (isTweening = false)
    });
    gsap.to(nextSlides, {
      xPercent: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  } else if (direction < 0) {
    // Movimiento hacia la izquierda
    gsap.set(nextSlides, { xPercent: -100, opacity: 1 });
    gsap.to(currentSlides, {
      xPercent: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => (isTweening = false)
    });
    gsap.to(nextSlides, {
      xPercent: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  } else {
    // Cancelación (volver al slide actual)
    gsap.to(currentSlides, {
      xPercent: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => (isTweening = false)
    });
    
    // Asegurarse de ocultar slides adyacentes
    slidesArray.forEach((slides) => {
      const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : slides.length - 1;
      const nextIndex = currentIndex + 1 < slides.length ? currentIndex + 1 : 0;
      
      gsap.to([slides[prevIndex], slides[nextIndex]], {
        xPercent: (slide) => slides.indexOf(slide) < currentIndex ? -100 : 100,
        opacity: 0,
        duration: 0.3
      });
    });
  }
};

// Eventos para botones de navegación
next.addEventListener("click", () => gotoSlide(1));
prev.addEventListener("click", () => gotoSlide(-1));

// Funciones para el sistema de arrastre (VERSIÓN CORREGIDA)
const startDrag = (event) => {
  if (isTweening) return;
  isDragging = true;
  startX = event.touches ? event.touches[0].clientX : event.clientX;
  gsap.globalTimeline.pause();
  
  // Resetear posiciones de los slides adyacentes
  slidesArray.forEach((slides) => {
    const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : slides.length - 1;
    const nextIndex = currentIndex + 1 < slides.length ? currentIndex + 1 : 0;
    
    gsap.set(slides[prevIndex], { xPercent: -100, opacity: 0 });
    gsap.set(slides[nextIndex], { xPercent: 100, opacity: 0 });
  });
};

const onDrag = (event) => {
  if (!isDragging || isTweening) return;
  
  currentX = event.touches ? event.touches[0].clientX : event.clientX;
  const diffX = currentX - startX;
  
  // Mover slides actuales y adyacentes para efecto de arrastre
  slidesArray.forEach((slides) => {
    const currentSlide = slides[currentIndex];
    gsap.set(currentSlide, { xPercent: diffX * 0.2 });
    
    // Determinar slide adyacente (comportamiento circular)
    let adjacentIndex;
    if (diffX > 0) {
      adjacentIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : slides.length - 1;
    } else {
      adjacentIndex = currentIndex + 1 < slides.length ? currentIndex + 1 : 0;
    }
    
    const adjacentSlide = slides[adjacentIndex];
    gsap.set(adjacentSlide, {
      xPercent: diffX > 0 ? -100 + diffX * 0.2 : 100 + diffX * 0.2,
      opacity: Math.min(1, Math.abs(diffX) / (itemWidth * 0.5))
    });
    
    // Ocultar el slide opuesto
    const oppositeIndex = diffX > 0 ? 
      (currentIndex + 1 < slides.length ? currentIndex + 1 : 0) :
      (currentIndex - 1 >= 0 ? currentIndex - 1 : slides.length - 1);
    gsap.set(slides[oppositeIndex], { 
      xPercent: diffX > 0 ? 100 : -100, 
      opacity: 0 
    });
  });
};

const endDrag = () => {
  if (!isDragging || isTweening) return;
  isDragging = false;
  
  const diffX = currentX - startX;
  const absDiff = Math.abs(diffX);
  
  gsap.globalTimeline.resume();
  
  if (absDiff > threshold) {
    const direction = diffX > 0 ? -1 : 1;
    gotoSlide(direction);
  } else {
    gotoSlide(0); // Vuelve al slide actual si no se superó el umbral
  }
};

// Eventos para el sistema de arrastre
deslizador.addEventListener('mousedown', startDrag);
window.addEventListener('mousemove', onDrag);
window.addEventListener('mouseup', endDrag);
deslizador.addEventListener('touchstart', startDrag, { passive: true });
window.addEventListener('touchmove', onDrag, { passive: true });
window.addEventListener('touchend', endDrag);


























