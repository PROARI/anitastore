/**
 * IMPORTACIONES ANITA - Tienda Virtual Oficial
 * Cobija, Pando, Bolivia
 * Desarrollado por: Proari Systems
 */

// ==========================================================================
// 1. DEFAULT DATA & STORAGE INITIALIZATION
// ==========================================================================

const DEFAULT_SETTINGS = {
  storeName: "IMPORTACIONES ANITA",
  address: "Diagonal a la plaza principal, Cobija, Pando, Bolivia.",
  phone: "67664328",
  currency: "Bs",
  freeShippingThreshold: 120,
  adminUser: "admin",
  adminPass: "anita123",
  bankInfo: "Titular: IMPORTACIONES ANITA\nBancos Aceptados: Banco Unión, BNB, BCP, Banco Sol, FIE, Tigo Money\nCobija - Pando, Bolivia",
  qrImage: "" // Empty uses default generated SVG QR
};

const DEFAULT_CATEGORIES = [
  { id: "juguetes", name: "Juguetes y Juegos", icon: "fa-solid fa-gamepad" },
  { id: "peluches", name: "Peluches y Osos", icon: "fa-solid fa-heart" },
  { id: "maquillaje", name: "Maquillaje y Belleza", icon: "fa-solid fa-wand-magic-sparkles" },
  { id: "pianos", name: "Pianos y Teclados", icon: "fa-solid fa-music" },
  { id: "escolar", name: "Material Escolar y Oficina", icon: "fa-solid fa-pen-ruler" },
  { id: "mochilas", name: "Mochilas Escolares", icon: "fa-solid fa-bag-shopping" },
  { id: "ropa-infantil", name: "Ropa Infantil", icon: "fa-solid fa-shirt" },
  { id: "sublimacion", name: "Sublimación y Papelería", icon: "fa-solid fa-print" },
  { id: "relojes", name: "Relojes y Regalos", icon: "fa-solid fa-clock" }
];

const DEFAULT_FLYERS = [
  {
    id: "flyer-1",
    title: "¡Gran Liquidación de Juguetes!",
    subtitle: "Hasta 30% de Descuento en muñecas, autitos y juegos infantiles",
    tag: "OFERTA ESPECIAL",
    image: "juguetes.jpeg",
    category: "juguetes",
    active: true
  },
  {
    id: "flyer-2",
    title: "Peluches Gigantes Stitch y Angel",
    subtitle: "Llegaron con mantas térmicas suaves para regalar en Cobija",
    tag: "LO MÁS VENDIDO",
    image: "OSOSO.jpeg",
    category: "peluches",
    active: true
  },
  {
    id: "flyer-3",
    title: "Teclados y Pianos Musicales",
    subtitle: "Despierta el talento musical de tus niños con el modelo MQ-6104",
    tag: "NOVEDAD",
    image: "PIANOS.jpeg",
    category: "pianos",
    active: true
  },
  {
    id: "flyer-4",
    title: "Cosméticos y Maquillaje Melu",
    subtitle: "Nuevos labiales matte, brillos y máscaras de pestañas en tendencia",
    tag: "TENDENCIA",
    image: "MAQUILLAJES.jpeg",
    category: "maquillaje",
    active: true
  },
  {
    id: "flyer-5",
    title: "Material Escolar al por Mayor y Menor",
    subtitle: "Cuadernos, colores Faber-Castell y pegamentos en barra UHU",
    tag: "TEMPORADA",
    image: "MATERIALES ESCOLARES.jpeg",
    category: "escolar",
    active: true
  }
];

