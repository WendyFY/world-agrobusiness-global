const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const enhancementStyles = document.createElement('link');
enhancementStyles.rel = 'stylesheet';
enhancementStyles.href = 'enhancements.css';
document.head.append(enhancementStyles);
const brandStyles = document.createElement('link');
brandStyles.rel = 'stylesheet';
brandStyles.href = 'brand-refresh.css';
document.head.append(brandStyles);
const brandFixStyles = document.createElement('style');
brandFixStyles.textContent = 'footer{background:linear-gradient(135deg,#020f25,#063b76)}.contact-card{background:linear-gradient(145deg,#076e2c,#06488e)}';
document.head.append(brandFixStyles);
const greenTheme = document.createElement('link');
greenTheme.rel = 'stylesheet';
greenTheme.href = 'green-theme.css';
document.head.append(greenTheme);
const activeNavStyles = document.createElement('style');
activeNavStyles.textContent = '.site-header nav a:not(.nav-cta).active{color:#fff;opacity:1}.site-header nav a:not(.nav-cta).active::after{transform:scaleX(1);transform-origin:left}';
document.head.append(activeNavStyles);
const imageStyles = document.createElement('style');
imageStyles.textContent = '.hero-art{background-image:linear-gradient(145deg,rgba(9,55,40,.32),rgba(7,56,44,.54)),url("assets/agriculture-hero.png");background-size:cover;background-position:center}.page-image{height:clamp(270px,37vw,500px);margin:0 max(6vw,86px);overflow:hidden;position:relative}.page-image img,.page-image video,.page-image iframe{width:100%;height:100%;display:block;object-fit:cover;border:0}.page-image::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(9,36,28,.28),transparent 55%);pointer-events:none}.page-image:has(iframe)::after{display:none}@media(max-width:850px){.page-image{margin:0 24px;height:280px}}@media(max-width:520px){.page-image{margin:0;height:230px}}';
document.head.append(imageStyles);
const mainNav = document.querySelector('.site-header nav');
if (mainNav && !mainNav.querySelector('a[href="index.html"]')) {
  mainNav.insertAdjacentHTML('afterbegin', '<a href="index.html">Accueil</a>');
}
if (mainNav) {
  mainNav.querySelector('a[href="irrigation.html"]')?.remove();
  const contactNav = mainNav.querySelector('a[href="contact.html"]');
  if (!mainNav.querySelector('a[href="produits.html"]')) {
    (contactNav || mainNav).insertAdjacentHTML(contactNav ? 'beforebegin' : 'beforeend', '<a href="produits.html">Produits</a>');
  }
}
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.site-header nav a:not(.nav-cta)').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});
const pageHero = document.querySelector('.page-hero');
if (pageHero && currentPage !== 'produits.html' && !document.querySelector('.page-image')) {
  if (currentPage === 'services.html') {
    pageHero.insertAdjacentHTML('afterend', '<figure class="page-image"><video autoplay muted loop playsinline aria-label="Vidéo de présentation des services agricoles"><source src="assets/services-agriculture.mp4" type="video/mp4">Votre navigateur ne prend pas en charge la vidéo.</video></figure>');
  } else if (currentPage === 'contact.html') {
    pageHero.insertAdjacentHTML('afterend', '<figure class="page-image"><iframe title="Localisation de World Agrobusiness Global" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.879067039607!2d11.481679274988082!3d3.83612554854571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfe67c17ff73%3A0xfa5edb199d8a2ca0!2sWORLD%20AGROBUSINESS%20GLOBAL!5e0!3m2!1sfr!2scm!4v1792802707115!5m2!1sfr!2scm" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></figure>');
  } else {
    const source = currentPage === 'irrigation.html' ? 'assets/irrigation-drip.png' : 'assets/agriculture-hero.png';
    pageHero.insertAdjacentHTML('afterend', `<figure class="page-image"><img src="${source}" alt="${currentPage === 'irrigation.html' ? 'Système d’irrigation goutte à goutte dans un champ' : 'Culture agricole et exploitation agro-pastorale'}" /></figure>`);
  }
}
if (currentPage === 'produits.html') {
  const compactProductStyles = document.createElement('style');
  compactProductStyles.textContent = '.products-wrap{padding-top:64px;padding-bottom:64px}.catalogue-heading{margin-bottom:26px}.product-grid{gap:16px}.product-image,.product-slider{aspect-ratio:1.75}.product-body{padding:16px 19px 18px}.product-body h3{font-size:21px;margin-bottom:9px}.product-body>p:not(.product-type):not(.price),.product-body ul{margin-bottom:9px}.price{margin-bottom:10px}@media(max-width:760px){.product-image,.product-slider{aspect-ratio:1.5}.products-wrap{padding-top:52px;padding-bottom:52px}}';
  document.head.append(compactProductStyles);
  const searchStyles = document.createElement('style');
  searchStyles.textContent = '.product-search{max-width:620px;margin:0 0 28px}.product-search label{display:block;margin-bottom:9px;font-size:12px;font-weight:700;color:#235d31}.product-search>div{height:48px;display:flex;align-items:center;gap:10px;padding:0 13px;border:1px solid #b8d7a9;border-radius:4px;background:#fff;box-shadow:0 5px 15px rgba(19,76,34,.06);transition:border-color .2s ease,box-shadow .2s ease}.product-search>div:focus-within{border-color:#3a9d42;box-shadow:0 6px 18px rgba(19,105,46,.13)}.product-search span{font-size:24px;color:#438e40;line-height:1}.product-search input{min-width:0;flex:1;border:0;outline:0;background:transparent;color:#164b27;font:500 14px "DM Sans",sans-serif}.product-search input::placeholder{color:#7a9680}.clear-search{visibility:hidden;border:0;background:none;color:#275d34;font-size:25px;line-height:1;cursor:pointer}.clear-search.is-visible{visibility:visible}.search-feedback{min-height:18px;margin:7px 0 0;font-size:12px;color:#54765b}.product-card.is-hidden{display:none}';
  document.head.append(searchStyles);
  const productSearch = document.querySelector('#product-search');
  if (productSearch) {
    const clearSearch = document.querySelector('.clear-search');
    const feedback = document.querySelector('.search-feedback');
    const cards = [...document.querySelectorAll('.product-card')];
    const filterProducts = () => {
      const query = productSearch.value.trim().toLocaleLowerCase('fr');
      let visible = 0;
      cards.forEach(card => {
        const match = card.textContent.toLocaleLowerCase('fr').includes(query);
        card.classList.toggle('is-hidden', !match);
        if (match) visible += 1;
      });
      clearSearch.classList.toggle('is-visible', query.length > 0);
      feedback.textContent = query ? `${visible} équipement${visible > 1 ? 's' : ''} trouvé${visible > 1 ? 's' : ''}.` : '';
    };
    productSearch.addEventListener('input', filterProducts);
    clearSearch.addEventListener('click', () => { productSearch.value = ''; filterProducts(); productSearch.focus(); });
  }
  const lightboxStyles = document.createElement('style');
  lightboxStyles.textContent = '.product-image img,.product-slide{cursor:zoom-in}.image-lightbox{position:fixed;z-index:1000;inset:0;display:grid;place-items:center;padding:28px;background:rgba(3,28,15,.9);animation:lightboxIn .2s ease}.image-lightbox img{display:block;max-width:min(94vw,1150px);max-height:86vh;object-fit:contain;box-shadow:0 18px 65px rgba(0,0,0,.45)}.lightbox-close{position:fixed;top:18px;right:20px;width:44px;height:44px;border:1px solid rgba(255,255,255,.6);border-radius:50%;background:rgba(255,255,255,.13);color:#fff;font-size:31px;line-height:1;cursor:pointer}.lightbox-close:hover{background:#3a9d42}.image-lightbox p{position:fixed;bottom:11px;margin:0;color:#fff;text-align:center;font-size:13px}@keyframes lightboxIn{from{opacity:0}to{opacity:1}}';
  document.head.append(lightboxStyles);
  const openLightbox = image => {
    const lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';
    lightbox.innerHTML = `<img src="${image.currentSrc || image.src}" alt="${image.alt}"><button class="lightbox-close" type="button" aria-label="Fermer l’image">×</button><p>${image.alt}</p>`;
    const close = () => lightbox.remove();
    lightbox.addEventListener('click', event => { if (event.target === lightbox) close(); });
    lightbox.querySelector('.lightbox-close').addEventListener('click', close);
    document.body.append(lightbox);
    const escape = event => { if (event.key === 'Escape') { close(); document.removeEventListener('keydown', escape); } };
    document.addEventListener('keydown', escape);
  };
  document.querySelectorAll('.product-image img, .product-slide').forEach(image => {
    image.setAttribute('tabindex', '0');
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', `Agrandir : ${image.alt}`);
    image.addEventListener('click', () => openLightbox(image));
    image.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openLightbox(image); } });
  });
}
toggle.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  toggle.textContent = open ? '×' : '☰';
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  header.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
}));

