(() => {
  const root = document.querySelector(".publications-container");
  if (!root) return;
  if (root.dataset.enhanced === "1") return;

  const isJa = (document.documentElement.lang || "").toLowerCase().startsWith("ja");
  const i18n = isJa
    ? {
        search: "キーワード検索",
        searchPlaceholder: "タイトル・著者・学会名で検索",
        year: "年代",
        sort: "並び順",
        allYears: "すべて",
        newest: "新しい順",
        oldest: "古い順",
        tabs: {
          papers: "論文",
          preprints: "Preprints",
          talks: "招待講演",
          presentations: "学会発表",
          misc: "その他",
        },
        results: "件",
        noResults: "条件に一致する業績はありません。",
      }
    : {
        search: "Search",
        searchPlaceholder: "Search by title, author, venue",
        year: "Year",
        sort: "Sort",
        allYears: "All",
        newest: "Newest",
        oldest: "Oldest",
        tabs: {
          papers: "Papers",
          preprints: "Preprints",
          talks: "Invited Talks",
          presentations: "Presentations",
          misc: "Other",
        },
        results: "results",
        noResults: "No publications found with current filters.",
      };

  const sections = [
    { id: "papers", selector: ".publication-list", label: i18n.tabs.papers },
    { id: "preprints", selector: ".preprint-list", label: i18n.tabs.preprints },
    { id: "talks", selector: ".talk-list", label: i18n.tabs.talks },
    { id: "presentations", selector: ".presentation-list", label: i18n.tabs.presentations },
    { id: "misc", selector: ".misc-list", label: i18n.tabs.misc },
  ];

  const items = [];
  for (const section of sections) {
    const list = root.querySelector(section.selector);
    if (!list) continue;

    let currentYear = 0;
    for (const child of Array.from(list.children)) {
      const tag = child.tagName;
      if (tag === "P") {
        const yearMatch = (child.textContent || "").match(/(19|20)\d{2}/);
        currentYear = yearMatch ? Number(yearMatch[0]) : 0;
        continue;
      }
      if (tag !== "UL") continue;

      for (const li of Array.from(child.querySelectorAll(":scope > li"))) {
        const rawText = (li.textContent || "").trim();
        if (!rawText) continue;
        if (rawText.includes("更新予定")) continue;
        if (rawText.toLowerCase().includes("to be updated")) continue;

        const inlineYear = rawText.match(/(19|20)\d{2}/);
        const year = currentYear || (inlineYear ? Number(inlineYear[0]) : 0);
        items.push({
          type: section.id,
          typeLabel: section.label,
          year,
          text: rawText.toLowerCase(),
          html: li.innerHTML,
        });
      }
    }
  }

  if (!items.length) return;
  root.dataset.enhanced = "1";

  const app = document.createElement("section");
  app.className = "pub-page-app";
  app.innerHTML = `
    <div class="pub-page-toolbar">
      <div class="pub-page-control">
        <label for="pub-search">${i18n.search}</label>
        <input id="pub-search" type="search" placeholder="${i18n.searchPlaceholder}">
      </div>
      <div class="pub-page-control pub-page-control-sm">
        <label for="pub-year">${i18n.year}</label>
        <select id="pub-year"></select>
      </div>
      <div class="pub-page-control pub-page-control-sm">
        <label for="pub-sort">${i18n.sort}</label>
        <select id="pub-sort">
          <option value="desc">${i18n.newest}</option>
          <option value="asc">${i18n.oldest}</option>
        </select>
      </div>
    </div>
    <div class="pub-page-tabs" role="tablist"></div>
    <p class="pub-page-count"></p>
    <div class="pub-page-results" aria-live="polite"></div>
  `;

  root.insertBefore(app, root.firstChild);

  for (const child of Array.from(root.children)) {
    if (child !== app) child.classList.add("pub-page-legacy");
  }

  const tabsEl = app.querySelector(".pub-page-tabs");
  const searchEl = app.querySelector("#pub-search");
  const yearEl = app.querySelector("#pub-year");
  const sortEl = app.querySelector("#pub-sort");
  const countEl = app.querySelector(".pub-page-count");
  const resultsEl = app.querySelector(".pub-page-results");

  let activeType = sections.find((s) => items.some((item) => item.type === s.id))?.id || "papers";

  for (const section of sections) {
    if (!items.some((item) => item.type === section.id)) continue;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pub-page-tab";
    btn.dataset.type = section.id;
    btn.textContent = section.label;
    tabsEl.appendChild(btn);
  }

  const sortYearDesc = (a, b) => b - a;
  const sortYearAsc = (a, b) => a - b;

  function syncYearOptions() {
    const current = yearEl.value || "all";
    const years = [...new Set(items.filter((i) => i.type === activeType).map((i) => i.year).filter((y) => y > 0))].sort(sortYearDesc);
    yearEl.innerHTML = `<option value="all">${i18n.allYears}</option>` + years.map((y) => `<option value="${y}">${y}</option>`).join("");
    yearEl.value = years.some((y) => String(y) === current) ? current : "all";
  }

  function render() {
    const query = (searchEl.value || "").trim().toLowerCase();
    const selectedYear = yearEl.value;
    const isDesc = sortEl.value !== "asc";

    const filtered = items
      .filter((item) => item.type === activeType)
      .filter((item) => (selectedYear === "all" ? true : String(item.year) === selectedYear))
      .filter((item) => (query ? item.text.includes(query) : true))
      .sort((a, b) => {
        if (a.year !== b.year) return isDesc ? b.year - a.year : a.year - b.year;
        return 0;
      });

    for (const tab of Array.from(tabsEl.querySelectorAll(".pub-page-tab"))) {
      tab.classList.toggle("is-active", tab.dataset.type === activeType);
    }

    countEl.textContent = `${filtered.length} ${i18n.results}`;

    if (!filtered.length) {
      resultsEl.innerHTML = `<p class="pub-page-empty">${i18n.noResults}</p>`;
      return;
    }

    resultsEl.innerHTML = filtered
      .map(
        (item) => `
      <article class="pub-page-card">
        <p class="pub-page-card-meta">${item.year > 0 ? item.year : "-"} / ${item.typeLabel}</p>
        <div class="pub-page-card-body">${item.html}</div>
      </article>
    `
      )
      .join("");
  }

  tabsEl.addEventListener("click", (event) => {
    const button = event.target.closest(".pub-page-tab");
    if (!button) return;
    activeType = button.dataset.type || activeType;
    syncYearOptions();
    render();
  });
  searchEl.addEventListener("input", render);
  yearEl.addEventListener("change", render);
  sortEl.addEventListener("change", render);

  syncYearOptions();
  render();
})();