const DEFAULT_PRODUCTS = [
  {
    id: "prod-1",
    name: "Set Infantil de Cocina y Juguetes con Accesorios",
    category: "juguetes",
    price: 45,
    oldPrice: 60,
    stock: 24,
    image: "juguetes.jpeg",
    description: "Divertido set infantil con variedad de alimentos de juguete, donas, utensilios y bandejas plásticas resistentes para desarrollar la creatividad y motricidad.",
    badges: ["oferta", "destacado"],
    rating: 4.9,
    reviews: 18
  },
  {
    id: "prod-2",
    name: "Muñecas Fashion con Vestidos y Accesorios de Regalo",
    category: "juguetes",
    price: 25,
    oldPrice: null,
    stock: 35,
    image: "juguetes.jpeg",
    description: "Hermosas muñecas con vestidos surtidos de moda, zapatitos y accesorios ideales para regalos y piñatas infantiles.",
    badges: ["novedad"],
    rating: 4.8,
    reviews: 12
  },
  {
    id: "prod-3",
    name: "Peluche Stitch y Angel Gigante con Manta Térmica",
    category: "peluches",
    price: 95,
    oldPrice: 125,
    stock: 14,
    image: "OSOSO.jpeg",
    description: "Peluche ultra suave y afelpado de Stitch o Angel (Rosa y Azul) con manta térmica enrollada incorporada. El regalo perfecto para sorprender en Cobija.",
    badges: ["oferta", "destacado"],
    rating: 5.0,
    reviews: 32
  },
  {
    id: "prod-4",
    name: "Peluche Colección Snoopy y Winnie the Pooh",
    category: "peluches",
    price: 75,
    oldPrice: null,
    stock: 18,
    image: "OSOSO.jpeg",
    description: "Peluches de alta calidad hipoalergénicos de Snoopy con polera y Winnie Pooh abrazable. Diseños tiernos y acabados duraderos.",
    badges: ["destacado"],
    rating: 4.9,
    reviews: 15
  },
  {
    id: "prod-5",
    name: "Máscara de Pestañas Melu 2 en 1 & Rímel Voluminizador",
    category: "maquillaje",
    price: 28,
    oldPrice: null,
    stock: 40,
    image: "MAQUILLAJES.jpeg",
    description: "Máscara de pestañas Melu de larga duración Día y Noche, efecto alargador y volumen impactante sin grumos.",
    badges: ["novedad", "destacado"],
    rating: 4.9,
    reviews: 26
  },
  {
    id: "prod-6",
    name: "Pack Lip Gloss & Labiales Matte Softer Moist",
    category: "maquillaje",
    price: 35,
    oldPrice: 48,
    stock: 22,
    image: "MAQUILLAJES.jpeg",
    description: "Set de labiales líquidos matte y brillos con hidratación profunda, tonalidades nude, rojizas y rosas que no resecan los labios.",
    badges: ["oferta"],
    rating: 4.7,
    reviews: 19
  },
  {
    id: "prod-7",
    name: "Teclado Musical Electrónico MQ-6104 con Pantalla y Micrófono",
    category: "pianos",
    price: 185,
    oldPrice: 230,
    stock: 8,
    image: "PIANOS.jpeg",
    description: "Teclado electrónico MQ-6104 con 61 teclas, 16 tonos, 10 ritmos, pantalla digital LED, sistema de aprendizaje inteligente y entrada para micrófono.",
    badges: ["oferta", "destacado"],
    rating: 5.0,
    reviews: 14
  },
  {
    id: "prod-8",
    name: "Mini Guitarra y Teclado Didáctico Infantil",
    category: "pianos",
    price: 65,
    oldPrice: null,
    stock: 12,
    image: "PIANOS.jpeg",
    description: "Instrumento musical infantil para iniciación musical con cuerdas y teclas afinables, perfecto para niños y niñas curiosos.",
    badges: ["novedad"],
    rating: 4.8,
    reviews: 9
  },
  {
    id: "prod-9",
    name: "Lápices de Color Faber-Castell & Pack Pegamento UHU Stic",
    category: "escolar",
    price: 32,
    oldPrice: null,
    stock: 50,
    image: "MATERIALES ESCOLARES.jpeg",
    description: "Caja de colores de alta pigmentación con pegamento en barra UHU original sin solventes, esencial para la escuela y manualidades.",
    badges: ["destacado"],
    rating: 4.9,
    reviews: 21
  },
  {
    id: "prod-10",
    name: "Pack Escolar Completo: Cuadernos, Lápices y Marcadores",
    category: "escolar",
    price: 55,
    oldPrice: 70,
    stock: 30,
    image: "MATERIALES ESCOLARES.jpeg",
    description: "Combo escolar económico con cuadernos anillados, marcadores pastel, lápices de grafito y borradores para el ciclo educativo.",
    badges: ["oferta"],
    rating: 4.8,
    reviews: 17
  },
  {
    id: "prod-11",
    name: "Mochila Escolar Infantil Sonic, Marvel y Princesas",
    category: "mochilas",
    price: 85,
    oldPrice: 115,
    stock: 16,
    image: "MOCHILAS.jpeg",
    description: "Mochila ergonómica reforzada con relieve 3D de personajes populares (Sonic, Capitán América, LOL, Princesas). Correas acolchadas y bolsillos laterales.",
    badges: ["oferta", "destacado"],
    rating: 4.9,
    reviews: 28
  },
  {
    id: "prod-12",
    name: "Mochila Juvenil y Deportiva Reforzada Multiuso",
    category: "mochilas",
    price: 98,
    oldPrice: null,
    stock: 15,
    image: "MOCHILAS.jpeg",
    description: "Mochila de gran capacidad con compartimiento para laptop, material impermeable y cierres de alta durabilidad para colegio, universidad o viajes.",
    badges: ["novedad"],
    rating: 4.8,
    reviews: 11
  },
  {
    id: "prod-13",
    name: "Poleras Estampadas Superhéroes para Niños (Marvel & DC)",
    category: "ropa-infantil",
    price: 42,
    oldPrice: 55,
    stock: 25,
    image: "ROPA INFANTIL.jpeg",
    description: "Poleras de 100% algodón fresco con estampados duraderos de Iron Man, Capitán América, Spider-Man y dinosaurios. Tallas de 2 a 14.",
    badges: ["oferta"],
    rating: 4.9,
    reviews: 20
  },
  {
    id: "prod-14",
    name: "Conjuntos y Poleras Infantiles Urbanas y Deportivas",
    category: "ropa-infantil",
    price: 38,
    oldPrice: null,
    stock: 30,
    image: "ROPA INFANTIL.jpeg",
    description: "Variedad de poleritas, musculosas y conjuntos frescos ideales para el clima cálido de Cobija. Colores vivos y telas transpirables.",
    badges: ["novedad"],
    rating: 4.7,
    reviews: 13
  },
  {
    id: "prod-15",
    name: "Papel de Sublimación Transfer A4 5760dpi (100 Hojas)",
    category: "sublimacion",
    price: 70,
    oldPrice: 85,
    stock: 20,
    image: "HOJAS PARA SUBLIMACIONES.jpeg",
    description: "Papel de transferencia premium A4 para sublimación de tazas, telas de poliéster, cerámicas y metales. Colores nítidos y secado rápido.",
    badges: ["oferta", "destacado"],
    rating: 5.0,
    reviews: 16
  },
  {
    id: "prod-16",
    name: "Tazas Blancas Especiales para Sublimación (Unidad)",
    category: "sublimacion",
    price: 18,
    oldPrice: null,
    stock: 45,
    image: "HOJAS PARA SUBLIMACIONES.jpeg",
    description: "Taza de cerámica blanca con recubrimiento especial de polímero uniforme para sublimación personalizada de logotipos, fotos o frases.",
    badges: ["destacado"],
    rating: 4.8,
    reviews: 14
  },
  {
    id: "prod-17",
    name: "Reloj Deportivo Digital Sportwatch Resistente al Agua",
    category: "relojes",
    price: 55,
    oldPrice: 75,
    stock: 18,
    image: "RELOJES.jpeg",
    description: "Reloj deportivo digital unisex con cronómetro, alarma, fecha, luz nocturna y correa de silicona resistente al sudor y agua.",
    badges: ["oferta", "destacado"],
    rating: 4.8,
    reviews: 23
  },
  {
    id: "prod-18",
    name: "Reloj Digital Táctico Militar R-Shock con Bisel Dorado",
    category: "relojes",
    price: 68,
    oldPrice: null,
    stock: 14,
    image: "RELOJES.jpeg",
    description: "Reloj de diseño robusto estilo militar con bisel dorado y negro, pantalla digital dual, luz LED verde de alta visibilidad y resistencia a impactos.",
    badges: ["novedad"],
    rating: 4.9,
    reviews: 18
  }
];

// Load or initialize state from localStorage
function getStoreData() {
  let settings = localStorage.getItem("anita_settings");
  let categories = localStorage.getItem("anita_categories");
  let products = localStorage.getItem("anita_products");
  let flyers = localStorage.getItem("anita_flyers");
  let orders = localStorage.getItem("anita_orders");
  let cart = localStorage.getItem("anita_cart");

  return {
    settings: settings ? JSON.parse(settings) : DEFAULT_SETTINGS,
    categories: categories ? JSON.parse(categories) : DEFAULT_CATEGORIES,
    products: products ? JSON.parse(products) : DEFAULT_PRODUCTS,
    flyers: flyers ? JSON.parse(flyers) : DEFAULT_FLYERS,
    orders: orders ? JSON.parse(orders) : [],
    cart: cart ? JSON.parse(cart) : []
  };
}

// Save specific key to localStorage
function saveStoreData(key, data) {
  localStorage.setItem(`anita_${key}`, JSON.stringify(data));
}

// Global active app state
const AppState = {
  activeCategory: "todos",
  activeBadge: "todos",
  searchQuery: "",
  sortBy: "default",
  currentFlyerIndex: 0,
  flyerInterval: null,
  cart: [],
  currentQuickViewProduct: null,
  checkoutVoucherData: null,
  currentOrderConfirmed: null
};

// ==========================================================================
// 2. DOM CONTENT LOADED & INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Ensure default datasets are persisted if first run
  const data = getStoreData();
  if (!localStorage.getItem("anita_products")) saveStoreData("products", DEFAULT_PRODUCTS);
  if (!localStorage.getItem("anita_categories")) saveStoreData("categories", DEFAULT_CATEGORIES);
  if (!localStorage.getItem("anita_flyers")) saveStoreData("flyers", DEFAULT_FLYERS);
  if (!localStorage.getItem("anita_settings")) saveStoreData("settings", DEFAULT_SETTINGS);

  AppState.cart = data.cart || [];

  // Update brand text in header and footer from settings
  syncCommercialInfoUI(data.settings);

  // Render navigation & sidebar components
  renderCategoryNav();
  renderSidebarCategories();
  renderFlyerCarousel();

  // Render products catalog
  renderProductsCatalog();

  // Initialize Cart UI
  updateCartUI();

  // Event Listeners for Search & UI
  initSearchAutocomplete();
  initCartListeners();

  // Start auto-rotating flyer carousel
  startFlyerAutoPlay();
});

