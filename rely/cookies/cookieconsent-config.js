// cookieconsent-config.js

import * as CookieConsent from './cookieconsent.esm.js';

const CAT_NECESSARY = "necessary";
const CAT_ANALYTICS = "analytics";
const CAT_ADVERTISEMENT = "advertisement";
const CAT_FUNCTIONALITY = "functionality";

const SERVICE_AD_STORAGE = 'ad_storage'
const SERVICE_AD_USER_DATA = 'ad_user_data'
const SERVICE_AD_PERSONALIZATION = 'ad_personalization'
const SERVICE_ANALYTICS_STORAGE = 'analytics_storage'
const SERVICE_FUNCTIONALITY_STORAGE = 'functionality_storage'
const SERVICE_PERSONALIZATION_STORAGE = 'personalization_storage'

// Define dataLayer and the gtag function.
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Set default consent to 'denied'
gtag('consent', 'default', {
    [SERVICE_AD_STORAGE]: 'denied',
    [SERVICE_AD_USER_DATA]: 'denied',
    [SERVICE_AD_PERSONALIZATION]: 'denied',
    [SERVICE_ANALYTICS_STORAGE]: 'denied',
    [SERVICE_FUNCTIONALITY_STORAGE]: 'denied',
    [SERVICE_PERSONALIZATION_STORAGE]: 'denied',
});

/** 
 * Update gtag consent according to the users choices made in CookieConsent UI
 */
function updateGtagConsent() {
    gtag('consent', 'update', {
        [SERVICE_ANALYTICS_STORAGE]: CookieConsent.acceptedService(SERVICE_ANALYTICS_STORAGE, CAT_ANALYTICS) ? 'granted' : 'denied',
        [SERVICE_AD_STORAGE]: CookieConsent.acceptedService(SERVICE_AD_STORAGE, CAT_ADVERTISEMENT) ? 'granted' : 'denied',
        [SERVICE_AD_USER_DATA]: CookieConsent.acceptedService(SERVICE_AD_USER_DATA, CAT_ADVERTISEMENT) ? 'granted' : 'denied',
        [SERVICE_AD_PERSONALIZATION]: CookieConsent.acceptedService(SERVICE_AD_PERSONALIZATION, CAT_ADVERTISEMENT) ? 'granted' : 'denied',
        [SERVICE_FUNCTIONALITY_STORAGE]: CookieConsent.acceptedService(SERVICE_FUNCTIONALITY_STORAGE, CAT_FUNCTIONALITY) ? 'granted' : 'denied',
        [SERVICE_PERSONALIZATION_STORAGE]: CookieConsent.acceptedService(SERVICE_PERSONALIZATION_STORAGE, CAT_FUNCTIONALITY) ? 'granted' : 'denied',
    });
}

