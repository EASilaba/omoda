(function() {
    'use strict';
    
    const scriptElement = document.currentScript;
    const config = {
        cssPath: scriptElement.getAttribute('data-css-path') || '../cookies/cookieconsent.css',
        configScriptPath: scriptElement.getAttribute('data-config-path') || '../cookies/cookieconsent-config.js'
    };
    
    // SOLO inicializar el dataLayer y consentimiento por defecto
    const consentScript = document.createElement('script');
    consentScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        
        // Configuración de consentimiento DENEGADO por defecto
        gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'personalization_storage': 'denied',
            'functionality_storage': 'denied',
            'security_storage': 'granted'
        });
    `;
    document.head.insertBefore(consentScript, document.head.firstChild);
    
    // Inyectar recursos del banner
    document.addEventListener('DOMContentLoaded', function() {
        // CSS del banner
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = config.cssPath;
        document.head.appendChild(cssLink);
        
        // Configuración del banner
        const configScript = document.createElement('script');
        configScript.type = 'module';
        configScript.src = config.configScriptPath;
        document.body.appendChild(configScript);
    });
    
})();