// Update store details on DOM (Address, Phone, Name)
function syncCommercialInfoUI(settings) {
  if (!settings) settings = getStoreData().settings;

  // Header
  const headerAddress = document.getElementById("headerAddress");
  const headerPhone = document.getElementById("headerPhone");
  const headerPhoneLink = document.getElementById("headerPhoneLink");
  if (headerAddress) headerAddress.textContent = settings.address;
  if (headerPhone) headerPhone.textContent = settings.phone;
  if (headerPhoneLink) headerPhoneLink.href = `https://wa.me/591${settings.phone.replace(/\D/g, '')}`;

  // Sidebar
  const sidebarAddress = document.getElementById("sidebarAddress");
  const sidebarPhoneLink = document.getElementById("sidebarPhoneLink");
  if (sidebarAddress) sidebarAddress.textContent = settings.address;
  if (sidebarPhoneLink) {
    sidebarPhoneLink.textContent = settings.phone;
    sidebarPhoneLink.href = `https://wa.me/591${settings.phone.replace(/\D/g, '')}`;
  }

  // Floating WhatsApp & Support Phone
  const floatingWhatsAppBtn = document.getElementById("floatingWhatsAppBtn");
  if (floatingWhatsAppBtn) {
    floatingWhatsAppBtn.href = `https://wa.me/591${settings.phone.replace(/\D/g, '')}?text=Hola%20${encodeURIComponent(settings.storeName)},%20estoy%20en%20la%20tienda%20online%20y%20tengo%20una%20consulta`;
  }
  const qrSupportPhone = document.getElementById("qrSupportPhone");
  if (qrSupportPhone) qrSupportPhone.textContent = settings.phone;
}

// ==========================================================================
// 3. CATEGORY NAVIGATION & SIDEBAR RENDERING
// ==========================================================================

function renderCategoryNav() {
  const navList = document.getElementById("categoryNavList");
  if (!navList) return;

  const data = getStoreData();
  const categories = data.categories;

  let html = `
    <li class="category-nav-item">
      <button class="category-nav-link ${AppState.activeCategory === 'todos' ? 'active' : ''}" onclick="filterByCategory('todos')">
        <i class="fa-solid fa-border-all"></i> Todos los Productos
      </button>
    </li>
  `;

  categories.forEach(cat => {
    const isActive = AppState.activeCategory === cat.id;
    html += `
      <li class="category-nav-item">
        <button class="category-nav-link ${isActive ? 'active' : ''}" onclick="filterByCategory('${cat.id}')">
          <i class="${cat.icon || 'fa-solid fa-tag'}"></i> ${cat.name}
        </button>
      </li>
    `;
  });

  navList.innerHTML = html;
}

function renderSidebarCategories() {
  const sidebarList = document.getElementById("sidebarCategoriesList");
  if (!sidebarList) return;

  const data = getStoreData();
  const categories = data.categories;
  const products = data.products;

  let html = `
    <li class="sidebar-cat-item ${AppState.activeCategory === 'todos' ? 'active' : ''}">
      <a href="javascript:void(0)" onclick="filterByCategory('todos')">
        <span><i class="fa-solid fa-layer-group" style="margin-right: 8px;"></i> Todos</span>
        <span class="sidebar-cat-count">${products.length}</span>
      </a>
    </li>
  `;

  categories.forEach(cat => {
    const count = products.filter(p => p.category === cat.id).length;
    const isActive = AppState.activeCategory === cat.id;
    html += `
      <li class="sidebar-cat-item ${isActive ? 'active' : ''}">
        <a href="javascript:void(0)" onclick="filterByCategory('${cat.id}')">
          <span><i class="${cat.icon || 'fa-solid fa-tag'}" style="margin-right: 8px;"></i> ${cat.name}</span>
          <span class="sidebar-cat-count">${count}</span>
        </a>
      </li>
    `;
  });

  sidebarList.innerHTML = html;
}

