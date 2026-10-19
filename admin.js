/**
 * IMPORTACIONES ANITA - Panel Administrativo
 * Permite administrar productos, precios, fotografías, existencias,
 * categorías, flyers publicitarios, pedidos y datos comerciales sin editar código.
 * Desarrollado por: Proari Systems
 */

// ==========================================================================
// 1. ADMIN AUTHENTICATION & SESSION
// ==========================================================================

let adminSessionActive = false;

function openAdminLoginModal() {
  const modal = document.getElementById("adminLoginModal");
  const userField = document.getElementById("adminUsername");
  const passField = document.getElementById("adminPassword");
  const errorMsg = document.getElementById("loginErrorMsg");

  if (errorMsg) errorMsg.style.display = "none";
  if (userField) userField.value = "";
  if (passField) passField.value = "";

  if (modal) modal.classList.add("active");
  if (userField) userField.focus();
}

function closeAdminLoginModal() {
  const modal = document.getElementById("adminLoginModal");
  if (modal) modal.classList.remove("active");
}

function handleAdminLogin(event) {
  event.preventDefault();

  const user = document.getElementById("adminUsername").value.trim();
  const pass = document.getElementById("adminPassword").value.trim();
  const errorMsg = document.getElementById("loginErrorMsg");

  const settings = getStoreData().settings;
  const validUser = settings.adminUser || "admin";
  const validPass = settings.adminPass || "anita123";

  if (user === validUser && pass === validPass) {
    adminSessionActive = true;
    closeAdminLoginModal();
    openAdminDashboard();
  } else {
    if (errorMsg) {
      errorMsg.style.display = "block";
      errorMsg.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Usuario o contraseña incorrectos.`;
    }
  }
}

function togglePasswordVisibility(fieldId, btn) {
  const input = document.getElementById(fieldId);
  if (!input) return;

  if (input.type === "password") {
    input.type = "text";
    btn.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  } else {
    input.type = "password";
    btn.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  }
}

function handleAdminLogout() {
  adminSessionActive = false;
  closeAdminDashboard();
  alert("Has cerrado sesión del panel administrativo de IMPORTACIONES ANITA.");
}

// Bind admin lock button
document.addEventListener("DOMContentLoaded", () => {
  const adminBtn = document.getElementById("openAdminLoginBtn");
  if (adminBtn) {
    adminBtn.addEventListener("click", () => {
      if (adminSessionActive) {
        openAdminDashboard();
      } else {
        openAdminLoginModal();
      }
    });
  }
});

// ==========================================================================
// 2. ADMIN DASHBOARD NAVIGATION & TABS
// ==========================================================================

function openAdminDashboard() {
  const dashboard = document.getElementById("adminDashboardModal");
  if (!dashboard) return;

  dashboard.style.display = "grid";
  document.body.style.overflow = "hidden"; // Prevent background scroll

  // Default to Tab 1
  switchAdminTab("tab-resumen");
  refreshAdminMetrics();
  refreshAdminProductsTable();
  refreshAdminCategoriesTable();
  refreshAdminFlyersGrid();
  refreshAdminOrdersTable();
  loadCommercialSettingsForm();
}

function closeAdminDashboard() {
  const dashboard = document.getElementById("adminDashboardModal");
  if (!dashboard) return;

  dashboard.style.display = "none";
  document.body.style.overflow = "auto";

  // Re-sync storefront UI
  syncCommercialInfoUI();
  renderCategoryNav();
  renderSidebarCategories();
  renderFlyerCarousel();
  renderProductsCatalog();
}

function switchAdminTab(tabId) {
  const sections = document.querySelectorAll(".admin-tab-section");
  const navItems = document.querySelectorAll(".admin-nav-item");
  const titleElem = document.getElementById("adminCurrentTabTitle");

  sections.forEach(s => s.classList.remove("active"));
  navItems.forEach(n => n.classList.remove("active"));

  const targetSection = document.getElementById(tabId);
  const targetNav = document.querySelector(`.admin-nav-item[data-tab="${tabId}"]`);

  if (targetSection) targetSection.classList.add("active");
  if (targetNav) targetNav.classList.add("active");

  const titles = {
    "tab-resumen": "Resumen General",
    "tab-productos": "Inventario de Productos & Precios",
    "tab-categorias": "Gestión de Departamentos y Categorías",
    "tab-flyers": "Flyers del Sidebar Publicitario",
    "tab-pedidos": "Pedidos de Clientes y Pagos con QR",
    "tab-ajustes": "Datos Comerciales y Ajustes de Tienda"
  };

  if (titleElem) titleElem.textContent = titles[tabId] || "Panel Administrativo";
}

// ==========================================================================
// 3. TAB 1: METRICS & RESUMEN
// ==========================================================================

function refreshAdminMetrics() {
  const data = getStoreData();

  const totalProducts = data.products.length;
  const totalOrders = data.orders.length;
  const totalSales = data.orders
    .filter(o => o.status !== "cancelado")
    .reduce((sum, o) => sum + (o.total || 0), 0);
  const lowStock = data.products.filter(p => p.stock < 5).length;
  const pendingOrders = data.orders.filter(o => o.status === "pendiente").length;

  const mProd = document.getElementById("metricTotalProducts");
  const mOrders = document.getElementById("metricTotalOrders");
  const mSales = document.getElementById("metricTotalSales");
  const mLowStock = document.getElementById("metricLowStock");
  const ordersBadge = document.getElementById("adminPendingOrdersBadge");

  if (mProd) mProd.textContent = totalProducts;
  if (mOrders) mOrders.textContent = totalOrders;
  if (mSales) mSales.textContent = `${totalSales.toFixed(2)} Bs`;
  if (mLowStock) mLowStock.textContent = lowStock;
  if (ordersBadge) {
    ordersBadge.textContent = pendingOrders;
    ordersBadge.style.display = pendingOrders > 0 ? "inline-block" : "none";
  }

  // Populate recent orders in dashboard
  const recentTableBody = document.querySelector("#dashboardRecentOrdersTable tbody");
  if (recentTableBody) {
    const recents = data.orders.slice(0, 5);
    if (recents.length === 0) {
      recentTableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: #64748b; padding: 20px;">No hay pedidos registrados aún.</td></tr>`;
    } else {
      let html = "";
      recents.forEach(o => {
        html += `
          <tr>
            <td><strong>${o.id}</strong></td>
            <td>${o.client.name}</td>
            <td><strong>Bs ${(o.total || 0).toFixed(2)}</strong></td>
            <td>
              <span class="status-badge ${o.status === 'verificado' ? 'status-verificado' : (o.status === 'entregado' ? 'status-entregado' : 'status-pendiente')}">
                ${o.status.toUpperCase()}
              </span>
            </td>
            <td>
              <button class="btn btn-sm btn-outline" onclick="switchAdminTab('tab-pedidos')">Ver Detalle</button>
            </td>
          </tr>
        `;
      });
      recentTableBody.innerHTML = html;
    }
  }

  // Quick store status
  const dAddress = document.getElementById("dashAddress");
  const dPhone = document.getElementById("dashPhone");
  if (dAddress) dAddress.textContent = data.settings.address;
  if (dPhone) dPhone.textContent = data.settings.phone;
}

