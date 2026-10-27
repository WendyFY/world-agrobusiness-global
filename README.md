# World Agrobusiness Global

Site public et back-office de gestion construits avec Next.js, Payload CMS et PostgreSQL. Le contenu éditorial et le catalogue sont administrés depuis `/admin`.

## Prérequis

- Node.js `>=20.18.1` (version prise en charge par Payload 3.91)
- npm
- Docker avec Docker Compose, ou une instance PostgreSQL 16

## Démarrage local

```sh
cp .env.example .env
docker compose up -d postgres
npm install
npm run seed
npm run dev
```

Avant le premier seed sur une base vide, renseigner `ADMIN_EMAIL` et `ADMIN_PASSWORD` dans `.env`. Le seed crée le premier administrateur, puis l’accès à `/admin` se fait par connexion. Les comptes supplémentaires se créent depuis la collection **Administrateurs** du dashboard. Le site public est accessible sur `http://localhost:3000`.

Le script `npm run seed` insère ou met à jour les pages, catégories, produits, services et paramètres du site à partir des contenus par défaut. Il peut être relancé sans créer de doublons. Les images sont encodées en Base64 et enregistrées dans les champs PostgreSQL. L’interface d’administration accepte JPEG, PNG, WebP et GIF, jusqu’à 3 Mo par image. La vidéo de présentation reste dans `public/assets`. Le PostgreSQL du fichier Compose écoute en local sur le port `5433`.

Commandes de base de données disponibles :

```sh
npm run db:setup    # appliquer les migrations puis charger les données initiales et le premier administrateur
npm run db:migrate  # appliquer les migrations en attente
npm run db:seed     # insérer ou mettre à jour les données initiales
npm run db:reset    # supprimer le schéma Payload, rejouer toutes les migrations et reseeder
```

`npm run db:reset` est destructif : il efface les données existantes du schéma Payload avant de le recréer. Sur une base vide, le seed requiert `ADMIN_EMAIL` et `ADMIN_PASSWORD`.

## Configuration

Renseigner les variables suivantes dans `.env` :

- `DATABASE_URL` : chaîne de connexion PostgreSQL
- `PAYLOAD_SECRET` : secret long et aléatoire pour les sessions Payload
- `NEXT_PUBLIC_SERVER_URL` : origine du site
- `ADMIN_EMAIL` et `ADMIN_PASSWORD` : identifiants du premier compte, créés par `npm run seed` si la base ne contient encore aucun administrateur

Avant une mise en production, définir un `PAYLOAD_SECRET` distinct et persistant, puis utiliser une version de Node.js supportée par Payload. Payload synchronise le schéma automatiquement en développement ; en production, les migrations doivent être générées et exécutées avec les commandes Payload.

Pour versionner le schéma avant déploiement : `npm run migrate:create`, puis exécuter `npm run migrate` dans l’environnement cible avant `npm run seed`.

## Contenu administrable

- **Pages** : blocs de bannière, texte, cartes, valeurs, produits à la une, appel au contact, image, vidéo et carte. Les blocs et les entrées de cartes sont réordonnables.
- **Catégories de produits** : nom, slug, description, image, ordre et visibilité. Chaque produit doit appartenir à une catégorie.
- **Produits** : catégorie liée, description, prix en FCFA, caractéristiques, galerie Base64, visibilité et mise en avant sur l’accueil.
- **Services** : nom, slug, description détaillée, galerie d’images, numéro WhatsApp optionnel, ordre et visibilité.
- **Paramètres du site** : nom, accroche, logo Base64, contacts, adresse et carte.
- **Utilisateurs** : comptes authentifiés pour le back-office.

Les pages `/`, `/produits` (catégories), `/produits/[slug]` (produits de la catégorie), `/services` et `/services/[slug]` utilisent les données du CMS. Les pages sont rendues dynamiquement, sans cache Next.js, afin que les changements faits dans le dashboard Payload apparaissent à la requête suivante. Les pages d’administration sont servies sous `/admin` et nécessitent une session authentifiée pour modifier le contenu.
