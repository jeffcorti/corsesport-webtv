# WebTV pro prêt à déployer

Ce projet est une base **Next.js App Router** avec :
- page d'accueil
- page live
- 2 lecteurs vidéo (Facebook + YouTube)
- tchat intégré
- page admin
- structure prête pour Supabase

## 1. Installation

```bash
npm install
```

## 2. Lancement local

```bash
npm run dev
```

Puis ouvre `http://localhost:3000`.

## 3. Variables d'environnement

Copie `.env.example` vers `.env.local`.

```bash
cp .env.example .env.local
```

## 4. Déploiement sur Vercel

- crée un compte Vercel
- importe ce projet
- ajoute les variables de `.env.local`
- clique sur Deploy

## 5. Ce qui fonctionne déjà

- modification des réglages depuis `/admin`
- actualités publiées depuis `/admin`
- messages du tchat
- stockage local dans le navigateur

## 6. Ce qu'il faudra brancher ensuite

### Supabase
Supabase fournit une base PostgreSQL, l'authentification et le Realtime pour le tchat. La doc officielle recommande un projet Supabase puis une app Next.js ; elle explique aussi les variables `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY`. citeturn725174search1turn725174search5

### Next.js
Cette base utilise l'App Router, qui est la structure standard documentée par Next.js. Le CLI `create-next-app` reste le point d'entrée conseillé par la doc officielle. citeturn725174search0turn725174search2turn725174search4

## 7. Plan conseillé pour toi

Phase 1 :
- mettre en ligne cette version
- remplacer les liens de démo Facebook et YouTube
- personnaliser les textes

Phase 2 :
- brancher Supabase
- protéger la page admin par connexion
- passer le tchat en temps réel
- récupérer automatiquement le live YouTube

Phase 3 :
- tenter Facebook avancé via Meta API

## 8. Remarque importante

Le tchat actuel est une base locale. Si deux visiteurs ouvrent le site depuis deux appareils différents, ils ne verront pas encore les mêmes messages. Pour un vrai tchat partagé, il faut brancher Supabase Realtime.
