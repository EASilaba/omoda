class footeroj extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = /*html*/`
  <div class="footer">
   <div class="container">
    <div class="footer__logo-wrap pt-red">
     <div class="footer__logo">
      <img src="https://omodajaecoo.com.pa/images/a.svg" width="158" height="18" alt="JAECOo">
     </div><!--
     <div class="footer__phone d-none d-lg-flex">
      <span class="footer__phone-label main-text">Línea directa:</span>
      <a itemprop="telephone" href="tel: " class="footer__phone-num h6"></a>
     </div>-->
    </div>
    <div class="footer__menu-wrap">
     <nav class="footer__menu">
      <div class="footer__menu-item">
       <a href="" class="footer__menu-link main-text">Modelos</a>
      </div>
      <div class="footer__menu-item">
       <a href="https://wa.me/+50761679302" target="_blank" class="footer__menu-link main-text">Agendar Cita</a>
      </div>
      <div class="footer__menu-item">
       <a href="https://omodajaecoo.com.pa/sucursales/" target="_blank" class="footer__menu-link main-text">Sucursales</a>
      </div>
     </nav>
     <div class="footer__media2 d-none d-lg-flex">
     </div>
    </div>
    <div class="footer_icons">
      <div class=footer_col>
      
      <div class=footer_row>
      <font class="mini-title">Redes sociales</font>
      </div>
      <div class=footer_row>
       <div class="footer_content">
        <a class="red-icon" href=https://www.instagram.com/omodajaecoo.panama/​ rel="nofollow" target="_blank" class="footer__media-item">
        <img class="footer_iconos_redes"src="https://omodajaecoo.com.pa/images/icons/insta.webp">
        </a>
       </div>
       <div class="footer_content">
        <a class="red-icon" href="https://www.facebook.com/omodajaecoopanama1" rel="nofollow" target="_blank" class="footer__media-item">
        <img class="footer_iconos_redes" src="https://omodajaecoo.com.pa/images/icons/facebook.webp">
        </a>
       </div>
       <div class="footer_content">
        <a class="red-icon" href="https://www.tiktok.com/@omodajaecoo.panama" rel="nofollow" target="_blank" class="footer__media-item">
        <img class="footer_iconos_redes"src="https://omodajaecoo.com.pa/images/icons/tiktok.webp">
        </a>
       </div>
       <div class="footer_content">
        <a class="red-icon" href="https://www.youtube.com/@OmodaJaecooPanama " rel="nofollow" target="_blank" class="footer__media-item">
        <img class="footer_iconos_redes"src="https://omodajaecoo.com.pa/images/icons/youtube.webp">
        </a>
       </div>
       <div class="footer_content">
        <a class="red-icon" href="https://x.com/OmodaJaecoo_PA" rel="nofollow" target="_blank" class="footer__media-item">
        <img class="footer_iconos_redes" src="https://omodajaecoo.com.pa/images/icons/twitter.webp">
        </a>
       </div>
      </div>
      </div>
    </div>
    <div class="footer__media2 d-flex d-lg-none">
    </div>
    <div class="footer__media2 d-flex d-lg-none">
     <a href="https://play.google.com/store/apps/details?id=com.silaba.GS" rel="nofollow" target="_blank"
      class="footer__media2-item small-text">Google Play</a>
     <a href="https://apps.apple.com/pa/app/grupo-silaba/id1453715960" rel="nofollow" target="_blank"
      class="footer__media2-item small-text">App Store</a>
    </div>
    <div class="footer__copy-wrap small-text pb-pink">
     <meta itemprop="copyrightYear" content="2023">
     <meta itemprop="copyrightHolder" content=" «grupo silaba»">
     <span>
      <font style="vertical-align: inherit;">
       <font style="vertical-align: inherit;">© 2025 Grupo Silaba
     </span>
     <div class="footer__media2 d-none d-lg-flex">
      <a href="https://rewards.silaba.com/" class="footer__add-menu-item small-text">
       <font style="vertical-align: inherit; padding-left: 10px ">
        <font style="vertical-align: inherit;">Descarga la app ▶ </font>
       </font>
      </a><a href="https://play.google.com/store/apps/details?id=com.silaba.GS" rel="nofollow" target="_blank" class="footer__media2-item small-text">
       <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Google Play</font>
       </font>
      </a>
      <a href="https://apps.apple.com/pa/app/grupo-silaba/id1453715960" rel="nofollow" target="_blank" class="footer__media2-item small-text">
       <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">AppStore</font>
       </font>
      </a>
     </div>
    </div>
   </div>
  </div>`;

    const cssText = /*css*/ ` 
@font-face {font-family:raleway-thin ;src: url("https://www.omodajaecoo.com.pa/fonts/Raleway-Thin.ttf");}p, li, a, font{font-family: raleway-thin !important;font-weight: 600;}.footer{position:relative;z-index:100}@media (max-width:640px){.container{max-width:640px}}@media (max-width:768px){.container{max-width:768px}}@media (max-width:1024px){.container{max-width:1024px}}@media (max-width:1280px){.container{max-width:1280px}}@media (max-width:1536px){.container{max-width:1920px}}body{overflow-x:hidden}.left{display:flex;width:15%;flex-direction:column;align-items:center;justify-content:center}@media (900px >=width){.left{width:15%}}@charset "UTF-8";html{scroll-behavior:smooth;scroll-snap-type:x mandatory}.container{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}.container{max-width:1920px}.row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-20px;margin-left:-20px}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9{position:relative;width:100%;padding-right:20px;padding-left:20px}.col{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-1{-webkit-box-flex:0;-ms-flex:0 0 8.33333333%;flex:0 0 8.33333333%;max-width:8.33333333%}.col-2{-webkit-box-flex:0;-ms-flex:0 0 16.66666667%;flex:0 0 16.66666667%;max-width:16.66666667%}.col-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-4{-webkit-box-flex:0;-ms-flex:0 0 33.33333333%;flex:0 0 33.33333333%;max-width:33.33333333%}.col-5{-webkit-box-flex:0;-ms-flex:0 0 41.66666667%;flex:0 0 41.66666667%;max-width:41.66666667%}.col-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-7{-webkit-box-flex:0;-ms-flex:0 0 58.33333333%;flex:0 0 58.33333333%;max-width:58.33333333%}.col-8{-webkit-box-flex:0;-ms-flex:0 0 66.66666667%;flex:0 0 66.66666667%;max-width:66.66666667%}.col-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-10{-webkit-box-flex:0;-ms-flex:0 0 83.33333333%;flex:0 0 83.33333333%;max-width:83.33333333%}.col-11{-webkit-box-flex:0;-ms-flex:0 0 91.66666667%;flex:0 0 91.66666667%;max-width:91.66666667%}.col-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.d-none{display:none!important}.d-flex{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.flex-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;margin:0}html{height:100%}body{--perxis-auto-select-color:#fff;--perxis-auto-select-placeholder-color:#fff;--perxis-auto-select-selection-font-size:16px;--perxis-auto-select-arrow-color:#abbbbe;--perxis-auto-select-hover-arrow-color:#3da2b8;--perxis-auto-select-selection-font-size:16px;--perxis-auto-select-selection-line-height:1;--perxis-auto-select-selection-font-weight:400;--perxis-auto-select-selection-text-transform:none;--perxis-auto-select-selection-letter-spacing:0;--perxis-auto-select-icon-font-size:24px;--perxis-auto-select-dropdown-font-size:16px;--perxis-auto-select-dropdown-line-height:1.6;--perxis-auto-select-dropdown-font-weight:400;--perxis-auto-select-dropdown-text-transform:none;--perxis-auto-select-dropdown-letter-spacing:0;--perxis-auto-select-dropdown-border-radius:0;--perxis-auto-select-dropdown-background-color:#fff;--perxis-auto-select-dropdown-scrollbar-background-color:#6c7c80;--perxis-auto-select-dropdown-scrollbar-thumb-background-color:#30363a;--perxis-auto-select-dropdown-color:#0d171a;--perxis-auto-select-dropdown-hover-background-color:#f6f7f7;--perxis-auto-select-dropdown-hover-color:#00657b;--perxis-auto-select-dropdown-selected-color:#3b9db2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;font:16px/1.6 Arial,Helvetica,sans-serif;font-weight:400;color:#0d171a;background-color:#fff}main{display:block}img{max-width:100%;border:0}:focus{outline:0}.main{padding-top:56px}.svg-icon{overflow:hidden}.container{width:100%;padding-right:16px;padding-left:16px;margin-right:auto;margin-left:auto}.row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-16px;margin-left:-16px}.row>.col,.row>[class*=col-]{position:relative;width:100%;padding-right:16px;padding-left:16px}.h1,h1{font-size:32px;line-height:1;font-weight:700}.h2,h2{font-size:28px;line-height:1;font-weight:700}.h3,h3{font-size:24px;line-height:1.2;font-weight:700}.h4,h4{font-size:20px;line-height:1.2;font-weight:700}.h5,h5{font-size:18px;line-height:1.4;font-weight:700}.h6,h6{font-size:16px;line-height:1.4;font-weight:700}.main-text{font-size:16px}.small-text{font-size:14px}img[data-object-fit=contain]{-o-object-fit:contain;object-fit:contain}img[data-object-fit=cover]{-o-object-fit:cover;object-fit:cover;object-position:center}img[data-object-fit=fill]{-o-object-fit:cover;object-fit:cover;object-position:top}@media (1600px <= width <= 1880px){img[data-object-fit=fill]{-o-object-fit:fill;object-fit:fill;object-position:top}}.pt-pink{padding-top:48px}.pb-pink{padding-bottom:48px}.pt-red{padding-top:32px}.pb-red{padding-bottom:32px}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeout{from{opacity:1}to{opacity:0}}@keyframes fadeout{from{opacity:1}to{opacity:0}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes cookie-notify-anim{0%{-webkit-transform:translateY(120px);transform:translateY(120px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes cookie-notify-anim{0%{-webkit-transform:translateY(120px);transform:translateY(120px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@-webkit-keyframes cookie-notify-anim-hide{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(120px);transform:translateY(120px);opacity:0}}@keyframes cookie-notify-anim-hide{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(120px);transform:translateY(120px);opacity:0}}.menu{overflow-x:hidden}.menu__link{display:block;line-height:1;color:#0d171a;text-decoration:none;padding:22px 50px 22px 16px;-webkit-transition:color .2s,border-color .2s;transition:color .2s,border-color .2s}.menu__link:hover{text-decoration:underline;background-color:#f6f7f7}footer{margin-top:auto}.footer{color:#abbbbe;background:#0d171a}.footer__logo-wrap{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:32px;}.footer__logo img{display:block;width:358px;}.footer__phone{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-top:24px;border-top:1px solid rgba(255,255,255,.16)}.footer__phone-label{font-size:16px;line-height:1.5;color:#abbbbe}.footer__phone-num{color:#fff;text-decoration:none;margin-left:8px}.footer__menu-wrap{padding-top:24px;padding-bottom:24px;border-top:1px solid rgba(166,183,190,.3)}.footer__menu{font-size:18px;line-height:1;-webkit-column-count:1;-moz-column-count:1;column-count:1;-webkit-column-gap:32px;-moz-column-gap:32px;column-gap:32px}.footer__menu-item{margin-right:0}.footer__menu-item:not(:last-of-type){margin-bottom:24px}.footer__menu-link{display:inline-block;color:#fff;text-decoration:none}.footer__media{display:block;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 0 0 -10px}.footer__media-item{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:40px;height:40px;background:#2c373a;margin:16px 0 0 16px}.footer__media-icon{width:20px;height:20px;fill:#fff}.footer__copy-wrap{display:block;line-height:1.7;padding-top:24px}.footer__add-menu{margin:8px 0 0 0}.footer__add-menu-item{color:#fff;text-decoration:none}.footer__add-menu-item:not(:first-of-type){margin-left:24px}.footer__media2{padding-top:16px;padding-bottom:16px;border-bottom:1px solid rgba(255,255,255,.16)}.footer__media2-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1;color:#fff;text-decoration:none;white-space:nowrap}.footer__media2-item:not(:first-of-type){margin-left:24px}.footer__media2-icon{width:24px;height:24px;fill:none;margin-right:8px}@media (min-width:768px){.container{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}.row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-20px;margin-left:-20px}.row>.col,.row>[class*=col-]{position:relative;width:100%;padding-right:20px;padding-left:20px}.footer__copy-wrap{display:-webkit-box;display:-ms-flexbox;display:flex}.footer__add-menu{margin:0 0 0 24px}}.menu__item{display:flex;flex-wrap:wrap;align-content:center}@media (min-width:1024px){.col-lg{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-lg-1{-webkit-box-flex:0;-ms-flex:0 0 8.33333333%;flex:0 0 8.33333333%;max-width:8.33333333%}.col-lg-2{-webkit-box-flex:0;-ms-flex:0 0 16.66666667%;flex:0 0 16.66666667%;max-width:16.66666667%}.col-lg-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-lg-4{-webkit-box-flex:0;-ms-flex:0 0 33.33333333%;flex:0 0 33.33333333%;max-width:33.33333333%}.col-lg-5{-webkit-box-flex:0;-ms-flex:0 0 41.66666667%;flex:0 0 41.66666667%;max-width:41.66666667%}.col-lg-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-lg-7{-webkit-box-flex:0;-ms-flex:0 0 58.33333333%;flex:0 0 58.33333333%;max-width:58.33333333%}.col-lg-8{-webkit-box-flex:0;-ms-flex:0 0 66.66666667%;flex:0 0 66.66666667%;max-width:66.66666667%}.col-lg-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-lg-10{-webkit-box-flex:0;-ms-flex:0 0 83.33333333%;flex:0 0 83.33333333%;max-width:83.33333333%}.col-lg-11{-webkit-box-flex:0;-ms-flex:0 0 91.66666667%;flex:0 0 91.66666667%;max-width:91.66666667%}.col-lg-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.d-lg-none{display:none!important}.d-lg-flex{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.flex-lg-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-lg-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.main{padding-top:60px}.menu{overflow-x:initial;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:0;border:0;justify-content:space-between}.menu__item{margin-left:30px}.menu__item1{margin-right:40px}.menu__link:hover{text-decoration:none;background:0 0}.menu__link{padding:5px 0 2px 0;border-bottom:8px solid transparent;color:#fff}.menu__link:hover{border-color:#fff}.footer__logo-wrap{padding-bottom:24px}.footer__phone{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-top:0;margin-left:auto;margin-top:0;border:0}.footer__phone-num{margin-left:16px}.footer__menu-wrap{display:-webkit-box;display:-ms-flexbox;display:flex;padding-bottom:32px}.footer__menu{-webkit-column-count:auto;-moz-column-count:auto;column-count:auto;margin:0}.footer__menu-item{display:inline-block;margin-right:32px;margin-bottom:10px}.footer__menu-link{margin:0}.footer__media{margin-top:-16px;margin-left:auto}.footer__media-item{margin:16px 0 0 20px}.footer__copy-wrap{padding-top:0}.footer__add-menu{display:inline}.footer__media2{padding-top:0;padding-bottom:0;margin-left:auto;margin-top:0;border-bottom:none}.footer__media2-item{margin-left:20px}}@media (min-width:1200px){.container{padding-left:80px;padding-right:80px}.h1,h1{font-size:48px}.h2,h2{font-size:40px}.h3,h3{font-size:32px}.h4,h4{font-size:28px}.h5,h5{font-size:24px}.h6,h6{font-size:20px}.pt-pink{padding-top:64px}.pb-pink{padding-bottom:64px}.pt-red{padding-top:48px}.pb-red{padding-bottom:48px}}@media (min-width:1700px){body{font-size:18px}.container{padding-left:240px;padding-right:240px}.h1,h1{font-size:56px}.h2,h2{font-size:48px}.h3,h3{font-size:36px}.h4,h4{font-size:32px}.h5,h5{font-size:28px}.h6,h6{font-size:24px}.main-text{font-size:18px}.small-text{font-size:16px}.pt-pink{padding-top:96px}.pb-pink{padding-bottom:63px}.pt-red{padding-top:64px}.pb-{padding-bottom:64px}.footer{position:relative;z-index: 100}.footer .container{padding:0 80px}}@media (max-width:1023px){.menu{position:fixed;z-index:10;top:56px;bottom:0;left:0;width:100%;background-color:#fff;overflow-y:auto;-webkit-transform:translateX(-100%);transform:translateX(-100%);pointer-events:none}.menu__item{border-bottom:1px solid #dfe4e5}}.footer_icons{display:flex;flex-direction:row;justify-content:end;align-items:center}.footer_col{flex-direction:column;align-items:end;align-items:center;display:flex;width:200px}.footer_iconos_redes{height:30px;align-items:center}.footer_row{flex-direction:row;align-items:center;justify-content:space-around;display:flex;width:100%}.footer_content{display:flex;align-items:center;justify-content:end}.red-icon{color:#fff;text-decoration:none;align-items:center}.mini-title{margin-bottom:10px}.logo{display:inline}@media (1100px >= width){img[data-object-fit=cover]{-o-object-fit:cover;object-fit:cover;object-position:center}}@keyframes animate-fade{0%{opacity:0}100%{opacity:1}}@keyframes animate-pop{0%{opacity:0;transform:scale(.5,.5)}100%{opacity:1;transform:scale(1,1)}}@keyframes animate-blur{0%{opacity:0;filter:blur(15px)}100%{opacity:1;filter:blur(0)}}@keyframes animate-glow{0%{opacity:0;filter:brightness(3) saturate(3);transform:scale(.8,.8)}100%{opacity:1;filter:brightness(1) saturate(1);transform:scale(1,1)}}@keyframes animate-grow{0%{opacity:0;transform:scale(1,0);visibility:hidden}100%{opacity:1;transform:scale(1,1)}}@keyframes animate-splat{0%{opacity:0;transform:scale(0,0) rotate(20deg) translate(0,-30px)}70%{opacity:1;transform:scale(1.1,1.1) rotate(15deg)}85%{opacity:1;transform:scale(1.1,1.1) rotate(15deg) translate(0,-10px)}100%{opacity:1;transform:scale(1,1) rotate(0) translate(0,0)}}@keyframes animate-roll{0%{opacity:0;transform:scale(0,0) rotate(360deg)}100%{opacity:1;transform:scale(1,1) rotate(0)}}@keyframes animate-flip{0%{opacity:0;transform:rotateX(-120deg) scale(.9,.9)}100%{opacity:1;transform:rotateX(0) scale(1,1)}}@keyframes animate-spin{0%{opacity:0;transform:rotateY(-120deg) scale(.9,.9)}100%{opacity:1;transform:rotateY(0) scale(1,1)}}@keyframes animate-slide{0%{opacity:0;transform:translate(0,25px)}100%{opacity:1;transform:translate(0,0)}}@keyframes animate-drop{0%{opacity:0;transform:translate(0,-300px) scale(.9,1.1)}95%{opacity:1;transform:translate(0,0) scale(.9,1.1)}96%{opacity:1;transform:translate(10px,0) scale(1.2,.9)}97%{opacity:1;transform:translate(-10px,0) scale(1.2,.9)}98%{opacity:1;transform:translate(5px,0) scale(1.1,.9)}99%{opacity:1;transform:translate(-5px,0) scale(1.1,.9)}100%{opacity:1;transform:translate(0,0) scale(1,1)}}`;


    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(cssText);
    this.shadowRoot.adoptedStyleSheets = [styleSheet];
  }

  connectedCallback() {
    this.initFooter();

  }

  initFooter() {
    this.HTMLElements = {
      dropBotons: this.shadowRoot.querySelectorAll(".js-menu-link-submenu"),
      burgerBoton: this.shadowRoot.querySelector("#js-header-burger"),
      mobileMenu: this.shadowRoot.querySelector("#js-menu"),
      desktoSubMenus: this.shadowRoot.querySelectorAll(".js-menu-dropdown"),
      backMenuBotons: this.shadowRoot.querySelectorAll(".js-menu-dropdown-back"),
    };



this.HTMLElements.backMenuBotons.forEach((backMenuBoton) => {
      backMenuBoton.addEventListener('click', (e) => {
        e.preventDefault();
        const submenu = backMenuBoton.closest(".js-menu-dropdown");
        submenu.classList.remove("menu-dropdown_open");
        submenu.classList.add("menu-dropdown_close");
      });
    });



    this.HTMLElements.dropBotons.forEach( (dropBoton) => {
      dropBoton.addEventListener('click', (e) => {
        e.preventDefault();
        const submenu = dropBoton.nextElementSibling;
        submenu.classList.toggle("menu-dropdown_close");
        submenu.classList.toggle("menu-dropdown_open");
      }
      );
    });




    this.HTMLElements.desktoSubMenus.forEach((submenu) => {
      submenu.addEventListener('mouseleave', () => {
        submenu.classList.remove("menu-dropdown_open");
        submenu.classList.add("menu-dropdown_close");
      });
    });

 
  }


}

customElements.define('footer-oj', footeroj);






