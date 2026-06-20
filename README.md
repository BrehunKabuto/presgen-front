- **Home** — landing page
- **Register** — registration with email OTP verification
- **Login** — authentication
- **Account** — user profile and settings
- **Presentation Library** — list of generated presentations
- **Create Presentation** — generate new presentation with AI

##  Tech Stack

**React**, **TypeScript**, **Tailwind CSS v4**, **Zustand**, **Axios**, **React Hook Form**, **Zod**

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/BrehunKabuto/presgen-front.git
cd presgen-frontend
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend URL (e.g. `http://localhost:3000`) |

### 4. Start

```bash
pnpm dev
```

App will be available at `http://localhost:5173`

##  Backend

[presgen-backend](https://github.com/BrehunKabuto/presgen)

##  License

MIT © BrehunKabuto