// ==========================================================================
// 4. TAB 2: GESTIÓN DE PRODUCTOS & PRECIOS (CRUD)
// ==========================================================================

let currentEditingProductImage = "";

function refreshAdminProductsTable() {
  const tbody = document.getElementById("adminProductsTableBody");
  const catFilter = document.getElementById("adminCategoryFilter");
  if (!tbody) return;

  const data = getStoreData();
  const products = data.products;

  // Populate category filter options
  if (catFilter) {
    const currentVal = catFilter.value;
    let optHtml = `<option value="all">Todas las categorías</option>`;
    data.categories.forEach(c => {
      optHtml += `<option value="${c.id}" ${currentVal === c.id ? 'selected' : ''}>${c.name}</option>`;
    });
    catFilter.innerHTML = optHtml;
  }

  renderAdminProductRows(products);
}

function filterAdminProducts() {
  const searchInput = document.getElementById("adminProductSearch");
  const catSelect = document.getElementById("adminCategoryFilter");

  const q = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const cat = catSelect ? catSelect.value : "all";

  const data = getStoreData();
  let list = data.products;

  if (cat !== "all") {
    list = list.filter(p => p.category === cat);
  }

  if (q !== "") {
    list = list.filter(p => p.name.toLowerCase().includes(q) || (p.description && p.description.toLowerCase().includes(q)));
  }

  renderAdminProductRows(list);
}

