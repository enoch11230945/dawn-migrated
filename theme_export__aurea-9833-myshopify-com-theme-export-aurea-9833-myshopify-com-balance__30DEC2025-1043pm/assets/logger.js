/**
 * Conditional Logger - Production Safe
 * Only logs in development/Theme Editor mode
 * 
 * This is an IIFE version that works without ES modules
 * for direct script tag inclusion.
 */

(function () {
    var IS_DEVELOPMENT =
        (window.Shopify && window.Shopify.designMode) ||
        window.location.hostname === 'localhost' ||
        window.location.hostname.includes('127.0.0.1') ||
        window.location.search.includes('debug=true');

    window.AureaLogger = {
        log: IS_DEVELOPMENT ? console.log.bind(console, '[SHOP]') : function () { },
        warn: IS_DEVELOPMENT ? console.warn.bind(console, '[SHOP WARN]') : function () { },
        error: IS_DEVELOPMENT ? console.error.bind(console, '[SHOP ERROR]') : function (msg) {
            // In production, only log actual errors to a monitoring service
            if (window.Sentry) {
                window.Sentry.captureMessage(msg, { level: 'error' });
            }
        }
    };

    // Also expose as shorthand
    window.shopLog = window.AureaLogger.log;
    window.shopWarn = window.AureaLogger.warn;
    window.shopError = window.AureaLogger.error;
})();
