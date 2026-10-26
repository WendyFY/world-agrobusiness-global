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

Ouvrir `http://localhost:3000/admin` et créer le premier administrateur. Le site public est accessible sur `http://localhost:3000`.

Le script `npm run seed` insère ou met à jour les pages, produits et paramètres du site à partir des contenus actuels. Il peut être relancé sans créer de doublons. Les images sont encodées en Base64 et enregistrées dans les champs PostgreSQL. L’interface d’administration accepte JPEG, PNG, WebP et GIF, jusqu’à 3 Mo par image. La vidéo de présentation reste dans `public/assets`. Le PostgreSQL du fichier Compose écoute en local sur le port `5433`.

## Configuration

Renseigner les variables suivantes dans `.env` :

- `DATABASE_URL` : chaîne de connexion PostgreSQL
- `PAYLOAD_SECRET` : secret long et aléatoire pour les sessions Payload
- `NEXT_PUBLIC_SERVER_URL` : origine du site

Avant une mise en production, définir un `PAYLOAD_SECRET` distinct et persistant, puis utiliser une version de Node.js supportée par Payload. Payload synchronise le schéma automatiquement en développement ; en production, les migrations doivent être générées et exécutées avec les commandes Payload.

Pour versionner le schéma avant déploiement : `npm run migrate:create`, puis exécuter `npm run migrate` dans l’environnement cible avant `npm run seed`.

## Contenu administrable

- **Pages** : blocs de bannière, texte, cartes, valeurs, produits à la une, appel au contact, image, vidéo et carte. Les blocs et les entrées de cartes sont réordonnables.
- **Produits** : catégorie, description, prix en FCFA, caractéristiques, galerie Base64, visibilité et mise en avant sur l’accueil.
- **Paramètres du site** : nom, accroche, logo Base64, contacts, adresse et carte.
- **Utilisateurs** : comptes authentifiés pour le back-office.

Les pages `/`, `/produits` et les pages éditoriales utilisent les données du CMS. Les pages d’administration sont servies sous `/admin` et nécessitent une session authentifiée pour modifier le contenu.
