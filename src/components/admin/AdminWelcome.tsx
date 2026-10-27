export function AdminWelcome() {
  return <section className="wag-admin-welcome">
    <div>
      <p className="wag-admin-eyebrow">WORLD AGROBUSINESS GLOBAL</p>
      <h1>Votre espace de gestion</h1>
      <p>Gérez les pages du site, le catalogue de produits, les catégories et les services depuis un seul endroit.</p>
    </div>
    <nav aria-label="Raccourcis de gestion">
      <a href="/admin/collections/pages">Pages</a>
      <a href="/admin/collections/product-categories">Catégories</a>
      <a href="/admin/collections/products">Produits</a>
      <a href="/admin/collections/services">Services</a>
    </nav>
  </section>
}
