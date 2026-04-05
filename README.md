# NewsApp (Maximilian)

**NewsApp** is a learning project that demonstrates building a modern news/preview site with the Next.js App Router and TypeScript. It follows patterns taught in Maximilian Schwarzmüller’s Next.js course and highlights server components, dynamic routes, clean UX, and simple local data handling.

---

## What It Does

- **Browse news** — View lists of news items with images, titles, summaries, and published dates. Individual articles have clean URLs (e.g. `/news/some-article-slug`).
- **Article details** — See full article content with images and metadata on a dedicated page.
- **Modal & image views** — Dedicated modal and image routes for richer interactions (lightbox-style image pages).
- **Responsive UX** — Responsive layout, loading states, not-found and error handling where needed.

---

## Key Features

| Feature                 | Description                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------- |
| **Article catalog**     | Server-rendered list of articles with loading fallbacks and Suspense patterns.                 |
| **Dynamic routes**      | Per-article pages under `/news/[newsSlug]` with nested route variants (details, modal, image). |
| **Image handling**      | Image routes under `app/news/[newsSlug]/image` and modal image UI.                             |
| **Reusable components** | `MainHeader`, `NavLink`, `NewsList` and other components in `components/`.                     |
| **Routing helpers**     | Custom router hook in `hooks/routerHook.tsx` for navigation helpers.                           |
| **Data layer**          | Lightweight `lib/news.ts` for fetching article lists and single articles.                      |

---

## Tech Stack

| Category         | Technology                                                       |
| ---------------- | ---------------------------------------------------------------- |
| **Framework**    | Next.js (App Router)                                             |
| **Language**     | TypeScript                                                       |
| **UI**           | React (server + client components)                               |
| **Styling**      | Tailwind CSS (or plain CSS modules depending on files in `app/`) |
| **Image assets** | Static images under `public/images/news/`                        |

---

## Screenshots

(https://github.com/user-attachments/assets/19efbfb9-ca7f-4c27-948b-78a631294721)

---

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm (or yarn/pnpm)

### 1. Clone and install

```bash
git clone <repository-url>
cd newsappmaximilian
npm install
```

### 2. Run the app

**Development:**

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

**Production:**

```bash
npm run build
npm start
```

---
## Project Structure (high level)

```
newsappmaximilian/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── (content)/
│   ├── (marketing)/
│   └── news/
│       ├── page.tsx
│       ├── [newsSlug]/
│       │   ├── layout.tsx
│       │   ├── page.tsx
│       │   ├── @Details/
│       │   │   └── page.tsx
│       │   └── @modal/
│       │       └── (.)image/page.tsx
│       └── image/page.tsx
├── components/
│   ├── MainHeader/
│   ├── NavLink/
│   └── NewsList/
├── hooks/
│   └── routerHook.tsx
├── lib/
│   └── news.ts
├── public/
│   └── images/news/
├── package.json
└── README.md
```

---
## Notes

- This is an educational/demo project used to learn the App Router, nested routes, loading/error UI, and composition of server/client components.

---

