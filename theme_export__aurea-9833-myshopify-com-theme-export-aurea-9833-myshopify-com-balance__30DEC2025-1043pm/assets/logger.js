/**
 * Conditional Logger - Production Safe
 * Only logs in development/Theme Editor mode
 * 
 * Usage:
 * import { log, warn, error } from './logger.js';
 * log('Debug info'); // Silent in production
 * 
 * NOTE: We no longer hijack global console methods as this breaks
 * third-party SDKs (Klaviyo, Analytics, etc). Use this logger instead.
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
    if (window.Sentry) {
        window.Sentry.captureMessage(msg, { level: 'error', extra: args });
    }
};

// REMOVED: Global console hijacking was breaking third-party SDKs
// If you need to silence console output in production, configure your
// bundler or use a build-time replacement instead.