CookieConsent.run({
    // Trigger consent update when user choices change
    onFirstConsent: () => {
        updateGtagConsent();
    },
    onConsent: () => {
        updateGtagConsent();
    },
    onChange: () => {
        updateGtagConsent();
    },

    // Configure categories and services
    categories: {
        [CAT_NECESSARY]: {
            enabled: true,  // this category is enabled by default
            readOnly: true,  // this category cannot be disabled
        },
        [CAT_ANALYTICS]: {
            autoClear: {
                cookies: [
                    {
                        name: /^_ga/,   // regex: match all cookies starting with '_ga'
                    },
                    {
                        name: '_gid',   // string: exact cookie name
                    }
                ]
            },
            services: {
                [SERVICE_ANALYTICS_STORAGE]: {
                    label: 'Enables storage (such as cookies) related to analytics e.g. visit duration.',
                }
            }
        },
        [CAT_ADVERTISEMENT]: {
            services: {
                [SERVICE_AD_STORAGE]: {
                    label: 'Enables storage (such as cookies) related to advertising.',
                },
                [SERVICE_AD_USER_DATA]: {
                    label: 'Sets consent for sending user data related to advertising to Google.',
                },
                [SERVICE_AD_PERSONALIZATION]: {
                    label: 'Sets consent for personalized advertising.',
                },
            }
        },
        [CAT_FUNCTIONALITY]: {
            services: {
                [SERVICE_FUNCTIONALITY_STORAGE]: {
                    label: 'Enables storage that supports the functionality of the website or app e.g. language settings.',
                },
                [SERVICE_PERSONALIZATION_STORAGE]: {
                    label: 'Enables storage related to personalization e.g. video recommendations.',
                },
            }
        }
    },

    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "center",
            flipButtons: false
        }
    },

    language: {
    default: 'es', // Idioma por defecto ahora español
    translations: {
        en: {
            consentModal: {
                title: 'We use cookies',
                description: 'This website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent.',
                acceptAllBtn: 'Accept all',
                acceptNecessaryBtn: 'Reject all',
                showPreferencesBtn: 'Manage Individual preferences'
            },
            preferencesModal: {
                title: 'Manage cookie preferences',
                acceptAllBtn: 'Accept all',
                acceptNecessaryBtn: 'Reject all',
                savePreferencesBtn: 'Accept current selection',
                closeIconLabel: 'Close modal',
                sections: [
                    {
                        title: "Cookie usage",
                        description: "We use cookies to ensure the basic functionalities of the website and to enhance your online experience."
                    },
                    {
                        title: "Strictly necessary cookies",
                        description: "These cookies are essential for the proper functioning of the website, for example for user authentication.",
                        linkedCategory: CAT_NECESSARY,
                    },
                    {
                        title: "Analytics",
                        description: 'Cookies used for analytics help collect data that allows services to understand how users interact with a particular service. These insights allow services both to improve content and to build better features that improve the user\'s experience.',
                        linkedCategory: CAT_ANALYTICS,
                        cookieTable: {
                            headers: {
                                name: "Name",
                                domain: "Service",
                                description: "Description",
                                expiration: "Expiration"
                            },
                            body: [
                                {
                                    name: "_ga",
                                    domain: "Google Analytics",
                                    description: "Cookie set by <a href=\"https://business.safety.google/adscookies/\">Google Analytics</a>",
                                    expiration: "Expires after 12 days"
                                },
                                {
                                    name: "_gid",
                                    domain: "Google Analytics",
                                    description: "Cookie set by <a href=\"https://business.safety.google/adscookies/\">Google Analytics</a>",
                                    expiration: "Session"
                                }
                            ]
                        }
                    },
                    {
                        title: 'Advertising',
                        description: 'Google uses cookies for advertising, including serving and rendering ads, personalizing ads (depending on your ad settings at <a href=\"https://g.co/adsettings\">g.co/adsettings</a>), limiting the number of times an ad is shown to a user, muting ads you have chosen to stop seeing, and measuring the effectiveness of ads.',
                        linkedCategory: CAT_ADVERTISEMENT,
                    },
                    {
                        title: 'Functionality',
                        description: 'Cookies used for functionality allow users to interact with a service or site to access features that are fundamental to that service. Things considered fundamental to the service include preferences like the user\'s choice of language, product optimizations that help maintain and improve a service, and maintaining information relating to a user\'s session, such as the content of a shopping cart.',
                        linkedCategory: CAT_FUNCTIONALITY,
                    },
                    {
                        title: 'More information',
                        description: 'For any queries in relation to the policy on cookies and your choices, please <a href="https://www.example.com/contacts">contact us</a>.'
                    }
                ]
            }
        },
        es: {
            consentModal: {
                title: 'Usamos cookies',
                description: 'Este sitio web utiliza cookies esenciales para su correcto funcionamiento y cookies de seguimiento para entender cómo interactúas con él. Estas últimas solo se activarán después de tu consentimiento.',
                acceptAllBtn: 'Aceptar todas',
                acceptNecessaryBtn: 'Rechazar todas',
                showPreferencesBtn: 'Gestionar preferencias'
            },
            preferencesModal: {
                title: 'Gestionar preferencias de cookies',
                acceptAllBtn: 'Aceptar todas',
                acceptNecessaryBtn: 'Rechazar todas',
                savePreferencesBtn: 'Aceptar selección actual',
                closeIconLabel: 'Cerrar ventana',
                sections: [
                    {
                        title: "Uso de cookies",
                        description: "Utilizamos cookies para garantizar las funcionalidades básicas del sitio web y mejorar tu experiencia en línea."
                    },
                    {
                        title: "Cookies estrictamente necesarias",
                        description: "Estas cookies son esenciales para el funcionamiento correcto del sitio web, por ejemplo para la autenticación de usuarios.",
                        linkedCategory: CAT_NECESSARY,
                    },
                    {
                        title: "Analíticas",
                        description: 'Las cookies de análisis ayudan a recopilar datos que permiten entender cómo interactúan los usuarios con el servicio. Estas percepciones permiten tanto mejorar el contenido como crear mejores funciones que mejoren la experiencia del usuario.',
                        linkedCategory: CAT_ANALYTICS,
                        cookieTable: {
                            headers: {
                                name: "Nombre",
                                domain: "Servicio",
                                description: "Descripción",
                                expiration: "Caducidad"
                            },
                            body: [
                                {
                                    name: "_ga",
                                    domain: "Google Analytics",
                                    description: "Cookie establecida por <a href=\"https://business.safety.google/adscookies/\">Google Analytics</a>",
                                    expiration: "Caduca después de 12 días"
                                },
                                {
                                    name: "_gid",
                                    domain: "Google Analytics",
                                    description: "Cookie establecida por <a href=\"https://business.safety.google/adscookies/\">Google Analytics</a>",
                                    expiration: "Sesión"
                                }
                            ]
                        }
                    },
                    {
                        title: 'Publicidad',
                        description: 'Google utiliza cookies para publicidad, incluyendo mostrar y renderizar anuncios, personalizar anuncios (dependiendo de tu configuración de anuncios en <a href=\"https://g.co/adsettings\">g.co/adsettings</a>), limitar el número de veces que se muestra un anuncio a un usuario, silenciar anuncios que hayas elegido dejar de ver y medir la efectividad de los anuncios.',
                        linkedCategory: CAT_ADVERTISEMENT,
                    },
                    {
                        title: 'Funcionalidad',
                        description: 'Las cookies de funcionalidad permiten a los usuarios interactuar con un servicio o sitio para acceder a funciones fundamentales del mismo. Lo que se considera fundamental para el servicio incluye preferencias como el idioma elegido por el usuario, optimizaciones de producto que ayudan a mantener y mejorar un servicio, y mantener información relacionada con la sesión de un usuario, como el contenido de un carrito de compras.',
                        linkedCategory: CAT_FUNCTIONALITY,
                    },
                    {
                        title: 'Más información',
                        description: 'Para cualquier consulta relacionada con la política de cookies y tus elecciones, por favor <a href="https://www.example.com/contacts">contáctanos</a>.'
                    }
                ]
            }
        }
    }
}
});