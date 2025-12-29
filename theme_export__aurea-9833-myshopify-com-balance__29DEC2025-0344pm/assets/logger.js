/**
 * Conditional Logger - Production Safe
 * Only logs in development/Theme Editor mode
 * 
 * Usage:
 * import { log, warn, error } from './logger.js';
 * log('Debug info'); // Silent in production
 */

const IS_DEVELOPMENT =
    (window.Shopify && window.Shopify.designMode) ||
    window.location.hostname === 'localhost' ||
    window.location.hostname.includes('127.0.0.1') ||
    window.location.search.includes('debug=true');

export const log = IS_DEVELOPMENT ? console.log.bind(console, '[SHOP]') : () => { };
export const warn = IS_DEVELOPMENT ? console.warn.bind(console, '[SHOP WARN]') : () => { };
export const error = IS_DEVELOPMENT ? console.error.bind(console, '[SHOP ERROR]') : (msg, ...args) => {
    // In production, only log actual errors to a monitoring service
    // For now, just silent or send to external service
    if (window.Sentry) {
        window.Sentry.captureMessage(msg, { level: 'error', extra: args });
    }
};

// For backward compatibility with existing code that uses console directly
if (!IS_DEVELOPMENT) {
    // Hijack console methods in production (aggressive but effective)
    const noop = () => { };
    window.console.log = noop;
    window.console.warn = noop;
    // Keep console.error for critical issues
}
