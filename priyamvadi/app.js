(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);
  const img = (name) => `images/${name}.jpg`;
  const inr = (n) => "₹" + n.toLocaleString("en-IN");

  function waLink(message) {
    const text = encodeURIComponent(message);
    return SHOP.whatsapp ? `https://wa.me/${SHOP.whatsapp}?text=${text}` : `https://wa.me/?text=${text}`;
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v);
    }
    for (const c of children || []) node.append(c);
    return node;
  }

  // ---------- Stats ----------
  const colourCount = PRODUCTS.reduce((n, p) => n + p.variants.length, 0);
  const minPrice = Math.min(...PRODUCTS.map((p) => p.price));
  $("#stats").append(
    ...[
      [PRODUCTS.length, "Designs"],
      [colourCount + "+", "Colourways"],
      [inr(minPrice), "Starting at"],
    ].map(([n, l]) => el("li", {}, [el("strong", { text: String(n) }), el("span", { text: l })]))
  );

  // ---------- Collection ----------
  let activeFabric = "All";
  let sortMode = "featured";

  function renderChips() {
    const chips = $("#chips");
    chips.replaceChildren(
      ...["All", ...FABRICS.filter((f) => PRODUCTS.some((p) => p.fabric === f))].map((f) =>
        el("button", {
          class: "chip" + (f === activeFabric ? " is-active" : ""),
          type: "button",
          "aria-pressed": String(f === activeFabric),
          text: f,
          onclick: () => {
            activeFabric = f;
            renderChips();
            renderGrid();
          },
        })
      )
    );
  }

  function swatchRow(product, state, onPick, large) {
    return el(
      "div",
      { class: "swatches" + (large ? " swatches-lg" : "") },
      product.variants.map((v, i) =>
        el("button", {
          class: "swatch" + (i === state.v ? " is-active" : ""),
          type: "button",
          style: `--c:${v.hex}`,
          title: v.color,
          "aria-label": v.color,
          onclick: (e) => {
            e.stopPropagation();
            onPick(i);
          },
        })
      )
    );
  }

  function card(product) {
    const state = { v: 0 };
    const picture = el("img", { src: img(product.variants[0].images[0]), alt: "", loading: "lazy" });
    const colourName = el("span", { class: "card-color" });
    const swatchHolder = el("div");

    function update() {
      const v = product.variants[state.v];
      picture.src = img(v.images[0]);
      picture.alt = `${product.name} in ${v.color}`;
      colourName.textContent =
        product.variants.length > 1 ? `${v.color} · ${product.variants.length} colours` : v.color;
      swatchHolder.replaceChildren(swatchRow(product, state, (i) => { state.v = i; update(); }));
    }
    update();

    return el(
      "article",
      { class: "card", tabindex: "0", onclick: () => openModal(product, state.v),
        onkeydown: (e) => { if (e.key === "Enter") openModal(product, state.v); } },
      [
        el("div", { class: "card-media" }, [picture]),
        el("div", { class: "card-body" }, [
          el("p", { class: "card-fabric", text: product.fabric }),
          el("h3", { text: product.name }),
          el("div", { class: "card-row" }, [el("span", { class: "card-price", text: inr(product.price) }), colourName]),
          swatchHolder,
        ]),
      ]
    );
  }

  function renderGrid() {
    let list = PRODUCTS.filter((p) => activeFabric === "All" || p.fabric === activeFabric);
    if (sortMode === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sortMode === "high") list = [...list].sort((a, b) => b.price - a.price);
    $("#grid").replaceChildren(...list.map(card));
  }

  $("#sort").addEventListener("change", (e) => {
    sortMode = e.target.value;
    renderGrid();
  });

  // ---------- Product modal ----------
  const modal = $("#modal");

  function openModal(product, variantIndex) {
    const state = { v: variantIndex, i: 0 };

    function update() {
      const v = product.variants[state.v];
      const pics = v.images;
      $("#m-img").src = img(pics[state.i]);
      $("#m-img").alt = `${product.name} in ${v.color}`;
      $("#m-color").textContent = v.color;
      $("#m-thumbs").replaceChildren(
        ...(pics.length > 1
          ? pics.map((name, i) =>
              el("button", {
                class: "thumb" + (i === state.i ? " is-active" : ""),
                type: "button",
                "aria-label": `Photo ${i + 1}`,
                onclick: () => { state.i = i; update(); },
              }, [el("img", { src: img(name), alt: "" })])
            )
          : [])
      );
      const swatches = swatchRow(product, state, (i) => { state.v = i; state.i = 0; update(); }, true);
      $("#m-swatches").replaceWith(Object.assign(swatches, { id: "m-swatches" }));
      $("#m-order").href = waLink(
        `Hi Priyamvadi! I'd like to order:\n${product.name}\nColour: ${v.color}\nPrice: ${inr(product.price)}\n\nIs it available?`
      );
    }

    $("#m-fabric").textContent = product.fabric;
    $("#m-name").textContent = product.name;
    $("#m-price").textContent = inr(product.price);
    $("#m-desc").textContent = product.desc;
    update();
    modal.showModal();
  }

  $("#modal-close").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });

  // ---------- Contact ----------
  document.querySelectorAll(".js-wa").forEach((a) => (a.href = waLink(a.dataset.msg)));
  const actions = $("#contact-actions");
  if (SHOP.instagram) {
    actions.append(el("a", { class: "btn btn-outline", href: `https://instagram.com/${SHOP.instagram}`,
      target: "_blank", rel: "noopener", text: "Instagram" }));
  }
  if (SHOP.email) {
    actions.append(el("a", { class: "btn btn-outline", href: `mailto:${SHOP.email}`, text: "Email us" }));
  }
  $("#year").textContent = new Date().getFullYear();

  renderChips();
  renderGrid();
})();
