document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
  });

  lucide.createIcons();

  const navbar = document.getElementById("navbar");
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const heroImg = document.querySelector(".hero-img-container");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.style.padding = "1rem 2.5rem";
      navbar.querySelector(".glass-nav").style.background =
        "rgba(255, 255, 255, 0.95)";
    } else {
      navbar.style.padding = "1.5rem 2.5rem";
      navbar.querySelector(".glass-nav").style.background =
        "rgba(255, 255, 255, 0.7)";
    }
  });

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  if (heroImg && window.innerWidth > 1024) {
    document.addEventListener("mousemove", (e) => {
      const x = (window.innerWidth - e.pageX * 2) / 100;
      const y = (window.innerHeight - e.pageY * 2) / 100;
      heroImg.style.transform = `translateX(${x}px) translateY(${y}px) rotate(3deg)`;
    });
  }

  const animateCount = (id, target) => {
    const el = document.getElementById(id);
    let count = 0;
    const inc = target / 100;
    const update = () => {
      if (count < target) {
        count += inc;
        el.innerText =
          Math.ceil(count) +
          (id === "count-warga" || id === "count-umkm" ? "+" : "");
        setTimeout(update, 20);
      } else {
        el.innerText =
          target + (id === "count-warga" || id === "count-umkm" ? "+" : "");
      }
    };
    update();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCount("count-warga", 172);
        animateCount("count-kk", 55);
        animateCount("count-rt", 4);
        animateCount("count-rw", 2);
        animateCount("count-umkm", 2);
        observer.disconnect();
      }
    },
    { threshold: 0.5 },
  );

  const demoSection = document.querySelector("#demografi");
  if (demoSection) observer.observe(demoSection);

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        mobileMenu.classList.add("hidden");
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });
});

/* ============================= */
/* ===== JS MODAL KATALOG ===== */
/* ============================= */

function openKatalog(judul, deskripsi) {
  const modal = document.getElementById("modalKatalog");
  const title = document.getElementById("katalogJudul");
  const desc = document.getElementById("katalogDeskripsi");

  title.innerText = judul;
  desc.innerText = deskripsi;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeKatalog() {
  const modal = document.getElementById("modalKatalog");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}
