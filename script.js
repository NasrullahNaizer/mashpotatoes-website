/**
 * MashPotatoes — Main JavaScript
 * Lightweight, Vanilla JS for Interactive Web Design Studio Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollSpy();
  initScrollReveal();
  initFaqAccordion();
  initPortfolioModal();
  initContactForm();
  initPricingButtons();
});

/* ==========================================================================
   1. Navbar Scroll State
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. Mobile Hamburger Menu
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  const toggleMenu = (isOpen) => {
    const shouldOpen = isOpen !== undefined ? isOpen : !navMenu.classList.contains('open');
    navMenu.classList.toggle('open', shouldOpen);
    toggleBtn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  };

  toggleBtn.addEventListener('click', () => toggleMenu());

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        toggleMenu(false);
      }
    });
  });

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });
}

/* ==========================================================================
   3. Active Nav Link on Scroll (ScrollSpy)
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const onScroll = () => {
    const scrollPos = window.scrollY + 140;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ==========================================================================
   4. IntersectionObserver Scroll Reveal Animations
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  // If user prefers reduced motion, reveal immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealElements.forEach((el) => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   5. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question-btn');
    const answerPanel = item.querySelector('.faq-answer-panel');

    if (!questionBtn || !answerPanel) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items for clean single accordion
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          const otherPanel = otherItem.querySelector('.faq-answer-panel');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          if (otherPanel) otherPanel.style.maxHeight = null;
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      if (isActive) {
        item.classList.remove('active');
        answerPanel.style.maxHeight = null;
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        answerPanel.style.maxHeight = answerPanel.scrollHeight + 'px';
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   6. Portfolio Project Concept Modal
   ========================================================================== */
const PORTFOLIO_DATA = {
  aquaworld: {
    title: 'Aqua World',
    category: 'Pet Fish & Aquarium Concept',
    description:
      'A sleek, high-contrast website concept engineered for local aquarium galleries and ornamental pet-fish retailers. Built to showcase live species, water testing services, tank setups, and direct WhatsApp ordering.',
    image: './assets/images/mockup_aqua_world_1791096276271.jpg',
    targetAudience: 'Aquarium Stores, Fish Keepers, Pet Retailers',
    deliverables: 'Catalog Gallery, WhatsApp Order Flow, Store Hours & Map',
    turnaround: '3–5 Days',
    previewUrl: '#', // Easily replace with deployed demo link
  },
  barberstudio: {
    title: 'Barber Studio',
    category: 'Barbershop & Grooming Concept',
    description:
      'A dark, modern booking-centric website concept for urban barbershops and stylist studios. Highlights service menus, haircut galleries, stylist profiles, and one-tap appointments via phone or WhatsApp.',
    image: './assets/images/mockup_barber_studio_1791096293495.jpg',
    targetAudience: 'Barbershops, Hair Salons, Grooming Lounges',
    deliverables: 'Service & Pricing Menu, Stylist Roster, Instant Booking Link',
    turnaround: '2–4 Days',
    previewUrl: '#', // Easily replace with deployed demo link
  },
  sweetcrumbs: {
    title: 'Sweet Crumbs',
    category: 'Artisanal Bakery & Patisserie Concept',
    description:
      'A warm, appetizing website concept designed for neighborhood bakeries, cafes, and cake artists. Features daily fresh batch menus, custom cake order forms, bakery location, and opening hours.',
    image: './assets/images/mockup_sweet_crumbs_1791096305983.jpg',
    targetAudience: 'Bakeries, Cafes, Home Bakers, Pastry Shops',
    deliverables: 'Daily Menu Display, Custom Cake Inquiries, Instagram Feed link',
    turnaround: '3–5 Days',
    previewUrl: '#', // Easily replace with deployed demo link
  },
};

function initPortfolioModal() {
  const modalOverlay = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const projectButtons = document.querySelectorAll('[data-project-id]');

  if (!modalOverlay || !closeBtn) return;

  const modalImg = document.getElementById('modalProjectImg');
  const modalCategory = document.getElementById('modalProjectCategory');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalDesc = document.getElementById('modalProjectDesc');
  const modalAudience = document.getElementById('modalProjectAudience');
  const modalDeliverables = document.getElementById('modalProjectDeliverables');
  const modalTurnaround = document.getElementById('modalProjectTurnaround');
  const modalLink = document.getElementById('modalProjectLink');

  const openModal = (projectId) => {
    const data = PORTFOLIO_DATA[projectId];
    if (!data) return;

    if (modalImg) {
      modalImg.src = data.image;
      modalImg.alt = `${data.title} Mockup Preview`;
    }
    if (modalCategory) modalCategory.textContent = data.category;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalDesc) modalDesc.textContent = data.description;
    if (modalAudience) modalAudience.textContent = data.targetAudience;
    if (modalDeliverables) modalDeliverables.textContent = data.deliverables;
    if (modalTurnaround) modalTurnaround.textContent = data.turnaround;
    if (modalLink) {
      modalLink.href = data.previewUrl;
      modalLink.onclick = (e) => {
        if (data.previewUrl === '#') {
          e.preventDefault();
          alert(`Concept preview for "${data.title}" is ready. You can replace the previewUrl in script.js with your real deployed URL!`);
        }
      };
    }

    modalOverlay.classList.add('open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };

  const closeModal = () => {
    modalOverlay.classList.remove('open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  projectButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-project-id');
      openModal(id);
    });
  });

  closeBtn.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   7. Contact Form Frontend Validation & Submission Simulation
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('inquiryForm');
  const successAlert = document.getElementById('formSuccessAlert');

  if (!form) return;

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/
      );
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('clientName');
    const businessInput = document.getElementById('businessName');
    const emailInput = document.getElementById('clientEmail');
    const messageInput = document.getElementById('clientMessage');

    let isValid = true;

    // Reset errors
    form.querySelectorAll('.form-group').forEach((g) => g.classList.remove('has-error'));

    // Validate Name
    if (!nameInput.value.trim()) {
      nameInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    // Validate Business Name
    if (!businessInput.value.trim()) {
      businessInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    // Validate Email
    if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
      emailInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      messageInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    if (!isValid) return;

    // Simulate submission state without fake claims
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending...</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.style.display = 'none';

      if (successAlert) {
        successAlert.style.display = 'block';
        successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 700);
  });

  // Reset button inside success alert to allow another inquiry
  const resetBtn = document.getElementById('resetFormBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      form.style.display = 'flex';
      if (successAlert) successAlert.style.display = 'none';
    });
  }
}

/* ==========================================================================
   8. Pricing Button Auto-Selection
   ========================================================================== */
function initPricingButtons() {
  const planButtons = document.querySelectorAll('[data-select-plan]');
  const serviceSelect = document.getElementById('serviceNeeded');

  planButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const plan = btn.getAttribute('data-select-plan');
      if (serviceSelect) {
        if (plan === 'starter') {
          serviceSelect.value = 'starter';
        } else if (plan === 'business') {
          serviceSelect.value = 'business';
        }
      }

      // Smooth scroll to contact
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
