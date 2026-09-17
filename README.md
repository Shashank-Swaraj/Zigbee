<div align="center">

# ⚡ ZIGBEE.JU
### Zigbee IoT & Embedded Systems Club
**Department of CSE (IoT) • Faculty of Engineering and Technology (JU-FET)**  
*Jain Deemed-to-be University, Bengaluru*

<p align="center">
  <em>"Wire It. Code It. Send It Wireless."</em>
</p>

[![Next.js 16](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br />

[Live Demo](https://zigbee-website.vercel.app) • [Upcoming Events](#-events--workshops) • [Crew Roster](#-the-crew) • [API Endpoint](#-edge-rest-api) • [Local Setup](#-getting-started)

</div>

---

## 📌 About The Project

The official web platform for **ZIGBEE**, the flagship IoT & Embedded Systems student club at **JU-FET (Jain University)**. 

Designed with a cyber-hardware aesthetic, this platform serves as the central hub for club activities, hands-on hardware sprints, embedded workshops, project showcases, and student community onboarding.

### ✨ Highlights & Features
- 🚀 **High-Performance Architecture**: Built on **Next.js 16 (Turbopack)** and **React 19** with hybrid static rendering for instantaneous page loads.
- 🎨 **Hardware-Inspired Aesthetic**: Modern dark-mode interface powered by **Tailwind CSS v4** featuring schematic-style accents, responsive grids, and cyber typography.
- 📡 **Edge-Cached Roster API**: High-throughput REST API endpoint (`/api/crew`) with globally distributed edge caching headers for high traffic loads.
- 🗓️ **Live Events & Sprints**: Dynamic tracking for flagship events like **Talent-Surge 2.0 (Mesh Networking Lab)** and the **Agentic AI SDP**.
- 👥 **Crew & Leadership Directory**: Filterable views of faculty coordinators, core leads, and technical pods.
- 📱 **Full Mobile & Tablet Responsiveness**: Optimized across all viewports from ultra-wide monitors down to compact mobile displays.

---

## 🛠️ Tech Stack

| Domain | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org) (App Router) | Server/Client rendering, Turbopack builds, routing |
| **Library** | [React 19](https://react.dev) | UI component primitives and reactive hooks |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) + PostCSS | Modern utility styling, CSS variables |
| **Language** | [TypeScript 5](https://www.typescriptlang.org) | End-to-end type safety |
| **Icons** | [Lucide React](https://lucide.dev) | Clean, lightweight UI vector icons |
| **Deployment** | [Vercel](https://vercel.com) / [Docker](https://docker.com) | Edge hosting, automated CI/CD pipelines |

---

## 📂 Project Structure

```text
zigbee-website/
├── app/                      # Next.js 16 App Router
│   ├── about/                # Club heritage, mission & department info
│   ├── api/
│   │   └── crew/             # REST endpoint with edge caching support
│   ├── crew/                 # Team directory & leadership roster
│   ├── events/               # Club events, workshops & hackathons
│   ├── project/              # Hardware showcase & IoT project vault
│   ├── globals.css           # Global typography & Tailwind v4 theme
│   ├── layout.tsx            # Root layout, navigation & footer shell
│   └── page.tsx              # Interactive landing page
├── components/               # Modular UI Components
│   ├── crew/                 # Member cards, pod grids & modals
│   ├── graphics/             # Hardware schematics, icons & circuit SVGs
│   ├── hero/                 # Main landing hero with live status indicator
│   ├── navigation/           # Navbar, mobile drawer & footer
│   ├── sections/             # About, Events, and Feature sections
│   └── ui/                   # Reusable badges, buttons & cards
├── config/                   # Site-wide constants & social links
│   └── site.ts
├── data/                     # Data stores (Events, Roster, Pods)
│   ├── crew.ts
│   └── events.ts
├── lib/                      # Business logic & data helpers
├── types/                    # TypeScript interfaces & types
└── public/                   # Static media, posters & circuit assets
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js 18+ and npm installed:
- [Node.js](https://nodejs.org) (v18.18+ or v20+ recommended)
- `npm` (v9+) or `pnpm` / `yarn` / `bun`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shashank-Swaraj/Zigbee.git
   cd Zigbee/"Main Website"/zigbee-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000) to view the application with hot-reloading enabled.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts development server with Turbopack at `localhost:3000` |
| `npm run build` | Compiles optimized production build |
| `npm run start` | Runs the compiled production server |
| `npm run lint` | Runs ESLint checks across all TypeScript and TSX files |

---

## 🌐 Edge REST API

The platform exposes a public REST endpoint for club rosters and integrations:

### `GET /api/crew`
Returns full club roster envelope with `stale-while-revalidate` cache control headers.

#### Query Parameters:
- `?section=leadership` — Returns only core leads
- `?section=teams` — Returns domain pods (IoT, Embedded, Web, AI)
- `?section=faculty` — Returns faculty coordinators

**Example Request:**
```bash
curl https://zigbee-website.vercel.app/api/crew?section=leadership
```

---

## 🚢 Deployment

### Deploy to Vercel (One-Click)
The repository is optimized for immediate zero-config deployment on Vercel:

1. Import the repository on [Vercel](https://vercel.com).
2. Set root directory to `Main Website/zigbee-website` (if deploying from workspace root).
3. Vercel automatically detects Next.js 16 and deploys.

### Docker / Standalone Deploy
For self-hosting on a cloud VPS or private university server, enable `output: "standalone"` in `next.config.ts` and run:
```bash
docker build -t zigbee-website .
docker run -p 3000:3000 zigbee-website
```

---

## 🤝 Community & Connect

Stay connected with the Zigbee community:

- **Instagram**: [@zigbee_ju](https://www.instagram.com/zigbee_ju)
- **GitHub**: [github.com/Shashank-Swaraj/Zigbee](https://github.com/Shashank-Swaraj/Zigbee)
- **Campus**: CSE-IoT Lab 219, JU-FET, Bengaluru

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

<div align="center">
  <sub>Built with ⚡ by the <b>Zigbee Core Tech Team</b> • Jain (Deemed-to-be University)</sub>
</div>