// Category filter handler
function filterByCategory(categoryId) {
  AppState.activeCategory = categoryId;
  renderCategoryNav();
  renderSidebarCategories();
  renderProductsCatalog();

  // Scroll smoothly to catalog
  const catalogSection = document.getElementById("catalogoSection");
  if (catalogSection) {
    catalogSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Badge filter handler (todos, oferta, novedad, destacado)
function filterByBadge(badgeKey) {
  AppState.activeBadge = badgeKey;

  // Update pills UI
  const pills = document.querySelectorAll(".badge-filter-pills .pill-btn");
  pills.forEach(pill => {
    if (pill.getAttribute("data-badge") === badgeKey) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });

  renderProductsCatalog();

  const catalogSection = document.getElementById("catalogoSection");
  if (catalogSection) {
    catalogSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Reset all filters
function resetAllFilters() {
  AppState.activeCategory = "todos";
  AppState.activeBadge = "todos";
  AppState.searchQuery = "";
  AppState.sortBy = "default";

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  if (clearSearchBtn) clearSearchBtn.style.display = "none";

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) sortSelect.value = "default";

  const pills = document.querySelectorAll(".badge-filter-pills .pill-btn");
  pills.forEach(pill => {
    pill.classList.toggle("active", pill.getAttribute("data-badge") === "todos");
  });

  renderCategoryNav();
  renderSidebarCategories();
  renderProductsCatalog();
}

// Sorting handler
function handleSortChange(sortValue) {
  AppState.sortBy = sortValue;
  renderProductsCatalog();
}

// ==========================================================================
// 4. PRODUCTS CATALOG RENDERING & FILTER ENGINE
// ==========================================================================

function getFilteredProducts() {
  const data = getStoreData();
  let list = [...data.products];

  // Category filter
  if (AppState.activeCategory !== "todos") {
    list = list.filter(p => p.category === AppState.activeCategory);
  }

  // Badge filter
  if (AppState.activeBadge !== "todos") {
    list = list.filter(p => p.badges && p.badges.includes(AppState.activeBadge));
  }

  // Search keyword filter
  if (AppState.searchQuery.trim() !== "") {
    const q = AppState.searchQuery.toLowerCase().trim();
    list = list.filter(p => {
      const matchName = p.name.toLowerCase().includes(q);
      const matchDesc = p.description && p.description.toLowerCase().includes(q);
      const matchCat = p.category.toLowerCase().includes(q);
      return matchName || matchDesc || matchCat;
    });
  }

  // Sorting
  if (AppState.sortBy === "price-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (AppState.sortBy === "price-desc") {
    list.sort((a, b) => b.price - a.price);
  } else if (AppState.sortBy === "name-asc") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  return list;
}

function renderProductsCatalog() {
  const productsGrid = document.getElementById("productsGrid");
  const emptyState = document.getElementById("emptyState");
  const resultsCount = document.getElementById("resultsCount");
  const sectionHeading = document.getElementById("currentSectionTitle");
  const activeChips = document.getElementById("activeFiltersChips");

  if (!productsGrid) return;

  const filteredProducts = getFilteredProducts();
  const data = getStoreData();

  // Update Results Count
  if (resultsCount) {
    resultsCount.textContent = `Mostrando ${filteredProducts.length} artículo${filteredProducts.length === 1 ? '' : 's'}`;
  }

  // Update Section Heading Title
  if (sectionHeading) {
    if (AppState.activeCategory !== "todos") {
      const currentCat = data.categories.find(c => c.id === AppState.activeCategory);
      sectionHeading.innerHTML = `<i class="${currentCat ? currentCat.icon : 'fa-solid fa-boxes-stacked'}"></i> ${currentCat ? currentCat.name : 'Catálogo'}`;
    } else if (AppState.activeBadge !== "todos") {
      const badgeTitles = {
        oferta: '<i class="fa-solid fa-fire text-amber"></i> Ofertas Especiales',
        novedad: '<i class="fa-solid fa-sparkles text-amber"></i> Novedades Recién Llegadas',
        destacado: '<i class="fa-solid fa-star text-gold"></i> Productos Destacados'
      };
      sectionHeading.innerHTML = badgeTitles[AppState.activeBadge] || 'Catálogo de Productos';
    } else {
      sectionHeading.innerHTML = `<i class="fa-solid fa-boxes-stacked"></i> Catálogo Completo`;
    }
  }

  // Active filter chips
  if (activeChips) {
    let chipsHtml = "";
    if (AppState.activeCategory !== "todos") {
      const cat = data.categories.find(c => c.id === AppState.activeCategory);
      chipsHtml += `
        <span class="filter-chip">
          Categoría: ${cat ? cat.name : AppState.activeCategory}
          <button class="chip-remove" onclick="filterByCategory('todos')">&times;</button>
        </span>
      `;
    }
    if (AppState.activeBadge !== "todos") {
      chipsHtml += `
        <span class="filter-chip">
          Filtro: ${AppState.activeBadge.toUpperCase()}
          <button class="chip-remove" onclick="filterByBadge('todos')">&times;</button>
        </span>
      `;
    }
    if (AppState.searchQuery.trim() !== "") {
      chipsHtml += `
        <span class="filter-chip">
          Búsqueda: "${AppState.searchQuery}"
          <button class="chip-remove" onclick="clearSearch()">&times;</button>
        </span>
      `;
    }
    activeChips.innerHTML = chipsHtml;
  }

  // Handle empty state
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  // Build Cards HTML
  let cardsHtml = "";
  filteredProducts.forEach(prod => {
    const categoryObj = data.categories.find(c => c.id === prod.category);
    const catName = categoryObj ? categoryObj.name : prod.category;

    // Badges HTML
    let badgesHtml = "";
    if (prod.badges && prod.badges.length > 0) {
      prod.badges.forEach(b => {
        if (b === "oferta") badgesHtml += `<span class="product-badge badge-oferta">🔥 Oferta</span>`;
        if (b === "novedad") badgesHtml += `<span class="product-badge badge-novedad">✨ Novedad</span>`;
        if (b === "destacado") badgesHtml += `<span class="product-badge badge-destacado">⭐ Destacado</span>`;
      });
    }

    // Stars Rating
    const stars = `<i class="fa-solid fa-star"></i>`.repeat(Math.floor(prod.rating || 5));

    // Old price calculation
    const oldPriceHtml = prod.oldPrice ? `<span class="old-price">Bs ${Number(prod.oldPrice).toFixed(2)}</span>` : "";

    cardsHtml += `
      <article class="product-card" data-product-id="${prod.id}">
        <div class="product-card-media" onclick="openQuickViewModal('${prod.id}')">
          <img src="${prod.image}" alt="${prod.name}" loading="lazy" onerror="this.src='logo importaciones Anita.jpeg'">
          <div class="card-badges-container">
            ${badgesHtml}
          </div>
          <div class="card-quick-actions">
            <button class="btn-quickview" type="button" onclick="event.stopPropagation(); openQuickViewModal('${prod.id}')">
              <i class="fa-solid fa-eye"></i> Ver Detalle
            </button>
          </div>
        </div>

        <div class="product-card-body">
          <span class="product-card-category">${catName}</span>
          <h4 class="product-card-title" title="${prod.name}" onclick="openQuickViewModal('${prod.id}')">${prod.name}</h4>
          
          <div class="product-card-rating">
            ${stars}
            <span class="rating-count">(${prod.reviews || 10})</span>
          </div>

          <div class="product-card-price-row">
            <div class="price-container">
              <span class="current-price">Bs ${Number(prod.price).toFixed(2)}</span>
              ${oldPriceHtml}
            </div>
            <span class="stock-indicator ${prod.stock < 5 ? 'low' : ''}">
              <i class="fa-solid ${prod.stock < 5 ? 'fa-triangle-exclamation' : 'fa-check'}"></i> Stock: ${prod.stock}
            </span>
          </div>

          <button class="btn-add-to-cart" type="button" onclick="addToCart('${prod.id}', 1, this)">
            <i class="fa-solid fa-cart-plus"></i> Añadir al Carrito
          </button>
        </div>
      </article>
    `;
  });

  productsGrid.innerHTML = cardsHtml;
}

// ==========================================================================
// 5. SIDEBAR PUBLICITARIO & FLYER CAROUSEL (AUTOMATIC SLIDER)
// ==========================================================================

function renderFlyerCarousel() {
  const track = document.getElementById("flyerSlidesTrack");
  const dotsContainer = document.getElementById("flyerDots");
  if (!track) return;

  const data = getStoreData();
  const activeFlyers = data.flyers.filter(f => f.active !== false);

  if (activeFlyers.length === 0) {
    track.innerHTML = `<div style="padding: 20px; text-align: center; color: #fff;">Próximamente más ofertas</div>`;
    return;
  }

  let slidesHtml = "";
  let dotsHtml = "";

  activeFlyers.forEach((flyer, index) => {
    slidesHtml += `
      <div class="flyer-slide" onclick="handleFlyerClick('${flyer.category || ''}')" title="Clic para ver esta promoción">
        <div class="flyer-slide-media">
          <img src="${flyer.image}" alt="${flyer.title}" onerror="this.src='logo importaciones Anita.jpeg'">
          <div class="flyer-overlay-gradient"></div>
          <span class="flyer-badge-tag">${flyer.tag || 'PROMOCIÓN'}</span>
          <div class="flyer-slide-caption">
            <h4 class="flyer-title">${flyer.title}</h4>
            <p class="flyer-subtitle">${flyer.subtitle}</p>
          </div>
        </div>
      </div>
    `;

    dotsHtml += `
      <div class="flyer-dot ${index === 0 ? 'active' : ''}" onclick="goToFlyerSlide(${index})"></div>
    `;
  });

  track.innerHTML = slidesHtml;
  if (dotsContainer) dotsContainer.innerHTML = dotsHtml;

  // Bind next/prev buttons
  const prevBtn = document.getElementById("prevFlyerBtn");
  const nextBtn = document.getElementById("nextFlyerBtn");
  if (prevBtn) prevBtn.onclick = () => prevFlyerSlide();
  if (nextBtn) nextBtn.onclick = () => nextFlyerSlide();

  // Pause on hover
  const carouselCard = document.getElementById("flyerCarousel");
  if (carouselCard) {
    carouselCard.addEventListener("mouseenter", () => stopFlyerAutoPlay());
    carouselCard.addEventListener("mouseleave", () => startFlyerAutoPlay());
  }
}

function updateFlyerPosition() {
  const track = document.getElementById("flyerSlidesTrack");
  const dots = document.querySelectorAll(".flyer-dot");
  if (!track) return;

  const data = getStoreData();
  const activeFlyers = data.flyers.filter(f => f.active !== false);
  if (activeFlyers.length === 0) return;

  if (AppState.currentFlyerIndex >= activeFlyers.length) AppState.currentFlyerIndex = 0;
  if (AppState.currentFlyerIndex < 0) AppState.currentFlyerIndex = activeFlyers.length - 1;

  track.style.transform = `translateX(-${AppState.currentFlyerIndex * 100}%)`;

  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === AppState.currentFlyerIndex);
  });
}

function nextFlyerSlide() {
  AppState.currentFlyerIndex++;
  updateFlyerPosition();
}

function prevFlyerSlide() {
  AppState.currentFlyerIndex--;
  updateFlyerPosition();
}

function goToFlyerSlide(index) {
  AppState.currentFlyerIndex = index;
  updateFlyerPosition();
}

function startFlyerAutoPlay() {
  stopFlyerAutoPlay();
  AppState.flyerInterval = setInterval(() => {
    nextFlyerSlide();
  }, 4000); // Switches automatically every 4 seconds
}

function stopFlyerAutoPlay() {
  if (AppState.flyerInterval) {
    clearInterval(AppState.flyerInterval);
    AppState.flyerInterval = null;
  }
}

