/**
 * Shared Utilities JavaScript
 * Used across all templates
 */

class LinkTreeUtils {
  /**
   * Load configuration from JSON
   */
  static async loadConfig(configPath) {
    try {
      const response = await fetch(configPath);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error('Error loading config:', error);
      return null;
    }
  }

  /**
   * Load icon manifest
   */
  static async loadIconManifest() {
    return this.loadConfig('../assets/icons/icons-manifest.json');
  }

  /**
   * Get icon URL for platform
   */
  static getIconUrl(platform) {
    return `../assets/icons/platforms/${platform}.svg`;
  }

  /**
   * Create link element with icon
   */
  static createLinkElement(linkData, iconManifest) {
    const link = document.createElement('a');
    link.href = linkData.url;
    link.className = 'link-card';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    // Find icon info from manifest
    const platformInfo = iconManifest?.platforms?.find(
      p => p.id === linkData.platform
    );

    let html = '';

    // Add icon if platform found
    if (platformInfo) {
      html += `<img class="link-icon" src="${this.getIconUrl(linkData.platform)}" alt="${platformInfo.name}">`;
    }

    // Add title
    html += `<span class="link-title">${linkData.title || platformInfo?.name || 'Link'}</span>`;

    link.innerHTML = html;
    return link;
  }

  /**
   * Animate element on scroll into view
   */
  static observeScrollAnimation(selector = '.animate-on-scroll') {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll(selector).forEach(el => {
        observer.observe(el);
      });
    }
  }

  /**
   * Set CSS variable
   */
  static setCSSVariable(name, value) {
    document.documentElement.style.setProperty(`--${name}`, value);
  }

  /**
   * Get CSS variable
   */
  static getCSSVariable(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(`--${name}`).trim();
  }

  /**
   * Apply custom colors from config
   */
  static applyCustomColors(config) {
    if (!config.customization) return;

    const colors = config.customization;
    Object.entries(colors).forEach(([key, value]) => {
      if (value && typeof value === 'string') {
        this.setCSSVariable(`color-${key}`, value);
      }
    });
  }

  /**
   * Check if element is in viewport
   */
  static isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  /**
   * Smooth scroll to element
   */
  static smoothScroll(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /**
   * Debounce function
   */
  static debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Throttle function
   */
  static throttle(func, limit = 300) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  /**
   * Copy to clipboard
   */
  static copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }

  /**
   * Generate unique ID
   */
  static generateId(prefix = 'id') {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Format URL
   */
  static formatUrl(url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return `https://${url}`;
    }
    return url;
  }

  /**
   * Get platform color from manifest
   */
  static getPlatformColor(platform, iconManifest) {
    const platformInfo = iconManifest?.platforms?.find(p => p.id === platform);
    return platformInfo?.color || '#ffffff';
  }

  /**
   * Create profile section HTML
   */
  static createProfileSection(config) {
    const profile = config.profile || config;
    const html = `
      <div class="profile-section">
        ${profile.profileImage ? `<img class="profile-image" src="${profile.profileImage}" alt="${profile.profileName || profile.name}">` : ''}
        <h1 class="profile-name">${profile.profileName || profile.name || 'Link Tree'}</h1>
        ${profile.bio ? `<p class="profile-bio">${profile.bio}</p>` : ''}
      </div>
    `;
    return html;
  }

  /**
   * Initialize responsive behavior
   */
  static initializeResponsive() {
    const handleResize = this.debounce(() => {
      const width = window.innerWidth;
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;

      document.body.classList.remove('mobile', 'tablet', 'desktop');
      if (isMobile) document.body.classList.add('mobile');
      else if (isTablet) document.body.classList.add('tablet');
      else if (isDesktop) document.body.classList.add('desktop');
    }, 200);

    window.addEventListener('resize', handleResize);
    handleResize(); // Call immediately
  }

  /**
   * Add keyboard navigation
   */
  static enableKeyboardNavigation(selector = '.link-card') {
    const links = document.querySelectorAll(selector);
    let currentIndex = 0;

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % links.length;
        links[currentIndex].focus();
        e.preventDefault();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + links.length) % links.length;
        links[currentIndex].focus();
        e.preventDefault();
      } else if (e.key === 'Enter') {
        if (document.activeElement?.classList.contains('link-card')) {
          document.activeElement.click();
          e.preventDefault();
        }
      }
    });
  }

  /**
   * Track analytics event (can be extended)
   */
  static trackEvent(eventName, eventData = {}) {
    console.log(`Event: ${eventName}`, eventData);
    // Integration point for analytics services like GA, Mixpanel, etc.
  }

  /**
   * Log link click
   */
  static logLinkClick(platform, url) {
    this.trackEvent('link_click', {
      platform: platform,
      url: url,
      timestamp: new Date().toISOString()
    });
  }
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LinkTreeUtils;
}
