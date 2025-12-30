(function autoCloseDetails() {
  // Track open details to avoid O(N) DOM scanning on every click
  const openDetails = new Set();

  // Listen for details toggle to track open state
  document.addEventListener('toggle', function (event) {
    const target = event.target;
    if (!(target instanceof HTMLDetailsElement) || !target.hasAttribute('data-auto-close-details')) return;

    if (target.open) {
      openDetails.add(target);
    } else {
      openDetails.delete(target);
    }
  }, true); // Use capture to catch toggle before it bubbles

  document.addEventListener('click', function (event) {
    if (openDetails.size === 0) return; // Fast path: nothing to close

    const closingOn = window.innerWidth < 750 ? 'mobile' : 'desktop';

    for (const element of openDetails) {
      // Verify element is still in DOM and open
      if (!element.isConnected || !element.open) {
        openDetails.delete(element);
        continue;
      }

      const autoCloseOn = element.getAttribute('data-auto-close-details') || '';
      if (
        autoCloseOn.includes(closingOn) &&
        !(event.target instanceof Node && element.contains(event.target))
      ) {
        element.removeAttribute('open');
        openDetails.delete(element);
      }
    }
  });
})();
