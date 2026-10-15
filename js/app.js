import {
  createIcons,
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  ArrowDownRight,
  Copy,
  Check,
  Menu,
  X,
  AlertCircle,
  CheckCircle2,
  Image,
  Monitor,
  Plus,
  PenTool,
  ShieldCheck,
  Layers,
  Zap,
  Sparkles
} from 'lucide';
import { BRAND, PRODUCTS } from './products-data.js';

const icons = {
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  ArrowDownRight,
  Copy,
  Check,
  Menu,
  X,
  AlertCircle,
  CheckCircle2,
  Image,
  Monitor,
  Plus,
  PenTool,
  ShieldCheck,
  Layers,
  Zap,
  Sparkles
};

// Application State
const state = {
  activeModalProduct: null
};

// Refresh Lucide Icons across DOM
function refreshIcons() {
  createIcons({ icons });
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.setAttribute('data-theme', 'dark');
  initFocusAccordion();
  initPrinciples();
  initStackCards();
  initProducts();
  initModal();
  checkUrlHash();
  refreshIcons();
});

/* ===================================================================
   2. FOCUS HORIZONTAL EXPANDING ACCORDION
   =================================================================== */
function initFocusAccordion() {
  const accordion = document.getElementById('focus-accordion');
  if (!accordion) return;

  const cards = Array.from(accordion.querySelectorAll('.focus-card'));
  let hoverTimer = null;

  cards.forEach(card => {
    // Desktop hover expansion with smooth intent handling
    card.addEventListener('mouseenter', () => {
      if (card.classList.contains('is-active')) return;
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => {
        cards.forEach(c => c.classList.remove('is-active'));
        card.classList.add('is-active');
      }, 45);
    });

    card.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimer);
    });

    // Touch / click activation (instant)
    card.addEventListener('click', (e) => {
      if (e.target.closest('.focus-product-link')) return;
      if (card.classList.contains('is-active')) return;
      clearTimeout(hoverTimer);
      cards.forEach(c => c.classList.remove('is-active'));
      card.classList.add('is-active');
    });
  });
}

/* ===================================================================
   3. BRAND PRINCIPLES (Ownitt.fr Bold Layered Typography)
   =================================================================== */
function initPrinciples() {
  const container = document.getElementById('principles-columns');
  if (!container) return;

  container.innerHTML = BRAND.principles.map((pr, idx) => `
    <article class="principle-ownitt-row ${idx === 0 ? 'is-active' : ''}" data-index="${idx}">
      <div class="principle-row-main">
        <div class="principle-meta-tag">
          <span class="principle-dot" aria-hidden="true"></span>
          <span class="principle-num">${String(idx + 1).padStart(2, '0')}</span>
        </div>

        <div class="principle-title-wrap">
          <h3 class="principle-title-solid">${pr.title}</h3>
          <span class="principle-title-outline" aria-hidden="true">${pr.title}</span>
        </div>

        <div class="principle-toggle-indicator" aria-hidden="true">
          <i data-lucide="arrow-up-right"></i>
        </div>
      </div>

      <div class="principle-drawer">
        <div class="principle-drawer-inner">
          <p class="principle-desc">${pr.desc}</p>
        </div>
      </div>
    </article>
  `).join('');

  const rows = container.querySelectorAll('.principle-ownitt-row');

  function setActive(activeRow) {
    rows.forEach(r => {
      r.classList.toggle('is-active', r === activeRow);
    });
  }

  // Hover over any row expands its description smoothly
  rows.forEach(row => {
    row.addEventListener('mouseenter', () => {
      setActive(row);
    });

    // Touch / click activation for mobile
    row.addEventListener('click', () => {
      setActive(row);
    });
  });

  // When mouse leaves the principles section, reset back to first item showing description by default
  container.addEventListener('mouseleave', () => {
    if (rows.length > 0) {
      setActive(rows[0]);
    }
  });

  refreshIcons();
}

