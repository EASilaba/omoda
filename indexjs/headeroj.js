class headeroj extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = /*html*/`
<header id="header" class="header">
    <div class="header-wrap">
        <div class="header__logo"><a href="https://omodajaecoo.com.pa/"><img
                    src="https://omodajaecoo.com.pa/images/a.svg" alt="JAECOO"></a>
        </div>
        <button type="button" id="js-header-burger" class="header__burger" title="Menú"><i></i></button>
        <nav id="js-menu" class="menu">
            <ul class="menu__list">
                <li class="js-menu-item menu__item">
                    <a itemprop="url" href="#"
                        class="small-text menu__link menu__link_submenu js-menu-link-submenu menu__link_current">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Modelos</font>
                        </font>
                    </a>
                    <div class="js-menu-dropdown menu-dropdown">
                        <div class="menu-models">
                            <button class="js-menu-dropdown-back menu__back">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Modelos</font>
                                </font>
                            </button>
                            <div class="container">
                                <ul class="row menu-models__list">

                                    <li class="col-md-6 col-lg-4 col-xl-3 menu-models__item"
                                        style=" flex-wrap:wrap; align-content:center; height: 199px;">
                                        <div class="js-menu-models-link menu-models__item-link"
                                            style="display:flex; flex-direction:row; height: 100%; width: 100%">
                                            <div style="display:flex; flex-direction:column-reverse; width:60%">
                                                <div class="menu-models__item-img">
                                                    <img src="https://omodajaecoo.com.pa/index_files/c5ng.png"
                                                        alt="J7">
                                                </div>
                                                <div class="menu-models__item-text">
                                                    <div class="menu-models__item-title">
                                                        <font style="vertical-align: inherit;">
                                                            <font style="vertical-align: inherit;">C5 NG</font>
                                                        </font>
                                                    </div>
                                                    <div class="menu-models__item-price">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="boton-section"
                                                style="width: 40%; display: flex; flex-direction:column">
                                                <div class="boton-wrap boton-wrap-header"
                                                    style="display: flex; flex-direction:column">
                                                    <a href="https://cotizar.omodajaecoo.com.pa/">
                                                        <div>
                                                        cotizar
                                                        </div>
                                                    </a>
                                                    <a href="https://omodajaecoo.com.pa/ficha_tecnica/c5ng.pdf" target="_blank">
                                                        <div>
                                                            Ficha tecnica
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li class="col-md-6 col-lg-4 col-xl-3 menu-models__item"
                                        style=" flex-wrap:wrap; align-content:center; height: 199px;">
                                        <div class="js-menu-models-link menu-models__item-link"
                                            style="display:flex; flex-direction:row; height: 100%; width: 100%">
                                            <div style="display:flex; flex-direction:column-reverse; width:60%">
                                                <div class="menu-models__item-img">
                                                    <img src="https://omodajaecoo.com.pa/index_files/c7.png"
                                                        alt="J7">
                                                </div>
                                                <div class="menu-models__item-text">
                                                    <div class="menu-models__item-title">
                                                        <font style="vertical-align: inherit;">
                                                            <font style="vertical-align: inherit;">C7</font>
                                                        </font>
                                                    </div>
                                                    <div class="menu-models__item-price">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="boton-section"
                                                style="width: 40%; display: flex; flex-direction:column">
                                                <div class="boton-wrap boton-wrap-header"
                                                    style="display: flex; flex-direction:column">
                                                    <a href="https://omodajaecoo.com.pa/c7/">
                                                        <div>
                                                            Explora
                                                        </div>
                                                    </a>
                                                    <a href="https://omodajaecoo.com.pa/ficha_tecnica/c7.pdf" target="_blank">
                                                        <div>
                                                            Ficha tecnica
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li class="col-md-6 col-lg-4 col-xl-3 menu-models__item"
                                        style="display:flex; flex-wrap:wrap; align-content:center; height: 199px;">
                                        <div class="js-menu-models-link menu-models__item-link"
                                            style="display:flex; flex-direction:row; height: 100%; width: 100%">
                                            <div style="display:flex; flex-direction:column-reverse; width:60%">
                                                <div class="menu-models__item-img">
                                                    <img src="https://omodajaecoo.com.pa/images/j5_1200x687.png" alt="J7">
                                                </div>
                                                <div class="menu-models__item-text">
                                                    <div class="menu-models__item-title">
                                                        <font style="vertical-align: inherit;">
                                                            <font style="vertical-align: inherit;">J5</font>
                                                        </font>
                                                    </div>
                                                    <div class="menu-models__item-price">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="boton-section"
                                                style="width: 40%; display: flex; flex-direction:column">
                                                <div class="boton-wrap boton-wrap-header"
                                                    style="display: flex; flex-direction:column">
                                                    <a href="https://omodajaecoo.com.pa/j5/">
                                                        <div>
                                                            Explora
                                                        </div>
                                                    </a>
                                                    <a href="https://omodajaecoo.com.pa/ficha_tecnica/JAECOO_J5_FICHA_TECNICA_2025.pdf"
                                                        target="_blank">
                                                        <div>
                                                            Ficha tecnica
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li class="col-md-6 col-lg-4 col-xl-3 menu-models__item"
                                        style="display:flex; flex-wrap:wrap; align-content:center; height: 199px;">
                                        <div class="js-menu-models-link menu-models__item-link"
                                            style="display:flex; flex-direction:row; height: 100%; width: 100%">
                                            <div style="display:flex; flex-direction:column-reverse; width:60%">
                                                <div class="menu-models__item-img">
                                                    <img src="https://omodajaecoo.com.pa/images/J7.png" alt="J7">
                                                </div>
                                                <div class="menu-models__item-text">
                                                    <div class="menu-models__item-title">
                                                        <font style="vertical-align: inherit;">
                                                            <font style="vertical-align: inherit;">J7</font>
                                                        </font>
                                                    </div>
                                                    <div class="menu-models__item-price">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="boton-section"
                                                style="width: 40%; display: flex; flex-direction:column">
                                                <div class="boton-wrap boton-wrap-header"
                                                    style="display: flex; flex-direction:column">
                                                    <a href="https://omodajaecoo.com.pa/j7/">
                                                        <div>
                                                            Explora
                                                        </div>
                                                    </a>
                                                    <a href="https://omodajaecoo.com.pa/ficha_tecnica/JAECOO_J7_FICHA_TECNICA_2025.pdf"
                                                        target="_blank">
                                                        <div>
                                                            Ficha tecnica
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li class="col-md-6 col-lg-4 col-xl-3 menu-models__item"
                                        style="display:flex; flex-wrap:wrap; align-content:center; height: 199px;">
                                        <div class="js-menu-models-link menu-models__item-link"
                                            style="display:flex; flex-direction:row; height: 100%; width: 100%">
                                            <div style="display:flex; flex-direction:column-reverse; width:60%">
                                                <div class="menu-models__item-img">
                                                    <img src="https://jaecoopanama.com/images/J8.png" alt="J7">
                                                </div>
                                                <div class="menu-models__item-text">
                                                    <div class="menu-models__item-title">
                                                        <font style="vertical-align: inherit;">
                                                            <font style="vertical-align: inherit;">J8</font>
                                                        </font>
                                                    </div>
                                                    <div class="menu-models__item-price">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="boton-section"
                                                style="width: 40%; display: flex; flex-direction:column">
                                                <div class="boton-wrap boton-wrap-header"
                                                    style="display: flex; flex-direction:column">
                                                    <a href="https://omodajaecoo.com.pa/j8/">
                                                        <div>
                                                            Explora
                                                        </div>
                                                    </a>
                                                    <a href="https://www.omodajaecoo.com.pa/ficha_tecnica/JAECOO_J8_FICHA_TECNICA_2025_v1.pdf"
                                                        target="_blank">
                                                        <div>
                                                            Ficha tecnica
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="js-menu-item menu__item">
                    <a itemprop="url" href="#" class="small-text menu__link menu__link_submenu js-menu-link-submenu"
                        style="">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Cotiza tu auto</font>
                        </font>
                    </a>
                    <div class="js-menu-dropdown menu-dropdown">
                        <div class="menu-lev2">
                            <button class="js-menu-dropdown-back menu__back" style="text-decoration: none">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Cotiza tu auto</font>
                                </font>
                            </button>
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6 col-lg-4 col-xl-3 menu-lev2__wrap pb-red pt-green">
                                        <ul class="menu-lev2__list">
                                            <a itemprop="url" href="#" class="menu-lev2__title" style="display:none">
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;">Consigue tu nuevo auto</font>
                                                </font>
                                            </a>
                                            <li class="menu-lev2__item">
                                                <a itemprop="url" href="https://cotizar.omodajaecoo.com.pa/"
                                                    target="_blank" class="mt-orange menu-lev2__link">
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;">Cotizalo aquí</font>
                                                    </font>
                                                </a>
                                            </li>
                                            <li class="menu-lev2__item">
                                                <a itemprop="url" href="https://wa.me/50761679302?text=Hola%2C%20deseo%20saber%20m%C3%A1s%20sobre%20sus%20servicios.%20%C2%BFPodr%C3%ADan%20ayudarme%3F" target="_blank"
                                                    class="mt-orange menu-lev2__link">
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;">Trade in
                                                        </font>
                                                    </font>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="js-menu-item menu__item">
                    <a href="https://omodajaecoo.com.pa/sucursales/" title="sucursales"
                        class="small-text menu__link menu__link_submenu">Sucursales</a>
                </li>
                <li class="js-menu-item menu__item">
                    <a itemprop="url" href="#" class="small-text menu__link menu__link_submenu js-menu-link-submenu">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Post Venta</font>
                        </font>
                    </a>
                    <div class="js-menu-dropdown menu-dropdown">
                        <div class="menu-lev2">
                            <button class="js-menu-dropdown-back menu__back">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Post Venta</font>
                                </font>
                            </button>
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6 col-lg-4 col-xl-3 menu-lev2__wrap pb-red pt-green">
                                        <ul class="menu-lev2__list">
                                            <li class="menu-lev2__item">
                                                <a itemprop="url" href="https://omodajaecoo.com.pa/mantenimiento/"
                                                     class="mt-orange menu-lev2__link">
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;">Tabla de Mantenimientos
                                                        </font>
                                                    </font>
                                                </a>
                                            </li>
                                            <li class="menu-lev2__item">
                                                <a itemprop="url" href="https://citas.omodajaecoo.com.pa/" target="_blank"
                                                    class="mt-orange menu-lev2__link">
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;">Agenda tu Cita</font>
                                                    </font>
                                                </a>
                                            </li>
                                            <li class="menu-lev2__item">
                                                <a itemprop="url" href="https://repuestos.silaba.com/" target="_blank"
                                                    class="mt-orange menu-lev2__link">
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;">Cotiza tus Repuestos
                                                        </font>
                                                    </font>
                                                </a>
                                            </li>
                                            <li class="menu-lev2__item">
                                                <a itemprop="url" href="https://store.silaba.com/" target="_blank"
                                                    class="mt-orange menu-lev2__link">
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;">Silaba Store</font>
                                                    </font>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="js-menu-item menu__item">
                    <a itemprop="url" href="#" class="small-text menu__link menu__link_submenu js-menu-link-submenu">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Sobre Nosotros</font>
                        </font>
                    </a>
                    <div class="js-menu-dropdown menu-dropdown">
                        <div class="menu-lev2">
                            <button class="js-menu-dropdown-back menu__back">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Sobre Nosotros</font>
                                </font>
                            </button>
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6 col-lg-4 col-xl-3 menu-lev2__wrap pb-red pt-green" style="">

                                        <ul class="menu-lev2__list"
                                            style="display:flex; flex-direction:column; margin-right:30px">
                                            <a itemprop="url" href="" class="menu-lev2__title" style="display:none">
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;">Conoce grupo Silaba</font>
                                                </font>
                                            </a>
                                            <li class="menu-lev2__item">
                                                <a itemprop="url" href="https://silaba.com/nuestrahistoria.html"
                                                    class="mt-orange menu-lev2__link">
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;">Conoce Grupo Silaba
                                                        </font>
                                                    </font>
                                                </a>
                                            </li>
                                            <li class="menu-lev2__item">
                                                <a itemprop="url" href="https://omodajaecoo.com.pa/noticias"
                                                    class="mt-orange menu-lev2__link">
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;">Noticias</font>
                                                    </font>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="menu__list">
                <li class="js-menu-item menu__item1"
                    style="display:flex; flex-direction: column; height:60px; width: 225px; justify-content: center; align-items: center;">
                    <a href="https://www.omodajaecoo.com.pa/promociones/" style="text-decoration: none;"> 
                        <button type="button" class="button">
                            <span class="button__icon">
                                <img class="Icon" width="30px" src="https://omodajaecoo.com.pa/images/gs2.png">
                            </span>
                            <span class="button__text">Promociones del mes</span>
                        </button>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</header>
    `;

        const cssText = /*css*/ `
* {
  font-family: 'Raleway', sans-serif !important;
  font-weight: 300;
}

/* Elimina la regla problemática o cámbiala por: */
p, li, font { 
  font-family: 'Raleway', sans-serif !important;
  font-weight: 300;
  color: inherit; /* En lugar de red */
}

.Icon {
  transition-duration: 1.5s;
}

.button, .button__icon, .button__text {
  transition: all 0.3s;
}

.button .button__text {
  transform: translateX(60px);
  color: white;
  font-weight: 600;
}

.button .button__icon {
  position: absolute;
  transform: translateX(-4px);
  height: 100%;
  width: 45px;
  background-color: white ;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button .svg {
  width: 20px;
  fill: ;
}

.button:hover .button__text {
  color: transparent;
}

.button:hover .button__icon {
  width: 195px;
  transform: translateX(0);
}

.button:hover .Icon {
  transition-duration: 1.5s;
}

.button {
  position: relative;
  width: 210px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 2px solid white;
  background: linear-gradient(
    90deg,
    white 13%,       /* Blanco izquierdo (siempre visible) */
    black 13%,       /* Negro desde el 13% */
    black 88%,       /* Negro hasta el 94% */
    white 88%        /* Blanco derecho (inicialmente oculto) */
  );
  background-size: 200% 100%;    /* Doble de ancho para ocultar el blanco derecho */
  background-position: left;     /* Muestra solo la mitad izquierda (sin blanco derecho) */
  border-radius: 20px;
  overflow: hidden;
}

.button:hover {
  background-size: 100% 100%; 
}

@charset "UTF-8";html{scroll-behavior:smooth;scroll-snap-type:x mandatory}.container{width:100%;padding-right:20px;padding-left:20px;header-oj{margin-bottom:60px}margin-right:auto;margin-left:auto}.container{max-width:1920px}.row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-20px;margin-left:-20px}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9{position:relative;width:100%;padding-right:20px;padding-left:20px}.col{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-1{-webkit-box-flex:0;-ms-flex:0 0 8.33333333%;flex:0 0 8.33333333%;max-width:8.33333333%}.col-2{-webkit-box-flex:0;-ms-flex:0 0 16.66666667%;flex:0 0 16.66666667%;max-width:16.66666667%}.col-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-4{-webkit-box-flex:0;-ms-flex:0 0 33.33333333%;flex:0 0 33.33333333%;max-width:33.33333333%}.col-5{-webkit-box-flex:0;-ms-flex:0 0 41.66666667%;flex:0 0 41.66666667%;max-width:41.66666667%}.col-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-7{-webkit-box-flex:0;-ms-flex:0 0 58.33333333%;flex:0 0 58.33333333%;max-width:58.33333333%}.col-8{-webkit-box-flex:0;-ms-flex:0 0 66.66666667%;flex:0 0 66.66666667%;max-width:66.66666667%}.col-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-10{-webkit-box-flex:0;-ms-flex:0 0 83.33333333%;flex:0 0 83.33333333%;max-width:83.33333333%}.col-11{-webkit-box-flex:0;-ms-flex:0 0 91.66666667%;flex:0 0 91.66666667%;max-width:91.66666667%}.col-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.flex-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.align-content-center{-ms-flex-line-pack:center!important;align-content:center!important}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;margin:0}html{height:100%}body{--perxis-auto-select-color:#fff;--perxis-auto-select-placeholder-color:#fff;--perxis-auto-select-selection-font-size:16px;--perxis-auto-select-arrow-color:#abbbbe;--perxis-auto-select-hover-arrow-color:#3da2b8;--perxis-auto-select-selection-font-size:16px;--perxis-auto-select-selection-line-height:1;--perxis-auto-select-selection-font-weight:400;--perxis-auto-select-selection-text-transform:none;--perxis-auto-select-selection-letter-spacing:0;--perxis-auto-select-icon-font-size:24px;--perxis-auto-select-dropdown-font-size:16px;--perxis-auto-select-dropdown-line-height:1.6;--perxis-auto-select-dropdown-font-weight:400;--perxis-auto-select-dropdown-text-transform:none;--perxis-auto-select-dropdown-letter-spacing:0;--perxis-auto-select-dropdown-border-radius:0;--perxis-auto-select-dropdown-background-color:#fff;--perxis-auto-select-dropdown-scrollbar-background-color:#6c7c80;--perxis-auto-select-dropdown-scrollbar-thumb-background-color:#30363a;--perxis-auto-select-dropdown-color:#0d171a;--perxis-auto-select-dropdown-hover-background-color:#f6f7f7;--perxis-auto-select-dropdown-hover-color:#00657b;--perxis-auto-select-dropdown-selected-color:#3b9db2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;font:16px/1.6 Arial,Helvetica,sans-serif;font-weight:400;color:#0d171a;background-color:#fff}.header {position: fixed;z-index: 1000;top:0;left: 0;width: 100%;height: 56px;color: #fff;background: #0d171a;-webkit-transition: top .3s linear, background .3s;transition: top .3s linear, background .3s;}section{display:block}img{max-width:100%;border:0}:focus{outline:0}button::-moz-focus-inner{border:0}button{font-family:inherit;color:inherit;border:0;border-radius:0;background:0 0}.container{width:100%;padding-right:16px;padding-left:16px;margin-right:auto;margin-left:auto}.row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-16px;margin-left:-16px}.row>.col,.row>[class*=col-]{position:relative;width:100%;padding-right:16px;padding-left:16px}.small-text{font-size:14px}img[data-object-fit=contain]{-o-object-fit:contain;object-fit:contain}img[data-object-fit=cover]{-o-object-fit:cover;object-fit:cover;object-position:center}img[data-object-fit=fill]{-o-object-fit:cover;object-fit:cover;object-position:top}@media (1600px <= width <= 1880px){img[data-object-fit=fill]{-o-object-fit:fill;object-fit:fill;object-position:top}}.mt-red{margin-top:32px}.mt-green{margin-top:24px}.mt-orange{margin-top:16px}.pt-red{padding-top:32px}.pb-red{padding-bottom:32px}.pt-green{padding-top:24px}.pb-green{padding-bottom:24px}.pt-orange{padding-top:16px}.pb-orange{padding-bottom:16px}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeout{from{opacity:1}to{opacity:0}}@keyframes fadeout{from{opacity:1}to{opacity:0}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes cookie-notify-anim{0%{-webkit-transform:translateY(120px);transform:translateY(120px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes cookie-notify-anim{0%{-webkit-transform:translateY(120px);transform:translateY(120px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@-webkit-keyframes cookie-notify-anim-hide{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(120px);transform:translateY(120px);opacity:0}}@keyframes cookie-notify-anim-hide{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(120px);transform:translateY(120px);opacity:0}}.menu{overflow-x:hidden}.menu__back{position:relative;width:100%;font-size:18px;line-height:1.4;color:#0d171a;text-align:center;font-weight:700;padding:15px 50px 16px 50px;background:#f6f7f7}.menu__back:after{content:"";position:absolute;top:calc(50% - 12px);left:20px;width:24px;height:24px;background: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='https://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M15 18L9 12L15 6' stroke='%2300657B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center center no-repeat;}.menu__list{list-style:none}.menu__link{display:block;line-height:1;color:#0d171a;text-decoration:none;padding:22px 50px 22px 16px;-webkit-transition:color .2s,border-color .2s;transition:color .2s,border-color .2s}.menu__link:hover{text-decoration:underline;background-color:#f6f7f7}.menu__link_submenu{position:relative}.menu__link_submenu:after{content:"";position:absolute;top:calc(50% - 12px);right:15px;width:24px;height:24px;background:url(https://www.omodajaecoo.com.pa/images/icons/rightarrow.svg) center center no-repeat}.menu__link_submenu:hover:after{background:url(https://www.omodajaecoo.com.pa/images/icons/rightarrow.svg) center center no-repeat}.menu-dropdown{z-index:11;background-color:#fff}.menu-lev2__wrap{padding-top:0;padding-bottom:0}.menu-lev2__title{display:block;font-size:12px;line-height:1;color:#6c7c80;letter-spacing:.05em;text-transform:uppercase;text-decoration:none;text-transform:uppercase;padding:18px 20px 19px 20px;margin:0 -20px;border-bottom:1px solid #dfe4e5}.menu-lev2__title:hover{text-decoration:underline;background-color:#f6f7f7}.menu-lev2__list{list-style:none;margin-left:-20px;margin-right:-20px}.menu-lev2__item{font-size:14px;line-height:1.4;color:inherit;border-bottom:1px solid #dfe4e5}.menu-lev2__link{display:block;color:#0d171a;text-decoration:none;padding:15px 20px 15px 40px}.menu-lev2__link.mt-orange{margin-top:0}.menu-lev2__link:hover{text-decoration:underline;background-color:#f6f7f7}.menu-models__list{list-style:none}.menu-models__item-link{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;line-height:1;letter-spacing:.5px;text-transform:uppercase;text-decoration:none;border-bottom:1px solid #dfe4e5}.menu-models__item-link:hover{background-color:#f6f7f7}.menu-models__item-title{font-size:18px;line-height:1.4;font-weight:700;color:#0d171a}.menu-models__item-price{font-size:14px;line-height:1.5;font-weight:400;color:#abbbbe;margin-top:8px}.menu-models__item-img{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;-ms-flex-negative:0;flex-shrink:0;margin-right:30px}.menu-models__item-img img{width:142px}
    .mt-green{display:none}.header{position:fixed;z-index:1000;top:0;left:0;width:100%;height:56px;color:#fff;background:#0d171a;-webkit-transition:top .3s linear,background .3s;transition:top .3s linear,background .3s}.header-wrap{background-color:#0d171a;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;max-width:1920px;height:100%;margin:0 auto}.header__logo{-ms-flex-negative:0;flex-shrink:0}.header__logo img{display:block;width:220px;}.header__burger{position:absolute;top:0;right:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;width:56px;height:56px;color:inherit;cursor:pointer}.header__burger i{display:block;width:24px;height:24px;background:url(https://omodajaecoo.com.pa/images/menumovil.svg) center center no-repeat}.header__burger_open i{background:url(https://omodajaecoo.com.pa/images/menucerrar.svg) center center no-repeat}@media (min-width:768px){.col-md{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-md-1{-webkit-box-flex:0;-ms-flex:0 0 8.33333333%;flex:0 0 8.33333333%;max-width:8.33333333%}.col-md-2{-webkit-box-flex:0;-ms-flex:0 0 16.66666667%;flex:0 0 16.66666667%;max-width:16.66666667%}.col-md-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-md-4{-webkit-box-flex:0;-ms-flex:0 0 33.33333333%;flex:0 0 33.33333333%;max-width:33.33333333%}.col-md-5{-webkit-box-flex:0;-ms-flex:0 0 41.66666667%;flex:0 0 41.66666667%;max-width:41.66666667%}.col-md-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-md-7{-webkit-box-flex:0;-ms-flex:0 0 58.33333333%;flex:0 0 58.33333333%;max-width:58.33333333%}.col-md-8{-webkit-box-flex:0;-ms-flex:0 0 66.66666667%;flex:0 0 66.66666667%;max-width:66.66666667%}.col-md-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-md-10{-webkit-box-flex:0;-ms-flex:0 0 83.33333333%;flex:0 0 83.33333333%;max-width:83.33333333%}.col-md-11{-webkit-box-flex:0;-ms-flex:0 0 91.66666667%;flex:0 0 91.66666667%;max-width:91.66666667%}.col-md-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.flex-md-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-md-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-md-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-md-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-md-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-md-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.align-content-md-center{-ms-flex-line-pack:center!important;align-content:center!important}.container{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}.row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-20px;margin-left:-20px}.row>.col,.row>[class*=col-]{position:relative;width:100%;padding-right:20px;padding-left:20px}.menu__back{padding-right:40px;padding-left:40px}.menu-lev2__wrap{padding-top:22px}.menu-lev2__title{padding:0;margin:0;border:0}.menu-lev2__title:not(:first-of-type){margin-top:24px}.menu-lev2__title:hover{background:0 0}.menu-lev2__list{margin:0}.menu-lev2__item{line-height:1;border:0}.menu-lev2__link{display:inline-block;padding:0}.menu-lev2__link.mt-orange{margin-top:24px}.menu-lev2__link:hover{background:0 0}.menu-models__item-link{display:block;text-align:center;margin:0;border:0}.menu-models__item-title{font-size:24px}.menu-models__item-price{margin:0}.menu-models__item-img{margin:0}.menu-models__item-img img{width:85%;max-width:227px}.header__logo img{width:258px;}}.menu__item{display:flex;flex-wrap:wrap;align-content:center}@media (min-width:1024px){.col-lg{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-lg-1{-webkit-box-flex:0;-ms-flex:0 0 8.33333333%;flex:0 0 8.33333333%;max-width:8.33333333%}.col-lg-2{-webkit-box-flex:0;-ms-flex:0 0 16.66666667%;flex:0 0 16.66666667%;max-width:16.66666667%}.col-lg-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-lg-4{-webkit-box-flex:0;-ms-flex:0 0 33.33333333%;flex:0 0 33.33333333%;max-width:33.33333333%}.col-lg-5{-webkit-box-flex:0;-ms-flex:0 0 41.66666667%;flex:0 0 41.66666667%;max-width:41.66666667%}.col-lg-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-lg-7{-webkit-box-flex:0;-ms-flex:0 0 58.33333333%;flex:0 0 58.33333333%;max-width:58.33333333%}.col-lg-8{-webkit-box-flex:0;-ms-flex:0 0 66.66666667%;flex:0 0 66.66666667%;max-width:66.66666667%}.col-lg-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-lg-10{-webkit-box-flex:0;-ms-flex:0 0 83.33333333%;flex:0 0 83.33333333%;max-width:83.33333333%}.col-lg-11{-webkit-box-flex:0;-ms-flex:0 0 91.66666667%;flex:0 0 91.66666667%;max-width:91.66666667%}.col-lg-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.flex-lg-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-lg-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-lg-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-lg-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-lg-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-lg-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.align-content-lg-center{-ms-flex-line-pack:center!important;align-content:center!important}.menu{overflow-x:initial;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:0;border:0;justify-content:space-between}.menu__back{display:none}.menu__list{display:-webkit-box;display:-ms-flexbox;display:flex;margin-left:10px}.menu__item{margin-left:30px}.menu__item1{margin-right:0px}.menu__link:hover{text-decoration:none;background:0 0}.menu__link{padding:5px 0 2px 0;border-bottom:1px solid transparent;color:#fff}.menu__link:hover{border-color:#e60012}.menu__link_active{color:#ced7d9;border-color:#00657b}.menu__link_active:hover{color:#ced7d9;border-color:#00657b}.menu__link_submenu:after{display:none}.menu-dropdown{position:absolute;top:100%;left:0;visibility:hidden;opacity:0;width:100%;border-top:1px solid #dfe4e5;-webkit-transition:opacity .3s,-webkit-transform .3s;transition:opacity .3s,-webkit-transform .3s;transition:opacity .3s,transform .3s;transition:opacity .3s,transform .3s,-webkit-transform .3s}.menu-dropdown_open{visibility:visible;opacity:1;-webkit-transform:none;transform:none}.menu-lev2{border-bottom:1px solid #dfe4e5}.header{height:auto;min-height:60px}.header-wrap{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:0 40px}.header__burger{display:none}}@media (min-width:1200px){.col-xl{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-xl-1{-webkit-box-flex:0;-ms-flex:0 0 8.33333333%;flex:0 0 8.33333333%;max-width:8.33333333%}.col-xl-2{-webkit-box-flex:0;-ms-flex:0 0 16.66666667%;flex:0 0 16.66666667%;max-width:16.66666667%}.col-xl-3{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%;max-width:25%}.col-xl-4{-webkit-box-flex:0;-ms-flex:0 0 33.33333333%;flex:0 0 33.33333333%;max-width:33.33333333%}.col-xl-5{-webkit-box-flex:0;-ms-flex:0 0 41.66666667%;flex:0 0 41.66666667%;max-width:41.66666667%}.col-xl-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-xl-7{-webkit-box-flex:0;-ms-flex:0 0 58.33333333%;flex:0 0 58.33333333%;max-width:58.33333333%}.col-xl-8{-webkit-box-flex:0;-ms-flex:0 0 66.66666667%;flex:0 0 66.66666667%;max-width:66.66666667%}.col-xl-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-xl-10{-webkit-box-flex:0;-ms-flex:0 0 83.33333333%;flex:0 0 83.33333333%;max-width:83.33333333%}.col-xl-11{-webkit-box-flex:0;-ms-flex:0 0 91.66666667%;flex:0 0 91.66666667%;max-width:91.66666667%}.col-xl-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.flex-xl-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-xl-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-xl-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-xl-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}
    .flex-xl-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-xl-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.align-content-xl-center{-ms-flex-line-pack:center!important;align-content:center!important}.container{padding-left:80px;padding-right:80px}.mt-red{margin-top:48px}.mt-green{margin-top:32px}.mt-orange{margin-top:24px}.pt-red{padding-top:48px}.pb-red{padding-bottom:48px}.pt-green{padding-top:32px}.pb-green{padding-bottom:32px}.pt-orange{padding-top:24px}.pb-orange{padding-bottom:24px}}@media (min-width:1700px){body{font-size:18px}.container{padding-left:100px;padding-right:100px}.small-text{font-size:16px}.mt-red{margin-top:64px}.mt-green{margin-top:46px}.mt-orange{margin-top:32px}.pt-red{padding-top:64px}.pb-{padding-bottom:64px}.pt-green{padding-top:48px}.pb-green{padding-bottom:48px}.pt-orange{padding-top:32px}.pb-orange{padding-bottom:32px}.menu-lev2__link.mt-orange{margin-top:32px}}@media (max-width:1023px){.menu{position:fixed;z-index:10;top:56px;bottom:0;left:0;width:100%;background-color:#fff;overflow-y:auto;-webkit-transform:translateX(-100%);transform:translateX(-100%);pointer-events:none}.menu_open{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.menu_open{-webkit-transform:none;transform:none;pointer-events:auto}.menu__item{border-bottom:1px solid #dfe4e5}.menu-dropdown{position:fixed;top:56px;bottom:0;left:0;width:100%;overflow-y:auto;-webkit-transform:translateX(100%);transform:translateX(100%);pointer-events:none}.menu-dropdown_open{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.menu-dropdown_open{-webkit-transform:none;transform:none;pointer-events:auto}}#noticias{min-height:1100px;overflow:hidden;width:100%}@media (width > 1023px){.menu-lev2__wrap{display:flex;flex-direction:row}.menu-lev2__list{display:flex;flex-direction:column;margin-right:30px;margin-bottom:30px}}.menu-lev2__list{margin-bottom:20px}.logo{display:inline}@media (1100px >= width){img[data-object-fit=cover]{-o-object-fit:cover;object-fit:cover;object-position:center}}@keyframes animate-fade{0%{opacity:0}100%{opacity:1}}@keyframes animate-pop{0%{opacity:0;transform:scale(.5,.5)}100%{opacity:1;transform:scale(1,1)}}@keyframes animate-blur{0%{opacity:0;filter:blur(15px)}100%{opacity:1;filter:blur(0)}}@keyframes animate-glow{0%{opacity:0;filter:brightness(3) saturate(3);transform:scale(.8,.8)}100%{opacity:1;filter:brightness(1) saturate(1);transform:scale(1,1)}}@keyframes animate-grow{0%{opacity:0;transform:scale(1,0);visibility:hidden}100%{opacity:1;transform:scale(1,1)}}@keyframes animate-splat{0%{opacity:0;transform:scale(0,0) rotate(20deg) translate(0,-30px)}70%{opacity:1;transform:scale(1.1,1.1) rotate(15deg)}85%{opacity:1;transform:scale(1.1,1.1) rotate(15deg) translate(0,-10px)}100%{opacity:1;transform:scale(1,1) rotate(0) translate(0,0)}}@keyframes animate-roll{0%{opacity:0;transform:scale(0,0) rotate(360deg)}100%{opacity:1;transform:scale(1,1) rotate(0)}}@keyframes animate-flip{0%{opacity:0;transform:rotateX(-120deg) scale(.9,.9)}100%{opacity:1;transform:rotateX(0) scale(1,1)}}@keyframes animate-spin{0%{opacity:0;transform:rotateY(-120deg) scale(.9,.9)}100%{opacity:1;transform:rotateY(0) scale(1,1)}}@keyframes animate-slide{0%{opacity:0;transform:translate(0,25px)}100%{opacity:1;transform:translate(0,0)}}@keyframes animate-drop{0%{opacity:0;transform:translate(0,-300px) scale(.9,1.1)}95%{opacity:1;transform:translate(0,0) scale(.9,1.1)}96%{opacity:1;transform:translate(10px,0) scale(1.2,.9)}97%{opacity:1;transform:translate(-10px,0) scale(1.2,.9)}98%{opacity:1;transform:translate(5px,0) scale(1.1,.9)}99%{opacity:1;transform:translate(-5px,0) scale(1.1,.9)}100%{opacity:1;transform:translate(0,0) scale(1,1)}}.menu-models__item{padding-right:0!important;padding-left:0!important}.menu-models__item-img img{width:100%;max-width:227px}.menu-models__item-link{display:flex;flex-direction:row;height:100%;width:100%;padding:15px 10px 15px 0;font-size:14px}.menu-models__item-link>div:nth-child(1){width:60%}.menu-models__item-link>div:nth-child(2){width:40%}.boton-wrap-header a{height:30px;display:flex;align-items:center;justify-content:center;text-decoration:none}.boton-wrap-header a:hover{opacity:.8}.boton-wrap-header a:nth-child(1){background-color:#000000;color:#fff;margin-bottom:3px;border:solid 1px #333}.boton-wrap-header a:nth-child(2){background-color:#fff;color:#1b1b1b;margin-top:3px;border:solid 1px #535353}@media (max-width:640px){.container{max-width:640px}}@media (max-width:768px){.container{max-width:768px}}@media (max-width:1024px){.container{max-width:1024px}}@media (max-width:1280px){.container{max-width:1280px}}@media (max-width:1536px){.container{max-width:1920px}}body{overflow-x:hidden}.right{display:flex;flex-direction:column;width:85%;align-items:center;justify-items:flex-start}@media (900px >=width){.right{width:85%}}
`;

        // Crear el stylesheet
        const styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(cssText);
        this.shadowRoot.adoptedStyleSheets = [styleSheet];

        // Agregar el link para la fuente Raleway en el shadow DOM
        const fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap';
        this.shadowRoot.appendChild(fontLink);
    }

    connectedCallback() {
        this.initCarousel();
        this.setupDropdownCloseHandlers();
    }

    setupDropdownCloseHandlers() {
        // Event listener para cerrar al hacer clic fuera (usando shadowRoot)
        this.shadowRoot.addEventListener('click', (e) => {
            // Verificar si el clic fue en un botón de menú o en su submenú
            const isClickInsideDropdown = Array.from(this.HTMLElements.dropBotons).some((dropBoton) => {
                const submenu = dropBoton.nextElementSibling;
                return (
                    dropBoton.contains(e.target) || // Click en el botón
                    submenu.contains(e.target)      // Click en el submenú
                );
            });

            // Si el clic fue fuera de cualquier dropdown, ciérralos todos
            if (!isClickInsideDropdown) {
                this.HTMLElements.dropBotons.forEach((dropBoton) => {
                    const submenu = dropBoton.nextElementSibling;
                    submenu.classList.add("menu-dropdown_close");
                    submenu.classList.remove("menu-dropdown_open");
                });
            }
        });
    }

    initCarousel() {
        this.HTMLElements = {
            dropBotons: this.shadowRoot.querySelectorAll(".js-menu-link-submenu"),
            burgerBoton: this.shadowRoot.querySelector("#js-header-burger"),
            mobileMenu: this.shadowRoot.querySelector("#js-menu"),
            desktoSubMenus: this.shadowRoot.querySelectorAll(".js-menu-dropdown"),
            backMenuBotons: this.shadowRoot.querySelectorAll(".js-menu-dropdown-back"),
            header__burger: this.shadowRoot.querySelector(".header__burger")
        };

        document.addEventListener('click', (e) => {
            const isClickInsideDropdown = this.HTMLElements.dropBotons.some((dropBoton) => {
                const submenu = dropBoton.nextElementSibling;
                return (
                    dropBoton.contains(e.target) || // Si se hizo clic en el botón
                    submenu.contains(e.target)      // O dentro del submenú
                );
            });

            // Si el clic fue fuera de cualquier dropdown, ciérralos todos
            if (!isClickInsideDropdown) {
                this.HTMLElements.dropBotons.forEach((dropBoton) => {
                    const submenu = dropBoton.nextElementSibling;
                    submenu.classList.add("menu-dropdown_close");
                    submenu.classList.remove("menu-dropdown_open");
                });
            }
        });
        this.HTMLElements.desktoSubMenus.forEach((desktoSubMenu) => {
            desktoSubMenu.classList.add("menu-dropdown_close");
        });

        this.HTMLElements.backMenuBotons.forEach((backMenuBoton) => {
            backMenuBoton.addEventListener('click', (e) => {
                e.preventDefault();
                const submenu = backMenuBoton.closest(".js-menu-dropdown");
                submenu.classList.remove("menu-dropdown_open");
                submenu.classList.add("menu-dropdown_close");
            });
        });

        this.HTMLElements.dropBotons.forEach((dropBoton) => {
            dropBoton.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Importante para evitar que el evento llegue al shadowRoot.click

                const submenu = dropBoton.nextElementSibling;
                submenu.classList.toggle("menu-dropdown_close");
                submenu.classList.toggle("menu-dropdown_open");

                // Cierra otros submenús abiertos
                this.HTMLElements.dropBotons.forEach((otherBtn) => {
                    if (otherBtn !== dropBoton) {
                        const otherSubmenu = otherBtn.nextElementSibling;
                        otherSubmenu.classList.add("menu-dropdown_close");
                        otherSubmenu.classList.remove("menu-dropdown_open");
                    }
                });
            });
        });

        this.HTMLElements.burgerBoton.addEventListener('click', (e) => {
            e.preventDefault();
            this.HTMLElements.mobileMenu.classList.toggle("menu_open");
            this.HTMLElements.mobileMenu.classList.toggle("menu_close");

            this.HTMLElements.header__burger.classList.toggle("header__burger_open")
        });
    }
}

customElements.define('header-oj', headeroj);