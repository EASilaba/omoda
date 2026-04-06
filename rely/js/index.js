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


const autoPlayInterval = 6000; // Change every 3 seconds

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
    // Remover clase de todos
    document.querySelectorAll('.color-option').forEach(opt => {
      opt.classList.remove(activeClass);
    });

    // Agregar al correspondiente
    const checked = document.querySelector('.main__color__picker input[type="radio"]:checked');
    if (checked) {
      const label = document.querySelector(`label[for="${checked.id}"]`);
      if (label) label.classList.add(activeClass);
    }
  }

  // Agregar eventos
  inputs.forEach(input => {
    input.addEventListener('change', handleInputChange);

    // También actualizar cuando se hace click en el label
    const label = document.querySelector(`label[for="${input.id}"]`);
    if (label) {
      label.addEventListener('click', () => {
        input.checked = true;
        handleInputChange();
      });
    }
  });

  // Inicializar con el primero
  if (inputs[0]) {
    inputs[0].checked = true;
    handleInputChange();
  }

}


// Inicializar
document.addEventListener('DOMContentLoaded', function () {
  initNavMobile();
  initSliderControls();
  syncColorPicker();
});