/* ===================================================================
   3.5 WHAT WE DO STACKING CARDS DYNAMIC ANIMATION
   =================================================================== */
function initStackCards() {
  const wrapper = document.getElementById('stack-cards');
  if (!wrapper) return;

  const cards = Array.from(wrapper.querySelectorAll('.stack-card'));
  if (cards.length === 0) return;

  // Sticky dock tops matching CSS: 80, 92, 104, 116, 128, 196
  const dockTops = [80, 92, 104, 116, 128, 196];

  let ticking = false;

  function updateCardTransforms() {
    ticking = false;

    // Calculate dynamic stack depth for each card based on scroll progress of subsequent cards
    cards.forEach((card, i) => {
      if (i === cards.length - 1) {
        // Last card (Card 6) stays at full scale & brightness
        card.style.setProperty('--stack-scale', '1');
        card.style.setProperty('--stack-brightness', '1');
        card.style.setProperty('--stack-opacity', '1');
        return;
      }

      let totalCoverDepth = 0;

      for (let j = i + 1; j < cards.length; j++) {
        const targetDock = dockTops[j] || 160;
        const rectJ = cards[j].getBoundingClientRect();

        // Distance from card j to its target sticky dock
        const distanceToDock = rectJ.top - targetDock;
        if (distanceToDock <= 0) {
          totalCoverDepth += 1;
        } else if (distanceToDock < 220) {
          totalCoverDepth += (220 - distanceToDock) / 220;
        }
      }

      // Smooth depth perception: scale down and dim deeper covered cards
      const scale = Math.max(0.88, 1 - (totalCoverDepth * 0.022));
      const brightness = Math.max(0.55, 1 - (totalCoverDepth * 0.085));
      const opacity = Math.max(0.7, 1 - (totalCoverDepth * 0.05));

      card.style.setProperty('--stack-scale', scale.toFixed(3));
      card.style.setProperty('--stack-brightness', brightness.toFixed(3));
      card.style.setProperty('--stack-opacity', opacity.toFixed(3));
    });
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateCardTransforms);
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateCardTransforms);
      ticking = true;
    }
  }, { passive: true });

  updateCardTransforms();
}

/* ===================================================================
   4. PRODUCTS GRID (Joshua Baker Minimalist Cards)
   =================================================================== */
function initProducts() {
  // Footer product triggers to open product case study directly
  document.querySelectorAll('.footer-product-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const prodId = trigger.getAttribute('data-product-id');
      if (prodId) window.location.href = `product.html?id=${prodId}`;
    });
  });

  renderProductsGrid();
}