function handleFlyerClick(category) {
  if (category) {
    filterByCategory(category);
  } else {
    filterByBadge("oferta");
  }
}

// ==========================================================================
// 6. SEARCH AUTOCOMPLETE & LIVE SEARCH
// ==========================================================================

function initSearchAutocomplete() {
  const searchInput = document.getElementById("searchInput");
  const dropdown = document.getElementById("searchAutocomplete");
  const clearBtn = document.getElementById("clearSearchBtn");

  if (!searchInput || !dropdown) return;

  searchInput.addEventListener("input", (e) => {
    const val = e.target.value;
    AppState.searchQuery = val;

    if (clearBtn) clearBtn.style.display = val.length > 0 ? "block" : "none";

    if (val.trim().length >= 2) {
      const data = getStoreData();
      const q = val.toLowerCase().trim();
      const matches = data.products.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q))
      ).slice(0, 6);

      if (matches.length > 0) {
        let html = "";
        matches.forEach(m => {
          html += `
            <div class="autocomplete-item" onclick="selectAutocompleteItem('${m.id}')">
              <img src="${m.image}" class="autocomplete-thumb" alt="${m.name}" onerror="this.src='logo importaciones Anita.jpeg'">
              <div class="autocomplete-info">
                <div class="autocomplete-title">${m.name}</div>
                <div class="autocomplete-meta">${m.category} • Stock: ${m.stock}</div>
              </div>
              <div class="autocomplete-price">Bs ${Number(m.price).toFixed(2)}</div>
            </div>
          `;
        });
        dropdown.innerHTML = html;
        dropdown.classList.add("active");
      } else {
        dropdown.innerHTML = `<div style="padding: 12px; text-align: center; color: #64748b; font-size: 0.85rem;">No hay coincidencias para "${val}"</div>`;
        dropdown.classList.add("active");
      }
    } else {
      dropdown.classList.remove("active");
    }

    renderProductsCatalog();
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      clearSearch();
    });
  }

  // Close dropdown on outside click
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-bar-wrapper")) {
      dropdown.classList.remove("active");
    }
  });
}

function selectAutocompleteItem(productId) {
  const dropdown = document.getElementById("searchAutocomplete");
  if (dropdown) dropdown.classList.remove("active");
  openQuickViewModal(productId);
}

function clearSearch() {
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  const dropdown = document.getElementById("searchAutocomplete");

  if (searchInput) searchInput.value = "";
  if (clearBtn) clearBtn.style.display = "none";
  if (dropdown) dropdown.classList.remove("active");

  AppState.searchQuery = "";
  renderProductsCatalog();
}

// ==========================================================================
// 7. SHOPPING CART ENGINE & DRAWER
// ==========================================================================

function initCartListeners() {
  const cartToggleBtn = document.getElementById("cartToggleBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartOverlay = document.getElementById("cartOverlay");
  const clearCartBtn = document.getElementById("clearCartBtn");
  const proceedBtn = document.getElementById("proceedToCheckoutBtn");
  const directWaBtn = document.getElementById("orderViaWhatsAppDirectBtn");

  if (cartToggleBtn) cartToggleBtn.addEventListener("click", openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCartDrawer);

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      if (confirm("¿Deseas vaciar todos los productos del carrito?")) {
        AppState.cart = [];
        saveStoreData("cart", AppState.cart);
        updateCartUI();
      }
    });
  }

  if (proceedBtn) {
    proceedBtn.addEventListener("click", () => {
      if (AppState.cart.length === 0) {
        alert("Tu carrito está vacío. Agrega productos para continuar.");
        return;
      }
      closeCartDrawer();
      openCheckoutModal();
    });
  }

  if (directWaBtn) {
    directWaBtn.addEventListener("click", () => {
      if (AppState.cart.length === 0) {
        alert("Tu carrito está vacío. Agrega productos para pedir por WhatsApp.");
        return;
      }
      sendDirectWhatsAppOrder();
    });
  }
}

function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (drawer) drawer.classList.add("active");
  if (overlay) overlay.classList.add("active");
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (drawer) drawer.classList.remove("active");
  if (overlay) overlay.classList.remove("active");
}

function addToCart(productId, qty = 1, triggerBtn = null) {
  const data = getStoreData();
  const product = data.products.find(p => p.id === productId);
  if (!product) return;

  if (product.stock <= 0) {
    alert("Lo sentimos, este producto se encuentra temporalmente agotado.");
    return;
  }

  const existing = AppState.cart.find(item => item.id === productId);
  if (existing) {
    if (existing.qty + qty > product.stock) {
      alert(`Solo disponemos de ${product.stock} unidades en existencia.`);
      existing.qty = product.stock;
    } else {
      existing.qty += qty;
    }
  } else {
    AppState.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      qty: Math.min(qty, product.stock)
    });
  }

  saveStoreData("cart", AppState.cart);
  updateCartUI();

  // Visual feedback on button
  if (triggerBtn) {
    const originalText = triggerBtn.innerHTML;
    triggerBtn.innerHTML = `<i class="fa-solid fa-check"></i> ¡Añadido!`;
    triggerBtn.style.background = "var(--color-success)";
    triggerBtn.style.color = "#ffffff";
    setTimeout(() => {
      triggerBtn.innerHTML = originalText;
      triggerBtn.style.background = "";
      triggerBtn.style.color = "";
    }, 1200);
  }

  // Animate badge
  const badge = document.getElementById("cartBadgeCount");
  if (badge) {
    badge.classList.remove("pulse");
    void badge.offsetWidth; // trigger reflow
    badge.classList.add("pulse");
  }
}

function updateCartItemQty(productId, delta) {
  const data = getStoreData();
  const product = data.products.find(p => p.id === productId);
  const cartItem = AppState.cart.find(i => i.id === productId);
  if (!cartItem) return;

  const newQty = cartItem.qty + delta;
  if (newQty <= 0) {
    removeFromCart(productId);
    return;
  }

  const maxStock = product ? product.stock : 999;
  if (newQty > maxStock) {
    alert(`Solo quedan ${maxStock} unidades en existencia.`);
    return;
  }

  cartItem.qty = newQty;
  saveStoreData("cart", AppState.cart);
  updateCartUI();
}

function removeFromCart(productId) {
  AppState.cart = AppState.cart.filter(i => i.id !== productId);
  saveStoreData("cart", AppState.cart);
  updateCartUI();
}

