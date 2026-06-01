import { useState, useMemo, useEffect } from 'react';
import { menuCategories, tagLabels } from './data/menu';
import './App.css';

function formatPrice(n) {
  return `Rs. ${n.toLocaleString('en-NP')}`;
}

function MenuItem({ item }) {
  return (
    <div className="menu-item">
      <h4>
        {item.name}
        {item.tag && (
          <span className="tag">{tagLabels[item.tag] ?? item.tag}</span>
        )}
      </h4>
      <p>{item.desc}</p>
      <span className="price">{formatPrice(item.price)}</span>
    </div>
  );
}

function CategorySection({ category }) {
  return (
    <section id={category.id} className="section">
      <h2>
        {category.icon} {category.name}
      </h2>
      <p>{category.description}</p>

      {category.subcategories.map((sub) => (
        <div key={sub.name} className="subsection">
          <h3>{sub.name}</h3>
          {sub.items.map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
        </div>
      ))}
    </section>
  );
}

export default function App() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const [search, setSearch] = useState('');
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem('sage-theme') === 'dark';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    try {
      localStorage.setItem('sage-theme', dark ? 'dark' : 'light');
    } catch {
      /* ignore */
    }
  }, [dark]);

  const filteredCategories = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return menuCategories;

    return menuCategories
      .map((cat) => ({
        ...cat,
        subcategories: cat.subcategories
          .map((sub) => ({
            ...sub,
            items: sub.items.filter(
              (item) =>
                item.name.toLowerCase().includes(q) ||
                item.desc.toLowerCase().includes(q) ||
                sub.name.toLowerCase().includes(q) ||
                cat.name.toLowerCase().includes(q),
            ),
          }))
          .filter((sub) => sub.items.length > 0),
      }))
      .filter((cat) => cat.subcategories.length > 0);
  }, [search]);

  const highlightedId =
    filteredCategories.find((c) => c.id === activeId)?.id ?? filteredCategories[0]?.id;

  const scrollToCategory = (id) => {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-top">
          <div className="brand">
            <p>Est. 2026 · Kathmandu</p>
            <h1>Sage Restaurant</h1>
          </div>
          <button
            type="button"
            className="theme-btn"
            onClick={() => setDark((d) => !d)}
          >
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
        <p>Where aromatic biryani meets artisan coffee — explore our full menu below.</p>
        <p>Open daily · 7am – 11pm · +977 1-4567890</p>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <input
            type="search"
            className="search"
            placeholder="Search menu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <nav className="nav">
            {filteredCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={highlightedId === cat.id ? 'active' : ''}
                onClick={() => scrollToCategory(cat.id)}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </nav>
          {filteredCategories.length === 0 && (
            <p className="no-results">No items match your search.</p>
          )}
        </aside>

        <main className="menu">
          {filteredCategories.length === 0 ? (
            <p className="no-results">Try a different search — coffee, biryani, lassi...</p>
          ) : (
            filteredCategories.map((cat) => (
              <CategorySection key={cat.id} category={cat} />
            ))
          )}
        </main>
      </div>

      <footer className="footer">
        <p>Prices in NPR · Service charge may apply</p>
        <p>Sage Restaurant</p>
      </footer>
    </div>
  );
}
