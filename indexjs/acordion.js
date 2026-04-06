document.addEventListener('DOMContentLoaded', function() {
    const panels = document.querySelectorAll('.panel');
    const activeFlex = 1.0;
    const inactiveFlex = 0.6;
    const desktopBreakpoint = 1100;

    // Función para verificar tamaño de pantalla
    function isDesktop() {
        return window.innerWidth > desktopBreakpoint;
    }

    // Configuración INICIAL de los textos - Siempre visibles
    gsap.set([
        '.auto-description h1', 
        '.auto-text', 
        '.auto-text p', 
        '.btn-description'
    ], {
        y: 0,
        opacity: 1,
        scaleX: 1
    });

    // Solo configuramos animaciones hover para desktop
    if (isDesktop()) {
        panels.forEach((panel, index) => {
            const image = panel.querySelector('.panel-image');
            const h1 = panel.querySelector('.auto-description h1');
            const autoText = panel.querySelector('.auto-text');
            const autoTextP = panel.querySelector('.auto-text p');
            const btnDescription = panel.querySelector('.btn-description');

            // Timeline para animación de textos (solo en desktop)
            const textTl = gsap.timeline({ 
                paused: true,
                defaults: { ease: "power2.out" }
            });

            textTl
                .fromTo(h1, { y: "100%" }, { y: 0, duration: 0.8 })
                .fromTo(autoText, { scaleX: 0, borderImage: " linear-gradient(90deg,rgba(255, 255, 255, 1) 4%, rgba(255, 255, 255, 0.4) 60%, rgba(255, 255, 255, 0.2) 78%, rgba(255, 255, 255, 0.15) 100%)1", borderStyle:"solid", borderWidth:"2px 0 0 0",borderImageSlice: "1" }, { scaleX: 1, borderImage: " linear-gradient(90deg,rgba(255, 0, 0, 1) 4%, rgba(255, 0, 0, 0.4) 60%, rgba(250, 0, 0, 0.2) 70%, rgba(255, 0, 0, 0.1) 95%)1", borderStyle:"solid", borderWidth:"2px 0 0 0",borderImageSlice: "1", duration: 0.9 }, "-=0.2")
                .fromTo(autoTextP, { y: "-200%" }, { y: 0, duration: 0.6 }, "-=0.3")
                .fromTo(btnDescription, { y: "100%", opacity: 0 }, { 
                    y: 0, 
                    opacity: 1, 
                    duration: 0.9 
                }, "-=0.4");

            // Eventos hover solo en desktop
            panel.addEventListener('mouseenter', function() {
                textTl.play();
                
                gsap.to(panel, { flex: activeFlex, duration: 0.5 });
                
                if (panel.classList.contains('panel-1')) {
                    gsap.to(image, { x: '-2%', duration: 0.5 });
                } else if (panel.classList.contains('panel-2')) {
                    gsap.to(image, { x: '2%', duration: 0.5 });
                }

                panels.forEach(p => {
                    if (p !== panel) {
                        gsap.to(p, { flex: inactiveFlex, duration: 0.4 });
                        // Revertir animación de texto en el otro panel
                        const otherTextTl = p._textTl;
                        if (otherTextTl) {
                            otherTextTl.timeScale(2).reverse();
                        }
                    }
                });
            });

            panel.addEventListener('mouseleave', function() {
                textTl.timeScale(2).reverse();
                gsap.to(panels, { flex: 0.6, duration: 0.3 });
                gsap.to('.panel-image', { x: 0, duration: 0.3 });
            });
            
            // Guardar referencia a la timeline
            panel._textTl = textTl;
        });
    }else {
    panels.forEach((panel) => {
        const autoText = panel.querySelector('.auto-text');
        
        // Estado inicial
        gsap.set(autoText, { borderImage: " linear-gradient(90deg,rgba(255, 0, 0, 1) 4%, rgba(255, 0, 0, 0.4) 60%, rgba(250, 0, 0, 0.2) 70%, rgba(255, 0, 0, 0.1) 95%)1", borderStyle:"solid", borderWidth:"2px 0 0 0",borderImageSlice: "1" });

        // Hover (para dispositivos con mouse o touch que soporten hover)
      //  panel.addEventListener('pointerenter', () => {
       //     gsap.to(autoText, { borderTop: "2px solid #e60012", duration: 0.5 });
       // });

      //  panel.addEventListener('pointerleave', () => {
       //     gsap.to(autoText, { borderTop: "2px solid white", duration: 0.5 });
       // });
    });
}


    

    // Manejo de resize - Solo para resetear estilos si cambia a desktop
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            if (isDesktop()) {
                // Resetear estilos en caso de cambio a desktop
                panels.forEach(panel => {
                    panel.style.flex = '';
                    gsap.to('.panel-image', { x: 0, duration: 0.1 });
                });
            }
        }, 100);
    });
});