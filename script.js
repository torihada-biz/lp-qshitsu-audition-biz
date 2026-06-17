const LINE_ENTRY_URL = "https://line.me/R/ti/p/@833tzhtb";

const phoneShell = document.querySelector(".phone-shell");
const entryLinks = document.querySelectorAll(".js-entry-link");
const pendingLinks = document.querySelectorAll('a[href="#"]');

pendingLinks.forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});

entryLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (LINE_ENTRY_URL) {
      event.preventDefault();
      window.location.href = LINE_ENTRY_URL;
      return;
    }

    const targetId = link.getAttribute("href");
    if (!targetId || !targetId.startsWith("#")) return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    const scrollParent = window.matchMedia("(min-width: 960px)").matches ? phoneShell : window;
    if (scrollParent === phoneShell) {
      phoneShell.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll(".side-nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target || !phoneShell) return;
    event.preventDefault();
    phoneShell.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  });
});

const faqItems = document.querySelectorAll(".faq details");

faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    faqItems.forEach((other) => {
      if (other !== item) other.removeAttribute("open");
    });
  });
});

const revealMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const revealRegistry = new Set();

const registerReveal = (selector, staggerStep = 0, maxDelay = 260) => {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (revealRegistry.has(element)) return;
    revealRegistry.add(element);
    element.classList.add("scroll-reveal");

    if (staggerStep > 0) {
      const delay = Math.min(index * staggerStep, maxDelay);
      element.style.setProperty("--reveal-delay", `${delay}ms`);
    }
  });
};

[
  [".hero-description"],
  [".scroll-cue"],
  [".section-index"],
  [".heading-sub"],
  [".section h2"],
  [".about-reels article", 70],
  [".about-lead"],
  [".intro > p"],
  [".about-activity-link"],
  [".support-description"],
  [".support-grid article", 90],
  [".check-list li", 60],
  [".target-note"],
  [".mascot-row img", 70],
  [".flow-description"],
  [".step-list li", 90],
  [".faq-item", 90],
  [".entry h2, .entry p", 80],
  [".side-panel .side-inner"],
].forEach(([selector, staggerStep]) => registerReveal(selector, staggerStep));

const revealElements = Array.from(revealRegistry);

if ("IntersectionObserver" in window && !revealMotionQuery.matches) {
  const revealRoot = window.matchMedia("(min-width: 960px)").matches ? phoneShell : null;
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      root: revealRoot,
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.14,
    },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
