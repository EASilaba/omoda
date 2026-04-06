/**
 * Menú móvil: cerrar el dropdown al hacer clic en un enlace.
 */
function initNavMobile() {
  const toggle = document.getElementById('nav-toggle');
  const dropdown = document.getElementById('nav-dropdown');
  if (!toggle || !dropdown) return;

  dropdown.querySelectorAll('.nav-dropdown__link').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.checked = false;
    });
  });
}

/**
 * Slider hero: controles anterior/siguiente funcionan con cualquier cantidad de slides.
 * Los radios name="slider" y el ancho de .content se siguen configurando en HTML/CSS.
 */
function initSliderControls() {
  const slider = document.querySelector('.slider');
  if (!slider) return;

  const radios = slider.querySelectorAll('input[name="slider"]');
  const prevBtn = slider.querySelector('.slider-control-prev');
  const nextBtn = slider.querySelector('.slider-control-next');

  if (radios.length === 0 || !prevBtn || !nextBtn) return;

  function goTo(index) {
    const i = (index + radios.length) % radios.length;
    radios[i].checked = true;
  }

  function getCurrentIndex() {
    return Array.from(radios).findIndex(function (r) { return r.checked; });
  }

  prevBtn.addEventListener('click', function () {
    goTo(getCurrentIndex() - 1);
  });

  nextBtn.addEventListener('click', function () {
    goTo(getCurrentIndex() + 1);
  });


const autoPlayInterval = 18000; // Change every 3 seconds

function startAutoPlay() {
  intervalId = setInterval(() => {
    const currentIndex = getCurrentIndex();
    goTo(currentIndex + 1);
  }, autoPlayInterval);
}

function stopAutoPlay() {
  clearInterval(intervalId);
}

startAutoPlay();

}

/**
 * Evita el salto de scroll al elegir color: el clic en <label for> enfoca el
 * radio asociado y el navegador hace scroll para mostrarlo. Interceptamos el
 * clic y marcamos el radio sin el foco por defecto del label.
 */
function initColorCustomizationNoScroll() {
  var section = document.querySelector('.color-customization-section');
  if (!section) return;

  section.querySelectorAll('.color-selector label[for^="ccc-"]').forEach(function (label) {
    label.addEventListener('click', function (e) {
      var id = label.getAttribute('for');
      var input = id ? document.getElementById(id) : null;
      if (!input || input.type !== 'radio' || input.name !== 'custom-color') return;
      e.preventDefault();
      input.checked = true;
    });
  });
}

function syncColorPicker() {
  const inputs = document.querySelectorAll('.main__color__picker input[type="radio"]');
  const activeClass = 'selected';
  const infoToggle = document.querySelectorAll('.button-group > button');
  const tableBtn = document.querySelector('#tableViewBtn');
  const cardBtn = document.querySelector('#cardViewBtn');
  const tableView = document.querySelector('#tableView');
  const cardView = document.querySelector('#cardView');

  // SOLUCIÓN: Usar función flecha
  infoToggle.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains('button-secondary')) {
        tableBtn.classList.toggle('button-primary');
        tableBtn.classList.toggle('button-secondary');
        cardBtn.classList.toggle('button-primary');
        cardBtn.classList.toggle('button-secondary');
        cardView.classList.toggle('hidden')
        tableView.classList.toggle('hidden')
      }
    });
  });


  function handleInputChange() {
    document.querySelectorAll('.main__color__picker .color-option').forEach(opt => {
      opt.classList.remove(activeClass);
    });

    const checked = document.querySelector('.main__color__picker input[type="radio"]:checked');
    if (checked) {
      const label = document.querySelector(`.main__color__picker label[for="${checked.id}"]`);
      if (label) label.classList.add(activeClass);
    }
  }

  // Agregar eventos
  inputs.forEach(input => {
    input.addEventListener('change', handleInputChange);

    // También actualizar cuando se hace click en el label
    const label = document.querySelector(`.main__color__picker label[for="${input.id}"]`);
    if (label) {
      label.addEventListener('click', () => {
        input.checked = true;
        handleInputChange();
      });
    }
  });

  handleInputChange();

}


// Inicializar
/**
 * Carrusel de galería: desplazamiento por el ancho de una tarjeta + gap.
 */
function initMediaCarousel() {
  var root = document.querySelector('[data-media-carousel]');
  if (!root) return;

  var viewport = root.querySelector('.media-carousel__viewport');
  var track = root.querySelector('.media-carousel__track');
  var prev = root.querySelector('.media-carousel__btn--prev');
  var next = root.querySelector('.media-carousel__btn--next');
  if (!viewport || !track || !prev || !next) return;

  function slideStep() {
    var slide = track.querySelector('.media-carousel__slide');
    if (!slide) return 0;
    var w = slide.getBoundingClientRect().width;
    var style = window.getComputedStyle(track);
    var gap = parseFloat(style.columnGap || style.gap) || 16;
    return w + gap;
  }

  prev.addEventListener('click', function () {
    viewport.scrollBy({ left: -slideStep(), behavior: 'smooth' });
  });
  next.addEventListener('click', function () {
    viewport.scrollBy({ left: slideStep(), behavior: 'smooth' });
  });
}

/**
 * Slider ADAS (.safety-section): imágenes ./images/1adas.jpg, 2adas.jpg, …
 */