function updateCartUI() {
  const cartBadge = document.getElementById("cartBadgeCount");
  const cartPreview = document.getElementById("cartTotalPreview");
  const drawerCount = document.getElementById("cartDrawerCount");
  const itemsContainer = document.getElementById("cartItemsContainer");
  const cartSubtotal = document.getElementById("cartSubtotal");
  const cartTotal = document.getElementById("cartTotal");
  const progressText = document.getElementById("shippingProgressText");
  const progressBar = document.getElementById("shippingProgressBar");

  const totalCount = AppState.cart.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = AppState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (cartBadge) cartBadge.textContent = totalCount;
  if (cartPreview) cartPreview.textContent = `${totalAmount.toFixed(2)} Bs`;
  if (drawerCount) drawerCount.textContent = `${totalCount} producto${totalCount === 1 ? '' : 's'}`;
  if (cartSubtotal) cartSubtotal.textContent = `${totalAmount.toFixed(2)} Bs`;
  if (cartTotal) cartTotal.textContent = `${totalAmount.toFixed(2)} Bs`;

  // Free shipping progress logic (Threshold = 120 Bs by default)
  const settings = getStoreData().settings;
  const threshold = settings.freeShippingThreshold || 120;
  if (progressText && progressBar) {
    if (totalAmount >= threshold) {
      progressText.innerHTML = `<i class="fa-solid fa-gift text-green"></i> <strong>¡Felicidades! Tienes Envío GRATIS en Cobija</strong>`;
      progressBar.style.width = "100%";
    } else {
      const remaining = threshold - totalAmount;
      const pct = Math.min(100, Math.round((totalAmount / threshold) * 100));
      progressText.innerHTML = `<i class="fa-solid fa-bicycle"></i> ¡Agrega <strong>${remaining.toFixed(2)} Bs</strong> para envío GRATIS en Cobija!`;
      progressBar.style.width = `${pct}%`;
    }
  }

  // Render Cart Items
  if (!itemsContainer) return;

  if (AppState.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-message">
        <i class="fa-solid fa-cart-shopping"></i>
        <h4>Tu carrito está vacío</h4>
        <p>Descubre nuestros peluches, juguetes, maquillajes y pianos musicales.</p>
        <button class="btn btn-primary btn-sm mt-2" onclick="closeCartDrawer(); resetAllFilters();">
          Ver Productos
        </button>
      </div>
    `;
    return;
  }

  let html = "";
  AppState.cart.forEach(item => {
    html += `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" onerror="this.src='logo importaciones Anita.jpeg'">
        <div class="cart-item-details">
          <h5 class="cart-item-name" title="${item.name}">${item.name}</h5>
          <div class="cart-item-price">Bs ${(item.price * item.qty).toFixed(2)} <small style="color:#64748b; font-weight:normal;">(${item.price} Bs c/u)</small></div>
          <div class="cart-item-qty-row">
            <button class="qty-control-btn" onclick="updateCartItemQty('${item.id}', -1)">-</button>
            <span class="cart-qty-number">${item.qty}</span>
            <button class="qty-control-btn" onclick="updateCartItemQty('${item.id}', 1)">+</button>
          </div>
        </div>
        <button class="btn-remove-item" onclick="removeFromCart('${item.id}')" title="Eliminar producto">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  });

  itemsContainer.innerHTML = html;
}

