//codigo original
const MyModule = (function () {
    let map = null;
    let sucursalesInfo = [];
    let locations = {
        mapdata: {
            center: { lat: 8.5249743, lng: -79.8541492 },
            zoom: 8,
            mapId: "TU_MAP_ID_AQUI",
            markers: []
        }
    };

    const evaluarTitulos = (taller, servicios) => {
        const titulos = {
            "true-true": "Horario de Taller y Repuestos",
            "true-false": "Horario de Taller",
            "false-true": "Horario de Repuestos",
            "false-false": " "
        };
        const clave = `${taller}-${servicios}`;
        return titulos[clave];
    };

    const horariosPorSucursal = {
        //chiriqui
        27: {
            servicios: {
                taller: true,
                ventas: true,
                repuestos: true
            },
            tel: "366-9396",
            ventas: {
                lunes_a_viernes: "8:00 am a 7:00 pm",
                sabados: "8:00 am a 5:00 pm​",
                domingos: "Cerrado"
            },
            taller_repuestos: {
                lunes_a_viernes: "07:30 am a 05:00 pm",
                sabados: "7:30 am a 1:00 pm",
                domingos: "Cerrado"
            }
        },
        //costa verde
        19: {
            servicios: {
                taller: true,
                ventas: true,
                repuestos: true
            },
            tel: "366-9399",
            ventas: {
                lunes_a_viernes: "8:00 am a 7:00 pm",
                sabados: "8:00 am a 5:00 pm",
                domingos: "10:00 am a 4:00 pm"
            },
            taller_repuestos: {
                lunes_a_viernes: "7:30 am a 5:00 pm",
                sabados: "7:30 am a 1:00 pm",
                domingos: "Cerrado"
            }
        },
        //calle 50
        20: {
            servicios: {
                taller: true,
                ventas: true,
                repuestos: true
            },
            tel: "208-7900",
            ventas: {
                lunes_a_viernes: "8:00 am a 7:00 pm",
                sabados: "8:00 am a 5:00 pm",
                domingos: "10:00 am a 4:00 pm"
            },
            taller_repuestos: {
                lunes_a_viernes: "7:30 am a 5:00 pm",
                sabados: "7:30 am a 1:00 pm",
                domingos: "Cerrado"
            }
        },
        //villas de las fuentes
        22: {
            servicios: {
                taller: true,
                ventas: true,
                repuestos: true
            },
            tel: "366-9300",
            ventas: {
                lunes_a_viernes: "8:00 am a 7:00 pm",
                sabados: "8:00 am a 5:00 pm",
                domingos: "10:00 am a 4:00 pm"
            },
            taller_repuestos: {
                lunes_a_viernes: "7:30 am a 5:00 pm",
                sabados: "7:30 am a 1:00 pm",
                domingos: "Cerrado"
            }
        },
        //sohomall
        0: {
            servicios: {
                taller: false,
                ventas: true,
                repuestos: false
            },
            tel: "366-9335",
            ventas: {
                lunes_a_viernes: "10:00 am a 7:00 pm",
                sabados: "10:00 am a 6:00 pm",
                domingos: "10:00 am a 4:00 pm"
            },
            taller_repuestos: {
                lunes_a_viernes: "Cerrado",
                sabados: "Cerrado",
                domingos: "Cerrado"
            }
        },
        //Flotas
        41: {
            servicios: {
                taller: false,
                ventas: true,
                repuestos: false
            },
            tel: "366-9335",
            ventas: {
                lunes_a_viernes: "10:00 am a 7:00 pm",
                sabados: "10:00 am a 6:00 pm",
                domingos: "10:00 am a 4:00 pm"
            },
            taller_repuestos: {
                lunes_a_viernes: "Cerrado",
                sabados: "Cerrado",
                domingos: "Cerrado"
            }
        }
    };

    const otherSucursales = {
        "soho": {
            "id": 0,
            "categoria": "Sucursales",
            "sucursal": "Soho City Center",
            "noSucursal": 0,
            "marcas": "[{ {\"marca\": \"omoda\"}, {\"marca\": \"jaecoo\"}]",
            "Telefono": "366-9335",
            "direccion": "Av 14C Nte, Panamá. Local A24",
            "lat": "8.983370234907124",
            "lng": "-79.51919893587016",
            "created_at": "2019-03-14 00:00:00",
            "updated_at": "2019-03-14 00:00:00"
        },
        "david": {
            "id": 27,
            "categoria": "sucursales",
            "sucursal": "Chiriquí",
            "noSucursal": 3,
            "marcas": " [{\"marca\": \"kia\"},{\"marca\": \"omoda\"},{\"marca\": \"jaecoo\"},{\"marca\":\"karry\"},{\"marca\":\"mazda\"}]",
            "Telefono": "366-9396",
            "direccion": "Via Interamericana, Frente a hospital Mae Lewis",
            "lat": "8.434773008937768",
            "lng": "-82.43959844112396",
            "created_at": "2019-03-14 00:00:00",
            "updated_at": "2019-03-14 00:00:00"
        }

    };

    let isMobile = window.innerWidth <= 768;
    let sidebarExpanded = false;
    let HTMLElements = {
        detalleTitulo: document.getElementById('detailTitle'),
        detalleDireccion: document.getElementById('detailAddress'),
        detalleHorario: document.getElementById('detailSchedule'),
        detalleTelefono: document.getElementById('detailPhone'),
        detalleServicio: document.getElementById('detailServices'),
        detailSchedule1: document.getElementById('detailSchedule1'),
        detailSchedule2: document.getElementById('detailSchedule2'),
        sidebar: document.getElementById('sidebar'),
        overlay: document.getElementById('overlay'),
        mobileToggle: document.getElementById('mobileToggle'),
        branchesList: document.getElementById('branchesList'),
        branchDetail: document.getElementById('branchDetail'),
        detailPhone: document.getElementById('detailPhone'),
        titleSchedule2: document.getElementById('titleSchedule2')
    };

    // Variable para mantener referencia a los event listeners del drag
    let dragEventListeners = {
        touchstart: null,
        touchmove: null,
        touchend: null,
        mousedown: null,
        mousemove: null,
        mouseup: null
    };
    let renderBranchesList = async function () {
        HTMLElements.branchesList.innerHTML = '';

        sucursalesInfo.forEach((branch, index) => {
            const branchItem = document.createElement('div');
            branchItem.className = 'branch-item';
            branchItem.innerHTML = `
                <h3>${branch.sucursal || 'Sucursal sin nombre'}</h3>
                <p>${branch.direccion || 'Dirección no disponible'}</p>
            `;
            HTMLElements.branchesList.appendChild(branchItem);
        });
    };
    let resizeWindow = function () {
        const newIsMobile = window.innerWidth <= 768;
        if (isMobile !== newIsMobile) {
            isMobile = newIsMobile;
            updateMobileToggleVisibility();

            // Guardar estado de branchDetail antes de actualizar
            const wasDetailVisible = HTMLElements.branchDetail.style.display === 'block';

            updateSidebarState();

            if (isMobile) {
                initSidebarDrag();
                // En móvil, mantener la visibilidad previa de branchDetail
                if (wasDetailVisible) {
                    HTMLElements.branchesList.style.display = 'none';
                    HTMLElements.branchDetail.style.display = 'block';
                }
            } else {
                HTMLElements.sidebar.style.height = '';
                // En desktop, si había detalles visibles, mantenerlos
                if (wasDetailVisible) {
                    HTMLElements.branchesList.style.display = 'none';
                    HTMLElements.branchDetail.style.display = 'block';
                } else {
                    HTMLElements.branchesList.style.display = 'block';
                }
                sidebarExpanded = true;
                const handle = document.querySelector('.sidebar-handle');
                if (handle) handle.remove();
            }
        }
    };
    let updateMobileToggleVisibility = function () {
        HTMLElements.mobileToggle.style.display = isMobile ? 'block' : 'none';
    };
    let updateSidebarState = function () {
        const wasDetailVisible = HTMLElements.branchDetail.style.display === 'block';

        if (isMobile) {
            HTMLElements.sidebar.style.height = sidebarExpanded ? '70vh' : '80px';

            if (sidebarExpanded) {
                // Respetar la visibilidad de branchDetail
                HTMLElements.branchesList.style.display = wasDetailVisible ? 'none' : 'block';
            } else {
                HTMLElements.branchesList.style.display = 'none';
                HTMLElements.branchDetail.style.display = 'none';
            }
            HTMLElements.mobileToggle.textContent = sidebarExpanded ? '✕ Contraer lista' : '☰ Mostrar lista';
        } else {
            HTMLElements.sidebar.style.height = '';
            // En desktop mantener la lógica pero respetar branchDetail
            HTMLElements.branchesList.style.display = wasDetailVisible ? 'none' : 'block';
            HTMLElements.mobileToggle.style.display = 'none';
            sidebarExpanded = true;
        }
    };
    let initSidebarDrag = function () {
        // Limpiar handle existente
        const oldHandle = document.querySelector('.sidebar-handle');
        if (oldHandle) oldHandle.remove();
        if (!isMobile) return;
        const sidebar = HTMLElements.sidebar;
        const handle = document.createElement('div');
        handle.className = 'sidebar-handle';
        sidebar.insertBefore(handle, sidebar.firstChild);
        let startY, startHeight, isDragging = false;


        const container = HTMLElements.sidebar.parentElement;
        const minHeight = 65;
        const maxHeight = container.clientHeight * 0.7;

        const dragSensitivity = 1.2;


        function handleDragStart(e) {
            isDragging = true;
            startY = e.clientY || e.touches[0].clientY;
            startHeight = parseInt(window.getComputedStyle(sidebar).height);
            e.preventDefault();
            document.body.style.userSelect = 'none';
            document.body.style.cursor = 'grabbing';
            HTMLElements.sidebar.style.transition = 'none';
        }

        function handleDragMove(e) {
            if (!isDragging) return;
            const clientY = e.clientY || (e.touches && e.touches[0].clientY);
            if (!clientY) return;

            const deltaY = (startY - clientY) * dragSensitivity;
            let newHeight = startHeight + deltaY;
            newHeight = Math.max(minHeight, Math.min(newHeight, maxHeight));

            HTMLElements.sidebar.style.height = `${newHeight}px`;
            const expandThreshold = minHeight + (maxHeight - minHeight) * 0.3;
            const newExpanded = newHeight > expandThreshold;

            if (newExpanded !== sidebarExpanded) {
                sidebarExpanded = newExpanded;
                HTMLElements.mobileToggle.textContent = sidebarExpanded ? '✕ Contraer lista' : '☰ Mostrar lista';
                // Actualizar visibilidad considerando branchDetail
                HTMLElements.branchesList.style.display =
                    (sidebarExpanded && HTMLElements.branchDetail.style.display !== 'block') ? 'block' : 'none';
            }
            e.preventDefault();
        }

        function handleDragEnd() {
            if (!isDragging) return;
            isDragging = false;
            document.body.style.userSelect = '';
            document.body.style.cursor = '';
            // Restaurar transiciones
            HTMLElements.sidebar.style.transition = 'height 0.3s ease-out';
            const currentHeight = parseInt(HTMLElements.sidebar.style.height);
            const snapThreshold = minHeight + (maxHeight - minHeight) * 0.4; // Ajustado a 40%
            // Snap suavizado
            if (currentHeight > snapThreshold) {
                HTMLElements.sidebar.style.height = `${maxHeight}px`;
                sidebarExpanded = true;
                HTMLElements.branchesList.style.display =
                    HTMLElements.branchDetail.style.display === 'block' ? 'none' : 'block';
            } else {
                HTMLElements.sidebar.style.height = `${minHeight}px`;
                sidebarExpanded = false;
                HTMLElements.branchesList.style.display = 'none';
            }
            // Actualizar UI después del snap
            HTMLElements.mobileToggle.textContent = sidebarExpanded ? '✕ Contraer lista' : '☰ Mostrar lista';
        }
        // Limpiar event listeners anteriores
        if (dragEventListeners.touchstart) {
            handle.removeEventListener('touchstart', dragEventListeners.touchstart);
            document.removeEventListener('touchmove', dragEventListeners.touchmove);
            document.removeEventListener('touchend', dragEventListeners.touchend);
            handle.removeEventListener('mousedown', dragEventListeners.mousedown);
            document.removeEventListener('mousemove', dragEventListeners.mousemove);
            document.removeEventListener('mouseup', dragEventListeners.mouseup);
        }
        // Asignar nuevos event listeners y guardar referencias
        dragEventListeners.touchstart = handleDragStart;
        dragEventListeners.touchmove = handleDragMove;
        dragEventListeners.touchend = handleDragEnd;
        dragEventListeners.mousedown = handleDragStart;
        dragEventListeners.mousemove = handleDragMove;
        dragEventListeners.mouseup = handleDragEnd;
        // Eventos táctiles
        handle.addEventListener('touchstart', dragEventListeners.touchstart, { passive: false });
        document.addEventListener('touchmove', dragEventListeners.touchmove, { passive: false });
        document.addEventListener('touchend', dragEventListeners.touchend);
        // Eventos de ratón
        handle.addEventListener('mousedown', dragEventListeners.mousedown);
        document.addEventListener('mousemove', dragEventListeners.mousemove);
        document.addEventListener('mouseup', dragEventListeners.mouseup);
    };

    let controlesInit = function () {
        updateMobileToggleVisibility();
        updateSidebarState();
        HTMLElements.mobileToggle.addEventListener('click', toggleSidebar);
        // Inicializar drag solo si es móvil
        if (isMobile) {
            initSidebarDrag();
        }
    };

    let toggleSidebar = function () {
        if (!isMobile) return;
        sidebarExpanded = !sidebarExpanded;
        // Asegurarnos de usar las mismas alturas que en el drag
        const container = HTMLElements.sidebar.parentElement;
        const minHeight = 65;
        const maxHeight = container.clientHeight * 0.7;

        if (sidebarExpanded) {
            HTMLElements.sidebar.style.height = `${maxHeight}px`;
            if (HTMLElements.branchDetail.style.display === 'block') {
                HTMLElements.branchesList.style.display = 'none';
            } else {
                HTMLElements.branchesList.style.display = 'block';
            }
            HTMLElements.mobileToggle.textContent = '✕ Contraer lista';
        } else {
            HTMLElements.sidebar.style.height = `${minHeight}px`;
            HTMLElements.branchesList.style.display = 'none';
            HTMLElements.branchDetail.style.display = 'none';
            HTMLElements.mobileToggle.textContent = '☰ Mostrar lista';
        }
    };

    let showBranchDetail = function (branch, branchId) {
        HTMLElements.branchesList.style.display = 'none';
        HTMLElements.branchDetail.style.display = 'block';
        if (isMobile) {
            sidebarExpanded = true;
            HTMLElements.sidebar.style.height = '80vh';
            HTMLElements.mobileToggle.textContent = '✕ Contraer lista';
        }
        if (typeof MyModule !== 'undefined' && MyModule.updateMap) {
            MyModule.updateMap(branchId);
        }
    };

    let hideBranchDetail = function () {
        HTMLElements.branchDetail.style.display = 'none';
        if (isMobile) {
            // Solo mostrar branchesList si el sidebar está expandido
            if (sidebarExpanded) {
                HTMLElements.branchesList.style.display = 'block';
            }
        } else {
            HTMLElements.branchesList.style.display = 'block';
        }
    };

    let updateMap = async function (id) {
        const sucursal = sucursalesInfo.map(({ lat, lng, Telefono, direccion, sucursal, id }) =>
            ({ lat, lng, Telefono, direccion, sucursal, id }));
        const lat = parseFloat(sucursal[id].lat);
        const lng = parseFloat(sucursal[id].lng);

        // Actualizar información básica
        HTMLElements.detalleTitulo.textContent = sucursal[id].sucursal;
        HTMLElements.detalleDireccion.textContent = sucursal[id].direccion;
        HTMLElements.detalleTelefono.innerHTML = sucursal[id].Telefono;

        let i = sucursal[id].id;
        let taller = horariosPorSucursal[i].servicios.taller;
        let repuestos = horariosPorSucursal[i].servicios.repuestos;

        // Actualizar horarios de ventas
        HTMLElements.detailSchedule1.innerHTML = `<p><b>Lunes a viernes:</b> ${horariosPorSucursal[i].ventas.lunes_a_viernes} </p> <p><b>Sabados:</b> ${horariosPorSucursal[i].ventas.sabados}</p> <p><b>Domingos:</b> ${horariosPorSucursal[i].ventas.domingos}</p>`;

        // Manejar horarios de taller/repuestos
        HTMLElements.titleSchedule2.innerHTML = evaluarTitulos(taller, repuestos);

        if (taller === true || repuestos === true) {
            HTMLElements.detailSchedule2.innerHTML = `<p>Lunes a viernes: ${horariosPorSucursal[i].taller_repuestos.lunes_a_viernes}</p> <p><b>Sabados:</b> ${horariosPorSucursal[i].taller_repuestos.sabados}</p>  <p><b>Domingos:</b> ${horariosPorSucursal[i].taller_repuestos.domingos}</p>`;
        } else {
            // Limpiar el contenido si no hay servicios de taller/repuestos
            HTMLElements.detailSchedule2.innerHTML = '';
        }

        const nuevaPosicion = { lat: lat, lng: lng };
        map.panTo(nuevaPosicion);
        map.setZoom(20);
    };

    let getData = async function () {
        try {
            const myHeaders = new Headers();
            myHeaders.append("Cookie", "PHPSESSID=43d9e4040eac2b0ce39f3e7133c66f85; PHPSESSID=b1b30d6ae9020b9929034c143a0ca49b");
            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };
            const response = await fetch("https://app.silaba.com/API/contactList", requestOptions);
            const result = await response.json();
            sucursalesInfo = result;
            return result;
        } catch (error) {
            console.error("Error:", error);
            return null;
        }
    };
    let centrarMap = async function () {
        
    };

    let initMap = async function () {
        if (!window.google || !google.maps) {
            await new Promise((resolve) => {
                const checkGoogle = () => {
                    if (window.google && google.maps) resolve();
                    else setTimeout(checkGoogle, 100);
                };
                checkGoogle();
            });
        }
        map = new google.maps.Map(document.getElementById("aheto-map"), {
            center: locations.mapdata.center,
            zoom: locations.mapdata.zoom,
            mapId: locations.mapdata.mapId
        });
        addMarkers(map, await asignarsucursales());
    };

    let addMarkers = async function (map, markers) {
        markers.forEach(markerData => {
            const lat = parseFloat(markerData.lat);
            const lng = parseFloat(markerData.lng);
            if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
                console.warn('Coordenadas fuera de rango:', markerData);
                return;
            }
            const pinElement = document.createElement("img");
            pinElement.src = "./indicador/OJ-pin2.png";
            pinElement.style.width = "40px";
            pinElement.style.height = "57px";
            new google.maps.marker.AdvancedMarkerElement({
                position: { lat: lat, lng: lng },
                map: map,
                content: pinElement
            });
        });
    };

    let asignarsucursales = async function () {
        const result = await getData();
        console.log(result)
        const sucursales = result.filter(item =>
            item.categoria === "sucursales" &&
            (item.marcas.toLowerCase().includes("omoda") || item.marcas.toLowerCase().includes("jaecoo")) &&
            item.noSucursal !== 14
        );

        /*sucursales.push(otherSucursales.soho)*/
        const objeto = sucursales.find(item => item.id === 27);
        if (objeto) {
            objeto.sucursal = "David, Chiriquí";
        }

sucursales.forEach(item => {
  if (item.id === 27) { // Si el nombre contiene "chi"
    item.sucursal = item.sucursal.replace("Chiriquí", "David, Chiriqui");
  }
});

        console.log(sucursales);
        sucursalesInfo = sucursales;
        sucursales.map(({ lat, lng }) => ({ lat, lng }));
        locations.mapdata.markers = sucursales;
        return locations.mapdata.markers;
    };

    return {
        getData: getData,
        initMap: initMap,
        asignarsucursales: asignarsucursales,
        updateMap: updateMap,
        controlesInit: controlesInit,
        toggleSidebar: toggleSidebar,
        showBranchDetail: showBranchDetail,
        hideBranchDetail: hideBranchDetail,
        resizeWindow: resizeWindow,
        renderBranchesList: renderBranchesList,
        initSidebarDrag: initSidebarDrag
    };
})();

// Inicialización
(async () => {
    try {
        await MyModule.initMap();
        await MyModule.renderBranchesList();
        document.querySelectorAll('.branch-item').forEach((item, index) => {
            item.addEventListener('click', () => MyModule.showBranchDetail(item, index));
        });
        document.querySelector('.back-button')?.addEventListener('click', () => MyModule.hideBranchDetail());
        window.addEventListener('resize', MyModule.resizeWindow);
        MyModule.controlesInit();
    } catch (error) {
        console.error("Error initializing map:", error);
    }
})();