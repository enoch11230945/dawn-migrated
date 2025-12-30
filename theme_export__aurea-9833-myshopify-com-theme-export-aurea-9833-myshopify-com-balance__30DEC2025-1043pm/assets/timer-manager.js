/**
 * TimerManager - Centralized timer management to prevent memory leaks
 * Used by countdown components to register/unregister their intervals
 */
class TimerManagerClass {
    #timers = new Map();

    /**
     * Register a timer with automatic cleanup
     * @param {string} id - Unique timer identifier
     * @param {Function} callback - Function to call on each interval
     * @param {number} interval - Interval in milliseconds (default: 1000)
     * @returns {string} Timer ID for later cleanup
     */
    register(id, callback, interval = 1000) {
        // Clear any existing timer with the same ID
        this.unregister(id);

        const timerId = setInterval(() => {
            try {
                callback();
            } catch {
                // Silently handle callback errors to prevent breaking other timers
                this.unregister(id);
            }
        }, interval);

        this.#timers.set(id, timerId);
        return id;
    }

    /**
     * Unregister and clear a timer
     * @param {string} id - Timer identifier
     */
    unregister(id) {
        const timerId = this.#timers.get(id);
        if (timerId) {
            clearInterval(timerId);
            this.#timers.delete(id);
        }
    }

    /**
     * Clear all registered timers (useful for page transitions)
     */
    clearAll() {
        for (const [id, timerId] of this.#timers) {
            clearInterval(timerId);
        }
        this.#timers.clear();
    }

    /**
     * Get count of active timers (for debugging)
     * @returns {number}
     */
    get count() {
        return this.#timers.size;
    }
}

// Create singleton instance
window.TimerManager = new TimerManagerClass();

// Auto-cleanup on page unload
window.addEventListener('pagehide', () => {
    window.TimerManager.clearAll();
});