function renderProductsGrid() {
  const container = document.getElementById('products-grid');
  if (!container) return;

  container.innerHTML = PRODUCTS.map((p, index) => {
    const isReversed = index % 2 === 1;
    const num = String(index + 1).padStart(2, '0');
    const total = String(PRODUCTS.length).padStart(2, '0');
    const domain = p.domain || `${p.id}.app`;
    const scoreBadge = p.scoreBadge || { num: '100', label: 'Privacy & Speed' };
    const tags = p.tags || [p.category, 'Distraction-Free', 'Offline Native', '100% Private'];

    return `
      <article class="metic-product-row ${isReversed ? 'is-reversed' : ''}" data-product-id="${p.id}">
        <!-- Row Index Eyebrow -->
        <div class="metic-row-eyebrow">
          <span class="metic-eyebrow-text">${num} / ${total} Product 2026</span>
        </div>

        <div class="metic-row-columns">
          <!-- Column: Mockup Window Container -->
          <div class="metic-media-col">
            <div class="metic-window-frame" data-product-id="${p.id}" tabindex="0" role="button" aria-label="View details for ${p.name}">
              <div class="metic-window-header">
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

              <div class="metic-window-viewport">
                ${renderImageOrPlaceholder(p)}
              </div>

              <!-- Floating Performance / Spec Badge (Metic.studio signature) -->
              <div class="metic-floating-badge" aria-label="${scoreBadge.num} ${scoreBadge.label}">
                <span class="badge-score">${scoreBadge.num}</span>
                <span class="badge-text">${scoreBadge.label}</span>
              </div>
            </div>
          </div>

          <!-- Column: Description & Case Study Action -->
          <div class="metic-content-col">
            <!-- Giant Faded Watermark Number -->
            <span class="metic-watermark-num" aria-hidden="true">${num}</span>

            <div class="metic-content-inner">
              <div class="metic-category-meta">
                <span>${p.category} · 2026</span>
              </div>

              <h3 class="metic-project-title">${p.name}</h3>
              <p class="metic-project-headline">${p.headline}</p>
              <p class="metic-project-desc">${p.heroDescription ? p.heroDescription.slice(0, 160) + '...' : ''}</p>

              <!-- Pill Tags Row -->
              <div class="metic-tags-row">
                ${tags.map(t => `<span class="metic-tag-pill">${t}</span>`).join('')}
              </div>

              <!-- Action Button linking to dedicated product case study -->
              <div class="metic-action-row">
                <a href="product.html?id=${p.id}" class="minimal-pill-btn metic-action-btn" aria-label="See case study for ${p.name}">
                  <span>See the product</span>
                  <span class="btn-arrow-bubble" aria-hidden="true">
                    <i data-lucide="arrow-up-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Make the window frame clickable to navigate to the product page
  container.querySelectorAll('.metic-window-frame').forEach(el => {
    const prodId = el.getAttribute('data-product-id');
    el.addEventListener('click', (e) => {
      e.preventDefault();
      if (prodId) window.location.href = `product.html?id=${prodId}`;
    });
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (prodId) window.location.href = `product.html?id=${prodId}`;
      }
    });
  });

  refreshIcons();
}

function renderImageOrPlaceholder(product) {
  if (product.image && product.image.trim() !== '') {
    return `
      <img
        src="${product.image}"
        alt="${product.name} interface preview"
        loading="lazy"
        style="width: 100%; height: 100%; object-fit: cover;"
      />
    `;
  }

  return `
    <div class="image-placeholder" data-product="${product.id}" title="${product.name} Interface Preview">
      <div class="placeholder-icon-wrap">
        <i data-lucide="image"></i>
      </div>
      <span class="placeholder-badge">Product Preview</span>
      <h4 class="placeholder-title">${product.name} Screenshot</h4>
      <p class="placeholder-note">${product.headline}</p>
      <div class="placeholder-guide-hint">
        <i data-lucide="plus" style="width: 12px; height: 12px;"></i>
        <span>Ready for product screenshot</span>
      </div>
    </div>
  `;
}

function renderGalleryPlaceholder(shot, index, productName) {
  if (shot.image && shot.image.trim() !== '') {
    return `
      <img
        src="${shot.image}"
        alt="${productName} - ${shot.title}"
        loading="lazy"
        style="width: 100%; height: 100%; object-fit: cover;"
      />
    `;
  }

  return `
    <div class="image-placeholder" style="padding: 1.25rem;">
      <div class="placeholder-icon-wrap" style="width: 38px; height: 38px; margin-bottom: 0.5rem;">
        <i data-lucide="monitor" style="width: 18px; height: 18px;"></i>
      </div>
      <span class="placeholder-badge" style="font-size: 0.65rem;">View 0${index + 1}</span>
      <h5 style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.2rem; font-family: var(--font-display);">${shot.title}</h5>
      <p style="font-size: 0.75rem; color: var(--text-tertiary); max-width: 220px;">${shot.caption}</p>
    </div>
  `;
}

/* ===================================================================
   5. NAVIGATION HELPER (Replaces modal with product.html)
   =================================================================== */
function initModal() {
  // If the user navigates with hash #product=bilet, redirect to product.html?id=bilet
  const hash = window.location.hash;
  if (hash.startsWith('#product=')) {
    const id = hash.replace('#product=', '');
    openModal(id);
  }
}

function openModal(productId) {
  window.location.href = `product.html?id=${productId}`;
}