function renderAdminProductRows(products) {
  const tbody = document.getElementById("adminProductsTableBody");
  if (!tbody) return;

  const data = getStoreData();

  if (products.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #64748b; padding: 30px;">No se encontraron productos.</td></tr>`;
    return;
  }

  let html = "";
  products.forEach(p => {
    const cat = data.categories.find(c => c.id === p.category);
    const catName = cat ? cat.name : p.category;

    let badgesHtml = "";
    if (p.badges && p.badges.includes("oferta")) badgesHtml += `<span class="product-badge badge-oferta" style="font-size:0.65rem;">Oferta</span> `;
    if (p.badges && p.badges.includes("novedad")) badgesHtml += `<span class="product-badge badge-novedad" style="font-size:0.65rem;">Novedad</span> `;
    if (p.badges && p.badges.includes("destacado")) badgesHtml += `<span class="product-badge badge-destacado" style="font-size:0.65rem;">Destacado</span> `;

    html += `
      <tr>
        <td>
          <img src="${p.image}" class="table-thumb" alt="${p.name}" onerror="this.src='logo importaciones Anita.jpeg'">
        </td>
        <td>
          <strong>${p.name}</strong>
          <div style="font-size: 0.75rem; color: #64748b; max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            ${p.description || ''}
          </div>
        </td>
        <td><span class="bank-pill" style="color:#0b1a41; background:#e2e8f0;">${catName}</span></td>
        <td>
          <strong style="color: var(--brand-orange); font-size: 1rem;">Bs ${Number(p.price).toFixed(2)}</strong>
          ${p.oldPrice ? `<br><small style="text-decoration: line-through; color: #94a3b8;">Bs ${Number(p.oldPrice).toFixed(2)}</small>` : ''}
        </td>
        <td>
          <span class="stock-indicator ${p.stock < 5 ? 'low' : ''}">
            ${p.stock} unid.
          </span>
        </td>
        <td>${badgesHtml || '<span style="color:#94a3b8; font-size:0.75rem;">Normal</span>'}</td>
        <td>
          <div class="action-buttons">
            <button class="btn-table-action" onclick="openProductFormModal('${p.id}')" title="Editar producto">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn-table-action delete" onclick="handleDeleteProduct('${p.id}')" title="Eliminar producto">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

function openProductFormModal(productId = null) {
  const modal = document.getElementById("productFormModal");
  const title = document.getElementById("productFormModalTitle");
  const catSelect = document.getElementById("prodEditCategory");

  const data = getStoreData();

  // Populate categories
  let catOptions = "";
  data.categories.forEach(c => {
    catOptions += `<option value="${c.id}">${c.name}</option>`;
  });
  if (catSelect) catSelect.innerHTML = catOptions;

  const idField = document.getElementById("prodEditId");
  const nameField = document.getElementById("prodEditName");
  const priceField = document.getElementById("prodEditPrice");
  const oldPriceField = document.getElementById("prodEditOldPrice");
  const stockField = document.getElementById("prodEditStock");
  const imageField = document.getElementById("prodEditImage");
  const descField = document.getElementById("prodEditDescription");
  const previewBox = document.getElementById("prodEditPreviewBox");
  const previewImg = document.getElementById("prodEditPreviewImg");

  const chkOferta = document.getElementById("prodEditBadgeOferta");
  const chkNovedad = document.getElementById("prodEditBadgeNovedad");
  const chkDestacado = document.getElementById("prodEditBadgeDestacado");

  if (productId) {
    const prod = data.products.find(p => p.id === productId);
    if (!prod) return;

    if (title) title.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Editar Producto`;
    if (idField) idField.value = prod.id;
    if (nameField) nameField.value = prod.name;
    if (catSelect) catSelect.value = prod.category;
    if (priceField) priceField.value = prod.price;
    if (oldPriceField) oldPriceField.value = prod.oldPrice || "";
    if (stockField) stockField.value = prod.stock;
    if (imageField) imageField.value = prod.image;
    if (descField) descField.value = prod.description || "";

    currentEditingProductImage = prod.image;
    if (previewBox && previewImg) {
      previewImg.src = prod.image;
      previewBox.style.display = "block";
    }

    if (chkOferta) chkOferta.checked = prod.badges && prod.badges.includes("oferta");
    if (chkNovedad) chkNovedad.checked = prod.badges && prod.badges.includes("novedad");
    if (chkDestacado) chkDestacado.checked = prod.badges && prod.badges.includes("destacado");
  } else {
    if (title) title.innerHTML = `<i class="fa-solid fa-box-open"></i> Nuevo Producto`;
    if (idField) idField.value = "";
    if (nameField) nameField.value = "";
    if (priceField) priceField.value = "";
    if (oldPriceField) oldPriceField.value = "";
    if (stockField) stockField.value = "10";
    if (imageField) imageField.value = "logo importaciones Anita.jpeg";
    if (descField) descField.value = "";

    currentEditingProductImage = "logo importaciones Anita.jpeg";
    if (previewBox && previewImg) {
      previewImg.src = "logo importaciones Anita.jpeg";
      previewBox.style.display = "block";
    }

    if (chkOferta) chkOferta.checked = false;
    if (chkNovedad) chkNovedad.checked = true;
    if (chkDestacado) chkDestacado.checked = false;
  }

  if (modal) modal.classList.add("active");
}

function closeProductFormModal() {
  const modal = document.getElementById("productFormModal");
  if (modal) modal.classList.remove("active");
}

function handleProductImageFile(input) {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    currentEditingProductImage = e.target.result;
    const imageField = document.getElementById("prodEditImage");
    const previewBox = document.getElementById("prodEditPreviewBox");
    const previewImg = document.getElementById("prodEditPreviewImg");

    if (imageField) imageField.value = file.name;
    if (previewImg) previewImg.src = e.target.result;
    if (previewBox) previewBox.style.display = "block";
  };
  reader.readAsDataURL(file);
}

