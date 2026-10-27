export function FirstAdminSetup() {
  return <main className="wag-admin-setup">
    <p className="wag-admin-eyebrow">WORLD AGROBUSINESS GLOBAL</p>
    <h1>Connexion administrateur</h1>
    <p>Aucun compte administrateur n’est encore configuré. Initialisez le premier compte avec les identifiants définis dans le fichier d’environnement.</p>
    <code>npm run db:seed</code>
    <a href="/">Retour au site</a>
  </main>
}
