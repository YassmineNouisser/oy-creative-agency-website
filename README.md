# OY Creative Agency — Website

Site web premium pour OY Creative Agency (Tunisie). Agence hybride : marketing/branding + production de contenu + développement web & apps.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **TailwindCSS** — palette bleu ciel / bleu nuit
- **Framer Motion** — animations, transitions, scroll reveals
- **i18n** — FR / EN / AR (RTL) avec persistance localStorage

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Placeholders à remplacer

| Élément | Fichier | Valeur actuelle |
|---------|---------|-----------------|
| Numéro WhatsApp | `src/lib/content.ts` | `+216XXXXXXXX` |
| Lien Instagram | `src/lib/content.ts` | `https://instagram.com/oy.creative` |
| Email | `src/lib/content.ts` | `contact@oycreative.tn` |
| Téléphone | `src/lib/content.ts` | `+216 XX XXX XXX` |
| Showreel vidéo | `public/showreel.mp4` | Placeholder (fallback image) |
| Photo Oussema | `public/team/oussema.jpg` | Placeholder gradient |
| Photo Yassmine | `public/team/yassmine.jpg` | Placeholder gradient |
| Photos portfolio | `public/images/` | Placeholders |
| Adresse physique | `src/lib/content.ts` | `Tunis, Tunisie` |

## Pages

- `/` — Accueil (10 sections)
- `/who-we-are` — L'équipe fondatrice
- `/services` — Services détaillés (4 catégories)
- `/packs` — Packs (sans prix)
- `/shop` — Catalogue print & digital
- `/work` — Portfolio
- `/contact` — Formulaire de contact

## Langues

Le site supporte FR, EN et AR (RTL). Changement via le sélecteur dans le header, persisté en localStorage.