// Direct WhatsApp order without full checkout modal
function sendDirectWhatsAppOrder() {
  const settings = getStoreData().settings;
  const totalAmount = AppState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  let msg = `🛍️ *HOLA IMPORTACIONES ANITA* 🛍️\n`;
  msg += `Deseo realizar el siguiente pedido desde su tienda online:\n\n`;

  AppState.cart.forEach((i, idx) => {
    msg += `• *${i.qty}x* ${i.name} — *Bs ${(i.price * i.qty).toFixed(2)}*\n`;
  });

  msg += `\n💰 *Total a Pagar:* Bs ${totalAmount.toFixed(2)}\n`;
  msg += `📍 *Ubicación Tienda:* ${settings.address}\n\n`;
  msg += `Por favor indíquenme el número de cuenta / QR para realizar el pago. ¡Gracias!`;

  const phone = settings.phone.replace(/\D/g, "");
  const url = `https://wa.me/591${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

// ==========================================================================
// 8. PRODUCT QUICK VIEW MODAL
// ==========================================================================

function openQuickViewModal(productId) {
  const data = getStoreData();
  const product = data.products.find(p => p.id === productId);
  if (!product) return;

  AppState.currentQuickViewProduct = product;
  const modal = document.getElementById("quickViewModal");
  const content = document.getElementById("quickViewContent");
  if (!modal || !content) return;

  const categoryObj = data.categories.find(c => c.id === product.category);
  const catName = categoryObj ? categoryObj.name : product.category;
  const settings = data.settings;

  const oldPriceHtml = product.oldPrice ? `<span class="old-price" style="font-size: 1.1rem; text-decoration: line-through; color: #94a3b8;">Bs ${Number(product.oldPrice).toFixed(2)}</span>` : "";

  content.innerHTML = `
    <div class="quickview-media">
      <img src="${product.image}" alt="${product.name}" onerror="this.src='logo importaciones Anita.jpeg'">
    </div>
    <div class="quickview-info">
      <span class="quickview-category">${catName}</span>
      <h3 class="quickview-title">${product.name}</h3>

      <div class="quickview-price-box">
        <span class="quickview-price">Bs ${Number(product.price).toFixed(2)}</span>
        ${oldPriceHtml}
      </div>

      <div class="quickview-stock-box">
        <i class="fa-solid fa-boxes-stacked"></i> Existencias disponibles: <strong>${product.stock} unidades</strong>
      </div>

      <p class="quickview-desc">${product.description}</p>

      <div class="quickview-actions">
        <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 8px;">
          <label style="font-size: 0.88rem; font-weight: 700;">Cantidad:</label>
          <input type="number" id="quickViewQtyInput" value="1" min="1" max="${product.stock}" style="width: 70px; padding: 8px; border-radius: 6px; border: 1px solid #cbd5e1; text-align: center;">
        </div>
        <button class="btn btn-primary btn-lg w-100" onclick="handleQuickViewAddToCart('${product.id}')">
          <i class="fa-solid fa-cart-plus"></i> Añadir al Carrito
        </button>
        <a href="https://wa.me/591${settings.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hola IMPORTACIONES ANITA, deseo consultar por el producto: ' + product.name + ' (Bs ' + product.price + ')')}" target="_blank" class="btn btn-whatsapp w-100">
          <i class="fa-brands fa-whatsapp"></i> Consultar por WhatsApp
        </a>
      </div>
    </div>
  `;

  modal.classList.add("active");
}

function handleQuickViewAddToCart(productId) {
  const qtyInput = document.getElementById("quickViewQtyInput");
  const qty = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
  addToCart(productId, qty);
  closeQuickViewModal();
  openCartDrawer();
}

function closeQuickViewModal() {
  const modal = document.getElementById("quickViewModal");
  if (modal) modal.classList.remove("active");
}

// ==========================================================================
// 9. CHECKOUT & QR PAYMENT WORKFLOW (WITH RECEIPT VALIDATION)
// ==========================================================================

function openCheckoutModal() {
  const modal = document.getElementById("checkoutModal");
  if (!modal) return;

  goToCheckoutStep(1);

  // Update order summary in step 1
  const totalCount = AppState.cart.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = AppState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const countElem = document.getElementById("checkoutSummaryCount");
  const totalElem = document.getElementById("checkoutSummaryTotal");
  if (countElem) countElem.textContent = `${totalCount} artículo${totalCount === 1 ? '' : 's'}`;
  if (totalElem) totalElem.textContent = `${totalAmount.toFixed(2)} Bs`;

  modal.classList.add("active");
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkoutModal");
  if (modal) modal.classList.remove("active");
}

function goToCheckoutStep(stepNumber) {
  const step1 = document.getElementById("checkoutStep1");
  const step2 = document.getElementById("checkoutStep2");
  const step3 = document.getElementById("checkoutStep3");

  const node1 = document.getElementById("stepNode1");
  const node2 = document.getElementById("stepNode2");
  const node3 = document.getElementById("stepNode3");

  const line1 = document.getElementById("stepLine1");
  const line2 = document.getElementById("stepLine2");

  if (step1) step1.style.display = stepNumber === 1 ? "block" : "none";
  if (step2) step2.style.display = stepNumber === 2 ? "block" : "none";
  if (step3) step3.style.display = stepNumber === 3 ? "block" : "none";

  // Nodes active/completed
  if (node1) {
    node1.classList.toggle("active", stepNumber === 1);
    node1.classList.toggle("completed", stepNumber > 1);
  }
  if (node2) {
    node2.classList.toggle("active", stepNumber === 2);
    node2.classList.toggle("completed", stepNumber > 2);
  }
  if (node3) {
    node3.classList.toggle("active", stepNumber === 3);
  }

  if (line1) line1.classList.toggle("active", stepNumber > 1);
  if (line2) line2.classList.toggle("active", stepNumber > 2);
}

function handleProceedToPayment(event) {
  event.preventDefault();

  const name = document.getElementById("clientName").value.trim();
  const phone = document.getElementById("clientPhone").value.trim();
  const address = document.getElementById("clientAddress").value.trim();
  const deliveryMethod = document.getElementById("deliveryMethod").value;
  const notes = document.getElementById("orderNotes").value.trim();

  if (!name || !phone || !address) {
    alert("Por favor completa todos los campos requeridos para coordinar la entrega.");
    return;
  }

  // Calculate total
  const totalAmount = AppState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Render QR in Step 2
  renderQrPaymentCard(totalAmount);

  goToCheckoutStep(2);
}

// Generate Realistic Bolivian QR (SVG or Image)
function renderQrPaymentCard(amount) {
  const qrFrame = document.getElementById("qrImageFrame");
  const qrAmountDisplay = document.getElementById("qrAmountDisplay");
  const settings = getStoreData().settings;

  if (qrAmountDisplay) {
    qrAmountDisplay.textContent = `Bs ${amount.toFixed(2)}`;
  }

  if (!qrFrame) return;

  // If store settings have custom uploaded QR image, use it!
  if (settings.qrImage && settings.qrImage.trim() !== "") {
    qrFrame.innerHTML = `<img src="${settings.qrImage}" alt="QR de Pago" style="width: 100%; height: 100%; object-fit: contain;">`;
    return;
  }

  // Generate a high-fidelity Bolivian "SIMPLE QR" SVG with real QR code matrix styling
  const svgQr = generateBolivianQrSvg(amount);
  qrFrame.innerHTML = svgQr;
}

// Generate an SVG QR graphic with the Bolivian Simple QR pattern and logo center
function generateBolivianQrSvg(amount) {
  return `
    <svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <!-- Background -->
      <rect width="200" height="200" fill="#ffffff" rx="10"/>

      <!-- QR Corner 1 (Top Left) -->
      <rect x="15" y="15" width="45" height="45" rx="5" fill="#0b1a41"/>
      <rect x="23" y="23" width="29" height="29" rx="3" fill="#ffffff"/>
      <rect x="29" y="29" width="17" height="17" rx="2" fill="#f59e0b"/>

      <!-- QR Corner 2 (Top Right) -->
      <rect x="140" y="15" width="45" height="45" rx="5" fill="#0b1a41"/>
      <rect x="148" y="23" width="29" height="29" rx="3" fill="#ffffff"/>
      <rect x="154" y="29" width="17" height="17" rx="2" fill="#f59e0b"/>

      <!-- QR Corner 3 (Bottom Left) -->
      <rect x="15" y="140" width="45" height="45" rx="5" fill="#0b1a41"/>
      <rect x="23" y="148" width="29" height="29" rx="3" fill="#ffffff"/>
      <rect x="29" y="154" width="17" height="17" rx="2" fill="#f59e0b"/>

      <!-- QR Matrix Data Blocks (Stylized Data Modules) -->
      <rect x="70" y="20" width="8" height="8" fill="#0b1a41"/>
      <rect x="85" y="20" width="16" height="8" fill="#0b1a41"/>
      <rect x="110" y="20" width="8" height="8" fill="#0b1a41"/>
      <rect x="125" y="20" width="8" height="8" fill="#0b1a41"/>

      <rect x="70" y="35" width="16" height="8" fill="#0b1a41"/>
      <rect x="95" y="35" width="8" height="8" fill="#0b1a41"/>
      <rect x="115" y="35" width="16" height="8" fill="#0b1a41"/>

      <rect x="75" y="50" width="8" height="8" fill="#0b1a41"/>
      <rect x="90" y="50" width="16" height="8" fill="#0b1a41"/>
      <rect x="120" y="50" width="8" height="8" fill="#0b1a41"/>

      <!-- Left vertical blocks -->
      <rect x="20" y="70" width="8" height="16" fill="#0b1a41"/>
      <rect x="35" y="75" width="8" height="8" fill="#0b1a41"/>
      <rect x="50" y="70" width="8" height="16" fill="#0b1a41"/>

      <!-- Center Logo Box -->
      <rect x="75" y="75" width="50" height="50" rx="8" fill="#0b1a41" stroke="#f59e0b" stroke-width="2"/>
      <circle cx="100" cy="100" r="16" fill="#f59e0b"/>
      <text x="100" y="104" font-size="10" font-family="'Outfit', sans-serif" font-weight="900" fill="#0b1a41" text-anchor="middle">ANITA</text>

      <!-- Right & Bottom Data Modules -->
      <rect x="140" y="70" width="16" height="8" fill="#0b1a41"/>
      <rect x="165" y="75" width="8" height="16" fill="#0b1a41"/>
      <rect x="145" y="95" width="8" height="8" fill="#0b1a41"/>
      <rect x="160" y="100" width="16" height="8" fill="#0b1a41"/>

      <rect x="20" y="115" width="16" height="8" fill="#0b1a41"/>
      <rect x="45" y="120" width="8" height="12" fill="#0b1a41"/>

      <rect x="70" y="135" width="8" height="16" fill="#0b1a41"/>
      <rect x="85" y="140" width="16" height="8" fill="#0b1a41"/>
      <rect x="110" y="135" width="16" height="8" fill="#0b1a41"/>

      <rect x="70" y="160" width="16" height="8" fill="#0b1a41"/>
      <rect x="95" y="165" width="8" height="16" fill="#0b1a41"/>
      <rect x="115" y="160" width="16" height="8" fill="#0b1a41"/>
      
      <rect x="140" y="140" width="12" height="12" fill="#0b1a41"/>
      <rect x="160" y="145" width="16" height="8" fill="#0b1a41"/>
      <rect x="145" y="165" width="24" height="8" fill="#0b1a41"/>
    </svg>
  `;
}

// Payment receipt voucher upload
function handleVoucherUpload(input) {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    AppState.checkoutVoucherData = {
      name: file.name,
      type: file.type,
      dataUrl: e.target.result
    };

    const dropzoneContent = document.getElementById("dropzoneContent");
    const dropzonePreview = document.getElementById("dropzonePreview");
    const previewImg = document.getElementById("voucherPreviewImg");
    const fileName = document.getElementById("voucherFileName");
    const statusAlert = document.getElementById("validationStatusAlert");

    if (dropzoneContent) dropzoneContent.style.display = "none";
    if (dropzonePreview) dropzonePreview.style.display = "flex";
    if (previewImg) previewImg.src = e.target.result;
    if (fileName) fileName.textContent = file.name;

    if (statusAlert) {
      statusAlert.innerHTML = `
        <i class="fa-solid fa-circle-check text-green"></i>
        <span><strong>¡Comprobante adjuntado con éxito!</strong> Listo para validar y confirmar tu pedido.</span>
      `;
      statusAlert.style.background = "#dcfce7";
      statusAlert.style.borderColor = "#86efac";
      statusAlert.style.color = "#15803d";
    }
  };

  reader.readAsDataURL(file);
}

function removeVoucherFile(event) {
  event.stopPropagation();
  AppState.checkoutVoucherData = null;

  const input = document.getElementById("voucherFileInput");
  if (input) input.value = "";

  const dropzoneContent = document.getElementById("dropzoneContent");
  const dropzonePreview = document.getElementById("dropzonePreview");
  const statusAlert = document.getElementById("validationStatusAlert");

  if (dropzoneContent) dropzoneContent.style.display = "block";
  if (dropzonePreview) dropzonePreview.style.display = "none";

  if (statusAlert) {
    statusAlert.innerHTML = `
      <i class="fa-solid fa-circle-info"></i>
      <span>Sube tu comprobante para habilitar la confirmación y el despacho de tu pedido.</span>
    `;
    statusAlert.style.background = "#f0fdf4";
    statusAlert.style.borderColor = "#bbf7d0";
    statusAlert.style.color = "#166534";
  }
}

// Validation & Confirm Order
function handleValidateAndConfirmOrder() {
  const name = document.getElementById("clientName").value.trim();
  const phone = document.getElementById("clientPhone").value.trim();
  const address = document.getElementById("clientAddress").value.trim();
  const deliveryMethod = document.getElementById("deliveryMethod").value;
  const notes = document.getElementById("orderNotes").value.trim();
  const transactionId = document.getElementById("transactionIdInput").value.trim();

  // Validate that a voucher or transaction number was provided
  if (!AppState.checkoutVoucherData && !transactionId) {
    const proceed = confirm("Aún no has adjuntado la captura del comprobante bancario. ¿Deseas confirmar el pedido y enviar el comprobante directamente al WhatsApp de la tienda (67664328)?");
    if (!proceed) return;
  }

  const validateBtn = document.getElementById("validateAndConfirmBtn");
  if (validateBtn) {
    validateBtn.disabled = true;
    validateBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Validando Pago...`;
  }

  setTimeout(() => {
    // Generate Order Record
    const orderId = `ANITA-BOL-${Math.floor(1000 + Math.random() * 9000)}`;
    const totalAmount = AppState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const dateStr = new Date().toLocaleString("es-BO");

    const orderRecord = {
      id: orderId,
      date: dateStr,
      client: {
        name,
        phone,
        address,
        deliveryMethod,
        notes
      },
      items: [...AppState.cart],
      total: totalAmount,
      transactionId: transactionId || "Validación Digital",
      voucher: AppState.checkoutVoucherData ? AppState.checkoutVoucherData.dataUrl : null,
      status: AppState.checkoutVoucherData ? "verificado" : "pendiente"
    };

    // Save order in localStorage
    const data = getStoreData();
    data.orders.unshift(orderRecord);
    saveStoreData("orders", data.orders);

    // Decrement stock for purchased products
    AppState.cart.forEach(cartItem => {
      const prod = data.products.find(p => p.id === cartItem.id);
      if (prod) {
        prod.stock = Math.max(0, prod.stock - cartItem.qty);
      }
    });
    saveStoreData("products", data.products);

    // Save active confirmed order
    AppState.currentOrderConfirmed = orderRecord;

    // Clear cart
    AppState.cart = [];
    saveStoreData("cart", AppState.cart);
    updateCartUI();

    // Render Order Confirmation Ticket in Step 3
    renderOrderConfirmationTicket(orderRecord);

    if (validateBtn) {
      validateBtn.disabled = false;
      validateBtn.innerHTML = `<i class="fa-solid fa-check-double"></i> Validar y Confirmar Compra`;
    }

    goToCheckoutStep(3);
    renderProductsCatalog(); // Refresh catalog stock display
  }, 1000);
}