function initSafetySlider() {
  var section = document.querySelector('[data-safety-slider]');
  if (!section) return;

  var slides = [
    {
      src: './images/1adas.jpg',
      title: 'Alerta de colisión frontal y trasera',
      description: 'Te avisa ante posibles impactos para que puedas reaccionar a tiempo.',
      alt: 'Alerta de colisión frontal y trasera',
    },
    {
      src: './images/2adas.jpg',
      title: 'Detector de punto ciego',
      description: 'Para mayor control en maniobras de cambio de carril.',
      alt: 'Detector de punto ciego',
    },
    {
      src: './images/3adas.jpg',
      title: 'Sistema de mantenimiento de carril',
      description: 'Ayuda a mantener el vehículo centrado en el carril.',
      alt: 'Sistema de mantenimiento de carril',
    },
    {
      src: './images/4adas.jpg',
      title: 'Sistema de monitoreo de fatiga',
      description: 'Detecta signos de cansancio y te sugiere hacer una pausa.',
      alt: 'Sistema de monitoreo de fatiga',
    },
  ];

  var mainImg = section.querySelector('.safety-slider__main-img');
  var stepEl = section.querySelector('.safety-slider__step');
  var titleEl = section.querySelector('.safety-slider__title');
  var descEl = section.querySelector('.safety-slider__desc');
  var prevBtn = section.querySelector('.safety-slider__prev');
  var nextBtn = section.querySelector('.safety-slider__next');
  var thumbsRoot = section.querySelector('.safety-slider__thumbs');
  var dotsRoot = section.querySelector('.safety-slider__dots');

  if (!mainImg || !stepEl || !titleEl || !descEl || !prevBtn || !nextBtn || !thumbsRoot || !dotsRoot) {
    return;
  }

  var total = slides.length;
  var current = 0;
  var thumbEls = [];
  var dotEls = [];

  function pad2(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function renderChrome() {
    thumbsRoot.innerHTML = '';
    dotsRoot.innerHTML = '';
    thumbEls = [];
    dotEls = [];

    slides.forEach(function (slide, i) {
      var thumb = document.createElement('button');
      thumb.type = 'button';
      thumb.className = 'thumbnail thumbnail-inactive safety-slider__thumb';
      thumb.setAttribute('role', 'tab');
      thumb.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      thumb.setAttribute('aria-label', slide.title);
      thumb.innerHTML =
        '<img src="' +
        slide.src +
        '" alt="" loading="lazy" decoding="async">' +
        '<div class="thumbnail-overlay"></div>' +
        '<span class="thumbnail-label">' +
        slide.title +
        '</span>';
      thumb.addEventListener('click', function () {
        goTo(i);
      });
      thumbsRoot.appendChild(thumb);
      thumbEls.push(thumb);

      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'dot dot-inactive safety-slider__dot';
      dot.setAttribute('tabindex', '-1');
      dot.setAttribute('aria-label', 'Ir al slide ' + (i + 1));
      dot.addEventListener('click', function () {
        goTo(i);
      });
      dotsRoot.appendChild(dot);
      dotEls.push(dot);
    });
  }

  function updateUI() {
    var slide = slides[current];
    // Fade suave entre imágenes
    setMainImageWithFade(slide.src, slide.alt);
    stepEl.textContent = pad2(current + 1) + ' / ' + pad2(total);
    titleEl.textContent = slide.title;
    descEl.textContent = slide.description;

    thumbEls.forEach(function (el, i) {
      var active = i === current;
      el.classList.toggle('thumbnail-active', active);
      el.classList.toggle('thumbnail-inactive', !active);
      el.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    dotEls.forEach(function (el, i) {
      var active = i === current;
      el.classList.toggle('dot-active', active);
      el.classList.toggle('dot-inactive', !active);
    });
  }

  function setMainImageWithFade(src, alt) {
    // Evita trabajo si la misma imagen ya está puesta.
    var currentAttrSrc = mainImg.getAttribute('src');
    if (currentAttrSrc === src) {
      // Asegura alt consistente por si cambió.
      mainImg.alt = alt;
      return;
    }

    mainImg.style.opacity = '0';

    // Precarga y luego hace el swap para que el fade sea limpio.
    var tmp = new Image();
    tmp.onload = function () {
      mainImg.src = src;
      mainImg.alt = alt;
      // Re-render inmediato del siguiente frame para que el navegador aplique el transition.
      requestAnimationFrame(function () {
        mainImg.style.opacity = '1';
      });
    };
    tmp.onerror = function () {
      // Si falla la carga, al menos muestra el cambio sin bloquear.
      mainImg.src = src;
      mainImg.alt = alt;
      mainImg.style.opacity = '1';
    };
    tmp.src = src;
  }

  function ensureActiveThumbVisible() {
    var activeThumb = thumbEls[current];
    if (!activeThumb) return;
    if (typeof activeThumb.scrollIntoView !== 'function') return;

    // En móvil, centra la miniatura activa en el contenedor desplazable.
    // Usamos un timeout mínimo para que el layout (escala/border) ya se haya aplicado.
    setTimeout(function () {
      try {
        activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } catch (e) {
        activeThumb.scrollIntoView();
      }
    }, 50);
  }

  function goTo(index) {
    current = (index % total + total) % total;
    updateUI();
    ensureActiveThumbVisible();
  }

  prevBtn.addEventListener('click', function () {
    goTo(current - 1);
  });
  nextBtn.addEventListener('click', function () {
    goTo(current + 1);
  });

  renderChrome();
  updateUI();
  ensureActiveThumbVisible();

  // Si el usuario rota o cambia el tamaño, re-centramos la miniatura activa.
  window.addEventListener('resize', ensureActiveThumbVisible);
}

document.addEventListener('DOMContentLoaded', function () {
  initNavMobile();
  initSliderControls();
  initColorCustomizationNoScroll();
  initMediaCarousel();
  initSafetySlider();
  syncColorPicker();
});




