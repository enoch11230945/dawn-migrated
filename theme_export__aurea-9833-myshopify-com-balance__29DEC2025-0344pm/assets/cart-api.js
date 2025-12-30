/**
 * Cart API Helper - JSON-based cart operations
 * Replaces inefficient DOMParser HTML parsing with direct JSON API calls
 * 
 * Shopify Cart API Documentation:
 * https://shopify.dev/docs/api/ajax/reference/cart
 */

class CartAPI {
    /**
     * Get current cart state
     * @returns {Promise<Object>} Cart JSON object
     */
    static async getCart() {
        const response = await fetch('/cart.js');
        return response.json();
    }

    /**
     * Add item to cart
     * @param {number} variantId - Variant ID
     * @param {number} quantity - Quantity to add
     * @param {Object} properties - Line item properties (optional)
     * @returns {Promise<Object>} Updated cart
     */
    static async addItem(variantId, quantity = 1, properties = {}) {
        const response = await fetch('/cart/add.js', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: variantId,
                quantity,
                properties
            })
        });
        return response.json();
    }

    /**
     * Update line item quantity
     * @param {string} lineKey - Line item key (or 1-indexed line number)
     * @param {number} quantity - New quantity (0 to remove)
     * @returns {Promise<Object>} Updated cart
     */
    static async updateItem(lineKey, quantity) {
        const response = await fetch('/cart/change.js', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                line: lineKey,
                quantity
            })
        });
        return response.json();
    }

    /**
     * Clear entire cart
     * @returns {Promise<Object>} Empty cart
     */
    static async clearCart() {
        const response = await fetch('/cart/clear.js', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
        return response.json();
    }

    /**
     * Update cart note
     * @param {string} note - Cart note text
     * @returns {Promise<Object>} Updated cart
     */
    static async updateNote(note) {
        const response = await fetch('/cart/update.js', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ note })
        });
        return response.json();
    }

    /**
     * Format money using Shopify's money format
     * @param {number} cents - Amount in cents
     * @returns {string} Formatted money string
     */
    static formatMoney(cents) {
        const amount = (cents / 100).toFixed(2);
        const format = window.Shopify?.money_format || '£{{amount}}';
        return format.replace('{{amount}}', amount);
    }

    /**
     * Update cart UI elements after cart change
     * @param {Object} cart - Cart JSON object
     */
    static updateCartUI(cart) {
        // Update cart count
        document.querySelectorAll('[data-cart-count]').forEach(el => {
            el.textContent = cart.item_count;
            el.setAttribute('data-cart-count', cart.item_count);
        });

        // Update cart total
        document.querySelectorAll('[data-cart-total]').forEach(el => {
            el.textContent = this.formatMoney(cart.total_price);
        });

        // Toggle empty state
        const isEmpty = cart.item_count === 0;
        document.querySelectorAll('[data-cart-empty]').forEach(el => {
            el.classList.toggle('is-empty', isEmpty);
        });

        // Dispatch event for other components to listen
        window.dispatchEvent(new CustomEvent('cart:updated', {
            detail: { cart }
        }));
    }
}

// Export for use in other scripts
window.CartAPI = CartAPI;
