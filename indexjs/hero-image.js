class heroimage extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = /*html*/`<div id="" class="web_block_slider-hero" style=" margin-left:auto; margin-right:auto">
        <div class="js-slider swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events" data-layout="hero">
            <div class="swiper-wrapper"  id="swiper-wrapper-171c8cfcbe72c2ec" aria-live="off">
                
                <div class="swiper-slide" data-title="" style="width: 100%;" role="group" data-swiper-slide-index="0" aria-label="1 / 3">
                    <div class="web_block_media">
                        <div class="web_block_media__img-wrap responsive-media">
                        <a href="https://www.omodajaecoo.com.pa/promociones/"><picture>
                           
                                <source type="image/jpg"
                                    srcset="./images/desktop2437x676.jpg"
                                    media="(min-width: 800px)">
                          
                                    <img decoding="async" src="./images/mobile750x880.jpg" alt="Promociones" data-object-fit="cover" data-lazy-src="./images/3-omoda_lanzamiento_b_1_landing_1920x1080_3.jpg" data-ll-status="loaded" class="entered lazyloaded">
                            </picture></a>
                            
                        </div>
                        <div class="container web_block_media__content" style="display:none;">
                            <div class="row justify-content-end">
                                <div class="col-xl-6 word-up" style="opacity: 0; transform: translateY(30px) scale(0.999); ">
                                    <div class="h1 web_block_media__title">
                                        <div class="white_title"></div>
                                    </div>
                                    <div class="mt-yellow web_block_media__subtitle">
                                    </div>
                                    <div class="mt-orange web_block_media__btn-wrap">
                                        <a class="btn btn_primary-inverse" href="" target="">Solicita tu cotización</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="web_block_slider-hero__pagination" style="display: none;">
                <div class="container">
                    <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                        <div class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0"><span></span></div>
                        <div class="swiper-pagination-bullet" tabindex="0"><span></span></div>
                        <div class="swiper-pagination-bullet" tabindex="0"><span></span></div>
                    </div>
                </div>
            </div>
            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
    </div>
`;

    const cssText = /*CSS*/`
        :where(.wp-block-button__link){border-radius:9999px;box-shadow:none;padding:calc(.667em + 2px) calc(1.333em + 2px);
        text-decoration:none}:where(.wp-block-columns.has-background){padding:1.25em 2.375em}:where(.wp-block-file__button){border-radius:2em;padding:.5em 1em}:where(.wp-block-file__button):is(a):active,:where(.wp-block-file__button):is(a):focus,:where(.wp-block-file__button):is(a):hover,:where(.wp-block-file__button):is(a):visited{box-shadow:none;color:#fff;opacity:.85;text-decoration:none}:where(p.has-text-color:not(.has-link-color)) a{color:inherit}:where(.wp-block-search__button){border:1px solid #ccc;padding:.375em .625em}:where(pre.wp-block-verse){font-family:inherit}:root{--wp--preset--font-size--normal:16px;--wp--preset--font-size--huge:42px}html :where(.has-border-color){border-style:solid}html :where([style*=border-top-color]){border-top-style:solid}html :where([style*=border-right-color]){border-right-style:solid}html :where([style*=border-bottom-color]){border-bottom-style:solid}html :where([style*=border-left-color]){border-left-style:solid}html :where([style*=border-width]){border-style:solid}html :where([style*=border-top-width]){border-top-style:solid}html :where([style*=border-right-width]){border-right-style:solid}html :where([style*=border-bottom-width]){border-bottom-style:solid}html :where([style*=border-left-width]){border-left-style:solid}html :where(img[class*=wp-image-]){height:auto;max-width:100%}html :where(.is-position-sticky){--wp-admin--admin-bar--position-offset:var(
        --wp-admin--admin-bar--height,    0px
        )}@media screen and (max-width:600px){html :where(.is-position-sticky){--wp-admin--admin-bar--position-offset:0px}}body{--wp--preset--color--black:#000000;--wp--preset--color--cyan-bluish-gray:#abb8c3;--wp--preset--color--white:#ffffff;--wp--preset--color--pale-pink:#f78da7;--wp--preset--color--vivid-red:#cf2e2e;--wp--preset--color--luminous-vivid-orange:#ff6900;--wp--preset--color--luminous-vivid-amber:#fcb900;--wp--preset--color--light-green-cyan:#7bdcb5;--wp--preset--color--vivid-green-cyan:#00d084;--wp--preset--color--pale-cyan-blue:#8ed1fc;--wp--preset--color--vivid-cyan-blue:#0693e3;--wp--preset--color--vivid-purple:#9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple:linear-gradient(
          135deg,    rgba(6, 147, 227, 1) 0%,    rgb(155, 81, 224) 100%
        );--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan:linear-gradient(
          135deg,    rgb(122, 220, 180) 0%,    rgb(0, 208, 130) 100%
        );--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange:linear-gradient(
          135deg,    rgba(252, 185, 0, 1) 0%,    rgba(255, 105, 0, 1) 100%
        );--wp--preset--gradient--luminous-vivid-orange-to-vivid-red:linear-gradient(
          135deg,    rgba(255, 105, 0, 1) 0%,    rgb(207, 46, 46) 100%
        );--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray:linear-gradient(
          135deg,    rgb(238, 238, 238) 0%,    rgb(169, 184, 195) 100%
        );--wp--preset--gradient--cool-to-warm-spectrum:linear-gradient(
          135deg,    rgb(74, 234, 220) 0%,    rgb(151, 120, 209) 20%,    rgb(207, 42, 186) 40%,    rgb(238, 44, 130) 60%,    rgb(251, 105, 98) 80%,    rgb(254, 248, 76) 100%
        );--wp--preset--gradient--blush-light-purple:linear-gradient(
          135deg,    rgb(255, 206, 236) 0%,    rgb(152, 150, 240) 100%
        );--wp--preset--gradient--blush-bordeaux:linear-gradient(
          135deg,    rgb(254, 205, 165) 0%,    rgb(254, 45, 45) 50%,    rgb(107, 0, 62) 100%
        );--wp--preset--gradient--luminous-dusk:linear-gradient(
          135deg,    rgb(255, 203, 112) 0%,    rgb(199, 81, 192) 50%,    rgb(65, 88, 208) 100%
        );--wp--preset--gradient--pale-ocean:linear-gradient(
          135deg,    rgb(255, 245, 203) 0%,    rgb(182, 227, 212) 50%,    rgb(51, 167, 181) 100%
        );--wp--preset--gradient--electric-grass:linear-gradient(
          135deg,    rgb(202, 248, 128) 0%,    rgb(113, 206, 126) 100%
        );--wp--preset--gradient--midnight:linear-gradient(
          135deg,    rgb(2, 3, 129) 0%,    rgb(40, 116, 252) 100%
        );
        --wp--preset--duotone--dark-grayscale:url("#wp-duotone-dark-grayscale");
        --wp--preset--duotone--grayscale:url("#wp-duotone-grayscale");
        --wp--preset--duotone--purple-yellow:url("#wp-duotone-purple-yellow");
        --wp--preset--duotone--blue-red:url("#wp-duotone-blue-red");
        --wp--preset--duotone--midnight:url("#wp-duotone-midnight");
        --wp--preset--duotone--magenta-yellow:url("#wp-duotone-magenta-yellow");
        --wp--preset--duotone--purple-green:url("#wp-duotone-purple-green");
        --wp--preset--duotone--blue-orange:url("#wp-duotone-blue-orange");
        --wp--preset--font-size--small:13px;
        --wp--preset--font-size--medium:20px;
        --wp--preset--font-size--large:36px;
        --wp--preset--font-size--x-large:42px;
        --wp--preset--spacing--20:0.44rem;
        --wp--preset--spacing--30:0.67rem;
        --wp--preset--spacing--40:1rem;
        --wp--preset--spacing--50:1.5rem;
        --wp--preset--spacing--60:2.25rem;
        --wp--preset--spacing--70:3.38rem;
        --wp--preset--spacing--80:5.06rem;
        --wp--preset--shadow--natural:6px 6px 9px rgba(0, 0, 0, 0.2);
        --wp--preset--shadow--deep:12px 12px 50px rgba(0, 0, 0, 0.4);
        --wp--preset--shadow--sharp:6px 6px 0px rgba(0, 0, 0, 0.2);
        --wp--preset--shadow--outlined:6px 6px 0px -3px rgba(255, 255, 255, 1),6px 6px rgba(0, 0, 0, 1);
        --wp--preset--shadow--crisp:6px 6px 0px rgba(0, 0, 0, 1)}
        :where(.is-layout-flex){gap:.5em}
        :where(.wp-block-columns.is-layout-flex){gap:2em}
        @font-face{font-display:swap;font-family:swiper-icons;src:url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA") format("woff");font-weight:400;font-style:normal}
        :root{--swiper-theme-color:#007aff}
        .swiper-container{margin-left:auto;
        margin-right:auto;position:relative;
        overflow:hidden;list-style:none;
        padding:0;z-index:1}
        .swiper-wrapper{position:relative;
        width:100%;height:100%;
        z-index:1;
        display:flex;
        transition-property:transform;
        box-sizing:content-box}
        .swiper-wrapper{transform:translate3d(0,0,0)}
        .swiper-container-pointer-events{touch-action:pan-y}
        .swiper-slide{flex-shrink:0;width:100%;height:100%;
        position:relative;
        transition-property:transform}
        :root{--swiper-navigation-size:44px}
        .swiper-pagination{position:absolute;
        text-align:center;
        transition:.3s opacity;transform:translate3d(0,0,0);
        z-index:10}
        .swiper-container-horizontal>
        .swiper-pagination-bullets{bottom:10px;left:0;width:100%}
        .swiper-pagination-bullet{width:8px;height:8px;
        display:inline-block;border-radius:50%;
        background:#000;opacity:.2}
        .swiper-pagination-clickable 
        .swiper-pagination-bullet{cursor:pointer}
        .swiper-pagination-bullet:only-child{display:none!important}
        .swiper-pagination-bullet-active{opacity:1;
        background:var(--swiper-pagination-color,var(--swiper-theme-color))}
        .swiper-container-horizontal>.swiper-pagination-bullets 
        .swiper-pagination-bullet{margin:0 4px}@keyframes swiper-preloader-spin{100%{transform:rotate(360deg)}}
        .swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}
        .container{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}
        .container{max-width:1920px}
        .row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;
        flex-wrap:wrap;
        margin-right:-20px;margin-left:-20px}.col,.col-6,.col-xl-3,.col-xl-5,.col-xl-6{position:relative;width:100%;
        padding-right:20px;padding-left:20px}
        .col{-ms-flex-preferred-size:0;
        flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}
        .col-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}
        .justify-content-end{-webkit-box-pack:end!important;
        -ms-flex-pack:end!important;justify-content:flex-end!important}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;margin:0}html{height:100%;scroll-behavior:smooth}body{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;font:14px/1.7 "Noto Sans",sans-serif;font-weight:400;color:#0c0c0b;background-color:#fff}img{max-width:100%;border:0}.container{padding-left:20px;padding-right:20px}.h1,h1{font:32px/1.1 "Noto Sans";font-weight:300;
        color:#30363a;text-transform:uppercase}h3{font:28px/1 "Noto Sans";font-weight:300;color:#30363a}
        .btn{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;
        font:14px/1 "Noto Sans";text-decoration:none;padding:17px 32px;-webkit-transition:opacity .3s ease-out;transition:opacity .3s ease-out;cursor:pointer}
        .btn2{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font:14px/1 "Noto Sans";
        text-decoration:none;padding:10px 32px;-webkit-transition:opacity .3s ease-out;transition:opacity .3s ease-out;cursor:pointer;margin-bottom:10px}.btn:hover{opacity:.8}
        .btn_primary{color:#30363a;border:1px solid #30363a}.btn_primary-inverse{color:#fff;border:1px solid #fff}.responsive-media{position:relative;background-position:center}
        .responsive-media:before{content:"";display:block;width:100%;height:0;padding-top:100%}.responsive-media>picture{background-position:center}.responsive-media>img,.responsive-media>picture,.responsive-media>picture>img{position:absolute;top:0;left:0;width:100%;height:100%}img[data-object-fit=contain]{-o-object-fit:contain;object-fit:contain}img[data-object-fit=cover]{-o-object-fit:cover;object-fit:cover}img[data-object-fit=fill]{-o-object-fit:cover;object-fit:cover;object-position:top}
        @media (1600px <= width <= 1880px){img[data-object-fit=fill]{-o-object-fit:fill;object-fit:fill;object-position:top}}
        @media (width <= 800px){img[data-object-fit=fill]{-o-object-fit:cover;object-fit:cover;object-position:center} .js-slider{width:100%}  }
        .js-slider{width:100%}
        .web_block_slider-hero{background:#fff}
        .fit-img{background-size:cover;background-position:center;background-repeat:no-repeat}
        .fit-img img{opacity:0!important}.word-up{-webkit-transform:translateY(30px) scale(.999);
        transform:translateY(30px) scale(.999);opacity:0;-webkit-transition:.5s linear;
        transition:all .5s linear}.mt-orange{margin-top:18px}
        .mt-yellow{margin-top:8px}@-webkit-keyframes cookie-notify-anim{0%{-webkit-transform:translateY(120px);transform:translateY(120px);
        opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);
        opacity:1}}@keyframes cookie-notify-anim{0%{-webkit-transform:translateY(120px);
        transform:translateY(120px);opacity:0}100%{-webkit-transform:translateY(0);
        transform:translateY(0);opacity:1}}@-webkit-keyframes cookie-notify-anim-hide{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(120px);transform:translateY(120px);opacity:0}}
        @keyframes cookie-notify-anim-hide{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(120px);transform:translateY(120px);opacity:0}}.web_block_media{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;  text-align:center;background:#fff}   
        .web_block_media__img-wrap{position:absolute;top:0;left:0;width:100%;height:100%}
        .web_block_media__img-wrap:before{display:none}
        .web_block_media__content{position:relative;z-index:1;color:#fff;padding-bottom:86px}
        .web_block_media__content a:not(.btn){color:inherit}
        .web_block_media__content a:not(.btn):hover{text-decoration:none}.web_block_media__title{color:#fff}
        .web_block_media__btn-wrap{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.web_block_media__btn-wrap .btn:not(:first-child){margin-left:20px}.web_block_media__subtitle{color:#fff;font-size:larger}.white_title{font-size:32px;color:#fff}.web_block_slider-hero{position:relative;background:#fff}.web_block_slider-hero .web_block_media__title img{width:110px}.web_block_slider-hero__pagination{position:absolute;bottom:0;left:0;right:0;z-index:1;padding-bottom:48px}.web_block_slider-hero__pagination .swiper-pagination{position:static;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.web_block_slider-hero__pagination .swiper-pagination .swiper-pagination-bullet{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:30px;height:2px;background:#fff;border-radius:0;opacity:.3;-webkit-transition:.3s linear;transition:.3s linear}.web_block_slider-hero__pagination .swiper-pagination .swiper-pagination-bullet:not(:last-child){margin-right:15px}.web_block_slider-hero__pagination .swiper-pagination .swiper-pagination-bullet>span{display:none}.web_block_slider-hero__pagination .swiper-pagination .swiper-pagination-bullet-active{width:60px;opacity:1}@media (min-width:768px){.web_block_slider-hero .web_block_media__title img{width:130px}.white_title{font-size:48px}.container{padding-left:40px;padding-right:40px}}.subtitle-white{color:#fff!important}.btn-white{border:1px solid #fff}@media (min-width:1024px){.web_block_media{height:calc(40vh + 10px)}}@media (min-width:1200px){.col-xl-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-xl-5{-webkit-box-flex:0;-ms-flex:0 0 41.66666667%;flex:0 0 41.66666667%;max-width:41.66666667%}.col-xl-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.container{padding-left:80px;padding-right:80px}.h1,h1{font-size:48px}.mt-orange{margin-top:24px}.mt-yellow{margin-top:12px}.web_block_media{text-align:right}.web_block_media__content{padding-bottom:48px}.web_block_media__btn-wrap{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.web_block_slider-hero__pagination .swiper-pagination{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}}
        @media (min-width:1450px){.container{padding-left:112px;padding-right:112px}.mt-orange{margin-top:32px}.mt-yellow{margin-top:16px}}
        @font-face{font-family:"Noto Sans";font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/notosans/v32/o-0NIpQlx3QUlC5A4PNjThZVZNyB.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:"Noto Sans";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/notosans/v32/o-0IIpQlx3QUlC5A4PNr5TRA.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:"Noto Sans";font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/notosans/v32/o-0NIpQlx3QUlC5A4PNjFhdVZNyB.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@keyframes fslightboxl{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
        
        
        @media( width >= 800px){
          .web_block_media{
            height: calc(26vw + 30px) !important;
          }
         
        }

        @media( width < 800px){
          .web_block_media{
            height: calc(100vw + 70px) !important;
          }
         
        }

        @media( width < 300px){
          .web_block_media{
            height: 388px !important;
          }
         
        }


        @media( width < 1400px){
          .js-slider {
            width: 100%;
        }
        }
        
        `;
    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(cssText);
    this.shadowRoot.adoptedStyleSheets = [styleSheet];
  }
}
customElements.define('hero-image', heroimage);