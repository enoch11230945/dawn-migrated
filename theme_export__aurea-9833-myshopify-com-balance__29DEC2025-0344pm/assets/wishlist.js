class AureaStorage {
    constructor(key) {
        this.key = key;
        this.items = this.load();

        // FIXED: Listen for storage events from other tabs
        window.addEventListener('storage', (e) => {
            if (e.key === this.key) {
                this.items = this.load();
                this.dispatchUpdate();
                if (typeof updateWishlistButtonStates === 'function') {
                    updateWishlistButtonStates();
                }
            }
        });
    }

    load() {
        try {
            const stored = localStorage.getItem(this.key);
            if (!stored) return [];
            const parsed = JSON.parse(stored);
            // FIXED: Ensure IDs are handled as strings to avoid precision issues with large Shopify IDs
            return Array.isArray(parsed) ? parsed.map(id => String(id)) : [];
        } catch (e) {
            // Silent fail - return empty array on parse error
            return [];
        }
    }

    save() {
        try {
            localStorage.setItem(this.key, JSON.stringify(this.items));
            this.dispatchUpdate();
        } catch (e) {
            // Silent fail - localStorage may be full or denied
        }
    }

    dispatchUpdate() {
        window.dispatchEvent(new CustomEvent('aurea:storage:updated', {
            detail: { key: this.key, count: this.items.length, items: this.items }
        }));
    }

    getItems() {
        return this.items;
    }

    count() {
        return this.items.length;
    }

    has(id) {
        return this.items.includes(String(id));
    }

    add(id) {
        const strId = String(id);
        if (!this.has(strId)) {
            this.items.push(strId);
            this.save();
            return true;
        }
        return false;
    }

    remove(id) {
        const strId = String(id);
        const initialIndex = this.items.indexOf(strId);
        if (initialIndex > -1) {
            this.items.splice(initialIndex, 1);
            this.save();
            return true;
        }
        return false;
    }

    toggle(id) {
        if (this.has(id)) {
            this.remove(id);
            return false;
        } else {
            this.add(id);
            return true;
        }
    }

    clear() {
        this.items = [];
        this.save();
    }
}

// Global instances
const AureaWishlist = new AureaStorage('aurea_wishlist');
const AureaCompare = new AureaStorage('aurea_compare');

// FIXED: Use event delegation for better performance and CSP compliance
document.addEventListener('click', function (e) {
    const btn = e.target.closest('.aurea-action-btn');
    if (!btn) return;

    e.preventDefault();

    const action = btn.dataset.action;
    const productId = btn.dataset.productId;

    if (!action || !productId) return;

    if (action === 'compare') {
        AureaCompare.toggle(productId);
    } else if (action === 'wishlist') {
        AureaWishlist.toggle(productId);
        // FIXED: Update ALL buttons on the page for this product
        updateWishlistButtonStates(productId);
    }
});

/**
 * Updates visual state of wishlist buttons
 * @param {string|null} specificProductId - If provided, only updates buttons for this ID.
 */
function updateWishlistButtonStates(specificProductId = null) {
    const selector = specificProductId
        ? `.aurea-action-btn[data-action="wishlist"][data-product-id="${specificProductId}"]`
        : '.aurea-action-btn[data-action="wishlist"]';

    document.querySelectorAll(selector).forEach(btn => {
        const productId = btn.dataset.productId;
        const svg = btn.querySelector('svg');
        if (svg) {
            const isInWishlist = AureaWishlist.has(productId);
            svg.style.fill = isInWishlist ? 'currentColor' : 'none';
            btn.setAttribute('aria-pressed', isInWishlist);
        }
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => updateWishlistButtonStates());

// Re-sync on storage updates (Ajax navigation / shared storage)
window.addEventListener('aurea:storage:updated', (e) => {
    if (e.detail.key === 'aurea_wishlist') {
        updateWishlistButtonStates();
    }
});
