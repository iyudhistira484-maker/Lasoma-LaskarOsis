/**
 * Vercel Web Analytics - Custom Event Tracking
 * 
 * This file provides helper functions for tracking custom events in your application.
 * The main analytics script is loaded via the HTML <script> tag in index.html.
 * 
 * Usage example:
 *   trackEvent('button_click', { button_name: 'signup', section: 'hero' });
 */

// Note: The window.va function is initialized by the script tag in index.html
// This allows you to track custom events beyond automatic page views

/**
 * Track a custom event
 * @param {string} eventName - The name of the event (e.g., 'button_click', 'form_submit')
 * @param {Object} properties - Additional properties for the event
 */
function trackEvent(eventName, properties = {}) {
  if (typeof window !== 'undefined' && window.va) {
    window.va('event', { name: eventName, data: properties });
  }
}

/**
 * Track a custom page view (useful for SPAs)
 * @param {string} path - The path to track
 */
function trackPageView(path) {
  if (typeof window !== 'undefined' && window.va) {
    window.va('pageview', { path });
  }
}

// Export functions for use in your application
if (typeof window !== 'undefined') {
  window.trackEvent = trackEvent;
  window.trackPageView = trackPageView;
}

// Example: Track when key buttons are clicked
document.addEventListener('DOMContentLoaded', () => {
  // Track navigation button clicks
  const navButtons = document.querySelectorAll('.nav-button, .primary-button, .secondary-button');
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonText = button.textContent.trim();
      trackEvent('button_click', { 
        button_text: buttonText,
        button_class: button.className 
      });
    });
  });
});