const footer = document.querySelector('footer');
if (footer && !footer.querySelector('.footer-main')) {
  footer.innerHTML = `<div class="footer-main"><div><div class="footer-brand"><img src="assets/logo.jpeg" alt="" /><span>WORLD AGROBUSINESS<br />GLOBAL SARL</span></div><p class="footer-intro">Votre partenaire en équipements agro-pastoraux, irrigation et accompagnement de projets.</p></div><div><p class="footer-title">Navigation</p><div class="footer-links"><a href="a-propos.html">À propos</a><a href="services.html">Nos services</a><a href="irrigation.html">Irrigation</a><a href="contact.html">Contact</a></div></div><div class="footer-contact"><p class="footer-title">Nous joindre</p><a href="https://wa.me/237655170973">WhatsApp : +237 655 17 09 73</a><a href="tel:+237653033559">Appel : +237 653 03 35 59</a><address>Yaoundé, Biyem-Assi Biscuiterie<br />Face Vatican Express Voyage</address></div></div><div class="footer-bottom"><p>© 2026 WORLD AGROBUSINESS GLOBAL SARL</p><span class="footer-tag">Cultiver l’avenir</span></div>`;
}

if (document.querySelector('[data-product-slider]')) {
  const sliderStyles = document.createElement('link');
  sliderStyles.rel = 'stylesheet';
  sliderStyles.href = 'slider.css';
  document.head.append(sliderStyles);
  document.querySelectorAll('[data-product-slider]').forEach(slider => {
    const slides = [...slider.querySelectorAll('.product-slide')];
    const dots = [...slider.querySelectorAll('.slider-dots button')];
    let current = 0;
    const show = index => {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle('is-active', i === current));
      dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
    };
    slider.querySelector('.slider-prev').addEventListener('click', () => show(current - 1));
    slider.querySelector('.slider-next').addEventListener('click', () => show(current + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
    setInterval(() => show(current + 1), 5000);
  });
}
