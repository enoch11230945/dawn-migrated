/**
 * Global Timer Manager - Linus Pattern v1.0
 * Centralized timer lifecycle management to prevent memory leaks
 * Usage: TimerManager.register(uniqueId, callback, interval)
 */
class TimerManager {
    constructor() {
        this.timers = new Map();
        this.observers = new Map();
    }

    /**
     * Register a timer with automatic cleanup
     * @param {string} id - Unique identifier for this timer
     * @param {Function} callback - Function to execute on interval
     * @param {number} interval - Milliseconds between executions
     * @returns {boolean} - True if registered, false if already exists
     */
    register(id, callback, interval) {
        if (this.timers.has(id)) {
            console.warn(`[TimerManager] Timer '${id}' already exists. Skipping.`);
            return false;
        }

        const timer = setInterval(callback, interval);
        this.timers.set(id, timer);
        return true;
    }

    /**
     * Unregister a specific timer
     * @param {string} id - Timer identifier
     * @returns {boolean} - True if unregistered, false if not found
     */
    unregister(id) {
        const timer = this.timers.get(id);
        if (!timer) return false;

        clearInterval(timer);
        this.timers.delete(id);
        return true;
    }

    /**
     * Register a MutationObserver for cleanup tracking
     * @param {string} id - Unique identifier
     * @param {MutationObserver} observer - Observer instance
     */
    registerObserver(id, observer) {
        this.observers.set(id, observer);
    }

    /**
     * Unregister and disconnect an observer
     * @param {string} id - Observer identifier
     */
    unregisterObserver(id) {
        const observer = this.observers.get(id);
        if (observer) {
            observer.disconnect();
            this.observers.delete(id);
        }
    }

    /**
     * Get count of active timers
     * @returns {number}
     */
    count() {
        return this.timers.size;
    }

    /**
     * Global cleanup - called on page unload
     */
    cleanup() {
        this.timers.forEach((timer, id) => {
            clearInterval(timer);
        });
        this.timers.clear();

        this.observers.forEach((observer, id) => {
            observer.disconnect();
        });
        this.observers.clear();
    }
}

// Global singleton instance
window.TimerManager = new TimerManager();

// Auto-cleanup on page unload
window.addEventListener('beforeunload', () => {
    window.TimerManager.cleanup();
});

// For Theme Editor: cleanup on section unload
if (window.Shopify && window.Shopify.designMode) {
    document.addEventListener('shopify:section:unload', (event) => {
        // Cleanup timers prefixed with section ID
        const sectionId = event.detail.sectionId;
        window.TimerManager.unregister(`countdown-${sectionId}`);
    });
}
