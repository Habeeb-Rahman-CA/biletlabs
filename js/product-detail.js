import {
  createIcons,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Image,
  Monitor,
  Smartphone,
  Plus,
  ExternalLink,
  CheckCircle2,
  Sparkles
} from 'lucide';
import { BRAND, PRODUCTS } from './products-data.js';

const icons = {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Image,
  Monitor,
  Smartphone,
  Plus,
  ExternalLink,
  CheckCircle2,
  Sparkles
};

function refreshIcons() {
  createIcons({ icons });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProductDetailPage();
});

function renderProductDetailPage() {
  const container = document.getElementById('product-app');
  if (!container) return;

  // Read product ID from query parameter: ?id=bilet
  const params = new URLSearchParams(window.location.search);
  const requestedId = (params.get('id') || 'bilet').toLowerCase().trim();

  const productIndex = PRODUCTS.findIndex(p => p.id === requestedId);
  const product = productIndex !== -1 ? PRODUCTS[productIndex] : PRODUCTS[0];
  const nextProduct = PRODUCTS[(productIndex + 1) % PRODUCTS.length];

  // Update Page Title and Metadata
  document.title = `${product.name} | biletlabs case study`;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', `${product.name}: ${product.headline} Simple, distraction-free software by biletlabs.`);
  }

  const domain = product.domain || `${product.id}.app`;
  const scoreBadge = product.scoreBadge || { num: '100', label: 'Privacy & Speed' };
  const tags = product.tags || [product.category, 'Distraction-Free', 'Offline Native', '100% Private'];
  const platforms = product.platforms ? product.platforms.join(', ') : 'macOS, Windows, Web';
  const screenshots = product.screenshots || [];

  container.innerHTML = `
    <!-- Top Navigation Bar -->
    <header class="case-study-nav">
      <div class="container case-study-nav-inner">
        <a href="index.html" class="case-study-logo" aria-label="biletlabs home">
          <span class="brand-text">biletlabs</span>
        </a>

        <div class="case-study-nav-links">
          <a href="index.html#products" class="case-study-back-link">
            <i data-lucide="arrow-left"></i>
            <span>All products</span>
          </a>
        </div>
      </div>
    </header>

    <main>
      <!-- Hero Section (Title, Subhead, Visit Site button) -->
      <section class="detail-hero-section">
        <div class="container">
          <div class="detail-hero-header">
            <span class="detail-eyebrow">${product.category} · ${product.year || '2026'}</span>
            <h1 class="detail-colossal-title">${product.name}</h1>

            <div class="detail-subhead-row">
              <p class="detail-tagline">${product.headline}</p>

              <a href="${product.links?.demo && product.links.demo !== '#' ? product.links.demo : 'https://' + domain}" target="_blank" rel="noopener noreferrer" class="detail-action-btn">
                <span>Visit ${domain}</span>
                <span class="btn-arrow-bubble" aria-hidden="true">
                  <i data-lucide="arrow-up-right"></i>
                </span>
              </a>
            </div>
          </div>

          <!-- Hero Browser Window Frame (Full Screen Mockup) -->
          <div class="detail-browser-frame">
            <div class="detail-browser-header">
              <div class="window-controls">
                <span class="win-dot"></span>
                <span class="win-dot"></span>
                <span class="win-dot"></span>
              </div>
              <div class="window-domain-pill">
                <span class="domain-dot"></span>
                <span class="domain-name">${domain}</span>
              </div>
              <div class="window-header-spacer"></div>
            </div>

            <div class="detail-browser-viewport">
              ${renderMainScreenshotSpace(product)}
            </div>

            <!-- Floating Performance / Key Attribute Badge -->
            <div class="detail-floating-badge" aria-label="${scoreBadge.num} ${scoreBadge.label}">
              <span class="badge-score">${scoreBadge.num}</span>
              <span class="badge-text">${scoreBadge.label}</span>
            </div>
          </div>

          <p class="detail-caption-underneath">
            ${product.name} full screen primary viewport. Crafted for seamless everyday utility.
          </p>
        </div>
      </section>

      <!-- Two-Column Editorial Section (Left: Metadata, Right: The starting point / The solution / The result) -->
      <section class="detail-story-section">
        <div class="container detail-story-grid">
          <!-- Left Column: Project Metadata with Dividers -->
          <aside class="detail-meta-sidebar" aria-label="Project details">
            <div class="detail-meta-item">
              <span class="detail-meta-label">Year</span>
              <span class="detail-meta-val">${product.year || '2026'}</span>
            </div>

            <div class="detail-meta-item">
              <span class="detail-meta-label">Category & Type</span>
              <span class="detail-meta-val">${product.category}</span>
            </div>

            <div class="detail-meta-item">
              <span class="detail-meta-label">Platforms</span>
              <span class="detail-meta-val">${platforms}</span>
            </div>

            <div class="detail-meta-item">
              <span class="detail-meta-label">Philosophy</span>
              <span class="detail-meta-val">Distraction-free, zero tracking, local-first ergonomics</span>
            </div>

            <div class="detail-meta-item">
              <span class="detail-meta-label">Key Capabilities</span>
              <div class="detail-meta-pills-row">
                ${tags.map(t => `<span class="detail-meta-pill">${t}</span>`).join('')}
              </div>
            </div>
          </aside>

          <!-- Right Column: The Story Narrative -->
          <div class="detail-narrative-col">
            <!-- The starting point -->
            <article class="detail-narrative-block">
              <h2 class="detail-block-title">The starting point</h2>
              <p class="detail-block-text">
                ${product.problem || 'Most contemporary software has become heavy, slow, and loaded with features designed to capture attention rather than serve the user. People looking for simple tools do not want bloated subscription walls, forced cloud dependencies, or noisy notification feeds.'}
              </p>
              <p class="detail-block-text">
                We designed <strong>${product.name}</strong> from a completely clean slate, stripping away visual noise, unnecessary configuration panels, and complex workflows so you can focus entirely on what matters.
              </p>
            </article>

            <!-- The solution -->
            <article class="detail-narrative-block">
              <h2 class="detail-block-title">The solution</h2>
              <p class="detail-block-text">
                ${product.solution || `${product.name} brings simplicity to your daily routine with intuitive ergonomics, keyboard navigation, and instant local response.`}
              </p>
              <p class="detail-block-text">
                ${product.heroDescription || 'Every interaction has been tuned for calm concentration. Clean typography, generous margins, and an interface that stays quietly in the background until summoned.'}
              </p>
            </article>

            <!-- The result -->
            <article class="detail-narrative-block">
              <h2 class="detail-block-title">The result</h2>
              <p class="detail-block-text">
                Instant startup with <strong>zero telemetry</strong> and zero ads. Whether working offline or seamlessly moving between workspaces, <strong>${product.name}</strong> delivers peace of mind and frictionless speed.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- Deep Dive Showcase 1: Full-width Interface View -->
      <section class="detail-hero-section" style="padding-top: 4rem; padding-bottom: 2rem;">
        <div class="container">
          <div class="detail-browser-frame">
            <div class="detail-browser-header">
              <div class="window-controls">
                <span class="win-dot"></span>
                <span class="win-dot"></span>
                <span class="win-dot"></span>
              </div>
              <div class="window-domain-pill">
                <span class="domain-dot"></span>
                <span class="domain-name">${domain} / workspace</span>
              </div>
              <div class="window-header-spacer"></div>
            </div>

            <div class="detail-browser-viewport">
              ${renderDetailScreenshotSpace(screenshots[0] || { title: `${product.name} In Action`, caption: 'Primary workspace view' }, 1, product)}
            </div>
          </div>

          <p class="detail-caption-underneath">
            ${screenshots[0]?.caption || 'One continuous flow. Every shortcut designed for zero cognitive overhead.'}
          </p>
        </div>
      </section>

      <!-- Showcase 2: Dual Mobile Phones Side-by-Side (Matching Metic.studio Reference) -->
      <section class="detail-dual-mobile-section">
        <div class="container">
          <div class="detail-mobile-row">
            <!-- Mobile Screen 1 -->
            <div class="mobile-device-card">
              <div class="phone-mockup-frame">
                <div class="phone-island-pill"></div>
                <div class="phone-screen">
                  ${renderMobilePhoneSpace(screenshots[1] || { title: `${product.name} Mobile`, caption: 'Quick Capture' }, '01', product)}
                </div>
              </div>
              <p class="mobile-caption">
                ${screenshots[1]?.caption || 'Instant quick capture on mobile. Synced end-to-end without server delays.'}
              </p>
            </div>

            <!-- Mobile Screen 2 -->
            <div class="mobile-device-card">
              <div class="phone-mockup-frame">
                <div class="phone-island-pill"></div>
                <div class="phone-screen">
                  ${renderMobilePhoneSpace(screenshots[2] || { title: `${product.name} Ledger`, caption: 'Offline & Local' }, '02', product)}
                </div>
              </div>
              <p class="mobile-caption">
                ${screenshots[2]?.caption || 'Zero network latency. Everything stays securely on your device.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Showcase 3: Full-width Secondary Interface View -->
      <section class="detail-hero-section" style="padding-top: 4rem; padding-bottom: 2rem;">
        <div class="container">
          <div class="detail-browser-frame">
            <div class="detail-browser-header">
              <div class="window-controls">
                <span class="win-dot"></span>
                <span class="win-dot"></span>
                <span class="win-dot"></span>
              </div>
              <div class="window-domain-pill">
                <span class="domain-dot"></span>
                <span class="domain-name">${domain} / preferences</span>
              </div>
              <div class="window-header-spacer"></div>
            </div>

            <div class="detail-browser-viewport">
              ${renderDetailScreenshotSpace(screenshots[3] || { title: `${product.name} Workflow`, caption: 'Detailed settings & export' }, 2, product)}
            </div>
          </div>

          <p class="detail-caption-underneath">
            ${screenshots[3]?.caption || 'No subscriptions, no trackers, completely private by design.'}
          </p>
        </div>
      </section>

      <!-- Features & Capabilities Grid -->
      <section class="detail-features-section">
        <div class="container">
          <div class="detail-features-header">
            <span class="detail-eyebrow">Capabilities</span>
            <h3>Engineered for Focus</h3>
          </div>

          <div class="detail-features-grid">
            ${(product.features || []).map((feat, i) => `
              <div class="detail-feature-card">
                <span class="feature-num-pill">${String(i + 1).padStart(2, '0')}</span>
                <h4 class="feature-card-title">${feat.title}</h4>
                <p class="feature-card-desc">${feat.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Next Product Transition Bar (Matching metic.studio bottom) -->
      <section class="next-product-section">
        <div class="container">
          <div class="next-product-bar">
            <div class="next-product-col-left">
              <span class="next-label">Next product</span>
              <h3 class="next-product-name">${nextProduct.name}</h3>
              <p class="next-product-headline">${nextProduct.headline}</p>
            </div>

            <a href="product.html?id=${nextProduct.id}" class="next-product-btn">
              <span>View ${nextProduct.name}</span>
              <span class="btn-arrow-bubble" aria-hidden="true">
                <i data-lucide="arrow-up-right"></i>
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- Global Footer -->
    <footer class="footer-section">
      <div class="container footer-container">
        <div class="footer-top-grid">
          <div>
            <div class="footer-col-title">Studio</div>
            <ul class="footer-col-links">
              <li><a href="index.html#products">Products</a></li>
              <li><a href="index.html#philosophy">Philosophy</a></li>
              <li><a href="index.html#principles">Principles</a></li>
              <li><a href="index.html#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <div class="footer-col-title">Quick Links</div>
            <ul class="footer-col-links">
              <li><a href="mailto:contact@biletlabs.com">Email Studio</a></li>
              <li><a href="#main-content" onclick="window.scrollTo({top: 0, behavior: 'smooth'}); return false;">Back to top ↗</a></li>
            </ul>
          </div>

          <div>
            <div class="footer-col-title">Statement</div>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">
              This is a small selection of focused applications. Built with intention.
            </p>
          </div>
        </div>

        <div class="footer-credits-row">
          <span>&copy; 2026 <span class="brand-text" style="font-weight: 600; color: var(--text-primary);">biletlabs</span>. Built with intention.</span>
          <span>Minimalist, distraction-free software</span>
        </div>

        <!-- Colossal Brand Wordmark -->
        <div class="colossal-brand-wrap" aria-hidden="true">
          <span class="colossal-brand">biletlabs</span>
        </div>
      </div>
    </footer>
  `;

  refreshIcons();
}

/**
 * Renders full-screen hero screenshot space or image if available
 */
function renderMainScreenshotSpace(product) {
  if (product.image && product.image.trim() !== '') {
    return `<img src="${product.image}" alt="${product.name} full-screen screenshot preview" loading="lazy" />`;
  }

  return `
    <div class="fullscreen-screenshot-space">
      <div class="screenshot-empty-card">
        <div class="screenshot-icon-wrap">
          <i data-lucide="monitor"></i>
        </div>
        <span class="screenshot-badge">Full Screen App Preview</span>
        <h4 class="screenshot-title">${product.name} Workspace</h4>
        <p class="screenshot-subtitle">${product.headline}</p>
        <div class="screenshot-ready-tag">
          <i data-lucide="plus" style="width: 13px; height: 13px;"></i>
          <span>Ready for product screenshot</span>
        </div>
      </div>
    </div>
  `;
}

/**
 * Renders secondary full-screen screenshot space or image if available
 */
function renderDetailScreenshotSpace(shot, viewNum, product) {
  if (shot.image && shot.image.trim() !== '') {
    return `<img src="${shot.image}" alt="${product.name} - ${shot.title}" loading="lazy" />`;
  }

  return `
    <div class="fullscreen-screenshot-space">
      <div class="screenshot-empty-card">
        <div class="screenshot-icon-wrap">
          <i data-lucide="image"></i>
        </div>
        <span class="screenshot-badge">View 0${viewNum} Preview</span>
        <h4 class="screenshot-title">${shot.title || product.name + ' Detail'}</h4>
        <p class="screenshot-subtitle">${shot.caption || 'Interface workflow and state overview'}</p>
        <div class="screenshot-ready-tag">
          <i data-lucide="plus" style="width: 13px; height: 13px;"></i>
          <span>Ready for product screenshot</span>
        </div>
      </div>
    </div>
  `;
}

/**
 * Renders phone device mockup screen space or image
 */
function renderMobilePhoneSpace(shot, indexStr, product) {
  if (shot.image && shot.image.trim() !== '') {
    return `<img src="${shot.image}" alt="${product.name} mobile screenshot" loading="lazy" />`;
  }

  return `
    <div class="phone-placeholder-content">
      <div class="screenshot-icon-wrap" style="width: 44px; height: 44px; margin-bottom: 0;">
        <i data-lucide="smartphone" style="width: 20px; height: 20px;"></i>
      </div>
      <span class="screenshot-badge" style="font-size: 0.65rem;">Mobile ${indexStr}</span>
      <h5 style="font-size: 0.95rem; font-weight: 700; color: #ffffff; margin: 0; font-family: var(--font-display);">${shot.title}</h5>
      <p style="font-size: 0.78rem; color: var(--text-secondary); margin: 0; max-width: 200px; line-height: 1.45;">${shot.caption}</p>
      <div class="screenshot-ready-tag" style="font-size: 0.68rem; padding: 0.2rem 0.55rem;">
        <i data-lucide="plus" style="width: 10px; height: 10px;"></i>
        <span>Ready for mobile capture</span>
      </div>
    </div>
  `;
}
