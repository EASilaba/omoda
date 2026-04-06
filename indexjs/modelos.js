
  function moverElementoSegunAncho() {
  const elementos = document.querySelectorAll('.btn-needToMove'); // Todos los botones
  const contenedores1 = document.querySelectorAll('.text-wrap'); // Contenedores originales
  const contenedores2 = document.querySelectorAll('.one-info-img'); // Nuevos contenedores

  if (window.innerWidth <= 900) {
    // Mover cada btn-container a su respectivo .one-info-img
    elementos.forEach((elemento, index) => {
      if (elemento.parentNode !== contenedores2[index]) {
        contenedores2[index].appendChild(elemento);
      }
    });
  } else {
    // Devolver cada btn-container a su .text-wrap original
    elementos.forEach((elemento, index) => {
      if (elemento.parentNode !== contenedores1[index]) {
        contenedores1[index].appendChild(elemento);
      }
    });
  }
}

// Ejecutar al cargar y al redimensionar
window.addEventListener('load', moverElementoSegunAncho);
window.addEventListener('resize', moverElementoSegunAncho);


            let index = 0;
            const visibleItems = 4; // Cambia este número para mostrar más elementos (por ejemplo, 5)

            function updateView(selectedIndex) {
                const numbers = document.querySelectorAll(".numeros li");
                const infos = document.querySelectorAll(".info > div");
                const totalItems = numbers.length;

                // Asegurar que el índice no salga de los límites
                if (selectedIndex < 0) {
                    index = 0;
                } else if (selectedIndex >= totalItems) {
                    index = totalItems - 1;
                } else {
                    index = selectedIndex;
                }

                // Calcular el rango de elementos visibles
                const halfVisible = Math.floor(visibleItems / 2);
                let start = Math.max(0, index - halfVisible);
                let end = Math.min(totalItems - 1, start + visibleItems - 1);

                // Ajustar el inicio si estamos cerca del final
                if (end === totalItems - 1) {
                    start = Math.max(0, end - visibleItems + 1);
                }

                // Mostrar los elementos en el rango calculado
                numbers.forEach((num, i) => {
                    num.style.display = (i >= start && i <= end) ? "flex" : "none";
                    num.classList.toggle("on", i === index);
                });

                // Mostrar solo el elemento info correspondiente al número con clase "on"
                infos.forEach((info, i) => {
                    info.style.display = (i === index) ? "flex" : "none";
                    info.classList.toggle("on", i === index);
                });
            }

            function navigate(direction) {
                const totalItems = document.querySelectorAll(".info div").length;
                let newIndex = index + direction;
                if (newIndex >= 0 && newIndex < totalItems) {
                    updateView(newIndex);
                }
            }

            document.querySelector(".arrow-left").addEventListener("click", () => navigate(-1));
            document.querySelector(".arrow-right").addEventListener("click", () => navigate(1));

            updateView(0); // Inicialización
      