function handleSaveProduct(event) {
  event.preventDefault();

  const id = document.getElementById("prodEditId").value;
  const name = document.getElementById("prodEditName").value.trim();
  const category = document.getElementById("prodEditCategory").value;
  const price = parseFloat(document.getElementById("prodEditPrice").value);
  const oldPriceVal = document.getElementById("prodEditOldPrice").value;
  const oldPrice = oldPriceVal ? parseFloat(oldPriceVal) : null;
  const stock = parseInt(document.getElementById("prodEditStock").value) || 0;
  const imageInputVal = document.getElementById("prodEditImage").value.trim();
  const description = document.getElementById("prodEditDescription").value.trim();

  const badges = [];
  if (document.getElementById("prodEditBadgeOferta").checked) badges.push("oferta");
  if (document.getElementById("prodEditBadgeNovedad").checked) badges.push("novedad");
  if (document.getElementById("prodEditBadgeDestacado").checked) badges.push("destacado");

  // Determine final image string (either DataURL uploaded or text string)
  const image = currentEditingProductImage || imageInputVal || "logo importaciones Anita.jpeg";

  const data = getStoreData();

  if (id) {
    // Update existing
    const idx = data.products.findIndex(p => p.id === id);
    if (idx !== -1) {
      data.products[idx] = {
        ...data.products[idx],
        name,
        category,
        price,
        oldPrice,
        stock,
        image,
        description,
        badges
      };
    }
  } else {
    // Create new
    const newProduct = {
      id: `prod-${Date.now()}`,
      name,
      category,
      price,
      oldPrice,
      stock,
      image,
      description,
      badges,
      rating: 5.0,
      reviews: 1
    };
    data.products.unshift(newProduct);
  }

  saveStoreData("products", data.products);
  closeProductFormModal();
  refreshAdminProductsTable();
  refreshAdminMetrics();
  renderProductsCatalog();
  alert("¡Producto guardado exitosamente!");
}

function handleDeleteProduct(productId) {
  if (!confirm("¿Estás seguro de que deseas eliminar este producto de la tienda?")) return;

  const data = getStoreData();
  data.products = data.products.filter(p => p.id !== productId);
  saveStoreData("products", data.products);

  refreshAdminProductsTable();
  refreshAdminMetrics();
  renderProductsCatalog();
}

// ==========================================================================
// 5. TAB 3: GESTIÓN DE CATEGORÍAS (CRUD)
// ==========================================================================