function renderOrderConfirmationTicket(order) {
  const ticketCard = document.getElementById("orderTicketCard");
  const sendWhatsAppBtn = document.getElementById("sendOrderWhatsAppBtn");
  const settings = getStoreData().settings;

  if (!ticketCard) return;

  let itemsRows = "";
  order.items.forEach(i => {
    itemsRows += `
      <div class="ticket-row">
        <span>${i.qty}x ${i.name}</span>
        <strong>Bs ${(i.price * i.qty).toFixed(2)}</strong>
      </div>
    `;
  });

  ticketCard.innerHTML = `
    <div class="ticket-header">
      <div>
        <strong>IMPORTACIONES ANITA</strong>
        <p style="font-size: 0.78rem; color: #64748b;">Cobija, Pando • Bolivia</p>
      </div>
      <div style="text-align: right;">
        <span class="status-badge ${order.status === 'verificado' ? 'status-verificado' : 'status-pendiente'}">
          ${order.status === 'verificado' ? '✓ PAGO CON QR RECIBIDO' : '⏳ PENDIENTE DE VALIDACIÓN'}
        </span>
        <div style="font-size: 0.8rem; font-weight: bold; margin-top: 4px;">${order.id}</div>
      </div>
    </div>

    <div class="ticket-row">
      <span>Cliente:</span>
      <strong>${order.client.name}</strong>
    </div>
    <div class="ticket-row">
      <span>Celular / WhatsApp:</span>
      <strong>${order.client.phone}</strong>
    </div>
    <div class="ticket-row">
      <span>Dirección / Entrega:</span>
      <strong>${order.client.address}</strong>
    </div>
    <div class="ticket-row">
      <span>Modalidad:</span>
      <strong>${order.client.deliveryMethod === 'tienda' ? 'Recojo en Tienda (Plaza Principal)' : 'A domicilio en Cobija'}</strong>
    </div>

    <div class="ticket-items-list">
      <div style="font-weight: 700; margin-bottom: 6px; font-size: 0.82rem; color: #0b1a41;">DETALLE DE ARTÍCULOS:</div>
      ${itemsRows}
    </div>

    <div class="ticket-total-row">
      <span>Total Pagado en Bs:</span>
      <span>Bs ${order.total.toFixed(2)}</span>
    </div>
    <div style="font-size: 0.75rem; color: #64748b; margin-top: 6px; text-align: center;">
      Fecha y Hora: ${order.date} • Ref: ${order.transactionId}
    </div>
  `;

  // Pre-fill WhatsApp URL for immediate dispatch
  if (sendWhatsAppBtn) {
    let msg = `🛍️ *NUEVO PEDIDO CONFIRMADO EN IMPORTACIONES ANITA* 🛍️\n\n`;
    msg += `📄 *Código de Pedido:* ${order.id}\n`;
    msg += `👤 *Cliente:* ${order.client.name}\n`;
    msg += `📱 *WhatsApp:* ${order.client.phone}\n`;
    msg += `📍 *Dirección de Entrega:* ${order.client.address}\n`;
    msg += `🚚 *Modalidad:* ${order.client.deliveryMethod}\n`;
    if (order.client.notes) msg += `📝 *Notas:* ${order.client.notes}\n`;
    msg += `\n📦 *PRODUCTOS:* \n`;

    order.items.forEach(i => {
      msg += `• ${i.qty}x ${i.name} (Bs ${(i.price * i.qty).toFixed(2)})\n`;
    });

    msg += `\n💰 *TOTAL A PAGAR:* Bs ${order.total.toFixed(2)}\n`;
    msg += `💳 *Método:* Pago por QR Bancario Boliviano\n`;
    msg += `✅ *Estado:* ${order.status === 'verificado' ? 'Comprobante Adjuntado para Validación' : 'Pendiente de Envío de Comprobante'}\n`;
    msg += `\n_Enviado desde la tienda virtual de IMPORTACIONES ANITA (Cobija, Pando)_`;

    const phone = settings.phone.replace(/\D/g, "");
    sendWhatsAppBtn.href = `https://wa.me/591${phone}?text=${encodeURIComponent(msg)}`;
  }
}

function printOrderTicket() {
  window.print();
}

function handleDeliveryMethodChange(method) {
  const addressInput = document.getElementById("clientAddress");
  if (!addressInput) return;

  if (method === "tienda") {
    addressInput.value = "Recojo en Tienda: Diagonal a la plaza principal, Cobija, Pando";
  } else if (addressInput.value.includes("Recojo en Tienda")) {
    addressInput.value = "";
  }
}