function refreshAdminCategoriesTable() {
  const tbody = document.getElementById("adminCategoriesTableBody");
  if (!tbody) return;

  const data = getStoreData();
  const categories = data.categories;
  const products = data.products;

  let html = "";
  categories.forEach(cat => {
    const count = products.filter(p => p.category === cat.id).length;
    html += `
      <tr>
        <td>
          <div style="width: 36px; height: 36px; border-radius: 8px; background: var(--brand-gold-light); color: var(--brand-orange); display: flex; align-items: center; justify-content: center; font-size: 1.1rem;">
            <i class="${cat.icon || 'fa-solid fa-tag'}"></i>
          </div>
        </td>
        <td><strong>${cat.name}</strong></td>
        <td><code>${cat.id}</code></td>
        <td><strong>${count} productos</strong></td>
        <td>
          <div class="action-buttons">
            <button class="btn-table-action" onclick="openCategoryFormModal('${cat.id}')" title="Editar categoría">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn-table-action delete" onclick="handleDeleteCategory('${cat.id}')" title="Eliminar categoría">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

function openCategoryFormModal(categoryId = null) {
  const modal = document.getElementById("categoryFormModal");
  const title = document.getElementById("categoryFormModalTitle");
  const idField = document.getElementById("catEditId");
  const nameField = document.getElementById("catEditName");
  const iconField = document.getElementById("catEditIcon");

  const data = getStoreData();

  if (categoryId) {
    const cat = data.categories.find(c => c.id === categoryId);
    if (!cat) return;
    if (title) title.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Editar Categoría`;
    if (idField) idField.value = cat.id;
    if (nameField) nameField.value = cat.name;
    if (iconField) iconField.value = cat.icon || "fa-solid fa-tag";
  } else {
    if (title) title.innerHTML = `<i class="fa-solid fa-layer-group"></i> Nueva Categoría`;
    if (idField) idField.value = "";
    if (nameField) nameField.value = "";
    if (iconField) iconField.value = "fa-solid fa-tag";
  }

  if (modal) modal.classList.add("active");
}

function closeCategoryFormModal() {
  const modal = document.getElementById("categoryFormModal");
  if (modal) modal.classList.remove("active");
}

function handleSaveCategory(event) {
  event.preventDefault();

  const id = document.getElementById("catEditId").value;
  const name = document.getElementById("catEditName").value.trim();
  const icon = document.getElementById("catEditIcon").value.trim();

  const data = getStoreData();

  if (id) {
    const idx = data.categories.findIndex(c => c.id === id);
    if (idx !== -1) {
      data.categories[idx] = { ...data.categories[idx], name, icon };
    }
  } else {
    const slug = name.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
    data.categories.push({
      id: slug || `cat-${Date.now()}`,
      name,
      icon: icon || "fa-solid fa-tag"
    });
  }

  saveStoreData("categories", data.categories);
  closeCategoryFormModal();
  refreshAdminCategoriesTable();
  renderCategoryNav();
  renderSidebarCategories();
  alert("¡Categoría guardada exitosamente!");
}

function handleDeleteCategory(categoryId) {
  if (!confirm(`¿Eliminar la categoría "${categoryId}"? Los productos asignados conservarán su nombre.`)) return;

  const data = getStoreData();
  data.categories = data.categories.filter(c => c.id !== categoryId);
  saveStoreData("categories", data.categories);

  refreshAdminCategoriesTable();
  renderCategoryNav();
  renderSidebarCategories();
}

// ==========================================================================
// 6. TAB 4: GESTIÓN DE FLYERS PUBLICITARIOS (CRUD)
// ==========================================================================

let currentEditingFlyerImage = "";

function refreshAdminFlyersGrid() {
  const grid = document.getElementById("adminFlyersGrid");
  if (!grid) return;

  const data = getStoreData();
  const flyers = data.flyers;

  let html = "";
  flyers.forEach(flyer => {
    html += `
      <div class="flyer-admin-card">
        <div class="flyer-admin-thumb">
          <img src="${flyer.image}" alt="${flyer.title}" onerror="this.src='logo importaciones Anita.jpeg'">
          <span class="flyer-badge-tag">${flyer.tag || 'OFERTA'}</span>
        </div>
        <div class="flyer-admin-body">
          <h4>${flyer.title}</h4>
          <p>${flyer.subtitle}</p>
          <div style="font-size: 0.75rem; color: #64748b; margin-bottom: 12px;">
            Categoría: <strong>${flyer.category || 'Todas'}</strong> • Estado: <strong style="color: ${flyer.active !== false ? 'var(--color-success)' : 'var(--color-danger)'};">${flyer.active !== false ? 'Activo' : 'Inactivo'}</strong>
          </div>
          <div class="action-buttons">
            <button class="btn btn-sm btn-outline" onclick="openFlyerFormModal('${flyer.id}')">
              <i class="fa-solid fa-pen"></i> Editar
            </button>
            <button class="btn btn-sm btn-outline-danger" onclick="handleDeleteFlyer('${flyer.id}')">
              <i class="fa-solid fa-trash"></i> Eliminar
            </button>
          </div>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;
}

function openFlyerFormModal(flyerId = null) {
  const modal = document.getElementById("flyerFormModal");
  const title = document.getElementById("flyerFormModalTitle");
  const catSelect = document.getElementById("flyerEditCategory");

  const data = getStoreData();

  // Populate category options
  let catOpts = `<option value="">Todas las categorías</option>`;
  data.categories.forEach(c => {
    catOpts += `<option value="${c.id}">${c.name}</option>`;
  });
  if (catSelect) catSelect.innerHTML = catOpts;

  const idField = document.getElementById("flyerEditId");
  const titleField = document.getElementById("flyerEditTitle");
  const subtitleField = document.getElementById("flyerEditSubtitle");
  const tagField = document.getElementById("flyerEditTag");
  const imageField = document.getElementById("flyerEditImage");
  const previewBox = document.getElementById("flyerEditPreviewBox");
  const previewImg = document.getElementById("flyerEditPreviewImg");

  if (flyerId) {
    const flyer = data.flyers.find(f => f.id === flyerId);
    if (!flyer) return;

    if (title) title.innerHTML = `<i class="fa-solid fa-pen"></i> Editar Flyer Publicitario`;
    if (idField) idField.value = flyer.id;
    if (titleField) titleField.value = flyer.title;
    if (subtitleField) subtitleField.value = flyer.subtitle;
    if (tagField) tagField.value = flyer.tag || "PROMOCIÓN";
    if (imageField) imageField.value = flyer.image;
    if (catSelect) catSelect.value = flyer.category || "";

    currentEditingFlyerImage = flyer.image;
    if (previewBox && previewImg) {
      previewImg.src = flyer.image;
      previewBox.style.display = "block";
    }
  } else {
    if (title) title.innerHTML = `<i class="fa-solid fa-image"></i> Nuevo Flyer Publicitario`;
    if (idField) idField.value = "";
    if (titleField) titleField.value = "";
    if (subtitleField) subtitleField.value = "";
    if (tagField) tagField.value = "OFERTA ESPECIAL";
    if (imageField) imageField.value = "juguetes.jpeg";

    currentEditingFlyerImage = "juguetes.jpeg";
    if (previewBox && previewImg) {
      previewImg.src = "juguetes.jpeg";
      previewBox.style.display = "block";
    }
  }

  if (modal) modal.classList.add("active");
}

function closeFlyerFormModal() {
  const modal = document.getElementById("flyerFormModal");
  if (modal) modal.classList.remove("active");
}

function handleFlyerImageFile(input) {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    currentEditingFlyerImage = e.target.result;
    const imageField = document.getElementById("flyerEditImage");
    const previewBox = document.getElementById("flyerEditPreviewBox");
    const previewImg = document.getElementById("flyerEditPreviewImg");

    if (imageField) imageField.value = file.name;
    if (previewImg) previewImg.src = e.target.result;
    if (previewBox) previewBox.style.display = "block";
  };
  reader.readAsDataURL(file);
}

function handleSaveFlyer(event) {
  event.preventDefault();

  const id = document.getElementById("flyerEditId").value;
  const title = document.getElementById("flyerEditTitle").value.trim();
  const subtitle = document.getElementById("flyerEditSubtitle").value.trim();
  const tag = document.getElementById("flyerEditTag").value.trim();
  const imageInputVal = document.getElementById("flyerEditImage").value.trim();
  const category = document.getElementById("flyerEditCategory").value;

  const image = currentEditingFlyerImage || imageInputVal || "juguetes.jpeg";
  const data = getStoreData();

  if (id) {
    const idx = data.flyers.findIndex(f => f.id === id);
    if (idx !== -1) {
      data.flyers[idx] = {
        ...data.flyers[idx],
        title,
        subtitle,
        tag,
        image,
        category,
        active: true
      };
    }
  } else {
    data.flyers.push({
      id: `flyer-${Date.now()}`,
      title,
      subtitle,
      tag,
      image,
      category,
      active: true
    });
  }

  saveStoreData("flyers", data.flyers);
  closeFlyerFormModal();
  refreshAdminFlyersGrid();
  renderFlyerCarousel();
  alert("¡Flyer publicitario guardado con éxito!");
}

function handleDeleteFlyer(flyerId) {
  if (!confirm("¿Deseas eliminar este flyer publicitario del carrusel lateral?")) return;

  const data = getStoreData();
  data.flyers = data.flyers.filter(f => f.id !== flyerId);
  saveStoreData("flyers", data.flyers);

  refreshAdminFlyersGrid();
  renderFlyerCarousel();
}

// ==========================================================================
// 7. TAB 5: GESTIÓN DE PEDIDOS Y VALIDACIÓN DE PAGOS QR
// ==========================================================================

function refreshAdminOrdersTable(filterStatus = "all") {
  const tbody = document.getElementById("adminOrdersTableBody");
  if (!tbody) return;

  const data = getStoreData();
  let orders = [...data.orders];

  if (filterStatus !== "all") {
    orders = orders.filter(o => o.status === filterStatus);
  }

  if (orders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: #64748b; padding: 30px;">No hay pedidos en esta categoría.</td></tr>`;
    return;
  }

  let html = "";
  orders.forEach(order => {
    const voucherBtn = order.voucher ? `
      <button class="btn btn-sm btn-outline" onclick="openVoucherModal('${order.id}')" title="Ver foto comprobante">
        <i class="fa-solid fa-receipt text-green"></i> Ver Recibo
      </button>
    ` : `<span style="font-size:0.75rem; color:#94a3b8;">Sin comprobante</span>`;

    html += `
      <tr>
        <td><strong>${order.id}</strong></td>
        <td><small>${order.date}</small></td>
        <td>
          <strong>${order.client.name}</strong><br>
          <small style="color: #64748b;">${order.client.address}</small>
        </td>
        <td>
          <a href="https://wa.me/591${order.client.phone.replace(/\D/g, '')}" target="_blank" class="announcement-link" style="color:#0b1a41;">
            <i class="fa-brands fa-whatsapp text-green"></i> ${order.client.phone}
          </a>
        </td>
        <td><strong style="color: var(--brand-orange); font-size: 1.05rem;">Bs ${(order.total || 0).toFixed(2)}</strong></td>
        <td>${voucherBtn}</td>
        <td>
          <select class="form-group" style="padding: 4px 8px; font-size: 0.8rem; border-radius: 4px;" onchange="updateOrderStatus('${order.id}', this.value)">
            <option value="pendiente" ${order.status === 'pendiente' ? 'selected' : ''}>⏳ Pendiente</option>
            <option value="verificado" ${order.status === 'verificado' ? 'selected' : ''}>✓ Pago Verificado</option>
            <option value="entregado" ${order.status === 'entregado' ? 'selected' : ''}>📦 Entregado</option>
            <option value="cancelado" ${order.status === 'cancelado' ? 'selected' : ''}>❌ Cancelado</option>
          </select>
        </td>
        <td>
          <button class="btn-table-action delete" onclick="handleDeleteOrder('${order.id}')" title="Eliminar pedido">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

function filterAdminOrders(status, btn) {
  const btns = btn.parentElement.querySelectorAll(".btn");
  btns.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  refreshAdminOrdersTable(status);
}

function updateOrderStatus(orderId, newStatus) {
  const data = getStoreData();
  const order = data.orders.find(o => o.id === orderId);
  if (!order) return;

  order.status = newStatus;
  saveStoreData("orders", data.orders);
  refreshAdminMetrics();
}

function handleDeleteOrder(orderId) {
  if (!confirm(`¿Eliminar el registro del pedido ${orderId}?`)) return;

  const data = getStoreData();
  data.orders = data.orders.filter(o => o.id !== orderId);
  saveStoreData("orders", data.orders);

  refreshAdminOrdersTable();
  refreshAdminMetrics();
}

function openVoucherModal(orderId) {
  const data = getStoreData();
  const order = data.orders.find(o => o.id === orderId);
  if (!order || !order.voucher) return;

  const modal = document.getElementById("viewVoucherModal");
  const body = document.getElementById("voucherModalBody");
  const info = document.getElementById("voucherModalOrderInfo");

  if (info) info.textContent = `Pedido: ${order.id} • Cliente: ${order.client.name} • Total: Bs ${order.total.toFixed(2)}`;
  if (body) {
    body.innerHTML = `
      <div style="text-align: center;">
        <img src="${order.voucher}" alt="Comprobante Bancario" style="max-width: 100%; max-height: 500px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
        <p style="margin-top: 14px; font-size: 0.88rem; color: #64748b;">
          Ref: <strong>${order.transactionId || 'Validación digital'}</strong> • Fecha: ${order.date}
        </p>
      </div>
    `;
  }

  if (modal) modal.classList.add("active");
}

function closeVoucherModal() {
  const modal = document.getElementById("viewVoucherModal");
  if (modal) modal.classList.remove("active");
}

// ==========================================================================
// 8. TAB 6: DATOS COMERCIALES & CONFIGURACIÓN
// ==========================================================================

function loadCommercialSettingsForm() {
  const settings = getStoreData().settings;

  const nameField = document.getElementById("settingStoreName");
  const addressField = document.getElementById("settingAddress");
  const phoneField = document.getElementById("settingPhone");
  const currencyField = document.getElementById("settingCurrency");
  const thresholdField = document.getElementById("settingFreeShippingThreshold");
  const qrImageField = document.getElementById("settingQrImage");
  const bankInfoField = document.getElementById("settingBankInfo");

  if (nameField) nameField.value = settings.storeName || "IMPORTACIONES ANITA";
  if (addressField) addressField.value = settings.address || "Diagonal a la plaza principal, Cobija, Pando, Bolivia.";
  if (phoneField) phoneField.value = settings.phone || "67664328";
  if (currencyField) currencyField.value = settings.currency || "Bolivianos (Bs)";
  if (thresholdField) thresholdField.value = settings.freeShippingThreshold || 120;
  if (qrImageField) qrImageField.value = settings.qrImage || "";
  if (bankInfoField) bankInfoField.value = settings.bankInfo || "";
}

function handleQrImageUpload(input) {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const qrImageField = document.getElementById("settingQrImage");
    if (qrImageField) qrImageField.value = e.target.result;
    alert("¡Imagen de QR cargada! Recuerda hacer clic en 'Guardar Cambios Comerciales'.");
  };
  reader.readAsDataURL(file);
}

function handleSaveCommercialSettings(event) {
  event.preventDefault();

  const storeName = document.getElementById("settingStoreName").value.trim();
  const address = document.getElementById("settingAddress").value.trim();
  const phone = document.getElementById("settingPhone").value.trim();
  const currency = document.getElementById("settingCurrency").value.trim();
  const freeShippingThreshold = parseFloat(document.getElementById("settingFreeShippingThreshold").value) || 120;
  const adminPass = document.getElementById("settingAdminPassword").value.trim();
  const qrImage = document.getElementById("settingQrImage").value.trim();
  const bankInfo = document.getElementById("settingBankInfo").value.trim();

  const data = getStoreData();
  data.settings = {
    ...data.settings,
    storeName,
    address,
    phone,
    currency,
    freeShippingThreshold,
    qrImage,
    bankInfo
  };

  if (adminPass !== "") {
    data.settings.adminPass = adminPass;
  }

  saveStoreData("settings", data.settings);
  syncCommercialInfoUI(data.settings);
  refreshAdminMetrics();

  alert("¡Datos comerciales actualizados con éxito! Toda la tienda refleja ahora los nuevos cambios sin editar código.");
}

// ==========================================================================
// 9. BACKUP / EXPORT / IMPORT / RESET
// ==========================================================================

function exportStoreData() {
  const data = getStoreData();
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
  const dlAnchor = document.createElement("a");
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `importaciones_anita_respaldo_${new Date().toISOString().slice(0, 10)}.json`);
  dlAnchor.click();
}

function importStoreData(input) {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported.products) saveStoreData("products", imported.products);
      if (imported.categories) saveStoreData("categories", imported.categories);
      if (imported.flyers) saveStoreData("flyers", imported.flyers);
      if (imported.orders) saveStoreData("orders", imported.orders);
      if (imported.settings) saveStoreData("settings", imported.settings);

      alert("¡Base de datos restaurada correctamente!");
      openAdminDashboard();
    } catch (err) {
      alert("Error al leer el archivo JSON: formato inválido.");
    }
  };
  reader.readAsText(file);
}

function resetToDefaultData() {
  if (!confirm("¿Deseas restablecer todo el catálogo original de IMPORTACIONES ANITA? Se restaurarán los productos, categorías y flyers predeterminados.")) return;

  saveStoreData("products", DEFAULT_PRODUCTS);
  saveStoreData("categories", DEFAULT_CATEGORIES);
  saveStoreData("flyers", DEFAULT_FLYERS);
  saveStoreData("settings", DEFAULT_SETTINGS);

  openAdminDashboard();
  alert("Catálogo predeterminado restablecido.");
}
